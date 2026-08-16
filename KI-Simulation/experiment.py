import csv
import random
import contextlib
import io

from game import Game
from strategy import RuleBasedStrategy, PARENT_PROFILE


N_RUNS = 1000
MAX_TURNS = 30
CHILD_COMPETENCE_VALUES = [0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]

FAMILIES = {
    "1 Child + 1 Adult": (1, 1),
    "2 Children + 1 Adult": (2, 1),
    "1 Child + 2 Adults": (1, 2),
    "2 Children + 2 Adults": (2, 2),
    "3 Children + 1 Adult": (3, 1),
    "1 Child + 3 Adults": (1, 3),
}


def create_players(n_children, n_parents, child_competence):
    child_profile = {
        skill: child_competence
        for skill in PARENT_PROFILE
    }

    children = [
        {
            "name": f"Kind {i + 1}",
            "role": "child",
            "profile": child_profile,
        }
        for i in range(n_children)
    ]

    parents = [
        {
            "name": f"Elternteil {i + 1}",
            "role": "parent",
            "profile": PARENT_PROFILE,
        }
        for i in range(n_parents)
    ]

    return children + parents


def run_game(players, seed):
    random.seed(seed)

    game = Game(
        players,
        strategy=RuleBasedStrategy(),
        max_turns=MAX_TURNS,
    )

    with contextlib.redirect_stdout(io.StringIO()):
        while not game.game_over:
            game.play_turn()

    if game.won:
        return "win"
    if game.risk >= 10:
        return "loss"
    return "timeout"


def run_experiment():
    rows = []

    for child_competence in CHILD_COMPETENCE_VALUES:
        for family, (n_children, n_parents) in FAMILIES.items():
            players = create_players(
                n_children,
                n_parents,
                child_competence,
            )

            outcomes = {"win": 0, "loss": 0, "timeout": 0}

            for run_id in range(N_RUNS):
                outcome = run_game(players, seed=run_id)
                outcomes[outcome] += 1

            rows.append({
                "family": family,
                "child_competence": child_competence,
                "win_rate": outcomes["win"] / N_RUNS,
                "loss_rate": outcomes["loss"] / N_RUNS,
                "timeout_rate": outcomes["timeout"] / N_RUNS,
            })

    return rows


def save_results(rows, filename="results.csv"):
    with open(filename, "w", newline="", encoding="utf-8") as file:
        writer = csv.DictWriter(file, fieldnames=rows[0].keys())
        writer.writeheader()
        writer.writerows(rows)


if __name__ == "__main__":
    save_results(run_experiment())