from pathlib import Path

import matplotlib.pyplot as plt
import pandas as pd


INPUT_FILE = Path("turn_log.csv")
OUTPUT_FOLDER = Path("turn_diagramme")


def add_missing_turns(group):
    """
    Ergänzt für bereits beendete Spiele keine künstlichen Werte.
    Dadurch basiert jeder Mittelwert auf den Spielen, die bei diesem
    Spielerzug noch gelaufen sind oder genau dort beendet wurden.
    """
    return group


def main():
    if not INPUT_FILE.exists():
        raise FileNotFoundError(
            "turn_log.csv wurde nicht gefunden. "
            "Führe zuerst experiment_mit_rundenverlauf.py aus."
        )

    OUTPUT_FOLDER.mkdir(exist_ok=True)

    df = pd.read_csv(INPUT_FILE)

    # Durchschnittlicher Verlauf je Spielerzug und Familienkonstellation.
    mean_by_turn = (
        df.groupby(["family", "turn"], as_index=False)
        .agg(
            mean_risk=("risk", "mean"),
            mean_security_chips=("security_chips", "mean"),
            mean_time_chips=("time_chips", "mean"),
            mean_secured_districts=("secured_district_count", "mean"),
            active_games=("run_id", "nunique")
        )
    )

    plots = [
        (
            "mean_risk",
            "Durchschnittliches Risiko im Spielverlauf",
            "Durchschnittliches Risiko",
            "01_risikoverlauf.png"
        ),
        (
            "mean_security_chips",
            "Sicherheits-Chips im Spielverlauf",
            "Durchschnittliche Sicherheits-Chips",
            "02_sicherheitschips_verlauf.png"
        ),
        (
            "mean_time_chips",
            "Zeit-Chips im Spielverlauf",
            "Durchschnittliche Zeit-Chips",
            "03_zeitchips_verlauf.png"
        ),
        (
            "mean_secured_districts",
            "Abgesicherte Bezirke im Spielverlauf",
            "Durchschnittlich abgesicherte Bezirke",
            "04_bezirksfortschritt.png"
        )
    ]

    for column, title, ylabel, filename in plots:
        fig, ax = plt.subplots(figsize=(10, 6))

        for family, family_data in mean_by_turn.groupby("family"):
            ax.plot(
                family_data["turn"],
                family_data[column],
                marker="o",
                markersize=3,
                label=family
            )

        ax.set_xlabel("Spielerzug")
        ax.set_ylabel(ylabel)
        ax.set_title(title)
        ax.legend(title="Familienkonstellation")
        ax.grid(alpha=0.3)
        fig.tight_layout()
        fig.savefig(OUTPUT_FOLDER / filename, dpi=300)
        plt.close(fig)

    # Anzahl der noch beobachteten Spiele je Spielerzug.
    fig, ax = plt.subplots(figsize=(10, 6))

    for family, family_data in mean_by_turn.groupby("family"):
        ax.plot(
            family_data["turn"],
            family_data["active_games"],
            marker="o",
            markersize=3,
            label=family
        )

    ax.set_xlabel("Spielerzug")
    ax.set_ylabel("Anzahl beobachteter Spiele")
    ax.set_title("Noch laufende beziehungsweise gerade beendete Spiele")
    ax.legend(title="Familienkonstellation")
    ax.grid(alpha=0.3)
    fig.tight_layout()
    fig.savefig(OUTPUT_FOLDER / "05_beobachtete_spiele.png", dpi=300)
    plt.close(fig)

    mean_by_turn.to_csv(
        OUTPUT_FOLDER / "mittelwerte_pro_spielerzug.csv",
        index=False
    )

    print(f"Diagramme gespeichert in: {OUTPUT_FOLDER.resolve()}")


if __name__ == "__main__":
    main()