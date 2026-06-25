cards["login-auf-fremdem-geraet"] = {
    district: "Passwort-Park",
    title: "Einloggen auf fremdem Gerät",
    situation: "Mia spielt bei einem Freund auf dessen Tablet. Sie meldet sich in ihrem Spielkonto an. Danach fragt das Tablet, ob es ihr Passwort speichern soll. Was sollte Mia tun?",
    checklist: [
        "auf fremden Geräten kein Passwort speichern",
        "nach der Nutzung ausloggen",
        "prüfen, ob der Account abgemeldet ist",
        "bei Unsicherheit Passwort ändern"
    ],
    answers: [
        {
            text: "A) Mia wählt „Nicht speichern“ und meldet sich nach dem Spielen ab.",
            type: "correct",
            evaluation: "Sehr sicher. Das Passwort bleibt nicht auf dem fremden Gerät und der Account bleibt nicht offen. So schützt Mia auch ihren Spielfortschritt und ihre gesammelten Gegenstände.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "B) Mia wählt „Nicht speichern“, bleibt aber eingeloggt.",
            type: "partial",
            evaluation: "Teilweise sicher. Das Passwort wird nicht gespeichert, aber der Account kann trotzdem offen bleiben.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Mia meldet sich ab und löscht danach den Browserverlauf.",
            type: "partial",
            evaluation: "Teilweise sicher. Ausloggen ist wichtig, aber der Verlauf löscht nicht immer gespeicherte Kontodaten.",
            consequence: "VOID bewegt 5 Felder vor."
        },
        {
            text: "D) Mia speichert das Passwort, weil sie ihrem Freund vertraut.",
            type: "wrong",
            evaluation: "Riskant. Passwörter sollten nicht auf fremden Geräten gespeichert werden, auch nicht bei Freunden.",
            consequence: "Risiko +2."
        }
    ],
    helpSources: [
        {
            name: "BSI – Gemeinsam genutzte Geräte und sensible Vorgänge",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Basisschutz-fuer-Computer-Mobilgeraete/Basisschutz-fuer-Computer/Benutzerkonten/benutzerkonten.html"
        },
        {
            name: "BSI – Umgang mit Passwörtern",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Sichere-Passwoerter-erstellen/Umgang-mit-Passwoertern/umgang-mit-passwoertern_node.html"
        },
        {
            name: "Google-Konto-Hilfe – Geräte mit Kontozugriff ansehen",
            url: "https://support.google.com/accounts/answer/3067630?hl=de"
        }
    ]
};

cards["zwei-faktor-schutz"] = {
    district: "Passwort-Park",
    title: "Zwei-Faktor-Schutz",
    situation: "Ein Spiel bietet Tom an, seinen Account zusätzlich zu schützen. Dann braucht man neben dem Passwort noch einen zweiten Schritt, zum Beispiel einen Code aus einer App oder per SMS. Was sollte Tom tun?",
    checklist: [
        "Zwei-Faktor-Schutz nutzen",
        "Zusatzcode nicht weitergeben",
        "wichtige Konten extra schützen"
    ],
    answers: [
        {
            text: "A) Tom aktiviert den Schutz nicht.",
            type: "wrong",
            evaluation: "Riskant. Wichtige Accounts sind mit Passwort und zusätzlichem Schutz sicherer.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Tom aktiviert den Schutz.",
            type: "correct",
            evaluation: "Sehr sicher. Ein zusätzlicher Code schützt den Account besser, falls das Passwort bekannt wird.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Tom aktiviert den Schutz nur bei Accounts mit Geld oder seltenen Spielgegenständen.",
            type: "partial",
            evaluation: "Teilweise sinnvoll. Aber auch E-Mail-, Schul- oder Spielkonten ohne Geld können wichtig sein.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Tom nutzt lieber nur ein längeres Passwort.",
            type: "wrong",
            evaluation: "Riskant. Wichtige Accounts sind mit Passwort und zusätzlichem Schutz sicherer.",
            consequence: "Risiko +2."
        }
    ],
    helpSources: [
        {
            name: "BSI – Zwei-Faktor-Authentisierung",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Zwei-Faktor-Authentisierung/zwei-faktor-authentisierung_node.html"
        },
        {
            name: "Verbraucherzentrale – Zwei-Faktor-Authentisierung: So schützen Sie Ihre Accounts",
            url: "https://www.verbraucherzentrale.de/wissen/digitale-welt/datenschutz/zweifaktorauthentisierung-so-schuetzen-sie-ihre-accounts-85173"
        }
    ]
};

cards["passwort-im-klassenchat"] = {
    district: "Passwort-Park",
    title: "Passwort im Klassenchat",
    situation: "Jemand schreibt aus Versehen sein Passwort in den Klassenchat. Einige lachen darüber. Andere wollen testen, ob es funktioniert. Was sollte Leon tun?",
    checklist: [
        "Passwort nicht ausprobieren",
        "nicht weiterleiten",
        "Person privat warnen",
        "Passwort ändern lassen",
        "fair bleiben",
        "Passwort nicht ausprobieren, auch nicht aus Spaß"
    ],
    answers: [
        {
            text: "A) Leon löscht die Nachricht bei sich und tut so, als hätte er sie nicht gesehen.",
            type: "partial",
            evaluation: "Teilweise fair. Aber die Person sollte schnell erfahren, dass ihr Passwort sichtbar war.",
            consequence: "VOID bewegt 3 Felder vor."
        },
        {
            text: "B) Leon testet es nicht, schickt aber einen Screenshot an Freunde.",
            type: "wrong",
            evaluation: "Riskant und unfair. Dadurch wird das Passwort weiterverbreitet.",
            consequence: "Risiko +2."
        },
        {
            text: "C) Leon schreibt der Person privat, dass sie das Passwort sofort ändern sollte.",
            type: "correct",
            evaluation: "Sehr sicher und fair. Leon nutzt das Passwort nicht aus und hilft der Person.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Leon schreibt in den Gruppenchat, dass alle das Passwort ignorieren sollen.",
            type: "partial",
            evaluation: "Gut gemeint, aber nicht ideal. Dadurch bekommt das Passwort noch mehr Aufmerksamkeit.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "BSI – Umgang mit Passwörtern",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Sichere-Passwoerter-erstellen/Umgang-mit-Passwoertern/umgang-mit-passwoertern_node.html"
        },
        {
            name: "BSI – Sichere Passwörter erstellen",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Sichere-Passwoerter-erstellen/sichere-passwoerter-erstellen_node.html"
        },
        {
            name: "klicksafe – Datenschutz und Privatsphäre",
            url: "https://www.klicksafe.de/privatsphaere-und-big-data"
        }
    ]
};

cards["account-uebernommen"] = {
    district: "Passwort-Park",
    title: "Der Account wurde übernommen",
    situation: "Leas Account verschickt plötzlich Nachrichten, die sie nicht geschrieben hat. Freunde fragen, warum sie komische Links sendet. Was sollte Lea tun?",
    checklist: [
        "Passwort sofort ändern",
        "prüfen, wo der Account noch angemeldet ist",
        "Zwei-Faktor-Schutz aktivieren wenn möglich",
        "Freunde warnen",
        "Support oder Erwachsene fragen"
    ],
    answers: [
        {
            text: "A) Lea sagt ihren Freunden, sie sollen die Links testen.",
            type: "wrong",
            evaluation: "Riskant. Dadurch könnten noch mehr Personen auf gefährliche Links klicken.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Lea löscht die App und wartet ab.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar, aber nicht genug. Der Account kann weiter missbraucht werden.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Lea erstellt einen neuen Account und warnt alle vor dem alten.",
            type: "partial",
            evaluation: "Teilweise sicher. Freunde zu warnen ist gut, aber der alte Account muss trotzdem abgesichert werden.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Lea ändert das Passwort, meldet den Account auf fremden Geräten ab und warnt ihre Freunde.",
            type: "correct",
            evaluation: "Sehr sicher. So schützt Lea ihren Account, ihre Freunde, Chats und Erinnerungen. Außerdem verhindert sie, dass andere auf die Links klicken.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        }
    ],
    helpSources: [
        {
            name: "BSI – Notfallplan gehacktes E-Mail-Konto",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Identitaetsdiebstahl/Hilfe-fuer-Betroffene/hilfe-fuer-betroffene_node.html"
        },
        {
            name: "BSI – Gehackter Account: Der Fremde im eigenen Social-Media-Konto",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Wie-geht-Internet/Identitaetsdiebstahl-Social-Media/identitaetsdiebstahl-social-media.html"
        },
        {
            name: "Verbraucherzentrale – Erste Hilfe bei gehackten Online-Konten",
            url: "https://www.verbraucherzentrale.de/wissen/digitale-welt/phishingradar/erste-hilfe-bei-gehackten-onlinekonten-63228"
        }
    ]
};

cards["sicherheitsfrage"] = {
    district: "Passwort-Park",
    title: "Sicherheitsfrage",
    situation: "Eine Webseite fragt Leyla: „Wie heißt dein Haustier?“ Diese Sicherheitsfrage soll später helfen, wenn sie ihr Passwort vergisst. Was sollte Leyla tun?",
    checklist: [
        "keine echten Infos nehmen, die andere kennen könnten",
        "Antwort geheim halten",
        "Antwort sicher aufbewahren"
    ],
    answers: [
        {
            text: "A) Leyla nimmt den echten Haustiernamen.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar, aber riskant. Echte Haustiernamen können andere vielleicht herausfinden.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Leyla nutzt eine schwer erratbare Antwort und bewahrt sie sicher auf.",
            type: "correct",
            evaluation: "Sehr sicher. Die Antwort muss nicht die echte Antwort sein. Wichtig ist, dass sie geheim bleibt und nicht leicht erraten werden kann.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Leyla nimmt eine Fantasieantwort und erzählt sie Freunden.",
            type: "wrong",
            evaluation: "Riskant. Eine Sicherheitsantwort ist nur sicher, wenn sie geheim bleibt.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Leyla nimmt bei jeder Sicherheitsfrage dieselbe kurze Antwort.",
            type: "partial",
            evaluation: "Teilweise praktisch, aber nicht ideal. Eine kurze gleiche Antwort kann leichter missbraucht werden.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "Okta – Sicherheitsfragen: Best Practices",
            url: "https://www.okta.com/de-de/blog/identity-security/security-questions/"
        },
        {
            name: "BSI – Accountschutz",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/accountschutz_node.html"
        }
    ]
};

cards["freund-will-passwort"] = {
    district: "Passwort-Park",
    title: "Der Freund will das Passwort",
    situation: "Jonas bester Freund will sich kurz mit Jonas’ Spielaccount anmelden, um einen seltenen Gegenstand anzuschauen. Was sollte Jonas tun?",
    checklist: [
        "Passwort nicht teilen",
        "Account nicht aus der Hand geben",
        "freundliche Alternative anbieten",
        "bei geteiltem Passwort ändern"
    ],
    answers: [
        {
            text: "A) Jonas loggt sich selbst ein und zeigt den Gegenstand auf seinem Gerät.",
            type: "correct",
            evaluation: "Sehr sicher. Jonas gibt sein Passwort nicht weiter und schützt seinen Account, in dem Spielzeit, seltene Gegenstände und Fortschritt stecken.",
            consequence: "+1 Sicherheits-Chip, +1 Zeit-Chip und möglicher Passwort-Profi Badge."
        },
        {
            text: "B) Jonas gibt das Passwort kurz weiter und ändert es danach.",
            type: "partial",
            evaluation: "Teilweise vorsichtig. Trotzdem kann schon kurzer Zugriff für Änderungen oder Missbrauch reichen.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Jonas erstellt ein Übergangspasswort.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar. Aber der Freund bekommt trotzdem Zugriff auf den Account und könnte aus Versehen etwas ändern.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Jonas lässt den Freund allein an seinem Gerät spielen.",
            type: "wrong",
            evaluation: "Riskant. Der Account ist dann offen und unbeaufsichtigt.",
            consequence: "Risiko +2."
        }
    ],
    helpSources: [
        {
            name: "Internet-ABC – Ein sicheres Passwort muss geheim sein",
            url: "https://www.internet-abc.de/kinder/hobby-freizeit/neues-uebers-netz/2021/sicheres-passwort/"
        },
        {
            name: "BSI – Umgang mit Passwörtern",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Sichere-Passwoerter-erstellen/Umgang-mit-passwoertern/umgang-mit-passwoertern_node.html"
        }
    ]
};

cards["name-und-geburtsdatum"] = {
    district: "Passwort-Park",
    title: "Name und Geburtsdatum",
    situation: "Leyla erstellt ein neues Passwort. Sie überlegt, ihren Vornamen und ihr Geburtsdatum zu benutzen, damit sie es sich merken kann. Was sollte sie tun?",
    checklist: [
        "keine Namen oder Geburtstage nutzen",
        "langes Passwort verwenden",
        "Passwort nicht wiederverwenden",
        "langen Merksatz nutzen, den andere nicht erraten können"
    ],
    answers: [
        {
            text: "A) Leyla nimmt Name und Geburtstag, ersetzt aber ein paar Buchstaben.",
            type: "partial",
            evaluation: "Teilweise besser, aber immer noch riskant. Namen, Geburtstage und einfache Ersetzungen wie @ oder Zahlen können leichter erraten werden.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Leyla nimmt ein kurzes Passwort, das sie niemandem sagt.",
            type: "partial",
            evaluation: "Teilweise richtig. Geheimhalten ist wichtig, aber kurze Passwörter sind leichter zu knacken.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Leyla denkt sich einen langen Merksatz ohne persönliche Daten aus.",
            type: "correct",
            evaluation: "Sehr sicher. Ein langer Merksatz kann gut merkbar und schwer zu erraten sein.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Leyla nimmt ein altes Passwort und hängt eine neue Zahl an.",
            type: "wrong",
            evaluation: "Riskant. Wiederverwendete Passwörter können mehrere Konten gefährden.",
            consequence: "Risiko +2."
        }
    ],
    helpSources: [
        {
            name: "Internet-ABC – Ein wasserdichtes Passwort",
            url: "https://www.internet-abc.de/kinder/hobby-freizeit/surfratgeber/ein-wasserdichtes-passwort/"
        },
        {
            name: "BSI – Sichere Passwörter erstellen",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Sichere-Passwoerter-erstellen/sichere-passwoerter-erstellen_node.html"
        }
    ]
};

cards["passwort-fuer-mehrere-konten"] = {
    district: "Passwort-Park",
    title: "Ein Passwort für mehrere Konten",
    situation: "Ben benutzt dasselbe Passwort für sein Spielkonto, seine E-Mail und eine Lernplattform. Was sollte Ben tun?",
    checklist: [
        "nicht dasselbe Passwort überall nutzen",
        "E-Mail-Konto besonders schützen",
        "unterschiedliche Passwörter verwenden",
        "mit Eltern über einen Passwort-Manager sprechen",
        "Zwei-Faktor-Schutz nutzen"
    ],
    answers: [
        {
            text: "A) Ben speichert das Passwort in einer privaten Chatnachricht an sich selbst.",
            type: "wrong",
            evaluation: "Riskant. Passwörter sollten nicht in Chats gespeichert werden.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Ben behält das Passwort, solange es lang ist und geheim bleibt.",
            type: "partial",
            evaluation: "Teilweise richtig. Trotzdem sollte ein Passwort nicht für mehrere Konten genutzt werden.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Ben nutzt dasselbe Passwort nur für unwichtige Konten.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar. Auch Spiel-, Schul- oder Lernkonten können wichtig sein.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Ben ändert zuerst das E-Mail-Passwort und nutzt danach unterschiedliche Passwörter.",
            type: "correct",
            evaluation: "Sehr sicher. Das E-Mail-Konto ist besonders wichtig, weil man darüber oft andere Konten zurücksetzen kann. So schützt Ben auch Spielstände, Schulzugänge und persönliche Nachrichten.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        }
    ],
    helpSources: [
        {
            name: "BSI – Passwort-Manager",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Sichere-Passwoerter-erstellen/Passwort-Manager/passwort-manager_node.html"
        },
        {
            name: "Verbraucherzentrale – Starke Passwörter erstellen",
            url: "https://www.verbraucherzentrale.de/wissen/digitale-welt/datenschutz/starke-passwoerter-erstellen-so-schuetzen-sie-ihre-onlinekonten-effektiv-11672"
        },
        {
            name: "Internet-ABC – Ein wasserdichtes Passwort",
            url: "https://www.internet-abc.de/kinder/hobby-freizeit/surfratgeber/ein-wasserdichtes-passwort/"
        }
    ]
};