cards["frage-nach-schule"] = {
    district: "Chat-Café",
    title: "Die Frage nach der Schule",
    situation: "Jemand fragt im Chat: „Auf welche Schule gehst du? Dann können wir uns mal sehen.“ Du kennst die Person nur aus dem Internet.",
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
            text: "A) Wir sagen nur den Stadtteil und nicht den Namen der Schule.",
            type: "partial",
            evaluation: "Teilweise vorsichtig, aber nicht sicher genug. Auch ein Stadtteil kann zusammen mit anderen Informationen verraten, wo du regelmäßig bist.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Wir fragen zurück, auf welche Schule die andere Person geht, bevor wir etwas über uns sagen.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar, aber riskant. Zurückzufragen schützt deine eigenen Informationen nicht automatisch und kann den Kontakt weiter vertiefen.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Wir nennen die Schule nicht und sagen klar, dass wir solche private Daten im Chat nicht teilen.",
            type: "correct",
            evaluation: "Sehr sicher. Die Schule ist ein privater Ort, an dem du regelmäßig bist. Es ist gut, freundlich aber klar eine Grenze zu setzen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Wir nennen nicht die Schule, aber einen Ort in der Nähe, falls die Person uns wirklich treffen möchte.",
            type: "wrong",
            evaluation: "Riskant. Auch Orte in der Nähe können Hinweise auf deinen Alltag geben. Wenn jemand aus dem Internet ein Treffen vorschlägt oder nach privaten Orten fragt, solltest du Hilfe holen.",
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
    situation: "Eine fremde Person möchte ein aktuelles Foto von dir sehen. Sie schreibt:\n" +
        "„Schick doch mal ein Bild, ich will wissen, wie du aussiehst.“",
    checklist: [
        "kein Foto an fremde Personen schicken",
        "Druck erkennen",
        "keine Bilder als Vertrauensbeweis nutzen",
        "bei unangenehmem Gefühl Chat beenden",
        "Erwachsene fragen, wenn die Person weiter drängt",
        "verstehen, dass Bilder gespeichert und weitergeleitet werden können"
    ],
    answers: [
        {
            text: "A) Wir schicken ein Foto, auf dem das Gesicht nicht zu sehen ist.",
            type: "partial",
            evaluation: "Teilweise vorsichtig, aber riskant. Auch Bilder ohne Gesicht können Hinweise enthalten, zum Beispiel Kleidung, Zimmer, Schule oder Standort. Außerdem können Bilder gespeichert und weitergeleitet werden.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Wir bitten die andere Person zuerst um ein Foto, damit es fair ist.",
            type: "wrong",
            evaluation: "Riskant. Ein Foto beweist nicht sicher, wer die Person wirklich ist. Außerdem entsteht dadurch Druck, selbst ein Bild zu schicken.",
            consequence: "Risiko +2."
        },
        {
            text: "C) Wir schicken ein altes oder bearbeitetes Foto, damit die Person nicht genau weiß, wie wir heute aussehen.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar, aber nicht sicher genug. Auch alte oder bearbeitete Bilder können gespeichert, weitergeleitet oder mit anderen Informationen kombiniert werden.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Wir sagen, dass wir keine Fotos an fremde Personen schicken, und beenden den Chat, wenn die Person weiter drängt.",
            type: "correct",
            evaluation: "Sehr sicher. Ihr setzt eine klare Grenze und schützt eure Privatsphäre. Wenn jemand weiter Druck macht, ist es richtig, den Kontakt zu stoppen und Hilfe zu holen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
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
    situation: "Ein Chat fühlt sich plötzlich unangenehm an. Die Person stellt persönliche Fragen und du merkst, dass du dich unwohl fühlst.",
    checklist: [
        "unangenehmes Gefühl ernst nehmen",
        "nicht aus Höflichkeit weiterchatten",
        "Chat beenden oder blockieren",
        "Hilfe holen, wenn die Person drängt oder man sich unsicher fühlt",
        "keine privaten Daten teilen",
        "sich nicht schuldig fühlen, wenn man Grenzen setzt"
    ],
    answers: [
        {
            text: "A) Wir antworten nur noch kurz und geben keine genauen Informationen mehr.",
            type: "partial",
            evaluation: "Teilweise vorsichtig. Weniger zu erzählen ist besser als private Daten zu teilen. Wenn sich der Chat aber unangenehm anfühlt, sollte man nicht nur kürzer antworten, sondern die eigene Grenze ernst nehmen.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Wir beenden den Chat erstmal und erzählen einer vertrauten Person davon, wenn das Gefühl bleibt oder die Person weiter drängt.",
            type: "correct",
            evaluation: "Sehr sicher. Ein schlechtes Bauchgefühl ist ein wichtiges Warnzeichen. Man muss nicht aus Höflichkeit weiterschreiben und darf sich Hilfe holen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir löschen sofort die ganze App, damit so etwas nie wieder passiert.",
            type: "partial",
            evaluation: "Teilweise sicher, aber sehr streng. Abstand kann helfen, wenn man sich unwohl fühlt. Die App sofort zu löschen löst aber nicht immer das eigentliche Problem. Wichtiger ist, den Chat zu beenden, Hilfe zu holen und die Person bei Bedarf zu blockieren oder zu melden.",
            consequence: "Nichts."
        },
        {
            text: "D) Wir erklären der Person, dass wir uns unwohl fühlen, und beantworten danach nur noch harmlose Fragen.",
            type: "wrong",
            evaluation: "Riskant. Es ist gut, das eigene Gefühl zu bemerken. Aber wenn die Person persönliche Fragen stellt und der Chat unangenehm wird, sollte man den Kontakt nicht weiter vertiefen.",
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
    situation: "Jemand sagt: „Unser Chat ist unser Geheimnis. Erzähl niemandem davon.“\n" +
        "Die Person sagt, dass du ihr vertrauen kannst.",
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
            text: "A) Wir machen den Chat nicht zum Geheimnis und zeigen die Nachricht einer erwachsenen Vertrauensperson wenn es unangenehm wird.",
            type: "correct",
            evaluation: "Sehr sicher. Geheimhaltungsdruck ist ein wichtiges Warnsignal. Hilfe zu holen ist kein Petzen, sondern schützt dich und kann verhindern, dass die Person weiter Druck macht.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "B) Wir erzählen es nur der besten Freundin oder dem besten Freund, weil das nicht direkt Erwachsene einbezieht.",
            type: "partial",
            evaluation: "Teilweise hilfreich. Eine Freundin oder ein Freund kann unterstützen. Bei Geheimhaltungsdruck durch eine fremde oder unangenehme Person sollte aber zusätzlich eine erwachsene Vertrauensperson einbezogen werden.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Wir löschen den Chat sofort und blockieren die Person, damit die Sache vorbei ist.",
            type: "partial",
            evaluation: "Teilweise sicher. Blockieren kann richtig sein, wenn Druck entsteht. Den Chat sofort zu löschen ist aber nicht immer ideal, weil Hinweise verloren gehen können. Besser ist es, sich Unterstützung zu holen.",
            consequence: "Nichts."
        },
        {
            text: "D) Wir behalten den Chat geheim, schicken aber keine privaten Bilder oder Daten.",
            type: "wrong",
            evaluation: "Riskant. Keine privaten Bilder oder Daten zu schicken ist zwar wichtig, aber der Geheimhaltungsdruck bleibt ein Warnsignal. Wenn jemand verlangt, dass ein Chat geheim bleibt, sollte man sich Hilfe holen.",
            consequence: "Risiko +2."
        },
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
    situation: "Eine Person im Chat sagt zuerst, sie sei 12 Jahre alt. Später sagt sie, sie sei 16. Dann lacht sie und meint:\n" +
        "„War doch nur Spaß.“",
    checklist: [
        "Alterslüge ernst nehmen",
        "nicht einfach weiter vertrauen",
        "keine privaten Infos teilen",
        "Erwachsene fragen, wenn man unsicher ist",
        "Kontakt begrenzen, blockieren oder melden, wenn nötig",
        "verstehen, dass online Identitäten gefälscht sein können"
    ],
    answers: [
        {
            text: "A) Wir tun so, als wäre nichts passiert, wenn die Person sonst nett ist.",
            type: "wrong",
            evaluation: "Riskant. Nett sein reicht nicht aus, wenn jemand bei wichtigen Dingen lügt. Das Alter ist im Chat eine wichtige Information, besonders wenn Vertrauen aufgebaut wird.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir teilen ab jetzt keine privaten Informationen mehr und halten Abstand, weil wir nicht sicher wissen, wer die Person wirklich ist.",
            type: "correct",
            evaluation: "Sehr sicher. Die Alterslüge wird ernst genommen. Wenn jemand online widersprüchliche Angaben macht, sollte man vorsichtiger werden und die eigene Privatsphäre schützen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir blockieren sofort alle neuen Kontakte, weil man online niemandem vertrauen kann.",
            type: "partial",
            evaluation: "Teilweise sicher, aber sehr streng. Abstand oder Blockieren kann richtig sein, wenn man sich unwohl fühlt. Trotzdem ist nicht jeder neue Kontakt automatisch gefährlich. Wichtig ist, Warnzeichen zu erkennen und Grenzen zu setzen.",
            consequence: "Nichts."
        },
        {
            text: "D) Wir fragen nach einem Foto oder einer Sprachnachricht, um zu prüfen, wie alt die Person wirklich ist.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar, aber nicht sicher. Fotos oder Sprachnachrichten können täuschen oder von anderen Personen stammen. Besser ist es, keine privaten Informationen zu teilen und bei Unsicherheit Hilfe zu holen.",
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
    situation: "Eine Online-Bekanntschaft fragt nach deiner Telefonnummer, damit ihr „besser schreiben“ könnt.\n" +
        "Die Person sagt:\n" +
        "„Im Spiel ist das doch viel zu umständlich.“",
    checklist: [
        "Telefonnummer nicht an Online-Bekanntschaften geben",
        "Kontakt nicht auf privatere Kanäle verschieben",
        "keine Daten anderer Personen teilen",
        "Erwachsene fragen, wenn Druck entsteht",
        "bei Druck Kontakt beenden oder blockieren",
        "persönliche Daten als schützenswert erkennen"
    ],
    answers: [
        {
            text: "A) Wir bleiben im Chat der Plattform und geben keine Telefonnummer weiter.",
            type: "correct",
            evaluation: "Sehr sicher. Die Telefonnummer ist eine private Information. Wenn jemand den Kontakt auf einen privateren Kanal verschieben möchte, sollte man besonders vorsichtig sein.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "B) Wir wechseln zu einem Messenger, aber geben dort nur unseren Vornamen an.",
            type: "partial",
            evaluation: "Teilweise vorsichtig, aber riskant. Weniger Informationen zu teilen ist gut, aber der Kontakt wird trotzdem privater. Außerdem kann ein Messenger weitere Daten sichtbar machen, zum Beispiel Profilbild, Status oder Telefonnummer.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Wir geben die Nummer eines Elternteils oder Geschwisters, damit unsere eigene Nummer geschützt bleibt.",
            type: "wrong",
            evaluation: "Riskant. Man darf private Daten anderer Personen nicht weitergeben. Außerdem bleibt die Frage, warum die Online-Bekanntschaft überhaupt auf einen privateren Kanal wechseln möchte.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Wir sagen, dass wir keine Nummer teilen möchten, fragen aber nach der Nummer der anderen Person.",
            type: "partial",
            evaluation: "Teilweise sicher. Die eigene Nummer nicht zu teilen ist gut. Aber nach der Nummer der anderen Person zu fragen kann den Kontakt trotzdem privater machen und das Problem verschieben.",
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
    situation: "Jemand schenkt dir im Spiel seltene Gegenstände. Danach fragt die Person nach privaten Informationen, zum Beispiel deinem echten Namen, deiner Schule oder deiner Telefonnummer.",
    checklist: [
        "Geschenke nicht als Verpflichtung sehen",
        "keine privaten Informationen als Gegenleistung geben",
        "Druck erkennen",
        "Erwachsene fragen, wenn die Person weiter drängt",
        "Kontakt beenden oder blockieren, wenn nötig",
        "verstehen, dass Geschenke manipulativ eingesetzt werden können"
    ],
    answers: [
       {
            text: "A) Wir fragen, welche Informationen die Person genau möchte, bevor wir entscheiden.",
            type: "wrong",
            evaluation: "Riskant. Dadurch wird der Kontakt weitergeführt und die Person kann neuen Druck aufbauen. Wenn jemand nach einem Geschenk private Informationen möchte, ist das ein Warnzeichen.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir geben nur ungefähr Auskunft, zum Beispiel den Vornamen oder die Stadt, aber nicht die Schule oder Telefonnummer.",
            type: "partial",
            evaluation: "Teilweise vorsichtig, aber nicht sicher genug. Weniger Informationen zu teilen ist besser als viele Details zu geben. Trotzdem können auch einzelne Angaben zusammen mit anderen Infos viel über dich verraten.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Wir geben den Gegenstand zurück und löschen das Spiel sofort, damit nichts mehr passieren kann.",
            type: "partial",
            evaluation: "Teilweise sicher, aber sehr streng. Abstand kann helfen, wenn die Situation unangenehm wird. Das Spiel sofort zu löschen ist aber nicht immer nötig. Wichtig ist, keine privaten Daten zu teilen und bei Druck Hilfe zu holen.",
            consequence: "Nichts."
        },
         {
            text: "D) Wir bedanken uns, geben aber keine privaten Informationen weiter.",
            type: "correct",
            evaluation: "Sehr sicher. Ein Geschenk verpflichtet nicht dazu, echte Namen, Schule, Telefonnummer oder andere private Daten zu teilen. Wenn die Person danach Druck macht, sollte man Hilfe holen oder den Kontakt beenden.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
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
    situation: "David chattet seit zwei Wochen mit jemandem, mit dem er ein gemeinsames Hobby teilt. Die beiden überlegen, sich am Samstag persönlich zu treffen, und suchen gerade nach einem Treffpunkt.",
    checklist: [
        "zuerst Eltern oder eine erwachsene Vertrauensperson informieren",
        "Treffen nicht allein planen",
        "keine privaten Daten teilen",
        "sich nicht heimlich verabreden",
        "gemeinsam entscheiden, ob ein Treffen überhaupt sinnvoll ist",
        "Sicherheit wichtiger nehmen als Höflichkeit oder Neugier",
        "öffentliche Orte allein reichen nicht aus"
    ],
    answers: [
        {
            text: "A) David schlägt einen belebten öffentlichen Ort vor und sagt einem Freund Bescheid, wohin er geht.",
            type: "partial",
            evaluation: "Teilweise sicher. Ein öffentlicher Ort und Bescheid sagen sind besser als ein heimliches Treffen. Trotzdem sollte David ein Treffen mit einer Online-Bekanntschaft nicht allein planen, sondern vorher mit einer erwachsenen Vertrauensperson sprechen.",
            consequence: "Risiko +1."
        },
        {
            text: "B) David macht vor dem Treffen erst einen Videoanruf, um zu prüfen, ob die Person wirklich so alt ist wie sie sagt.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar. Ein Videoanruf kann Hinweise geben, beweist aber nicht sicher, wer die Person wirklich ist oder ob ein Treffen ungefährlich ist. Auch danach sollte David keine Verabredung allein planen.",
            consequence: "Risiko +1."
        },
        {
            text: "C) David spricht zuerst mit seinen Eltern und entscheidet, ob ein Treffen überhaupt sicher und sinnvoll ist.",
            type: "correct",
            evaluation: "Sehr sicher. David plant das Treffen nicht allein und lässt sich nicht von Neugier oder Höflichkeit leiten. Eine erwachsene Vertrauensperson kann helfen einzuschätzen, ob und wie ein Treffen überhaupt infrage kommt.",
            consequence: "+1 Sicherheits-Chip, +1 Zeit-Chip und Risiko -1."
        },
        {
            text: "D) David wählt einen Treffpunkt mit vielen Menschen, zum Beispiel Kino oder Bowling.",
            type: "wrong",
            evaluation: "Riskant. Ein öffentlicher Freizeitort macht ein Treffen nicht automatisch sicher. Besonders problematisch ist, dass David das Treffen vorher nicht mit einer erwachsenen Vertrauensperson bespricht.",
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
    situation: "Tom bekommt eine Freundschaftsanfrage. Das Profilfoto sieht aus wie ein Mädchen aus seiner Schule, aber er ist sich nicht sicher. Das Profil hat einige gemeinsame Kontakte.",
    checklist: [
        "Anfrage nicht vorschnell annehmen",
        "außerhalb der Plattform prüfen",
        "gemeinsame Kontakte nicht als sicheren Beweis ansehen",
        "keine privaten Nachrichten oder Daten schicken",
        "bei Unsicherheit Erwachsene fragen",
        "Fake-Profile melden, wenn nötig"
    ],
    answers: [
        {
            text: "A) Tom nimmt die Anfrage an, schreibt aber erstmal nichts Privates.",
            type: "partial",
            evaluation: "Teilweise vorsichtig, aber riskant. Nichts Privates zu schreiben ist gut. Trotzdem öffnet Tom durch das Annehmen schon einen Kontaktweg und gibt der Person möglicherweise mehr Einblick in sein Profil.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Tom nimmt die Anfrage an, weil mehrere gemeinsame Kontakte ein gutes Zeichen sind.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar, aber nicht sicher. Gemeinsame Kontakte können echt wirken, beweisen aber nicht, dass das Profil wirklich zur richtigen Person gehört. Auch andere können ein Fake-Profil angenommen haben.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Tom fragt die Person in der Schule oder über einen anderen bekannten Weg, ob das Profil wirklich ihr gehört.",
            type: "correct",
            evaluation: "Sehr sicher. Tom verlässt sich nicht nur auf Profilfoto und gemeinsame Kontakte, sondern prüft die Identität über einen anderen Weg.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Tom stellt der Person im Chat eine Frage über die Schule, die nicht jeder sofort wissen kann.",
            type: "partial",
            evaluation: "Teilweise sinnvoll. Eine Kontrollfrage kann helfen, ist aber kein sicherer Beweis. Manche Antworten können geraten, recherchiert oder von anderen übernommen sein.",
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
