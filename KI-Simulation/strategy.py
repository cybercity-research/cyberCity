import random

class RandomStrategy:
    def choose_card_answer(self, card, game, player):
        return random.choice(card["answers"])

    def choose_direction(self, game, player, white_dice, red_dice):
        return random.choice(["clockwise", "counterclockwise"])

    def should_build_wall(self, game, player):
        return game.security_chips >= game.wall_cost and random.choice([True, False])

    def should_teleport(self, game, player, possible_targets):
        return game.time_chips >= game.teleport_cost and random.choice([True, False])

    def choose_teleport_target(self, game, player, possible_targets):
        return random.choice(possible_targets)

    def should_reduce_risk(self, game, player):
        return game.time_chips >= game.risk_reduce_cost and game.risk > 0 and random.choice([True, False])

difficulty_values = {
    1: 0.25,
    2: 0.55,
    3: 0.80
}

CHILD_PROFILE = {
    "apps": 0.7,
    "malware": 0.7,
    "passwords": 0.70,
    "chat": 0.7,
    "scams": 0.7,
    "social_media": 0.70
}


PARENT_PROFILE = {
    "apps": 1,
    "malware": 1,
    "passwords": 1,
    "chat": 1,
    "scams": 1,
    "social_media": 1
}


def probability_correct(skill, difficulty):
    d = difficulty_values[difficulty]
    p = skill - d + 0.65

    return max(0.10, min(0.95, p))

class RuleBasedStrategy:
    def __init__(
        self,
        apps=0.7,
        malware=0.7,
        passwords=0.7,
        chat=0.7,
        scams=0.7,
        social_media=0.7,
        build_probability=0.4,
        risk_reduce_threshold = 3

    ):
        self.skills = {
            "apps": apps,
            "malware": malware,
            "passwords": passwords,
            "chat": chat,
            "scams": scams,
            "social_media": social_media
        }
        self.build_probability = build_probability
        self.risk_reduce_threshold = risk_reduce_threshold

    def choose_card_answer(self, card, game, player):
        skill_name = card["skill"]

        if player is not None and player.profile is not None:
            skill = player.profile.get(skill_name, self.skills.get(skill_name, 0.7))
        else:
            skill = self.skills.get(skill_name, 0.7)

        p_correct = probability_correct(
            skill,
            card["difficulty"]
        )

        x = random.random()

        if x < p_correct:
            wanted = "correct"
        elif x < p_correct + 0.20:
            wanted = "partial"
        else:
            wanted = "wrong"

        candidates = [
            answer for answer in card["answers"]
            if answer["type"] == wanted
        ]

        if candidates:
            return random.choice(candidates)

        return random.choice(card["answers"])

    def choose_direction(self, game, player, white_dice, red_dice):
        clockwise_position = self.get_target_position(
            game,
            player.position,
            white_dice,
            "clockwise"
        )

        counterclockwise_position = self.get_target_position(
            game,
            player.position,
            white_dice,
            "counterclockwise"
        )

        clockwise_passes_start = self.passes_start(
            game,
            player.position,
            white_dice,
            "clockwise"
        )

        counterclockwise_passes_start = self.passes_start(
            game,
            player.position,
            white_dice,
            "counterclockwise"
        )

        clockwise_score = self.evaluate_position(game, clockwise_position, red_dice, clockwise_passes_start)
        counterclockwise_score = self.evaluate_position(game, counterclockwise_position, red_dice, counterclockwise_passes_start)

        if clockwise_score > counterclockwise_score:
            return "clockwise"

        if counterclockwise_score > clockwise_score:
            return "counterclockwise"

        # Wenn beide gleich gut sind, zufällig entscheiden
        return random.choice(["clockwise", "counterclockwise"])

    def get_target_position(self, game, start_position, steps, direction):
        position = start_position

        for _ in range(steps):
            if direction == "clockwise":
                position = (position + 1) % len(game.board)
            else:
                position = (position - 1) % len(game.board)

        return position

    def evaluate_position(self, game, position, red_dice, passed_start):
        field = game.board[position]

        score = 0

        if field["type"] == "risk":
            score -= 5

        elif field["type"] == "safe_zone":
            score += 4

        elif field["type"] == "pause":
            if game.risk >= self.risk_reduce_threshold and game.time_chips >= 2:
                score += 5
            else:
                score += 1

        elif field["type"] == "district":
            score += 2
            score += self.evaluate_district_progress(game, field)

        elif field["type"] == "event":
            score -= 1

        elif field["type"] == "start":
            score += 3

        void_score = self.evaluate_void_safety(game, position, red_dice)
        score += void_score
        # Start-Bonus nur klein bewerten
        # und nur dann, wenn die Position nicht direkt gefährlich ist
        if passed_start and void_score > -10:
            score += 2
        return score

    def evaluate_district_progress(self, game, field):
        district = field["district"]

        if district in game.secured_districts:
            return -4

        district_fields = [
            f for f in game.board
            if f.get("district") == district
        ]

        protected_count = sum(
            1 for f in district_fields
            if f["protected"]
        )

        score = 0

        if not field["protected"]:
            score += 2

            if protected_count > 0:
                score += 3

            if protected_count == len(district_fields) - 1 and game.security_chips >= game.wall_cost:
                score += 8

            # Bei Zeitdruck: ungeschützte Bezirksfelder werden wichtiger
            if self.is_time_pressure(game):
                score += 3

                # Angefangene Bezirke priorisieren
                if protected_count > 0:
                    score += 3

        else:
            score -= 1

        return score

    def evaluate_void_safety(self, game, position, red_dice):
        field = game.board[position]

        if field["type"] == "safe_zone":
            return 4

        future_void_position = (game.void_position + red_dice) % len(game.board)
        future_void_field = game.board[future_void_position]

        if future_void_field["type"] == "safe_zone":
            return 1

        attack_positions = [
            future_void_position,
            (future_void_position - 1) % len(game.board),
            (future_void_position + 1) % len(game.board)
        ]

        if position in attack_positions:
            return -15

        behind_void_positions = [
            (future_void_position - i) % len(game.board)
            for i in range(2, 6)
        ]

        if position in behind_void_positions:
            return 2

        ahead_of_void_positions = [
            (future_void_position + i) % len(game.board)
            for i in range(2, 7)
        ]

        if position in ahead_of_void_positions:
            return -2

        return 0

    def passes_start(self, game, start_position, steps, direction):
        position = start_position

        for _ in range(steps):
            if direction == "clockwise":
                position = (position + 1) % len(game.board)
            else:
                position = (position - 1) % len(game.board)

            if position == 0:
                return True

        return False

    def should_build_wall(self, game, player):
        if game.security_chips < game.wall_cost:
            return False

        field = game.board[player.position]

        if field["type"] != "district":
            return False

        if field["protected"]:
            return False

        district = field["district"]

        if district in game.secured_districts:
            return False

        district_fields = [
            f for f in game.board
            if f.get("district") == district
        ]

        protected_count = sum(
            1 for f in district_fields
            if f["protected"]
        )

        # Wenn diese Mauer den Bezirk fertig macht: immer bauen
        if protected_count == len(district_fields) - 1:
            return True

        # Wenn Zeit knapp wird und im Bezirk schon Fortschritt da ist: bauen
        if self.is_time_pressure(game) and protected_count > 0:
            return True

        # Wenn viele Chips vorhanden sind: bauen
        if game.security_chips >= game.wall_cost + 2:
            return True

        return random.random() < self.build_probability

    def should_reduce_risk(self, game, player):
        if game.time_chips < game.risk_reduce_cost:
            return False

        if game.risk <= 0:
            return False

        # Bei Zeitdruck nur senken, wenn Risiko wirklich gefährlich ist
        if self.is_time_pressure(game):
            return game.risk >= 8

        # Normalfall
        return game.risk >= self.risk_reduce_threshold

    def should_teleport(self, game, player, possible_targets):
        if game.time_chips < game.teleport_cost:
            return False

        current_score = self.evaluate_teleport_position(
            game,
            player.position
        )

        best_target_score = max(
            self.evaluate_teleport_position(game, target)
            for target in possible_targets
        )

        if self.is_time_pressure(game):
            return best_target_score >= current_score + 2

        # Nur teleportieren, wenn das beste Ziel deutlich besser ist
        return best_target_score >= current_score + 3

    def choose_teleport_target(self, game, player, possible_targets):
        best_target = possible_targets[0]
        best_score = self.evaluate_teleport_position(
            game,
            best_target
        )

        for target in possible_targets[1:]:
            score = self.evaluate_teleport_position(
                game,
                target
            )

            if score > best_score:
                best_score = score
                best_target = target

        return best_target

    def evaluate_teleport_position(self, game, position):
        total_score = 0

        # Die KI weiß beim Teleportieren noch nicht,
        # welche Zahl sie würfelt.
        # Deshalb schauen wir alle möglichen Würfe von 1 bis 6 an.
        for dice in range(1, 7):
            clockwise_position = self.get_target_position(
                game,
                position,
                dice,
                "clockwise"
            )

            counterclockwise_position = self.get_target_position(
                game,
                position,
                dice,
                "counterclockwise"
            )

            clockwise_passes_start = self.passes_start(
                game,
                position,
                dice,
                "clockwise"
            )

            counterclockwise_passes_start = self.passes_start(
                game,
                position,
                dice,
                "counterclockwise"
            )

            clockwise_score = self.evaluate_teleport_landing_field(
                game,
                clockwise_position,
                clockwise_passes_start
            )

            counterclockwise_score = self.evaluate_teleport_landing_field(
                game,
                counterclockwise_position,
                counterclockwise_passes_start
            )

            # Nach dem Würfeln darf die KI die Richtung wählen.
            # Deshalb nehmen wir für jeden Würfelwurf die bessere Richtung.
            best_score_for_this_dice = max(
                clockwise_score,
                counterclockwise_score
            )

            total_score += best_score_for_this_dice

        # Durchschnitt über alle möglichen Würfelwürfe
        average_score = total_score / 6

        return average_score

    def evaluate_teleport_landing_field(self, game, position, passed_start):
        field = game.board[position]

        score = 0

        if field["type"] == "risk":
            score -= 6

        elif field["type"] == "safe_zone":
            score += 3

        elif field["type"] == "pause":
            if game.risk >= self.risk_reduce_threshold and game.time_chips >= 2:
                score += 5
            else:
                score += 2

        elif field["type"] == "event":
            score -= 3

        elif field["type"] == "start":
            score += 2

        elif field["type"] == "district":
            score += self.evaluate_landing_district_field(game, field)

        if passed_start:
            score += 2

        score += self.evaluate_landing_void_risk(game, position)

        return score

    def evaluate_landing_district_field(self, game, field):
        district = field["district"]

        if district in game.secured_districts:
            return -4

        district_fields = [
            f for f in game.board
            if f.get("district") == district
        ]

        protected_count = sum(
            1 for f in district_fields
            if f["protected"]
        )

        if field["protected"]:
            return -2

        score = 3

        # Je mehr Felder in diesem Bezirk schon abgesichert sind,
        # desto wertvoller ist es, auf ein weiteres ungeschütztes Feld zu kommen.
        score += protected_count * 2

        # Wenn dieses Feld den Bezirk abschließen könnte,
        # ist es besonders wertvoll.
        if protected_count == len(district_fields) - 1 and game.security_chips >= 2:
            score += 6

        return score

    def evaluate_landing_void_risk(self, game, position):
        field = game.board[position]

        # Auf einer Schutzzone ist man geschützt
        if field["type"] == "safe_zone":
            return 4

        score = 0

        # Abstand: Wie viele Felder ist die Position vor VOID?
        # Beispiel: VOID steht auf 10, Position ist 14 → Abstand 4
        distance_ahead_of_void = (position - game.void_position) % len(game.board)

        # Wenn man 2 bis 7 Felder vor VOID landet,
        # kann VOID einen mit dem roten Würfel sehr wahrscheinlich erreichen
        if 0 <= distance_ahead_of_void <= 7:
            score -= 10

        # Wenn man etwas weiter vor VOID ist, ist es noch leicht riskant
        elif 8 <= distance_ahead_of_void <= 10:
            score -= 3

        # Abstand: Wie viele Felder ist die Position hinter VOID?
        distance_behind_void = (game.void_position - position) % len(game.board)

        # Hinter VOID zu landen ist eher sicher,
        # weil VOID nur im Uhrzeigersinn läuft
        if 2 <= distance_behind_void <= 6:
            score += 3

        return score

    def remaining_turns(self, game):
        return game.max_turns - game.turn_count

    def is_time_pressure(self, game):
        return self.remaining_turns(game) <= 10

