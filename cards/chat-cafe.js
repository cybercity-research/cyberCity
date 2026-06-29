cards["frage-nach-schule"] = {
    district: "Chat-Café",
    title: "Die Frage nach der Schule",
    situation: "Jemand aus einem Online-Chat fragt Emma, auf welche Schule sie geht. Was sollte sie tun?",
    checklist: [
        "Schule nicht nennen",
        "keine Orte aus dem Alltag teilen",
        "Grenzen setzen",
        "bei Treffvorschlägen Erwachsene fragen"
    ],
    answers: [
        {
            text: "A) Sie nennt nur den Stadtteil.",
            type: "partial",
            evaluation: "Teilweise vorsichtig. Auch der Stadtteil kann Hinweise auf Emmas Alltag geben.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Sie fragt zurück, auf welche Schule die Person geht.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar, aber nicht sicher. Zurückfragen schützt Emmas eigene Daten nicht.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Sie nennt ihre Schule nicht und beendet den Chat bei weiterem Nachfragen.",
            type: "correct",
            evaluation: "Sehr sicher. Die Schule ist ein privater Ort, an dem Emma regelmäßig ist. Wenn jemand weiter nachfragt, ist das ein Warnzeichen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Sie nennt einen Ort in der Nähe der Schule.",
            type: "wrong",
            evaluation: "Riskant. Auch Orte in der Nähe können verraten, wo Emma oft ist.",
            consequence: "Risiko +2."
        }
    ],
    helpSources: [
        {
            name: "klicksafe – Cybergrooming",
            url: "https://www.klicksafe.de/cybergrooming"
        },
        {
            name: "klicksafe – Datenschutz und Privatsphäre",
            url: "https://www.klicksafe.de/privatsphaere-und-big-data"
        },
        {
            name: "SCHAU HIN! – Cybergrooming erkennen und Kinder schützen",
            url: "https://www.schau-hin.info/cybergrooming"
        }
    ]
};

cards["profilfoto"] = {
    district: "Chat-Café",
    title: "Das Profilfoto",
    situation: "Eine fremde Person bittet Lara um ein aktuelles Foto. Was sollte sie tun?",
    checklist: [
        "keine Fotos an Fremde schicken",
        "Druck erkennen",
        "Chat beenden, wenn es unangenehm wird",
        "Hilfe holen"
    ],
    answers: [
        {
            text: "A) Sie schickt ein Foto ohne Gesicht.",
            type: "partial",
            evaluation: "Teilweise vorsichtig. Auch ohne Gesicht können Bilder Hinweise zeigen, zum Beispiel Zimmer, Kleidung oder Standort.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Sie bittet zuerst um ein Foto der anderen Person.",
            type: "wrong",
            evaluation: "Riskant. Ein Foto beweist nicht sicher, wer die Person wirklich ist.",
            consequence: "Risiko +2."
        },
        {
            text: "C) Sie schickt ein altes Foto.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar, aber nicht sicher. Auch solche Bilder können gespeichert oder weitergeleitet werden.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Sie sagt Nein und beendet den Chat bei Druck.",
            type: "correct",
            evaluation: "Sehr sicher. Lara setzt eine klare Grenze und schützt ihre Privatsphäre. Sie entscheidet selbst, welche Bilder von ihr andere sehen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        }
    ],
    helpSources: [
        {
            name: "klicksafe – Cybergrooming",
            url: "https://www.klicksafe.de/cybergrooming"
        },
        {
            name: "SCHAU HIN! – Cybergrooming erkennen und Kinder schützen",
            url: "https://www.schau-hin.info/cybergrooming"
        },
        {
            name: "Nummer gegen Kummer – Beratung für Kinder und Jugendliche",
            url: "https://www.nummergegenkummer.de/kinder-und-jugendberatung/"
        }
    ]
};

cards["schlechtes-bauchgefuehl"] = {
    district: "Chat-Café",
    title: "Das schlechte Bauchgefühl",
    situation: "Ben chattet im Spiel. Die Person stellt viele persönliche Fragen und Ben fühlt sich unwohl. Was sollte er tun?",
    checklist: [
        "Bauchgefühl ernst nehmen",
        "nicht aus Höflichkeit weiterschreiben",
        "Chat beenden",
        "Hilfe holen"
    ],
    answers: [
        {
            text: "A) Er antwortet nur noch kurz.",
            type: "partial",
            evaluation: "Teilweise vorsichtig. Wenn sich der Chat unangenehm anfühlt, sollte Ben seine Grenze klarer setzen.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Er beendet den Chat und erzählt es einem Erwachsenen.",
            type: "correct",
            evaluation: "Sehr sicher. Wenn sich ein Chat komisch oder unangenehm anfühlt, sollte Ben das ernst nehmen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Er löscht sofort die App.",
            type: "partial",
            evaluation: "Teilweise sicher, aber sehr streng. Wichtiger ist, den Chat zu beenden und Hilfe zu holen.",
            consequence: "Nichts."
        },
        {
            text: "D) Er beantwortet nur harmlose Fragen.",
            type: "wrong",
            evaluation: "Riskant. Wenn der Chat unangenehm wird, sollte Ben den Kontakt nicht weiter vertiefen.",
            consequence: "Risiko +2."
        }
    ],
    helpSources: [
        {
            name: "klicksafe – Tipps für Jugendliche bei Cybergrooming",
            url: "https://www.klicksafe.de/fileadmin/cms/download/Material/KL_Broschuere_Cybergrooming.pdf"
        },
        {
            name: "Nummer gegen Kummer – Kinder- und Jugendberatung",
            url: "https://www.nummergegenkummer.de/kinder-und-jugendberatung/"
        }
    ]
};

cards["geheimer-chat"] = {
    district: "Chat-Café",
    title: "Der geheime Chat",
    situation: "Eine Online-Bekanntschaft schreibt Mia: „Unser Chat bleibt geheim.“ Was sollte sie tun?",
    checklist: [
        "merken, wenn jemand will, dass man etwas geheim hält",
        "mit einer erwachsenen Vertrauensperson sprechen",
        "keine privaten Daten schicken",
        "blockieren oder melden, wenn nötig"
    ],
    answers: [
        {
            text: "A) Sie zeigt die Nachricht einem Erwachsenen.",
            type: "correct",
            evaluation: "Sehr sicher. Geheimhaltungsdruck ist ein Warnsignal. Hilfe holen ist kein Petzen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "B) Sie erzählt es nur ihrer besten Freundin.",
            type: "partial",
            evaluation: "Teilweise hilfreich. Bei Geheimhaltungsdruck sollte aber auch eine erwachsene Person einbezogen werden.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Sie löscht den Chat sofort und blockiert die Person.",
            type: "partial",
            evaluation: "Teilweise sicher. Blockieren kann helfen. Aber Mia sollte die Nachricht vorher einer erwachsenen Vertrauensperson zeigen, weil durch Löschen wichtige Hinweise verloren gehen können.",
            consequence: "Nichts."
        },
        {
            text: "D) Sie behält den Chat geheim.",
            type: "wrong",
            evaluation: "Riskant. Der Geheimhaltungsdruck ist ein Warnsignal.",
            consequence: "Risiko +2."
        }
    ],
    helpSources: [
        {
            name: "klicksafe – Cybergrooming",
            url: "https://www.klicksafe.de/cybergrooming"
        },
        {
            name: "klicksafe – Warnsignale im Chat",
            url: "https://www.klicksafe.de/fileadmin/cms/download/Material/Poster/Wehr_dich_gegen_sexualisierte_Gewalt_im_Netz_Plakat_klicksafe.pdf"
        },
        {
            name: "Nummer gegen Kummer – Kinder- und Jugendberatung",
            url: "https://www.nummergegenkummer.de/kinder-und-jugendberatung/"
        }
    ]
};

cards["altersluege"] = {
    district: "Chat-Café",
    title: "Die Alterslüge",
    situation: "Eine Person sagt im Chat zu Lina zuerst, sie sei 12. Später sagt sie, sie sei 16 und schreibt: „War doch nur Spaß.“ Was sollte Lina tun?",
    checklist: [
        "Alterslüge ernst nehmen",
        "nicht einfach weiter vertrauen",
        "keine privaten Infos teilen",
        "bei Unsicherheit Hilfe holen"
    ],
    answers: [
        {
            text: "A) Sie chattet normal weiter.",
            type: "wrong",
            evaluation: "Riskant. Nett sein reicht nicht aus, wenn jemand bei wichtigen Dingen lügt.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Sie teilt nichts Privates mehr und holt Hilfe wenn es sich unangenehm anfühlt.",
            type: "correct",
            evaluation: "Sehr sicher. Widersprüchliche Angaben beim Alter sind ein Warnzeichen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Sie blockiert sofort alle neuen Kontakte.",
            type: "partial",
            evaluation: "Teilweise sicher, aber sehr streng. Wichtig ist, Warnzeichen zu erkennen und Grenzen zu setzen.",
            consequence: "Nichts."
        },
        {
            text: "D) Sie fragt nach einem Foto oder einer Sprachnachricht.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar, aber nicht sicher. Fotos und Stimmen können täuschen.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "klicksafe – Cybergrooming",
            url: "https://www.klicksafe.de/cybergrooming"
        },
        {
            name: "SCHAU HIN! – Cybergrooming erkennen und Kinder schützen",
            url: "https://www.schau-hin.info/cybergrooming"
        }
    ]
};

cards["telefonnummer"] = {
    district: "Chat-Café",
    title: "Die Telefonnummer",
    situation: "Eine Online-Bekanntschaft fragt Tim nach seiner Telefonnummer. Was sollte er tun?",
    checklist: [
        "Telefonnummer nicht weitergeben",
        "nicht einfach zu WhatsApp oder Snapchat wechseln",
        "keine Daten anderer Personen teilen",
        "bei Druck Hilfe holen"
    ],
    answers: [
        {
            text: "A) Er bleibt im Spielchat und gibt keine Nummer weiter.",
            type: "correct",
            evaluation: "Sehr sicher. Die Telefonnummer ist eine private Information. Tim schützt damit seinen Alltag und verhindert, dass der Kontakt zu privat wird.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "B) TEr wechselt zu WhatsApp und nennt nur seinen Vornamen.",
            type: "partial",
            evaluation: "Teilweise vorsichtig. Der Kontakt wird trotzdem privater und kann mehr Daten sichtbar machen.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Er gibt die Nummer eines Elternteils weiter.",
            type: "wrong",
            evaluation: "Riskant. Private Daten anderer Personen darf man nicht weitergeben.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Er gibt seine Nummer nicht, fragt aber nach der anderen.",
            type: "partial",
            evaluation: "Teilweise sicher. Trotzdem wird der Kontakt dadurch privater.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "SCHAU HIN! – Messenger-Apps für Kinder",
            url: "https://www.schau-hin.info/sicherheit-risiken/messenger-apps-fuer-kinder"
        },
        {
            name: "klicksafe – Datenschutz und Privatsphäre",
            url: "https://www.klicksafe.de/privatsphaere-und-big-data"
        }
    ]
};

cards["geschenk-im-spiel"] = {
    district: "Chat-Café",
    title: "Das Geschenk im Spiel",
    situation: "Jemand schenkt Amir im Spiel seltene Gegenstände und fragt nach privaten Daten. Was sollte er tun?",
    checklist: [
        "Geschenke nicht als Verpflichtung sehen",
        "keine privaten Daten als Gegenleistung geben",
        "Druck erkennen",
        "mit einer erwachsenen Vertrauensperson sprechen"
    ],
    answers: [
        {
            text: "A) Er fragt, welche Infos die Person genau möchte.",
            type: "wrong",
            evaluation: "Riskant. Dadurch kann die Person weiter Druck aufbauen.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Er nennt nur seinen Vornamen und die Stadt.",
            type: "partial",
            evaluation: "Teilweise vorsichtig. Auch einzelne Angaben können zusammen viel verraten.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Er gibt das Geschenk zurück und löscht das Spiel.",
            type: "partial",
            evaluation: "Teilweise sicher, aber sehr streng. Wichtiger ist, keine privaten Daten zu teilen und Hilfe zu holen.",
            consequence: "Nichts."
        },
        {
            text: "D) Er bedankt sich, gibt aber keine privaten Daten weiter.",
            type: "correct",
            evaluation: "Sehr sicher. Ein Geschenk verpflichtet nicht dazu, private Daten zu teilen. Amir schützt damit seinen Account, seine Spielzeit und seine Privatsphäre.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        }
    ],
    helpSources: [
        {
            name: "klicksafe – Tipps für Jugendliche bei Cybergrooming",
            url: "https://www.klicksafe.de/fileadmin/cms/download/Material/KL_Broschuere_Cybergrooming.pdf"
        },
        {
            name: "SCHAU HIN! – In-Game-Chats: Chatten im Spiel birgt Risiken",
            url: "https://www.schau-hin.info/grundlagen/in-game-chats-chatten-im-spiel-birgt-risiken-fuer-kinder"
        }
    ]
};

cards["treffen-online-bekanntschaft"] = {
    district: "Chat-Café",
    title: "Das Treffen mit der Online-Bekanntschaft",
    situation: "Eine Online-Bekanntschaft möchte sich mit David treffen. Was sollte er tun?",
    checklist: [
        "Treffen nicht allein planen",
        "zuerst Erwachsene informieren",
        "nicht heimlich verabreden",
        "öffentliche Orte allein machen ein Treffen nicht sicher",
        "wenn überhaupt, nur mit klarer Begleitung und Absprache"
    ],
    answers: [
        {
            text: "A) Er wählt einen belebten Ort und sagt einem Freund Bescheid.",
            type: "partial",
            evaluation: "Teilweise sicher. Ein öffentlicher Ort hilft, aber David sollte das Treffen nicht ohne Erwachsene planen.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Er macht vorher einen Videoanruf.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar. Ein Videoanruf beweist aber nicht sicher, dass ein Treffen ungefährlich ist.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Er spricht zuerst mit seinen Eltern.",
            type: "correct",
            evaluation: "Sehr sicher. David plant das Treffen nicht allein und holt sich Unterstützung.",
            consequence: "+1 Sicherheits-Chip, +1 Zeit-Chip und Risiko -1."
        },
        {
            text: "D) Er trifft sich im Kino oder beim Bowling, weil dort viele Menschen sind.",
            type: "wrong",
            evaluation: "Riskant. Ein öffentlicher Ort macht ein Treffen mit einer Online-Bekanntschaft nicht automatisch sicher.",
            consequence: "Risiko +2."
        }
    ],
    helpSources: [
        {
            name: "SCHAU HIN! – Cybergrooming erkennen und Kinder schützen",
            url: "https://www.schau-hin.info/cybergrooming"
        },
        {
            name: "klicksafe – Cybergrooming",
            url: "https://www.klicksafe.de/cybergrooming"
        },
        {
            name: "klicksafe – Tipps für Jugendliche bei Cybergrooming",
            url: "https://www.klicksafe.de/fileadmin/cms/download/Material/KL_Broschuere_Cybergrooming.pdf"
        }
    ]
};

cards["unbekannte-freundschaftsanfrage"] = {
    district: "Chat-Café",
    title: "Die unbekannte Freundschaftsanfrage",
    situation: "Tom bekommt eine Freundschaftsanfrage. Das Profilfoto sieht aus wie ein Mädchen aus seiner Schule. Es gibt einige gemeinsame Kontakte. Was sollte Tom tun?",
    checklist: [
        "Anfrage nicht sofort annehmen",
        "Identität anders prüfen",
        "gemeinsame Kontakte nicht als Beweis sehen",
        "keine privaten Daten schicken"
    ],
    answers: [
        {
            text: "A) Er nimmt an, schreibt aber nichts Privates.",
            type: "partial",
            evaluation: "Teilweise vorsichtig. Durch das Annehmen bekommt die Person vielleicht mehr Einblick in sein Profil.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Er nimmt an, weil es gemeinsame Kontakte gibt.",
            type: "wrong",
            evaluation: "Riskant. Gemeinsame Kontakte beweisen nicht, dass das Profil echt ist. Auch Fake-Profile können gemeinsame Kontakte haben.",
            consequence: "Risiko +2."
        },
        {
            text: "C) Er fragt die Person persönlich oder über einen anderen Weg.",
            type: "correct",
            evaluation: "Sehr sicher. Tom prüft die Identität nicht nur über Profilfoto und gemeinsame Kontakte.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Er stellt im Chat eine Frage zur Schule.",
            type: "partial",
            evaluation: "Teilweise sinnvoll. Eine Antwort kann aber geraten oder von anderen übernommen sein.",
            consequence: "VOID bewegt 5 Felder vor."
        }
    ],
    helpSources: [
        {
            name: "klicksafe – Fake-Profile auf Instagram",
            url: "https://www.klicksafe.de/instagram/risiken-und-tipps-fuer-eltern"
        },
        {
            name: "SCHAU HIN! – Cybergrooming erkennen und Kinder schützen",
            url: "https://www.schau-hin.info/cybergrooming"
        }
    ]
};