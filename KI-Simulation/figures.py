import pandas as pd
import matplotlib.pyplot as plt


df = pd.read_csv("results.csv")

# Diagramm 1:
# Win / Loss / Timeout by Family Constellation
# Baseline: Child competence = 0.7

baseline = df[df["child_competence"] == 0.7].copy()

baseline[["win_rate", "loss_rate", "timeout_rate"]] *= 100

baseline.plot(
    x="family",
    y=["win_rate", "loss_rate", "timeout_rate"],
    kind="bar",
    stacked=True,
    figsize=(10, 6)
)

plt.xlabel("Family constellation")
plt.ylabel("Games (%)")
plt.title("Game Outcomes by Family Constellation")

plt.legend(
    ["Win", "Loss", "Timeout"],
    title="Outcome"
)

plt.ylim(0, 100)
plt.xticks(rotation=30, ha="right")

plt.tight_layout()
plt.savefig(
    "game_outcomes_by_family.png",
    dpi=300
)

plt.show()


# Diagramm 2:
# Child Competence vs. Win Rate

plt.figure(figsize=(10, 6))

for family in df["family"].unique():

    family_data = df[
        df["family"] == family
    ].sort_values("child_competence")

    plt.plot(
        family_data["child_competence"],
        family_data["win_rate"] * 100,
        marker="o",
        label=family
    )


plt.xlabel("Child competence")
plt.ylabel("Win rate (%)")
plt.title("Effect of Child Competence on Win Rate")

plt.ylim(0, 100)

plt.xticks([
    0.4,
    0.5,
    0.6,
    0.7,
    0.8,
    0.9,
    1.0
])

plt.legend(
    title="Family constellation",
    bbox_to_anchor=(1.05, 1),
    loc="upper left"
)

plt.grid(axis="y", alpha=0.3)

plt.tight_layout()

plt.savefig(
    "child_competence_win_rate.png",
    dpi=300,
    bbox_inches="tight"
)

plt.show()