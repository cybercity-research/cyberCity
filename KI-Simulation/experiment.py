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

    "1 Kind + 2 Elternteile": [
        {"name": "Kind 1", "role": "child", "profile": CHILD_PROFILE},
        {"name": "Elternteil 1", "role": "parent", "profile": PARENT_PROFILE},
        {"name": "Elternteil 2", "role": "parent", "profile": PARENT_PROFILE},
    ],

    "2 Kinder + 2 Elternteile": [
        {"name": "Kind 1", "role": "child", "profile": CHILD_PROFILE},
        {"name": "Kind 2", "role": "child", "profile": CHILD_PROFILE},
        {"name": "Elternteil 1", "role": "parent", "profile": PARENT_PROFILE},
        {"name": "Elternteil 2", "role": "parent", "profile": PARENT_PROFILE}
    ],

    "3 Kinder + 1 Elternteil": [
        {"name": "Kind 1", "role": "child", "profile": CHILD_PROFILE},
        {"name": "Kind 2", "role": "child", "profile": CHILD_PROFILE},
        {"name": "Kind 3", "role": "child", "profile": CHILD_PROFILE},
        {"name": "Elternteil 1", "role": "parent", "profile": PARENT_PROFILE},
    ],

    "1 Kind + 3 Elternteile": [
        {"name": "Kind 1", "role": "child", "profile": CHILD_PROFILE},
        {"name": "Elternteil 1", "role": "parent", "profile": PARENT_PROFILE},
        {"name": "Elternteil 2", "role": "parent", "profile": PARENT_PROFILE},
        {"name": "Elternteil 3", "role": "parent", "profile": PARENT_PROFILE},
    ],

}


STRATEGIES = {
    "RuleBasedStrategy": RuleBasedStrategy
}


def run_one_game(strategy_class, players, seed):
    random.seed(seed)

    game = Game(
        players,
        strategy=strategy_class(),
        max_turns=MAX_TURNS
    )

    turns = 0
    turn_log = []

    # Verhindert, dass bei 1000 Spielen alles ausgegeben wird
    with contextlib.redirect_stdout(io.StringIO()):
        for _ in range(MAX_TURNS):
            if game.game_over:
                break

            # Wichtig: Vor play_turn() speichern, weil danach bereits
            # der nächste Spieler aktiv sein kann.
            active_player = game.players[game.current_player_index]

            game.play_turn()
            turns += 1

            # Zustand NACH dem gerade abgeschlossenen Spielerzug speichern.
            turn_log.append({
                "turn": game.turn_count,
                # Eine Teamrunde ist abgeschlossen, wenn alle Spieler
                # jeweils einmal am Zug waren.
                "team_round": (
                    (game.turn_count - 1) // len(game.players)
                ) + 1,
                "active_player": active_player.name,
                "active_role": active_player.role,
                "risk": game.risk,
                "security_chips": game.security_chips,
                "time_chips": game.time_chips,
                "secured_district_count": len(game.secured_districts),
                "void_position": game.void_position,
                "game_over": game.game_over,
                "won": game.won
            })

    if game.game_over and game.won:
        outcome = "win"
    elif game.game_over and not game.won:
        outcome = "loss"
    else:
        outcome = "timeout"

    final_result = {
        "outcome": outcome,
        "won": game.won,
        "turns": turns,
        "risk": game.risk,
        "security_chips": game.security_chips,
        "time_chips": game.time_chips,
        "secured_district_count": len(game.secured_districts),
        "secured_districts": "|".join(sorted(game.secured_districts))
    }

    return final_result, turn_log


def run_experiment():
    rows = []
    all_turn_rows = []

    for family_name, players in FAMILIES.items():
        for strategy_name, strategy_class in STRATEGIES.items():
            for run_id in range(N_RUNS):

                seed = run_id

                result, game_turn_log = run_one_game(
                    strategy_class,
                    players,
                    seed
                )

                rows.append({
                    "family": family_name,
                    "strategy": strategy_name,
                    "run_id": run_id,
                    **result
                })

                # Familienname, Strategie und Laufnummer zu jedem Zug ergänzen.
                for turn_data in game_turn_log:
                    all_turn_rows.append({
                        "family": family_name,
                        "strategy": strategy_name,
                        "run_id": run_id,
                        **turn_data
                    })

    return rows, all_turn_rows


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


def save_turn_log(turn_rows, filename="turn_log.csv"):
    fieldnames = [
        "family",
        "strategy",
        "run_id",
        "turn",
        "team_round",
        "active_player",
        "active_role",
        "risk",
        "security_chips",
        "time_chips",
        "secured_district_count",
        "void_position",
        "game_over",
        "won"
    ]

    with open(filename, "w", newline="", encoding="utf-8") as file:
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(turn_rows)


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

            standard_error = sqrt(win_rate * (1 - win_rate) / n)
            ci_95 = 1.96 * standard_error

            avg_turns = mean(row["turns"] for row in data)
            avg_risk = mean(row["risk"] for row in data)
            avg_secured = mean(
                row["secured_district_count"] for row in data
            )

            print(f"\n  Strategie: {strategy_name}")
            print(
                f"  Gewinnrate: "
                f"{win_rate * 100:.1f}% ± {ci_95 * 100:.1f}%"
            )
            print(f"  Niederlagen: {losses}")
            print(f"  Timeouts: {timeouts}")
            print(f"  Ø Spielerzüge: {avg_turns:.1f}")
            print(f"  Ø Endrisiko: {avg_risk:.2f}")
            print(f"  Ø abgesicherte Bezirke: {avg_secured:.2f}")


if __name__ == "__main__":
    rows, turn_rows = run_experiment()

    save_results(rows, "results.csv")
    save_turn_log(turn_rows, "turn_log.csv")

    print_summary(rows)

    print("\nGespeicherte Dateien:")
    print("- results.csv: Endzustand jedes Spiels")
    print("- turn_log.csv: Zustand nach jedem Spielerzug")