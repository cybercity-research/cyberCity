import random
import copy
from game_board import board
from district_card import district_cards
from strategy import RandomStrategy
from event_card import event_cards

class Player:
    def __init__(self, name, role="child", profile=None):
        self.name = name
        self.role = role
        self.profile = profile
        self.position = 0


class Game:
    def __init__(
            self,
            player_names,
            strategy=None,
            wall_cost=2,
            teleport_cost=2,
            risk_reduce_cost=2,
            max_turns=30
    ):
        self.players = []

        for player_data in player_names:
            if isinstance(player_data, str):
                self.players.append(Player(player_data))
            else:
                self.players.append(
                    Player(
                        name=player_data["name"],
                        role=player_data.get("role", "child"),
                        profile=player_data.get("profile")
                    )
                )
        self.district_cards = copy.deepcopy(district_cards)
        self.strategy = strategy or RandomStrategy()

        for district in self.district_cards:
            random.shuffle(self.district_cards[district])

        self.event_cards = event_cards.copy()
        random.shuffle(self.event_cards)

        # gemeinsame Ressourcen
        self.board = copy.deepcopy(board)
        self.security_chips = 0
        self.time_chips = 0
        self.risk = 0
        self.wall_cost = wall_cost
        self.teleport_cost = teleport_cost
        self.risk_reduce_cost = risk_reduce_cost
        self.turn_count = 0
        self.max_turns = max_turns
        self.secured_districts = set()

        # VOID startet später auf Pause
        self.void_position = 14
        self.current_player_index = 0

        # abgesicherte Bezirke
        self.secured_districts = set()

        # Spielstatus
        self.game_over = False
        self.won = False

    def move_player(self, player, steps, direction="clockwise"):
        old_position = player.position

        for _ in range(steps):
            if direction == "clockwise":
                player.position = (player.position + 1) % len(self.board)
            else:
                player.position = (player.position - 1) % len(self.board)

            # Prüfen: ist die Figur auf Start gelandet oder darübergelaufen?
            if player.position == 0:
                self.security_chips += 1
                self.time_chips += 1

                print(">>> Start erreicht!")
                print("+1 Sicherheits-Chip")
                print("+1 Zeit-Chip")

        field = self.board[player.position]

        print(f"{player.name} bewegt sich von {old_position} nach {player.position}")
        print(f"Gelandet auf: {field['name']}")

    def move_void(self, steps):
        old_position = self.void_position
        self.void_position = (self.void_position + steps) % len(self.board)

        field = self.board[self.void_position]

        print(f"VOID bewegt sich von {old_position} nach {self.void_position}")
        print(f"VOID steht auf: {field['name']}")

    def increase_risk(self, amount):
        self.risk += amount

        if self.risk > 10:
            self.risk = 10

        print(f"Risiko steigt um +{amount}. Aktuelles Risiko: {self.risk}")

        if self.risk >= 10:
            self.game_over = True
            self.won = False
            print("Sicherheitsrat! Risiko hat 10 erreicht.")

    def check_void_attack(self, active_player=None):
        void_field = self.board[self.void_position]

        if void_field["type"] == "safe_zone":
            print("VOID steht in einer Schutzzone und greift niemanden an.")
            return

        if active_player is None:
            active_player = self.players[self.current_player_index]

        dangerous_positions = [
            self.void_position,
            (self.void_position - 1) % len(self.board),
            (self.void_position + 1) % len(self.board)
        ]

        risk_increase = 0
        attacked_players = []

        for player in self.players:
            player_field = self.board[player.position]

            if player_field["type"] == "safe_zone":
                print(f"{player.name} steht in einer Schutzzone und ist geschützt.")
                continue

            if player.position in dangerous_positions:
                attacked_players.append(player.name)

                if player is active_player:
                    risk_increase += 3
                else:
                    risk_increase += 1

        # Maximal +3 Risiko pro VOID-Angriff
        risk_increase = min(risk_increase, 3)

        if risk_increase > 0:
            print("VOID bedroht:", ", ".join(attacked_players))
            print(f"Risiko steigt durch VOID um +{risk_increase}.")
            self.increase_risk(risk_increase)

    def handle_field_action(self, player):
        field = self.board[player.position]

        print(f"Feldaktion: {field['name']}")

        if field["type"] == "start":
            print("Startfeld. Kein zusätzlicher Effekt.")

        elif field["type"] == "risk":
            print("Risiko-Feld!")
            self.increase_risk(1)

        elif field["type"] == "pause":
            print("Pause-Feld.")
            self.use_time_chips_to_reduce_risk(player)

        elif field["type"] == "safe_zone":
            print("Schutzzone. Du bist hier vor VOID geschützt.")


        elif field["type"] == "event":

            print("Allgemeines Ereignisfeld.")

            card = self.draw_event_card()

            self.play_event_card(card, player)


        elif field["type"] == "district":

            print(f"Bezirksfeld: {field['district']}")

            card = self.draw_district_card(field["district"])

            if card is not None:
                self.play_card(card, player)

            if self.strategy.should_build_wall(self, player):

                self.try_build_wall(player)

            else:

                print("Keine Schutzmauer gebaut.")

    def play_card(self, card,player):
        answer = self.strategy.choose_card_answer(card, self, player)

        print(f"Karte: {card['id']}")
        print(f"Antworttyp: {answer['type']}")

        self.security_chips += answer.get("security", 0)
        self.time_chips += answer.get("time", 0)

        if answer.get("risk", 0) > 0:
            self.increase_risk(answer["risk"])

        if answer.get("risk_reduce", 0) > 0:
            self.risk = max(0, self.risk - answer["risk_reduce"])
            print(f"Risiko sinkt um {answer['risk_reduce']}.")

        if answer.get("void", 0) > 0:
            self.move_void(answer["void"])
            self.check_void_attack(player)

    def use_time_chips_to_reduce_risk(self, player):
        #if self.strategy.should_reduce_risk(self, player):
         #   self.time_chips -= self.risk_reduce_cost
          #  self.risk -= 1
           # print(f"{self.risk_reduce_cost} Zeit-Chips ausgegeben: Risiko -1")

        reductions = 0

        while (
                self.risk > 0
                and self.time_chips >= self.risk_reduce_cost
                and self.strategy.should_reduce_risk(self, player)
        ):
            self.time_chips -= self.risk_reduce_cost
            self.risk -= 1
            reductions += 1

            print(
                f"{self.risk_reduce_cost} Zeit-Chips ausgegeben: "
                f"Risiko -1 (aktuelles Risiko: {self.risk})"
            )

        if reductions == 0:
            print("Keine Zeit-Chips zur Risikosenkung ausgegeben.")

    def try_build_wall(self, player):
        field = self.board[player.position]

        if field["type"] != "district":
            return

        if field["protected"]:
            print("Dieses Feld ist bereits abgesichert.")
            return

        if self.security_chips >= self.wall_cost:
            self.security_chips -= self.wall_cost
            field["protected"] = True
            print(f"Schutzmauer gebaut auf {field['name']}.")
            self.check_district_secured(field["district"])
        else:
            print("Nicht genug Sicherheits-Chips für eine Schutzmauer.")

    def check_district_secured(self, district_name):
        district_fields = [
            field for field in self.board
            if field.get("district") == district_name
        ]

        # Sind alle Felder geschützt?
        if all(field["protected"] for field in district_fields):
            if district_name not in self.secured_districts:
                self.secured_districts.add(district_name)
                print(f"🎉 Bezirk '{district_name}' wurde abgesichert!")
                self.check_win()

    def check_win(self):
        if len(self.secured_districts) >= 3 and self.risk < 10:
            self.game_over = True
            self.won = True
            print("🏆 Ihr habt CyberCity gewonnen!")

    def draw_district_card(self, district):
        deck = self.district_cards[district]

        if len(deck) == 0:
            print(f"{district} hat keine Karten mehr.")
            self.secure_district_by_empty_deck(district)
            return None

        card = deck.pop(0)

        # Nach dem Ziehen prüfen, ob das die letzte Karte war
        if len(deck) == 0:
            print(f"{district} hat jetzt keine Karten mehr.")
            self.secure_district_by_empty_deck(district)

        return card

    def secure_district_by_empty_deck(self, district):
        if district not in self.secured_districts:
            self.secured_districts.add(district)
            print(f"🎉 Bezirk '{district}' wurde durch leeren Kartenstapel abgesichert!")
            self.check_win()

    def get_teleport_targets(self, player):
        corner_teleports = {
            0: 14,
            14: 0,
            7: 21,
            21: 7
        }

        if player.position in corner_teleports:
            return [corner_teleports[player.position]]

        current_field = self.board[player.position]

        if current_field["type"] != "district":
            return []

        district = current_field["district"]

        return [
            field["id"]
            for field in self.board
            if field.get("district") == district and field["id"] != player.position
        ]

    def try_teleport(self, player):
        possible_targets = self.get_teleport_targets(player)

        if not possible_targets:
            print("Teleport nicht möglich.")
            return

        if not self.strategy.should_teleport(self, player, possible_targets):
            print("Kein Teleport.")
            return

        target = self.strategy.choose_teleport_target(
            self,
            player,
            possible_targets
        )

        self.time_chips -= self.teleport_cost
        old_position = player.position
        player.position = target

        print(f"{player.name} teleportiert sich von {old_position} nach {target}.")
        print(f"{self.teleport_cost} Zeit-Chips ausgegeben.")

    def draw_event_card(self):
        if len(self.event_cards) == 0:
            print("Allgemeine Ereigniskarten leer. Stapel wird neu gemischt.")
            self.event_cards = event_cards.copy()
            random.shuffle(self.event_cards)

        return self.event_cards.pop(0)

    def play_event_card(self, card, player):

        print(f"Allgemeine Ereigniskarte: {card['id']}")
        print(f"VOID bewegt sich bis zum nächsten {card['target_district']}-Feld.")

        self.move_void_to_next_district(card["target_district"], player)

    def move_void_to_next_district(self, target_district, player):
        steps = 0

        while True:
            self.void_position = (self.void_position + 1) % len(self.board)
            steps += 1

            field = self.board[self.void_position]

            if field.get("district") == target_district:
                print(
                    f"VOID bewegt sich {steps} Felder bis zum nächsten {target_district}-Feld."
                )
                print(f"VOID steht jetzt auf Feld {self.void_position}: {field['name']}")
                break

        self.check_void_attack(player)

    def play_turn(self):
        if self.game_over:
            return
        self.turn_count += 1

        player = self.players[self.current_player_index]

        white_dice = random.randint(1, 6)
        red_dice = random.randint(1, 6)

        print(f"\n{player.name} ist am Zug.")

        self.try_teleport(player)

        print(f"Weißer Würfel: {white_dice}")
        print(f"Roter Würfel: {red_dice}")

        direction = self.strategy.choose_direction(self, player, white_dice, red_dice)
        print(f"Richtung: {direction}")

        self.move_player(player, white_dice, direction=direction)

        if self.game_over:
            return

        self.move_void(red_dice)
        self.check_void_attack(player)

        if self.game_over:
            return

        self.handle_field_action(player)

        if self.game_over:
            return

        self.check_win()
        if self.turn_count >= self.max_turns and not self.game_over:
            self.game_over = True
            self.won = False
            print("Zeit abgelaufen! VOID übernimmt CyberCity.")

        print()
        print("Team-Ressourcen:")
        print("Sicherheits-Chips:", self.security_chips)
        print("Zeit-Chips:", self.time_chips)
        print("Risiko:", self.risk)

        self.current_player_index = (self.current_player_index + 1) % len(self.players)