cards["taschenlampen-app"] = {
    district: "App-Allee",
    title: "Die Taschenlampen-App",
    situation: "Mia will eine Taschenlampen-App installieren. Beim Öffnen fragt die App nach Zugriff auf Mikrofon, Standort, Kontakte und Fotos. Was sollte Mia tun?",
    checklist: [
        "Berechtigungen prüfen",
        "nur nötige Zugriffe erlauben",
        "bei zu vielen Rechten andere App wählen",
        "offizielle App-Stores nutzen",
        "Bewertungen nicht blind vertrauen"
    ],
    answers: [
        {
            text: "A) Mia erlaubt alle Zugriffe, weil die App gute Bewertungen hat.",
            type: "wrong",
            evaluation: "Riskant. Gute Bewertungen bedeuten nicht automatisch, dass eine App wenig Daten sammelt.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Mia erlaubt die Zugriffe nur kurz und schaltet sie später wieder aus.",
            type: "partial",
            evaluation: "Teilweise vorsichtig. Besser ist es, unnötige Zugriffe gar nicht erst zu erlauben.",
            consequence: "VOID bewegt 3 Felder vor."
        },
        {
            text: "C) Mia nutzt die eingebaute Taschenlampe oder sucht eine App mit weniger Zugriffen.",
            type: "correct",
            evaluation: "Sehr sicher. Eine Taschenlampe braucht normalerweise keinen Zugriff auf Kontakte, Standort oder Mikrofon.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Mia installiert die App, erlaubt aber keine Foto-, Kontakt-, Standort- oder Mikrofonzugriffe.",
            type: "partial",
            evaluation: "Teilweise sicher. Zugriffe abzulehnen ist gut. Noch besser ist es, die eingebaute Taschenlampe zu nutzen oder eine App zu wählen, die solche Zugriffe gar nicht verlangt.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "BSI – Sicherer Umgang mit Apps auf mobilen Geräten",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Basisschutz-fuer-Computer-Mobilgeraete/Schutz-fuer-Mobilgeraete/Sicherheit-bei-Apps/sicherheit-bei-apps.html"
        },
        {
            name: "Verbraucherzentrale – Apps und Datenschutz",
            url: "https://www.verbraucherzentrale.de/wissen/digitale-welt/mobilfunk-und-festnetz/apps-und-datenschutz-so-schuetzen-sie-ihre-persoenlichen-daten-6431"
        },
        {
            name: "BSI – Smartphone- und App-Sicherheit für Eltern",
            url: "https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Medienpaket_KuJ/1_Thema_Smartphone-App-Sicherheit_Eltern.pdf?__blob=publicationFile&v=3"
        }
    ]
};


cards["online-quiz"] = {
    district: "App-Allee",
    title: "Das Online-Quiz",
    situation: "Jonny sieht ein Quiz: „Welcher Star bist du?“ Vor dem Start soll er Geburtstag, Schule und Lieblingsort eingeben. \"Außerdem möchte das Quiz Infos aus seinem Profil sehen, zum Beispiel Beiträge, Freundesliste oder andere Kontodaten. Was sollte Jonny tun?",
    checklist: [
        "private Daten nicht eingeben",
        "Profilzugriff kritisch prüfen",
        "keine Kontakte freigeben",
        "bei Unsicherheit Quiz nicht machen",
        "Quizze nicht mit Social-Media-Konto verbinden"
    ],
    answers: [
        {
            text: "A) Jonny macht das Quiz, gibt aber falsche Daten ein.",
            type: "partial",
            evaluation: "Teilweise sicher. Falsche Angaben schützen echte Daten, aber der Profilzugriff bleibt problematisch.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Jonny erlaubt nur den Profilzugriff, aber keine Kontakte.",
            type: "partial",
            evaluation: "Teilweise vorsichtig. Trotzdem kann schon das Profil private Informationen verraten.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Jonny sucht ein Quiz, das keine privaten Daten oder Profilzugriffe verlangt.",
            type: "correct",
            evaluation: "Sehr sicher. Ein Spaß-Quiz sollte keine privaten Daten oder unnötigen Zugriffe brauchen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Jonny macht das Quiz, teilt das Ergebnis aber nicht öffentlich.",
            type: "wrong",
            evaluation: "Riskant. Auch ohne Teilen kann das Quiz Daten sammeln, wenn Jonny Zugriff erlaubt.",
            consequence: "Risiko +2."
        }
    ],
    helpSources: [
        {
            name: "klicksafe – Datenschutz im Internet",
            url: "https://www.klicksafe.de/privatsphaere-und-big-data"
        },
        {
            name: "Verbraucherzentrale – Apps und Datenschutz",
            url: "https://www.verbraucherzentrale.de/wissen/digitale-welt/mobilfunk-und-festnetz/apps-und-datenschutz-so-schuetzen-sie-ihre-persoenlichen-daten-6431"
        }
    ]
};

cards["in-app-kauf"] = {
    district: "App-Allee",
    title: "Der In-App-Kauf",
    situation: "Emma spielt ein Handyspiel. Plötzlich erscheint: „500 Diamanten für 4,99 € – nur heute!“ Was sollte Emma tun?",
    checklist: [
        "nicht heimlich kaufen",
        "Familienregeln beachten",
        "Zeitdruck erkennen",
        "kleine Beträge ernst nehmen",
        "vorher überlegen",
        "Käufe mit Passwort, PIN oder Elternfreigabe schützen"
    ],
    answers: [
        {
            text: "A) Emma wartet kurz, überlegt und fragt nach den Familienregeln.",
            type: "correct",
            evaluation: "Sehr sicher. Emma kauft nicht spontan, lässt sich nicht vom Zeitdruck stressen, beachtet die Familienregeln und entscheidet nicht heimlich.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "B) Emma kauft einmal, weil 4,99 € nicht viel klingt.",
            type: "wrong",
            evaluation: "Riskant. Kleine Beträge können sich schnell summieren.",
            consequence: "Risiko +2."
        },
        {
            text: "C) Emma fragt Freunde, ob sich die Diamanten lohnen.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar. Freunde können Tipps geben, entscheiden aber nicht über Geld oder Familienregeln.",
            consequence: "VOID bewegt 4 Felder vor."
        },
        {
            text: "D) Emma löscht das Spiel sofort, weil Kaufangebote immer gefährlich sind.",
            type: "partial",
            evaluation: "Teilweise sicher, aber sehr streng. Besser ist es, bewusst mit Käufen umzugehen.",
            consequence: "Nichts."
        }
    ],
    helpSources: [
        {
            name: "Verbraucherzentrale – In-Game- und In-App-Käufe",
            url: "https://www.verbraucherzentrale.de/wissen/digitale-welt/apps-und-software/ingame-und-inappkaeufe-wenn-virtueller-spielspass-teuer-wird-12941"
        },
        {
            name: "BSI – Jugendschutzeinstellungen bei Apps, Spielen & Co.",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Kinderschutz-im-Internet/Jugendschutz-Schritt-fuer-Schritt/jugendschutzeinstellungen-schritt-fuer-schritt.html"
        }
    ]
};

cards["standortfreigabe"] = {
    district: "App-Allee",
    title: "Standortfreigabe",
    situation: "Ben lädt eine Sticker-App herunter. Beim Start fragt sie: „Darf ich deinen Standort immer sehen?“ Was sollte Ben tun?",
    checklist: [
        "Standort nur erlauben, wenn nötig",
        "„immer erlauben“ vermeiden",
        "Standortdaten privat halten",
        "Berechtigungen später prüfen"
    ],
    answers: [
        {
            text: "A) Ben erlaubt „immer“, weil die App sonst vielleicht nicht richtig funktioniert.",
            type: "wrong",
            evaluation: "Riskant. Die App könnte dauerhaft Standortdaten sammeln, obwohl sie diese nicht braucht.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Ben lehnt den Standort ab.",
            type: "correct",
            evaluation: "Sehr sicher. Eine Sticker-App braucht normalerweise nicht zu wissen, wo Ben gerade ist.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Ben erlaubt den Standort, weil die App viele gute Bewertungen hat.",
            type: "wrong",
            evaluation: "Teilweise nachvollziehbar. Bewertungen zeigen aber nicht, ob der Standort wirklich nötig ist.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Ben wählt „Beim Verwenden erlauben“.",
            type: "partial",
            evaluation: "Besser als „immer erlauben“, aber Ben sollte zuerst prüfen, ob die App den Standort überhaupt braucht.",
            consequence: "Risiko +1."
        },
    ],
    helpSources: [
        {
            name: "Verbraucherzentrale – Apps und Datenschutz",
            url: "https://www.verbraucherzentrale.de/wissen/digitale-welt/mobilfunk-und-festnetz/apps-und-datenschutz-so-schuetzen-sie-ihre-persoenlichen-daten-6431"
        },
        {
            name: "BSI – Sicherer Umgang mit Apps auf mobilen Geräten",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Basisschutz-fuer-Computer-Mobilgeraete/Schutz-fuer-Mobilgeraete/Sicherheit-bei-Apps/sicherheit-bei-apps_node.html"
        }
    ]
};

cards["mikrofonzugriff"] = {
    district: "App-Allee",
    title: "Mikrofonzugriff",
    situation: "Lina lädt eine Mal-App herunter. Beim Start fragt die App nach Zugriff auf das Mikrofon. Was sollte Lina tun?",
    checklist: [
        "Berechtigung hinterfragen",
        "unnötigen Mikrofonzugriff ablehnen",
        "prüfen, ob die App trotzdem funktioniert",
        "bei Unsicherheit Erwachsene fragen"
    ],
    answers: [
        {
            text: "A) Lina lehnt das Mikrofon ab und prüft, ob die App trotzdem funktioniert.",
            type: "correct",
            evaluation: "Sehr sicher. Eine Mal-App braucht normalerweise kein Mikrofon. Wenn sie ohne Mikrofon nicht funktioniert, sollte Lina lieber eine andere App wählen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "B) Lina erlaubt das Mikrofon kurz und schaltet es später wieder aus.",
            type: "partial",
            evaluation: "Teilweise vorsichtig. Besser ist es, unnötige Zugriffe gar nicht erst zu erlauben.",
            consequence: "VOID bewegt 1 Feld vor."
        },
        {
            text: "C) Lina erlaubt den Zugriff, weil die App sonst vielleicht nicht startet.",
            type: "wrong",
            evaluation: "Riskant. Eine Mal-App sollte nicht ohne guten Grund Zugriff auf Mikrofon oder Gespräche bekommen.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Lina löscht die App sofort, weil jede App mit Mikrofonzugriff gefährlich ist.",
            type: "partial",
            evaluation: "Teilweise sicher, aber zu streng. Nicht jede Mikrofon-App ist gefährlich, aber die Berechtigung muss zur Funktion passen.",
            consequence: "Nichts."
        }
    ],
    helpSources: [
        {
            name: "Elternguide.online – App-Berechtigungen: Kamera, Mikrofon und Co.",
            url: "https://www.elternguide.online/app-berechtigungen-kamera-mikrofon-und-co/"
        }
    ]
};

cards["altersabfrage"] = {
    district: "App-Allee",
    title: "Die Altersabfrage",
    situation: "Sam möchte eine App nutzen, die viele aus seiner Klasse haben. Bei der Anmeldung merkt er: Eigentlich ist er zu jung dafür. Was sollte Sam tun?" ,
    checklist: [
        "Altersgrenzen ernst nehmen",
        "nicht beim Alter lügen",
        "mit Eltern prüfen",
        "sichere App für das eigene Alter suchen",
        "bedenken, dass manche Apps Kontakte oder Inhalte für Ältere haben"
    ],
    answers: [
        {
            text: "A) Sam gibt ein älteres Geburtsjahr ein.",
            type: "wrong",
            evaluation: "Riskant. Dadurch können Inhalte oder Funktionen freigeschaltet werden, die nicht für sein Alter gedacht sind.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Sam prüft mit seinen Eltern, ob es eine App gibt, die besser zu seinem Alter passt.",
            type: "correct",
            evaluation: "Sehr sicher. Altersgrenzen helfen einzuschätzen, ob eine App für Kinder geeignet ist.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Sam nutzt die App nur kurz und postet nichts.",
            type: "partial",
            evaluation: "Teilweise vorsichtig. Auch beim kurzen Nutzen können ungeeignete Inhalte oder Kontakte auftauchen.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Sam fragt Freunde, welche Einstellungen sie benutzen.",
            type: "partial",
            evaluation: "Teilweise sinnvoll. Freunde ersetzen aber keine gemeinsame Prüfung mit Erwachsenen.",
            consequence: "VOID bewegt 6 Felder vor."
        }
    ],
    helpSources: [
        {
            name: "BSI – Jugendschutzeinstellungen bei Apps, Spielen & Co.",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Kinderschutz-im-Internet/Jugendschutz-Schritt-fuer-Schritt/jugendschutzeinstellungen-schritt-fuer-schritt.html"
        },
        {
            name: "SCHAU HIN! – USK: Altersfreigaben für Spiele und Apps",
            url: "https://www.schau-hin.info/grundlagen/usk-die-altersfreigaben-fuer-spiele-und-apps"
        }
    ]
};

cards["peinliche-werbung"] = {
    district: "App-Allee",
    title: "Die peinliche Werbung",
    situation: "Auf dem Familien-PC erscheint plötzlich peinliche Werbung. Daniel merkt, dass Suchverlauf, Cookies oder Werbeeinstellungen damit zu tun haben könnten. Seine Schwester Lea wirkt verlegen. Was sollen die beiden tun?",
    checklist: [
        "Privatsphäre respektieren",
        "nicht bloßstellen",
        "Verlauf und Cookies prüfen",
        "Werbeeinstellungen beachten",
        "bei Bedarf Erwachsene fragen"
    ],
    answers: [
        {
            text: "A) Daniel fragt Lea vor anderen, wonach sie gesucht hat.",
            type: "wrong",
            evaluation: "Riskant. Das kann peinlich und verletzend sein.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Daniel klickt die Werbung weg.",
            type: "partial",
            evaluation: "Teilweise hilfreich. Die Werbung verschwindet kurz, aber die Ursache bleibt vielleicht bestehen.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Daniel spricht Lea nicht vor anderen darauf an. Wenn Lea möchte, prüfen sie zusammen Verlauf, Cookies oder Werbeeinstellungen.",
            type: "correct",
            evaluation: "Sehr sicher. Daniel stellt Lea nicht bloß und beide können die Privatsphäre-Einstellungen verbessern.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Lea soll ab jetzt privat surfen und nichts sagen.",
            type: "partial",
            evaluation: "Teilweise sicher. Privates Surfen kann helfen, macht aber nicht unsichtbar und ersetzt keine gemeinsamen Datenschutz-Regeln.",
            consequence: "VOID bewegt 3 Felder vor."
        }
    ],
    helpSources: [
        {
            name: "Verbraucherzentrale – Cookies kontrollieren und verwalten",
            url: "https://www.verbraucherzentrale.de/wissen/digitale-welt/datenschutz/cookies-kontrollieren-und-verwalten-so-gehts-11996"
        },
        {
            name: "BSI – Cookies und Fingerprints verhindern",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Updates-Browser-Open-Source-Software/Der-Browser/JavaScript-Cookies-Fingerprints/javascript-cookies-fingerprints.html"
        },
        {
            name: "BSI – Ad-Blocker & Tracking",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Updates-Browser-Open-Source-Software/Der-Browser/Adblocker-Tracking/adblocker-tracking_node.html"
        }
    ]
};

cards["altes-kinderkonto"] = {
    district: "App-Allee",
    title: "Das alte Kinderkonto",
    situation: "Louis findet ein altes Konto auf einer Kinder-Webseite. Er nutzt die Seite nicht mehr. Was sollte er tun?",
    checklist: [
        "alte Konten nicht ignorieren",
        "nach Konto löschen suchen",
        "keine Passwörter an Support schicken",
        "Löschbestätigung beachten",
        "mit Erwachsenen vorgehen",
        "Passwort ändern, wenn es auch woanders genutzt wurde"
    ],
    answers: [
        {
            text: "A) Louis löscht nur die App oder das Lesezeichen.",
            type: "partial",
            evaluation: "Teilweise hilfreich. Das Konto und die gespeicherten Daten können trotzdem weiter bestehen.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Louis meldet sich ab und wartet, bis das Konto automatisch verschwindet.",
            type: "wrong",
            evaluation: "Riskant. Abmelden bedeutet nicht, dass ein Konto gelöscht wird.",
            consequence: "Risiko +2."
        },
        {
            text: "C) Louis schreibt dem Support, also der Hilfe der Webseite, und schickt sein Passwort mit.",
            type: "wrong",
            evaluation: "Riskant. Passwörter sollte man niemals per Nachricht verschicken.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Louis sucht in den Einstellungen nach „Konto löschen“ oder „Daten löschen“.",
            type: "correct",
            evaluation: "Sehr sicher. So prüft Louis, ob das Konto wirklich geschlossen wird und alte Fotos, Nachrichten oder persönliche Daten nicht weiter gespeichert bleiben.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        }
    ],
    helpSources: [
        {
            name: "Verbraucherzentrale – Gespeicherte Daten erfragen, korrigieren oder löschen lassen",
            url: "https://www.verbraucherzentrale.de/musterbriefe/digitale-welt/datenschutz-35853"
        },
        {
            name: "Verbraucherzentrale – Datenleaks vorbeugen: Mit Daten geizen, eigene Infos schützen",
            url: "https://www.verbraucherzentrale.de/wissen/digitale-welt/datenschutz/datenleaks-vorbeugen-mit-daten-geizen-eigene-infos-schuetzen-33521"
        }
    ]
};

cards["bildschirmzeit-check"] = {
    district: "App-Allee",
    title: "Der Bildschirmzeit-Check",
    situation: "Noah spielt online mit Freunden. Eigentlich wollte er nach 30 Minuten aufhören. Seine Freunde schreiben: „Nur noch eine Runde!“ Was sollte Noah tun?",
    checklist: [
        "eigene Müdigkeit ernst nehmen",
        "vereinbarte Zeit beachten",
        "Gruppendruck erkennen, also wenn Freunde einen zum Weiterspielen drängen",
        "Pause machen",
        "Freunde freundlich informieren"
    ],
    answers: [
        {
            text: "A) Noah spielt heimlich weiter.",
            type: "wrong",
            evaluation: "Riskant. Heimlich weiterzuspielen schwächt Vertrauen und ignoriert die eigene Grenze.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Noah spielt noch eine Runde, damit die Freunde nicht enttäuscht sind.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar. Gruppendruck kann aber dazu führen, dass man immer länger spielt.",
            consequence: "VOID bewegt 5 Felder vor."
        },
        {
            text: "C) Noah löscht das Spiel sofort.",
            type: "partial",
            evaluation: "Teilweise sicher, aber sehr streng. Oft reichen klare Pausen und Regeln.",
            consequence: "Nichts."
        },
        {
            text: "D) Noah sagt den Freunden, dass er jetzt Pause macht und später weiterspielt.",
            type: "correct",
            evaluation: "Sehr sicher. Noah nimmt seine Müdigkeit ernst und bleibt trotzdem freundlich.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        }
    ],
    helpSources: [
        {
            name: "SCHAU HIN! – Bildschirmzeiten für Kinder vereinbaren",
            url: "https://www.schau-hin.info/bildschirmzeiten"
        },
        {
            name: "klicksafe – Wie lange darf mein Kind an Handy und PC?",
            url: "https://www.klicksafe.de/bildschirm-und-medienzeit-was-ist-fuer-kinder-in-ordnung"
        },
        {
            name: "BSI – Digitaler Schutz für Kinder und Jugendliche",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Kinderschutz-im-Internet/Technischer-Schutz-fuer-Kinder-im-Internet/technischer-schutz-fuer-kinder-im-internet_node.html"
        }
    ]
};

cards["streit-um-bildschirmzeit"] = {
    district: "App-Allee",
    title: "Der Streit um die Bildschirmzeit",
    situation: "Noah soll abends sein Handy weglegen. Er ist sauer, weil er noch Nachrichten lesen möchte. Seine Eltern machen sich Sorgen wegen Schlaf und Erholung. Was sollte er tun?",
    checklist: [
        "Schlaf und Erholung beachten",
        "Regeln gemeinsam besprechen",
        "nicht heimlich weitermachen",
        "Konflikt ruhig lösen",
        "Ladeplatz für die Nacht festlegen"
    ],
    answers: [
        {
            text: "A) Noah nimmt das Handy heimlich mit ins Bett.",
            type: "wrong",
            evaluation: "Riskant. Heimlich weitermachen schwächt Vertrauen und kann den Schlaf stören.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Noah gibt das Handy ab und sagt gar nichts mehr dazu.",
            type: "partial",
            evaluation: "Teilweise sicher. Das Handy wegzulegen hilft, aber der Streit wird dadurch nicht gemeinsam gelöst.",
            consequence: "Nichts."
        },
        {
            text: "C) Noah bittet um eine Ausnahme für wichtige Nachrichten.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar. Ausnahmen können sinnvoll sein, brauchen aber klare Regeln.",
            consequence: "VOID bewegt 2 Felder vor."
        },
        {
            text: "D) Noah schlägt eine Abendregel vor, zum Beispiel feste Handyzeit und einen Ladeplatz außerhalb des Betts.",
            type: "correct",
            evaluation: "Sehr sicher. Eine gemeinsame Regel hilft besser als Streit oder Heimlichkeit.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        }
    ],
    helpSources: [
        {
            name: "SCHAU HIN! – Medienzeiten: feste Bildschirmzeiten vereinbaren",
            url: "https://www.schau-hin.info/grundlagen/medienzeiten-feste-bildschirmzeiten-fuer-kinder-vereinbaren"
        },
        {
            name: "SCHAU HIN! – Bildschirmzeiten für Kinder vereinbaren",
            url: "https://www.schau-hin.info/bildschirmzeiten"
        },
        {
            name: "klicksafe – Bildschirm- und Medienzeit",
            url: "https://www.klicksafe.de/bildschirm-und-medienzeit-was-ist-fuer-kinder-in-ordnung"
        },
        {
            name: "BSI – Digitaler Schutz für Kinder und Jugendliche",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Kinderschutz-im-Internet/Technischer-Schutz-fuer-Kinder-im-Internet/technischer-schutz-fuer-kinder-im-internet_node.html"
        }
    ]
};

cards["oeffentliches-wlan"] = {
    district: "App-Allee",
    title: "Das öffentliche WLAN",
    situation: "Max ist im Einkaufszentrum. Er sieht ein kostenloses WLAN ohne Passwort. Er möchte sich schnell in sein E-Mail-Konto einloggen. Was sollte Max tun?",
    checklist: [
        "offenes WLAN vorsichtig nutzen",
        "keine wichtigen Konten einloggen, z. B. E-Mail oder Schulaccount",
        "keine Zahlungsdaten verwenden",
        "mobile Daten für wichtige Konten nutzen",
        "bei Unsicherheit warten",
        "nach der Nutzung das WLAN wieder trennen oder vergessen"
    ],
    answers: [
        {
            text: "A) Max nutzt für sein E-Mail-Konto mobile Daten oder wartet bis zuhause.",
            type: "correct",
            evaluation: "Sehr sicher. Für wichtige Logins ist ein offenes WLAN ohne Passwort riskanter.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "B) Max loggt sich ein, wenn die Webseite ein Schloss-Symbol zeigt.",
            type: "partial",
            evaluation: "Teilweise vorsichtig. Das Schloss-Symbol ist wichtig, aber Max sollte trotzdem prüfen, ob die Adresse wirklich stimmt. Für wichtige Konten sind mobile Daten sicherer.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Max nutzt die E-Mail-App, weil Apps im WLAN automatisch sicher sind.",
            type: "wrong",
            evaluation: "Riskant. Apps sind nicht automatisch sicherer als Webseiten.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Max schaltet WLAN komplett aus und nutzt unterwegs kein Internet.",
            type: "partial",
            evaluation: "Teilweise sicher, aber zu streng. Er darf unterwegs Internet nutzen, sollte aber wichtige Konten im offenen WLAN vermeiden.",
            consequence: "Nichts."
        }
    ],
    helpSources: [
        {
            name: "BSI – Sicherheitstipps für privates und öffentliches WLAN",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Router-WLAN-VPN/Sicherheitstipps-fuer-privates-und-oeffentliches-WLAN/sicherheitstipps-fuer-privates-und-oeffentliches-wlan_node.html"
        },
        {
            name: "Verbraucherzentrale – Öffentliche WLAN-Netze sicher nutzen",
            url: "https://www.verbraucherzentrale.de/wissen/digitale-welt/datenschutz/oeffentliche-wlannetze-sicher-nutzen-darauf-sollten-sie-achten-19264"
        }
    ]
};