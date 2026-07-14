from pathlib import Path
import argparse
from math import sqrt

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd


FAMILY_ORDER = [
    "1 Kind + 1 Elternteil",
    "1 Kind + 2 Elternteile",
    "2 Kinder + 1 Elternteil",
    "2 Kinder + 2 Elternteile",
]


def wilson_interval(successes: int, n: int, z: float = 1.96):
    p = successes / n
    denominator = 1 + z**2 / n
    center = (p + z**2 / (2 * n)) / denominator
    half_width = (
        z * sqrt(p * (1 - p) / n + z**2 / (4 * n**2))
        / denominator
    )
    return p, center - half_width, center + half_width


def load_results(path: Path, max_turns: int):
    df = pd.read_csv(path)

    required = {
        "family",
        "won",
        "turns",
        "risk",
        "secured_district_count",
        "secured_districts",
    }
    missing = required.difference(df.columns)
    if missing:
        raise ValueError(
            "In der Ergebnisdatei fehlen Spalten: "
            + ", ".join(sorted(missing))
        )

    df["termination_reason"] = np.select(
        [
            df["won"].astype(bool),
            (~df["won"].astype(bool)) & (df["risk"] >= 10),
            (~df["won"].astype(bool)) & (df["turns"] >= max_turns),
        ],
        ["Gewinn", "Risikolimit", "Rundenlimit"],
        default="Sonstige Niederlage",
    )
    return df


def create_summary(df: pd.DataFrame, family_order):
    rows = []
    for family in family_order:
        group = df[df["family"] == family]
        if group.empty:
            continue

        successes = int(group["won"].sum())
        rate, low, high = wilson_interval(successes, len(group))

        rows.append(
            {
                "Familienkonstellation": family,
                "Simulationen": len(group),
                "Gewinne": successes,
                "Gewinnrate": rate,
                "CI95_unten": low,
                "CI95_oben": high,
                "Durchschnitt_Runden": group["turns"].mean(),
                "SD_Runden": group["turns"].std(),
                "Durchschnitt_Endrisiko": group["risk"].mean(),
                "SD_Endrisiko": group["risk"].std(),
                "Durchschnitt_abgesicherte_Bezirke":
                    group["secured_district_count"].mean(),
                "SD_abgesicherte_Bezirke":
                    group["secured_district_count"].std(),
            }
        )

    return pd.DataFrame(rows)


def save_win_rate_plot(summary: pd.DataFrame, output_dir: Path):
    data = summary.copy()
    x = np.arange(len(data))
    rates = data["Gewinnrate"].to_numpy() * 100
    lower = (data["Gewinnrate"] - data["CI95_unten"]).to_numpy() * 100
    upper = (data["CI95_oben"] - data["Gewinnrate"]).to_numpy() * 100

    fig, ax = plt.subplots(figsize=(10, 6))
    ax.bar(x, rates)
    ax.errorbar(
        x,
        rates,
        yerr=np.vstack([lower, upper]),
        fmt="none",
        capsize=5,
    )
    ax.set_xticks(x)
    ax.set_xticklabels(
        data["Familienkonstellation"],
        rotation=20,
        ha="right",
    )
    ax.set_ylabel("Gewinnrate (%)")
    ax.set_xlabel("Familienkonstellation")
    ax.set_title("Gewinnrate nach Familienkonstellation")
    ax.set_ylim(0, 100)
    fig.tight_layout()
    fig.savefig(
        output_dir / "01_gewinnrate_mit_konfidenzintervall.png",
        dpi=300,
    )
    plt.close(fig)


def save_outcome_plot(df: pd.DataFrame, family_order, output_dir: Path):
    table = (
        pd.crosstab(
            df["family"],
            df["termination_reason"],
            normalize="index",
        )
        .reindex(family_order)
        .fillna(0)
        * 100
    )
    preferred = [
        "Gewinn",
        "Risikolimit",
        "Rundenlimit",
        "Sonstige Niederlage",
    ]
    table = table.reindex(
        columns=[c for c in preferred if c in table.columns],
        fill_value=0,
    )

    fig, ax = plt.subplots(figsize=(10, 6))
    table.plot(kind="bar", stacked=True, ax=ax)
    ax.set_ylabel("Anteil der Simulationen (%)")
    ax.set_xlabel("Familienkonstellation")
    ax.set_title("Spielausgänge nach Familienkonstellation")
    ax.set_xticklabels(table.index, rotation=20, ha="right")
    ax.legend(title="Spielausgang")
    fig.tight_layout()
    fig.savefig(output_dir / "02_spielausgaenge_gestapelt.png", dpi=300)
    plt.close(fig)


def save_turn_plot(df: pd.DataFrame, family_order, output_dir: Path):
    groups = [
        df.loc[df["family"] == family, "turns"].to_numpy()
        for family in family_order
    ]

    fig, ax = plt.subplots(figsize=(10, 6))
    ax.boxplot(groups, tick_labels=family_order)
    ax.set_ylabel("Anzahl gespielter Runden")
    ax.set_xlabel("Familienkonstellation")
    ax.set_title("Verteilung der Spieldauer")
    ax.tick_params(axis="x", rotation=20)
    fig.tight_layout()
    fig.savefig(output_dir / "03_spieldauer_boxplot.png", dpi=300)
    plt.close(fig)


def save_secured_count_plot(df, family_order, output_dir):
    table = (
        pd.crosstab(
            df["family"],
            df["secured_district_count"],
            normalize="index",
        )
        .reindex(family_order)
        .fillna(0)
        * 100
    )

    fig, ax = plt.subplots(figsize=(10, 6))
    table.T.plot(kind="bar", ax=ax)
    ax.set_ylabel("Anteil der Simulationen (%)")
    ax.set_xlabel("Anzahl abgesicherter Bezirke")
    ax.set_title("Erreichter Absicherungsfortschritt")
    ax.legend(title="Familienkonstellation")
    fig.tight_layout()
    fig.savefig(
        output_dir / "04_abgesicherte_bezirke_verteilung.png",
        dpi=300,
    )
    plt.close(fig)


def save_district_plot(df, family_order, output_dir):
    districts = sorted(
        {
            district
            for value in df["secured_districts"].dropna()
            for district in str(value).split("|")
            if district
        }
    )

    rows = []
    for family in family_order:
        group = df[df["family"] == family]
        split_values = group["secured_districts"].fillna("").str.split("|")

        for district in districts:
            rows.append(
                {
                    "family": family,
                    "district": district,
                    "percentage": split_values.apply(
                        lambda values: district in values
                    ).mean()
                    * 100,
                }
            )

    table = (
        pd.DataFrame(rows)
        .pivot(index="district", columns="family", values="percentage")
        .reindex(columns=family_order)
    )

    fig, ax = plt.subplots(figsize=(11, 7))
    table.plot(kind="barh", ax=ax)
    ax.set_xlabel(
        "Anteil der Simulationen mit abgesichertem Bezirk (%)"
    )
    ax.set_ylabel("Bezirk")
    ax.set_title("Sicherungshäufigkeit der CyberCity-Bezirke")
    ax.legend(title="Familienkonstellation")
    fig.tight_layout()
    fig.savefig(output_dir / "05_bezirkssicherung.png", dpi=300)
    plt.close(fig)


def main():
    parser = argparse.ArgumentParser(
        description="Erstellt Diagramme aus den Ergebnissen der Spielsimulation."
    )
    parser.add_argument("results_csv", type=Path)
    parser.add_argument(
        "--output",
        type=Path,
        default=Path("simulationsauswertung"),
    )
    parser.add_argument("--max-turns", type=int, default=30)
    args = parser.parse_args()

    args.output.mkdir(parents=True, exist_ok=True)

    df = load_results(args.results_csv, args.max_turns)
    family_order = [
        family for family in FAMILY_ORDER
        if family in df["family"].unique()
    ]

    summary = create_summary(df, family_order)
    summary.to_csv(
        args.output / "deskriptive_ergebnisse.csv",
        index=False,
    )

    save_win_rate_plot(summary, args.output)
    save_outcome_plot(df, family_order, args.output)
    save_turn_plot(df, family_order, args.output)
    save_secured_count_plot(df, family_order, args.output)
    save_district_plot(df, family_order, args.output)

    print(f"Auswertung gespeichert in: {args.output.resolve()}")


if __name__ == "__main__":
    main()