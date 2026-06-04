cards["frage-nach-schule"] = {
    district: "Chat-Café",
    title: "Die Frage nach der Schule",
    checklist: [
        "Schule nicht nennen",
        "Wohnort und Adresse nicht teilen",
        "keine Hinweise auf tägliche Wege geben",
        "bei unangenehmem Gefühl Hilfe holen",
        "private Informationen nur sehr bewusst teilen",
        "Erwachsene fragen, wenn jemand nach Treffpunkten fragt"
    ],
    answers: [
        {
            text: "A) Wir nennen die Schule, aber nicht die Adresse.",
            evaluation: "Teilweise riskant. Auch die Schule kann zeigen, wo man regelmäßig ist.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Wir sagen es nicht und sprechen mit Erwachsenen, wenn es komisch wird.",
            evaluation: "Sehr sicher. Private Orte werden geschützt und Hilfe wird einbezogen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir nennen nur den Stadtteil.",
            evaluation: "Teilweise riskant. Auch ein Stadtteil kann zusammen mit anderen Informationen viel verraten.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Wir fragen zurück, wo die andere Person wohnt.",
            evaluation: "Teilweise riskant. Das löst das Problem nicht und kann den Kontakt weiter vertiefen.",
            consequence: "Risiko +1."
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
    checklist: [
        "kein Foto an fremde Personen schicken",
        "Druck erkennen",
        "keine Bilder als Vertrauensbeweis nutzen",
        "bei unangenehmem Gefühl Chat beenden",
        "Erwachsene fragen",
        "verstehen, dass Bilder gespeichert und weitergeleitet werden können"
    ],
    answers: [
        {
            text: "A) Wir schicken ein Foto, aber ohne Gesicht.",
            evaluation: "Teilweise riskant. Auch Bilder ohne Gesicht können Hinweise enthalten oder später weiterverwendet werden.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Wir schicken kein Foto und holen Hilfe, wenn Druck entsteht.",
            evaluation: "Sehr sicher. Die eigene Privatsphäre wird geschützt.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir schicken ein altes Foto.",
            evaluation: "Riskant. Auch alte Fotos können gespeichert, weitergeleitet oder missbraucht werden.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Wir verlangen zuerst ein Foto von der anderen Person.",
            evaluation: "Teilweise riskant. Ein Foto beweist nicht sicher, wer die Person wirklich ist.",
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
    checklist: [
        "unangenehmes Gefühl ernst nehmen",
        "nicht aus Höflichkeit weiterchatten",
        "Chat beenden oder blockieren",
        "Hilfe holen",
        "keine privaten Daten teilen",
        "sich nicht schuldig fühlen, wenn man Grenzen setzt"
    ],
    answers: [
        {
            text: "A) Wir chatten weiter, um nicht unhöflich zu sein.",
            evaluation: "Riskant. Höflichkeit ist nicht wichtiger als Sicherheit und Wohlbefinden.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir beenden den Chat, blockieren bei Bedarf und holen Hilfe.",
            evaluation: "Sehr sicher. Eigene Grenzen werden ernst genommen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir antworten nur noch kurz.",
            evaluation: "Teilweise riskant. Der Kontakt bleibt bestehen, obwohl sich die Situation unangenehm anfühlt.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Wir warten, ob es wieder besser wird.",
            evaluation: "Teilweise riskant. Wenn sich etwas komisch anfühlt, ist Hilfe holen besser als abwarten.",
            consequence: "Risiko +1."
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
    checklist: [
        "Geheimhaltungsdruck als Warnsignal erkennen",
        "mit einer erwachsenen Vertrauensperson sprechen",
        "keine privaten Daten oder Bilder schicken",
        "Chat beenden, wenn Druck entsteht",
        "blockieren oder melden, wenn nötig",
        "wissen: Hilfe holen gibt keinen Ärger"
    ],
    answers: [
        {
            text: "A) Wir behalten das Geheimnis, weil die Person uns vertraut.",
            evaluation: "Riskant. Geheimhaltungsdruck kann ein Warnsignal sein.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir sprechen mit einer erwachsenen Vertrauensperson.",
            evaluation: "Sehr sicher. Hilfe holen ist hier eine starke Entscheidung.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir erzählen es nur dem besten Freund oder der besten Freundin.",
            evaluation: "Teilweise riskant. Ein Freund kann unterstützen, aber bei solchen Warnsignalen sollte eine erwachsene Person einbezogen werden.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Wir chatten weiter, aber sind vorsichtig.",
            evaluation: "Riskant. Vorsichtig sein reicht nicht, wenn jemand Geheimhaltung verlangt.",
            consequence: "Risiko +1."
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
    checklist: [
        "Alterslüge ernst nehmen",
        "nicht einfach weiter vertrauen",
        "keine privaten Infos teilen",
        "Erwachsene fragen",
        "Kontakt begrenzen, blockieren oder melden, wenn nötig",
        "verstehen, dass online Identitäten gefälscht sein können"
    ],
    answers: [
        {
            text: "A) Wir chatten weiter, wenn die Person nett ist.",
            evaluation: "Teilweise riskant. Nett sein reicht nicht, wenn jemand über wichtige Dinge lügt.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Wir werden vorsichtig, teilen keine privaten Infos und holen Hilfe.",
            evaluation: "Sehr sicher. Die Unsicherheit wird ernst genommen und nicht allein gelöst.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir lügen selbst auch beim Alter.",
            evaluation: "Riskant. Das macht die Situation unsicherer und unfairer.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Wir schlagen ein Treffen vor, um es zu prüfen.",
            evaluation: "Sehr riskant. Ein Treffen ist keine sichere Methode, eine Online-Identität zu prüfen.",
            consequence: "Risiko +2."
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

cards["sprachchat"] = {
    district: "Chat-Café",
    title: "Der Sprachchat",
    checklist: [
        "private Chats nicht vorschnell annehmen",
        "nur mit bekannten Personen und klaren Regeln sprechen",
        "keine privaten Daten nennen",
        "bei Druck ablehnen",
        "Erwachsene fragen, wenn man unsicher ist",
        "blockieren oder melden, wenn es unangenehm wird"
    ],
    answers: [
        {
            text: "A) Wir wechseln in den privaten Sprachchat, weil es einfacher ist.",
            evaluation: "Teilweise riskant. Einfacher bedeutet nicht automatisch sicherer.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Wir sprechen nur mit bekannten Personen und klaren Regeln.",
            evaluation: "Sicher. Klare Regeln und bekannte Kontakte verringern das Risiko.",
            consequence: "+1 Sicherheits-Chip."
        },
        {
            text: "C) Wir lehnen bei Druck ab und holen Hilfe, wenn es unangenehm wird.",
            evaluation: "Sehr sicher. Druck wird als Warnsignal erkannt und Hilfe ist erlaubt.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Wir reden privat, verraten aber nichts.",
            evaluation: "Teilweise riskant. Auch ohne Daten kann ein privater Chat unangenehm oder manipulativ werden.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
      {
        name: "SCHAU HIN! – In-Game-Chats: Chatten im Spiel birgt Risiken",
        url: "https://www.schau-hin.info/grundlagen/in-game-chats-chatten-im-spiel-birgt-risiken-fuer-kinder"
      },
      {
        name: "klicksafe – Digitale Spiele sicher nutzen",
        url: "https://www.klicksafe.de/digitale-spiele"
      }
    ]
};

cards["telefonnummer"] = {
    district: "Chat-Café",
    title: "Die Telefonnummer",
    checklist: [
        "Telefonnummer nicht an Online-Bekanntschaften geben",
        "Kontakt nicht auf privatere Kanäle verschieben",
        "keine Daten anderer Personen teilen",
        "Erwachsene fragen",
        "bei Druck Kontakt beenden oder blockieren",
        "persönliche Daten als schützenswert erkennen"
    ],
    answers: [
        {
            text: "A) Wir schicken die Nummer, wenn die Person nett ist.",
            evaluation: "Riskant. Nett wirken reicht nicht, um private Daten zu teilen.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir geben keine Nummer und besprechen es mit Eltern.",
            evaluation: "Sehr sicher. Die Telefonnummer bleibt geschützt und Hilfe wird geholt.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir schicken die Nummer eines Elternteils.",
            evaluation: "Sehr riskant. Daten anderer Personen dürfen nicht einfach weitergegeben werden.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Wir schreiben nur über Messenger weiter.",
            evaluation: "Teilweise riskant. Der Kontakt wird trotzdem privater und sollte besprochen werden.",
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
    checklist: [
        "Geschenke nicht als Verpflichtung sehen",
        "keine privaten Informationen als Gegenleistung geben",
        "Druck erkennen",
        "Erwachsene fragen",
        "Kontakt beenden oder blockieren, wenn nötig",
        "verstehen, dass Geschenke manipulativ eingesetzt werden können"
    ],
    answers: [
        {
            text: "A) Wir geben Informationen, weil die Person nett war.",
            evaluation: "Riskant. Ein Geschenk verpflichtet nicht dazu, private Daten preiszugeben.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir geben keine Informationen und holen Hilfe, wenn Druck entsteht.",
            evaluation: "Sehr sicher. Private Daten bleiben geschützt und Druck wird ernst genommen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir behalten das Geschenk und ignorieren die Person.",
            evaluation: "Teilweise sicher. Keine Daten zu geben ist gut und bei Druck sollte man Hilfe holen.",
            consequence: "+1 Zeit-Chip."
        },
        {
            text: "D) Wir verlangen noch mehr Geschenke.",
            evaluation: "Riskant. Dadurch wird der Kontakt weitergeführt und die Situation kann unsicherer werden.",
            consequence: "Risiko +1."
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
    checklist: [
        "zuerst Eltern oder eine erwachsene Vertrauensperson informieren",
        "Treffen nicht allein planen",
        "keine privaten Daten teilen",
        "sich nicht heimlich verabreden",
        "gemeinsam entscheiden, ob ein Treffen überhaupt sinnvoll ist",
        "Sicherheit wichtiger nehmen als Höflichkeit oder Neugier"
    ],
    answers: [
        {
            text: "A) Ins Kino gehen, dort läuft eine Filmpremiere.",
            evaluation: "Teilweise riskant. Ein Kino ist zwar öffentlich, aber David sollte das Treffen nicht ohne Erwachsene planen.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Sich an einem belebten öffentlichen Ort treffen.",
            evaluation: "Teilweise sicher, aber nicht ausreichend. Ein öffentlicher Ort ist besser, aber Hilfe holen fehlt.",
            consequence: "+1 Zeit-Chip."
        },
        {
            text: "C) Bowlen gehen.",
            evaluation: "Teilweise riskant. Auch ein Freizeitort macht ein Treffen mit einer Online-Bekanntschaft nicht automatisch sicher.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Zuerst seine Eltern informieren.",
            evaluation: "Sehr sicher. Hilfe holen ist hier die wichtigste Entscheidung.",
            consequence: "+1 Sicherheits-Chip, +1 Zeit-Chip und Risiko -1."
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
    checklist: [
        "Anfrage nicht vorschnell annehmen",
        "außerhalb der Plattform prüfen",
        "gemeinsame Freunde nicht als sicheren Beweis ansehen",
        "keine privaten Nachrichten oder Daten schicken",
        "bei Unsicherheit Erwachsene fragen",
        "Fake-Profile melden, wenn nötig"
    ],
    answers: [
        {
            text: "A) Er kann die Anfrage annehmen, aber zuerst keine privaten Nachrichten schreiben.",
            evaluation: "Teilweise riskant. Annehmen öffnet bereits einen Kontaktweg.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Er sollte erst außerhalb der Plattform prüfen, ob die Person wirklich die ist, für die sie sich ausgibt.",
            evaluation: "Sehr sicher. Tom prüft die Identität über einen anderen Weg.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Er kann die Anfrage annehmen, wenn das Profil viele gemeinsame Freunde hat.",
            evaluation: "Teilweise riskant. Gemeinsame Freunde sind kein sicherer Beweis.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Er sollte der Person eine Frage stellen, die nur jemand aus der Schule beantworten kann.",
            evaluation: "Teilweise sicher, aber nicht genug. Antworten können erraten oder recherchiert werden.",
            consequence: "+1 Zeit-Chip."
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