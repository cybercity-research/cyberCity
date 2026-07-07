from game import Game
from strategy import RuleBasedStrategy, CHILD_PROFILE, PARENT_PROFILE
game = Game([
    {"name": "Kind 1", "role": "child", "profile": CHILD_PROFILE},
    {"name": "Elternteil 1", "role": "parent", "profile": PARENT_PROFILE}
], RuleBasedStrategy())

for i in range(1000):
    game.play_turn()
    print("Runde: ", i )
    if game.game_over:
        break