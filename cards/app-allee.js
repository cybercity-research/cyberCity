cards["taschenlampen-app"] = {
    district: "App-Allee",
    title: "Die Taschenlampen-App",
    checklist: [
        "Berechtigungen prüfen",
        "überlegen, was die App wirklich braucht",
        "unnötige Zugriffe ablehnen",
        "bei Unsicherheit Erwachsene fragen",
        "App nur aus offiziellen Stores laden",
        "Bewertungen nicht blind vertrauen",
        "App löschen, wenn sie zu viele Daten verlangt"
    ],
    answers: [
        {
            text: "A) Wir erlauben alles, damit die App richtig funktioniert.",
            evaluation: "Riskant. Eine Taschenlampen-App braucht normalerweise keinen Zugriff auf Kontakte, Fotos, Mikrofon oder Standort.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir überlegen, welche Berechtigungen die App wirklich braucht, und fragen bei Unsicherheit nach.",
            evaluation: "Sehr sicher. Berechtigungen werden bewusst geprüft und private Daten bleiben besser geschützt.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir erlauben nur den Standort, weil das nicht so schlimm ist.",
            evaluation: "Teilweise riskant. Auch Standortdaten sind privat und können viel über eine Person verraten.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Wir installieren die App trotzdem, weil sie viele gute Bewertungen hat.",
            evaluation: "Teilweise riskant. Gute Bewertungen helfen, aber Berechtigungen müssen trotzdem geprüft werden.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "BSI – Apps sicher nutzen",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Apps/apps_node.html"
        }
    ]
};

cards["kostenloses-spiel"] = {
    district: "App-Allee",
    title: "Das kostenlose Spiel",
    checklist: [
        "verstehen, dass kostenlose Apps oft mit Daten oder Werbung arbeiten",
        "Datenschutzeinstellungen prüfen",
        "personalisierte Werbung kritisch betrachten",
        "bei Unsicherheit Erwachsene fragen",
        "nicht einfach alles akzeptieren",
        "altersgerechte Apps bevorzugen"
    ],
    answers: [
        {
            text: "A) Wir stimmen zu, weil das Spiel nichts kostet.",
            evaluation: "Teilweise riskant. Kostenlos bedeutet nicht automatisch ohne Gegenleistung; oft werden Daten oder Aufmerksamkeit genutzt.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Wir prüfen die Datenschutz-Einstellungen und entscheiden gemeinsam mit Eltern.",
            evaluation: "Sehr sicher. Die Familie schaut bewusst auf Daten, Werbung und Einstellungen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir ignorieren Werbung einfach.",
            evaluation: "Teilweise riskant. Werbung zu ignorieren hilft etwas, aber die Daten- und Tracking-Einstellungen bleiben wichtig.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Wir geben ein falsches Alter an.",
            evaluation: "Riskant. Falsche Angaben lösen das Problem nicht und können ungeeignete Inhalte oder Funktionen freischalten.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "SCHAU HIN! – Apps und Datenschutz",
            url: "https://www.schau-hin.info/grundlagen/apps-kindersicher-machen"
        },
        {
            name: "BSI – Apps sicher nutzen",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Apps/apps_node.html"
        }
    ]
};

cards["in-app-kauf"] = {
    district: "App-Allee",
    title: "Der In-App-Kauf",
    checklist: [
        "nicht heimlich kaufen",
        "vorher mit Eltern sprechen",
        "verstehen, dass kleine Beträge sich summieren können",
        "Familienregeln für Käufe beachten",
        "Kaufbestätigungen oder Sperren nutzen",
        "überlegen, ob der Kauf wirklich nötig ist"
    ],
    answers: [
        {
            text: "A) Wir kaufen, wenn es billig wirkt.",
            evaluation: "Riskant. Kleine Beträge können sich schnell summieren und Kaufdruck erzeugen.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir sprechen vorher mit Eltern und beachten vereinbarte Regeln.",
            evaluation: "Sehr sicher. Käufe werden gemeinsam entschieden und nicht heimlich gemacht.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir machen lieber mehrere kleine Käufe.",
            evaluation: "Sehr riskant. Viele kleine Käufe können am Ende teuer werden.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Wir fragen Freunde, ob es sich lohnt.",
            evaluation: "Teilweise riskant. Freunde können eine Meinung haben, aber Kaufregeln sollten mit der Familie geklärt werden.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "SCHAU HIN! – In-App-Käufe",
            url: "https://www.schau-hin.info/sicherheit-risiken/kostenfallen-in-app-kaeufe-und-abos"
        }
    ]
};

cards["standortfreigabe"] = {
    district: "App-Allee",
    title: "Standortfreigabe",
    checklist: [
        "Standortzugriff kritisch prüfen",
        "nur erlauben, wenn es wirklich nötig ist",
        "„immer erlauben“ vermeiden, wenn es nicht gebraucht wird",
        "Standortdaten als privat verstehen",
        "Einstellungen regelmäßig prüfen",
        "Erwachsene fragen, wenn unklar ist, warum eine App Standort braucht"
    ],
    answers: [
        {
            text: "A) Wir erlauben den Standort immer.",
            evaluation: "Riskant. Ständige Standortfreigabe kann Bewegungsmuster und private Orte sichtbar machen.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir erlauben den Standort nur, wenn es nötig ist, oder lehnen ab.",
            evaluation: "Sehr sicher. Die App bekommt nur Zugriff, wenn es wirklich sinnvoll ist.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir erlauben Standort nur bei Lieblingsapps.",
            evaluation: "Teilweise riskant. Ob eine App beliebt ist, sagt nichts darüber, ob sie den Standort braucht.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Wir lassen den Standort an und denken später nicht mehr daran.",
            evaluation: "Riskant. Vergessene Berechtigungen können dauerhaft private Daten preisgeben.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "BSI – Apps sicher nutzen",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Apps/apps_node.html"
        },
        {
            name: "klicksafe – Datenschutz und Privatsphäre",
            url: "https://www.klicksafe.de/privatsphaere-und-big-data"
        }
    ]
};

cards["mikrofonzugriff"] = {
    district: "App-Allee",
    title: "Mikrofonzugriff",
    checklist: [
        "Berechtigung hinterfragen",
        "unnötigen Mikrofonzugriff ablehnen",
        "prüfen, ob die App trotzdem funktioniert",
        "App-Berechtigungen regelmäßig kontrollieren",
        "bei Unsicherheit Erwachsene fragen",
        "App löschen, wenn sie zu viele Rechte verlangt"
    ],
    answers: [
        {
            text: "A) Wir erlauben es, vielleicht braucht die App das Mikrofon doch.",
            evaluation: "Teilweise riskant. Berechtigungen sollten nicht ohne Grund erlaubt werden.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Wir lehnen den Zugriff ab und prüfen, ob die App trotzdem funktioniert.",
            evaluation: "Sehr sicher. Unnötige Berechtigungen werden begrenzt.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir löschen die App sofort.",
            evaluation: "Teilweise sicher. Löschen kann sinnvoll sein, aber erst prüfen und verstehen wäre oft besser.",
            consequence: "+1 Zeit-Chip."
        },
        {
            text: "D) Wir erlauben es, weil wir nichts Geheimes sagen.",
            evaluation: "Teilweise riskant. Auch scheinbar harmlose Gespräche oder Geräusche können privat sein.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "BSI – Apps sicher nutzen",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Apps/apps_node.html"
        }
    ]
};

cards["altersabfrage"] = {
    district: "App-Allee",
    title: "Die Altersabfrage",
    checklist: [
        "Altersgrenzen ernst nehmen",
        "nicht beim Alter lügen",
        "mit Eltern prüfen, ob die App geeignet ist",
        "mögliche Risiken wie Kontaktfunktionen, Werbung oder Inhalte beachten",
        "altersgerechte Alternativen suchen",
        "Familienregeln respektieren"
    ],
    answers: [
        {
            text: "A) Wir geben ein älteres Geburtsjahr ein.",
            evaluation: "Riskant. Falsche Altersangaben können ungeeignete Inhalte oder Funktionen freischalten.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir prüfen mit Eltern, ob die App geeignet ist.",
            evaluation: "Sehr sicher. Die App wird gemeinsam bewertet und nicht heimlich genutzt.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir fragen Freunde, ob sie die App nutzen.",
            evaluation: "Teilweise riskant. Freunde können Erfahrungen teilen, aber sie ersetzen keine gemeinsame Prüfung.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Wir installieren die App trotzdem.",
            evaluation: "Riskant. Altersgrenzen und Hinweise werden ignoriert.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "SCHAU HIN! – Altersgerechte Apps",
            url: "https://www.schau-hin.info/grundlagen/apps-kindersicher-machen"
        }
    ]
};

cards["app-aus-dem-internet"] = {
    district: "App-Allee",
    title: "Die App aus dem Internet",
    checklist: [
        "Apps nicht von unbekannten Webseiten installieren",
        "offizielle App-Stores nutzen",
        "Spezialversionen kritisch sehen",
        "Berechtigungen prüfen",
        "Erwachsene fragen",
        "verstehen, dass unbekannte Apps Schadsoftware enthalten können"
    ],
    answers: [
        {
            text: "A) Wir installieren sie, weil sie dort kostenlos ist.",
            evaluation: "Riskant. Unbekannte App-Quellen können Schadsoftware oder Datenmissbrauch enthalten.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir installieren sie nicht und nutzen offizielle Quellen.",
            evaluation: "Sehr sicher. Offizielle App-Stores sind vertrauenswürdiger als unbekannte Webseiten.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir lesen erst die Kommentare auf der Webseite.",
            evaluation: "Teilweise riskant. Kommentare auf unbekannten Seiten können gefälscht sein.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Wir testen die App nur auf einem alten Gerät.",
            evaluation: "Riskant. Auch ein altes Gerät kann Daten enthalten oder andere Geräte gefährden.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "BSI – Apps sicher nutzen",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Apps/apps_node.html"
        },
        {
            name: "BSI – sichere Downloads",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Downloads/downloads_node.html"
        }
    ]
};

cards["datenschutz-einstellungen"] = {
    district: "App-Allee",
    title: "Die Datenschutz-Einstellungen",
    checklist: [
        "Einstellungen gemeinsam prüfen",
        "private Optionen wählen",
        "Sichtbarkeit begrenzen",
        "Tracking und personalisierte Werbung kritisch betrachten",
        "Benachrichtigungen bewusst einstellen",
        "bei Unsicherheit Hilfe holen"
    ],
    answers: [
        {
            text: "A) Wir lassen alles so, wie es ist.",
            evaluation: "Teilweise riskant. Standardeinstellungen sind nicht immer die privateste oder sicherste Wahl.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Wir prüfen gemeinsam die Einstellungen und wählen private Optionen.",
            evaluation: "Sehr sicher. Die Familie nimmt sich Zeit, um Datenschutz und Sichtbarkeit bewusst einzustellen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir schalten nur Benachrichtigungen aus.",
            evaluation: "Teilweise sicher. Das kann helfen, aber Datenschutz, Tracking und Sichtbarkeit bleiben trotzdem wichtig.",
            consequence: "+1 Zeit-Chip."
        },
        {
            text: "D) Wir nutzen die App einfach weiter, weil sie Spaß macht.",
            evaluation: "Teilweise riskant. Spaß ist wichtig, aber Einstellungen sollten trotzdem geprüft werden.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "SCHAU HIN! – Apps kindersicher machen",
            url: "https://www.schau-hin.info/grundlagen/apps-kindersicher-machen"
        },
        {
            name: "BSI – Apps sicher nutzen",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Apps/apps_node.html"
        }
    ]
};

cards["freundesliste"] = {
    district: "App-Allee",
    title: "Die Freundesliste",
    checklist: [
        "Kontakte nicht leichtfertig freigeben",
        "verstehen, dass Kontakte Daten anderer Menschen enthalten",
        "Zugriff ablehnen oder gemeinsam prüfen",
        "alternative Suchfunktionen nutzen",
        "Erwachsene fragen",
        "Berechtigungen später wieder kontrollieren"
    ],
    answers: [
        {
            text: "A) Wir erlauben den Zugriff, weil es praktisch ist.",
            evaluation: "Riskant. Praktisch bedeutet nicht automatisch datenschutzfreundlich.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir schützen die Kontakte und lehnen den Zugriff ab oder prüfen gemeinsam.",
            evaluation: "Sehr sicher. Auch die Daten anderer Personen werden respektiert.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir erlauben den Zugriff nur kurz.",
            evaluation: "Teilweise riskant. Auch kurzer Zugriff kann reichen, damit Daten übertragen werden.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Wir löschen danach einzelne Kontakte wieder.",
            evaluation: "Riskant. Wenn Daten bereits übertragen wurden, hilft nachträgliches Löschen nur begrenzt.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "BSI – Apps sicher nutzen",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Apps/apps_node.html"
        },
        {
            name: "klicksafe – Datenschutz und Privatsphäre",
            url: "https://www.klicksafe.de/privatsphaere-und-big-data"
        }
    ]
};

cards["bildschirmzeit-check"] = {
    district: "App-Allee",
    title: "Der Bildschirmzeit-Check",
    checklist: [
        "merken, wie es einem geht: müde, gereizt, unkonzentriert",
        "vorher vereinbarte Bildschirmzeit ernst nehmen",
        "Pause machen, auch wenn andere weiterspielen wollen",
        "Freunde freundlich informieren",
        "gemeinsam Familienregeln nutzen, statt heimlich weiterzuspielen",
        "Bildschirmzeit nicht nur als Verbot sehen, sondern als Hilfe für Balance"
    ],
    answers: [
        {
            text: "A) Wir spielen weiter, weil die Freunde sonst enttäuscht sind.",
            evaluation: "Teilweise riskant. Gruppendruck kann dazu führen, dass man eigene Grenzen ignoriert.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Wir sagen freundlich, dass wir nach dieser Runde Pause machen, und halten uns an die vereinbarte Zeit.",
            evaluation: "Sehr sicher. Die eigene Grenze erkennen, freundlich kommunizieren und eine Pause machen ist stark.",
            consequence: "+1 Zeit-Chip und +1 Sicherheits-Chip."
        },
        {
            text: "C) Wir spielen heimlich weiter und stellen den Ton leiser.",
            evaluation: "Riskant. Heimlich weiterspielen schwächt Vertrauen und macht Familienregeln schwieriger.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Wir hören sofort auf, aber ärgern uns und sagen niemandem, warum es schwer war.",
            evaluation: "Teilweise sicher. Aufhören ist gut, aber darüber sprechen hilft, bessere Regeln zu finden.",
            consequence: "+1 Zeit-Chip."
        }
    ],
    helpSources: [
        {
            name: "SCHAU HIN! – Bildschirmzeiten",
            url: "https://www.schau-hin.info/grundlagen/bildschirmzeiten"
        }
    ]
};

cards["streit-um-bildschirmzeit"] = {
    district: "App-Allee",
    title: "Der Streit um die Bildschirmzeit",
    checklist: [
        "Online-Sein ist wichtig, aber nicht grenzenlos",
        "Schlaf, Schule, Familie und Erholung beachten",
        "Regeln gemeinsam besprechen",
        "Regeln nicht nur als Verbot sehen",
        "Pausen als Schutz und Hilfe verstehen",
        "Konflikte ruhig ansprechen"
    ],
    answers: [
        {
            text: "A) Noah sollte selbst entscheiden dürfen, solange er online nichts Gefährliches macht.",
            evaluation: "Teilweise riskant. Sicherheit bedeutet nicht nur keine Gefahr, sondern auch gesunde Balance.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Online-Sein ist wichtig, aber Pausen und gemeinsam besprochene Regeln können helfen, gesund und sicher zu bleiben.",
            evaluation: "Sehr sicher. Diese Antwort verbindet Freiheit, Sicherheit und Familienregeln.",
            consequence: "+1 Zeit-Chip, +1 Sicherheits-Chip und möglicher Balance Badge."
        },
        {
            text: "C) Noah sollte seine Eltern bitten, ihm nur für soziale Netzwerke eine Ausnahme zu erlauben.",
            evaluation: "Teilweise riskant. Eine Ausnahme löst das Grundproblem nicht.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Noah sollte das Handy abends behalten dürfen, wenn er verspricht, nur mit bekannten Personen zu schreiben.",
            evaluation: "Teilweise riskant. Bekannte Kontakte sind nicht das einzige Thema; Schlaf und Pausen sind auch wichtig.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "SCHAU HIN! – Bildschirmzeiten",
            url: "https://www.schau-hin.info/grundlagen/bildschirmzeiten"
        },
        {
            name: "SCHAU HIN! – Medienzeiten vereinbaren",
            url: "https://www.schau-hin.info/grundlagen/medienzeiten-vereinbaren"
        }
    ]
};

cards["oeffentliches-wlan"] = {
    district: "App-Allee",
    title: "Das öffentliche WLAN",
    checklist: [
        "keine sensiblen Logins im offenen WLAN",
        "keine Zahlungsdaten eingeben",
        "lieber mobile Daten oder ein vertrauenswürdiges Netz nutzen",
        "auf sichere Verbindungen achten",
        "nach Nutzung abmelden",
        "bei Unsicherheit warten"
    ],
    answers: [
        {
            text: "A) Er kann sich einloggen, wenn die Webseite ein Schloss-Symbol anzeigt.",
            evaluation: "Teilweise sicher, aber nicht ausreichend. Das Schloss hilft, aber offenes WLAN bleibt riskant.",
            consequence: "+1 Zeit-Chip."
        },
        {
            text: "B) Er sollte im öffentlichen WLAN keine sensiblen Logins oder Zahlungsdaten eingeben.",
            evaluation: "Sehr sicher. E-Mail und Zahlungsdaten sind besonders schützenswert.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Er kann sich einloggen, wenn er sich danach wieder abmeldet.",
            evaluation: "Teilweise riskant. Abmelden ist gut, schützt aber nicht vor allen Risiken während des Logins.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Er sollte nur Apps benutzen, aber keine Webseiten öffnen.",
            evaluation: "Teilweise riskant. Auch Apps können sensible Daten übertragen.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "BSI – Sicher unterwegs",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Sicher-unterwegs/sicher-unterwegs_node.html"
        }
    ]
};