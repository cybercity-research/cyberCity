import csv
import random
import contextlib
import io
from statistics import mean
from math import sqrt

from game import Game
from strategy import (
    RuleBasedStrategy,
    CHILD_PROFILE,
    PARENT_PROFILE
)


N_RUNS = 1000
MAX_TURNS = 30


FAMILIES = {
    "1 Kind + 1 Elternteil": [
        {"name": "Kind 1", "role": "child", "profile": CHILD_PROFILE},
        {"name": "Elternteil 1", "role": "parent", "profile": PARENT_PROFILE}
    ],

    "2 Kinder + 1 Elternteil": [
        {"name": "Kind 1", "role": "child", "profile": CHILD_PROFILE},
        {"name": "Kind 2", "role": "child", "profile": CHILD_PROFILE},
        {"name": "Elternteil 1", "role": "parent", "profile": PARENT_PROFILE}
    ],

    "2 Kinder + 2 Elternteile": [
        {"name": "Kind 1", "role": "child", "profile": CHILD_PROFILE},
        {"name": "Kind 2", "role": "child", "profile": CHILD_PROFILE},
        {"name": "Elternteil 1", "role": "parent", "profile": PARENT_PROFILE},
        {"name": "Elternteil 2", "role": "parent", "profile": PARENT_PROFILE}
    ]
}


STRATEGIES = {
    "RuleBasedStrategy": RuleBasedStrategy
}


def run_one_game(strategy_class, players, seed):
    random.seed(seed)

    game = Game(
        players,
        strategy=strategy_class()
    )

    turns = 0

    # Verhindert, dass bei 1000 Spielen alles ausgegeben wird
    with contextlib.redirect_stdout(io.StringIO()):
        for _ in range(MAX_TURNS):
            if game.game_over:
                break

            game.play_turn()
            turns += 1

    if game.game_over and game.won:
        outcome = "win"
    elif game.game_over and not game.won:
        outcome = "loss"
    else:
        outcome = "timeout"

    return {
        "outcome": outcome,
        "won": game.won,
        "turns": turns,
        "risk": game.risk,
        "security_chips": game.security_chips,
        "time_chips": game.time_chips,
        "secured_district_count": len(game.secured_districts),
        "secured_districts": "|".join(game.secured_districts)
    }


def run_experiment():
    rows = []

    for family_name, players in FAMILIES.items():
        for strategy_name, strategy_class in STRATEGIES.items():
            for run_id in range(N_RUNS):

                seed = run_id

                result = run_one_game(
                    strategy_class,
                    players,
                    seed
                )

                row = {
                    "family": family_name,
                    "strategy": strategy_name,
                    "run_id": run_id,
                    **result
                }

                rows.append(row)

    return rows


def save_results(rows, filename="results.csv"):
    fieldnames = [
        "family",
        "strategy",
        "run_id",
        "outcome",
        "won",
        "turns",
        "risk",
        "security_chips",
        "time_chips",
        "secured_district_count",
        "secured_districts"
    ]

    with open(filename, "w", newline="", encoding="utf-8") as file:
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def print_summary(rows):
    print("\nERGEBNISSE\n")

    for family_name in FAMILIES:
        print(f"\nFamilie: {family_name}")

        for strategy_name in STRATEGIES:
            data = [
                row for row in rows
                if row["family"] == family_name
                and row["strategy"] == strategy_name
            ]

            n = len(data)
            wins = sum(1 for row in data if row["outcome"] == "win")
            losses = sum(1 for row in data if row["outcome"] == "loss")
            timeouts = sum(1 for row in data if row["outcome"] == "timeout")

            win_rate = wins / n

            # 95%-Konfidenzintervall für die Gewinnrate
            standard_error = sqrt(win_rate * (1 - win_rate) / n)
            ci_95 = 1.96 * standard_error

            avg_turns = mean(row["turns"] for row in data)
            avg_risk = mean(row["risk"] for row in data)
            avg_secured = mean(row["secured_district_count"] for row in data)

            print(f"\n  Strategie: {strategy_name}")
            print(f"  Gewinnrate: {win_rate * 100:.1f}% ± {ci_95 * 100:.1f}%")
            print(f"  Niederlagen: {losses}")
            print(f"  Timeouts: {timeouts}")
            print(f"  Ø Runden: {avg_turns:.1f}")
            print(f"  Ø Endrisiko: {avg_risk:.2f}")
            print(f"  Ø abgesicherte Bezirke: {avg_secured:.2f}")


rows = run_experiment()
save_results(rows)
print_summary(rows)