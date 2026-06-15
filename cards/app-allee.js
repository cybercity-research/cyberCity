cards["taschenlampen-app"] = {
    district: "App-Allee",
    title: "Die Taschenlampen-App",
    situation: "Du möchtest eine neue Taschenlampen-App installieren. Beim Start fragt die App nach Zugriff auf: Kamera, Mikrofon, Standort, Kontakte und Fotos. Die App hat viele gute Bewertungen.",
    checklist: [
        "Berechtigungen prüfen",
        "überlegen, was die App wirklich braucht",
        "unnötige Zugriffe ablehnen",
        "bei Unsicherheit Erwachsene fragen",
        "App nur aus offiziellen Stores laden",
        "Bewertungen nicht blind vertrauen",
        "App löschen oder andere App wählen, wenn sie zu viele Daten verlangt"
    ],
    answers: [
        {
            text: "A) Wir erlauben nur die Kamera, weil die Taschenlampe mit dem Kameralicht zusammenhängt, und lehnen Mikrofon, Standort, Kontakte und Fotos ab.",
            type: "partial",
            evaluation: "Teilweise sicher. Es ist gut, unnötige Berechtigungen abzulehnen. Trotzdem sollte man überlegen, ob man überhaupt eine extra Taschenlampen-App braucht oder ob die eingebaute Taschenlampe des Handys reicht.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Wir nutzen lieber die eingebaute Taschenlampe des Handys oder suchen eine App, die nur notwendige Berechtigungen verlangt.",
            type: "correct",
            evaluation: "Sehr sicher. Die App verlangt mehr Zugriff, als für eine Taschenlampe nötig wirkt. Gute Bewertungen ersetzen keine Prüfung der Berechtigungen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir erlauben alles erstmal und schalten die Berechtigungen später wieder aus.",
            type: "wrong",
            evaluation: "Riskant. Wenn eine App unnötige Berechtigungen bekommt, kann sie möglicherweise schon vorher auf private Daten zugreifen. Besser ist es, vor dem Erlauben zu prüfen.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Wir installieren die App, weil viele gute Bewertungen zeigen, dass andere sie schon getestet haben.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar. Bewertungen können bei der Einschätzung helfen, aber sie beweisen nicht, dass eine App datensparsam oder sicher ist. Die Berechtigungen müssen trotzdem geprüft werden.",
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
    situation: "Jonny sieht in seinem Social-Media-Feed ein Quiz:\n" +
        "„Welcher Star bist du? Finde es heraus!“ Das Quiz möchte Zugriff auf sein Profil und fragt nach persönlichen Dingen, zum Beispiel Geburtstag, Lieblingsort, Schule oder Kontakten.",
    checklist: [
        "überlegen, welche Daten das Quiz abfragt",
        "keine privaten Informationen eingeben",
        "keine Kontakte oder Profilzugriffe erlauben",
        "nicht alles anklicken, nur weil es lustig wirkt",
        "Datenschutz- und Berechtigungshinweise prüfen",
        "bei Unsicherheit Erwachsene fragen oder Quiz nicht machen"
    ],
    answers: [
        {
            text: "A) Jonny macht das Quiz, gibt aber bei Geburtstag, Schule und Lieblingsort falsche Antworten ein.",
            type: "partial",
            evaluation: "Teilweise sicher. Falsche Antworten können echte Daten schützen. Trotzdem kann das Quiz noch Zugriff auf Profil, Kontakte oder Gerätedaten bekommen, wenn Jonny Berechtigungen erlaubt.",
            consequence: "Nichts."
        },
        {
            text: "B) Jonny erlaubt nur den Profilzugriff, aber nicht den Zugriff auf Kontakte oder Fotos.",
            type: "partial",
            evaluation: "Teilweise vorsichtig. Weniger Zugriffe zu erlauben ist besser als alles freizugeben. Trotzdem kann schon der Profilzugriff persönliche Informationen verraten, die für ein Spaß-Quiz nicht nötig sind.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Jonny sucht ein ähnliches Quiz, das ohne Profilzugriff funktioniert.",
            type: "correct",
            evaluation: "Sehr sicher. Jonny kann den Spaß mitmachen, ohne unnötige Zugriffe zu erlauben oder persönliche Daten preiszugeben. Ein Quiz sollte nicht mehr Daten verlangen, als wirklich nötig sind.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Jonny macht das Quiz, teilt das Ergebnis aber nicht öffentlich.",
            type: "wrong",
            evaluation: "Riskant. Das Ergebnis nicht öffentlich zu teilen schützt nur einen Teil der Informationen. Das Quiz kann trotzdem persönliche Daten sammeln, wenn Jonny Zugriff erlaubt oder private Angaben eingibt.",
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
    situation: "Im Spiel erscheint: „Kaufe jetzt 500 Diamanten für 4,99 €.“ Es sieht nach wenig Geld aus, aber das Angebot erscheint immer wieder.",
    checklist: [
        "nicht heimlich kaufen",
        "vorher mit Eltern sprechen",
        "verstehen, dass kleine Beträge sich summieren können",
        "Familienregeln für Käufe erstellen und beachten",
        "Kaufbestätigungen oder Sperren nutzen",
        "überlegen, ob der Kauf wirklich nötig ist",
        "Werbung und Zeitdruck im Spiel erkennen"
    ],
    answers: [
        {
            text: "A) Wir warten erstmal ab und überlegen, ob wir die Diamanten wirklich brauchen. Wenn Geld ausgegeben werden soll, klären wir es nach den Familienregeln.",
            type: "correct",
            evaluation: "Sehr sicher. Ihr kauft nicht aus dem Moment heraus und entscheidet nicht heimlich. Gerade kleine Beträge können sich summieren, deshalb helfen klare Familienregeln.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "B) Wir löschen das Spiel sofort, weil Spiele mit Kaufangeboten grundsätzlich gefährlich sind.",
            type: "partial",
            evaluation: "Teilweise sicher, aber zu streng. Das Spiel zu löschen kann sinnvoll sein, wenn der Kaufdruck zu stark wird. Grundsätzlich geht es aber darum, Käufe bewusst zu entscheiden und Regeln einzuhalten.",
            consequence: "Nichts."
        },
        {
            text: "C) Wir fragen Freunde, ob sich die Diamanten lohnen, und kaufen nur, wenn sie sagen, dass es ein gutes Angebot ist.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar. Freunde können eine Meinung zum Spiel haben, aber sie entscheiden nicht über Geld oder Familienregeln. Ein Angebot kann trotzdem unnötig oder zu teuer sein.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Wir kaufen einmal für 4,99 €, weil es nur ein kleiner Betrag ist und man danach ja aufhören kann.",
            type: "wrong",
            evaluation: "Riskant. Kleine Beträge wirken harmlos, können sich aber schnell summieren. Außerdem nutzen Spiele solche Angebote oft, um weitere Käufe anzuregen.",
            consequence: "Risiko +2."
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
    situation: "Eine neue App fragt: „Darf diese App immer deinen Standort sehen?“\n" +
        "Die App braucht deinen Standort aber nicht offensichtlich für ihre Hauptfunktion.",
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
            text: "A) Wir wählen „Beim Verwenden der App erlauben“, weil das nicht als „immer erlauben“ gilt.",
            type: "partial",
            evaluation: "Teilweise sicher. „Beim Verwenden der App“ ist besser als „immer erlauben“. Trotzdem sollte man zuerst überlegen, ob diese App den Standort überhaupt braucht.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Wir erlauben den Standort, wenn die App bekannt ist oder viele gute Bewertungen hat.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar, aber nicht ausreichend. Bekanntheit und gute Bewertungen sagen nicht automatisch, ob eine App den Standort wirklich braucht.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Wir erlauben, schalten den Standort aber später aus.",
            type: "wrong",
            evaluation: "Riskant. Wenn man „immer erlauben“ auswählt, kann die App möglicherweise dauerhaft Standortdaten sammeln. Besser ist es, unnötige Zugriffe gar nicht erst zu erlauben.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Wir lehnen den Standort erstmal ab. Falls später eine Funktion ohne Standort nicht sinnvoll funktioniert, prüfen wir die Berechtigung nochmal.",
            type: "correct",
            evaluation: "Sehr sicher. Die App bekommt nicht vorschnell Zugriff auf private Standortdaten. Wenn der Standort wirklich nötig ist, kann man später bewusst entscheiden.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
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
    situation: "Eine Mal-App möchte Zugriff auf dein Mikrofon.\n" +
        "Du fragst dich, warum eine App zum Malen dein Mikrofon braucht.",
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
            text: "A) Wir lehnen den Mikrofonzugriff erstmal ab und prüfen, ob die Mal-App trotzdem normal funktioniert.",
            type: "correct",
            evaluation: "Sehr sicher. Für eine Mal-App wirkt Mikrofonzugriff nicht nötig. Wenn die App auch ohne Mikrofon funktioniert, sollte diese Berechtigung nicht erlaubt werden.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "B) Wir erlauben das Mikrofon nur kurz und schalten es später wieder aus, wenn die App fertig eingerichtet ist.",
            type: "partial",
            evaluation: "Teilweise vorsichtig, aber nicht ideal. Kurz zu erlauben ist besser als dauerhaft zu erlauben. Trotzdem sollte man zuerst fragen, ob eine Mal-App das Mikrofon überhaupt braucht.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Wir löschen die App sofort, weil jede App mit Mikrofonzugriff gefährlich ist.",
            type: "partial",
            evaluation: "Teilweise sicher, aber zu streng. Löschen kann sinnvoll sein, wenn eine App unnötige Berechtigungen verlangt oder ohne diese Rechte nicht funktioniert. Aber nicht jede App mit Mikrofonzugriff ist automatisch gefährlich. Besser ist es zuerst zu prüfen, ob die Berechtigung zur Funktion passt.",
            consequence: "Nichts."
        },
        {
            text: "D) Wir erlauben den Zugriff, weil das Mikrofon nur benutzt wird, wenn wir gerade in der App sind.",
            type: "wrong",
            evaluation: "Riskant. Auch während der Nutzung können Gespräche oder Geräusche privat sein. Eine Mal-App sollte nicht ohne guten Grund Zugriff auf das Mikrofon bekommen.",
            consequence: "Risiko +2."
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
    situation: "Eine App fragt nach deinem Geburtsdatum. Du merkst: Eigentlich bist du zu jung für diese App. Einige Freunde nutzen sie aber trotzdem.",
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
            text: "A) Wir schauen, ob es eine passende Alternative oder sichere Einstellung gibt.",
            type: "correct",
            evaluation: "Sehr sicher. Altersgrenzen sind Hinweise darauf, ob Inhalte, Werbung oder Kontaktfunktionen für Kinder geeignet sind. Besser ist es, ehrlich zu bleiben und gemeinsam eine passende Lösung zu suchen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "B) Wir nutzen die App nur kurz und ohne etwas zu posten, weil dann nicht so viel passieren kann.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar, aber nicht sicher genug. Auch beim kurzen Nutzen können ungeeignete Inhalte, Werbung oder Kontaktfunktionen auftauchen. Außerdem bleibt das Problem mit der falschen Altersangabe bestehen.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Wir fragen Freunde, welche Einstellungen sie benutzen, damit die App sicherer ist.",
            type: "partial",
            evaluation: "Teilweise sinnvoll. Freunde können Tipps geben, aber sie ersetzen keine gemeinsame Prüfung mit Eltern oder Erziehungsberechtigten. Außerdem macht eine Einstellung die App nicht automatisch altersgeeignet.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Wir geben ein älteres Geburtsjahr ein, aber schalten Benachrichtigungen und öffentliche Sichtbarkeit aus.",
            type: "wrong",
            evaluation: "Riskant. Falsche Altersangaben können Funktionen oder Inhalte freischalten, die nicht für dein Alter gedacht sind. Privatsphäre-Einstellungen lösen dieses Problem nicht vollständig.",
            consequence: "Risiko +2."
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
    situation: "Daniel sieht auf dem Familiencomputer plötzlich unangenehme Werbung, nachdem Lea den Computer benutzt hat. Daniel vermutet, dass die Werbung vielleicht mit Suchverlauf, Cookies oder Werbeeinstellungen zusammenhängt.",
    checklist: [
        "verstehen, dass Suchverlauf und Cookies Werbung beeinflussen können",
        "auf gemeinsam genutzten Geräten private Sucheinstellungen beachten",
        "Browser-Verlauf, Cookies oder Werbeeinstellungen gemeinsam prüfen",
        "sich nicht über unangenehme Werbung lustig machen",
        "bei privaten Themen ein eigenes Profil oder einen privaten Modus nutzen",
        "mit Erwachsenen über Datenschutz- und Werbeeinstellungen sprechen"
    ],
    answers: [
        {
            text: "A) Lea löscht die Werbung weg, wenn sie angezeigt wird.",
            type: "partial",
            evaluation: "Teilweise hilfreich. Die Werbung zu schließen kann kurz helfen, löst aber meistens nicht die Ursache. Verlauf, Cookies oder Werbeeinstellungen können weiterhin Werbung beeinflussen.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Daniel macht keine Witze darüber. Es wird geprüft, ob Verlauf, Cookies oder Werbeeinstellungen angepasst werden sollten.",
            type: "correct",
            evaluation: "Sehr sicher. Daniel respektiert Leas Privatsphäre, und beide lernen, dass Werbung durch Verlauf, Cookies oder Tracking beeinflusst werden kann.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Lea nutzt ab jetzt nur noch den privaten Modus und spricht mit niemandem darüber.",
            type: "partial",
            evaluation: "Teilweise sicher. Der private Modus kann bei gemeinsam genutzten Geräten helfen. Trotzdem ersetzt er nicht das Prüfen von Cookies, Werbeeinstellungen oder gemeinsamen Regeln.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Daniel fragt Lea vor anderen, wonach sie gesucht hat.",
            type: "wrong",
            evaluation: "Riskant. Das kann peinlich und verletzend sein. Datenschutz bedeutet auch, die Privatsphäre anderer Personen zu respektieren.",
            consequence: "Risiko +2."
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
    situation: "Louis hat vor einigen Jahren ein Konto auf einer Kinder-Webseite erstellt. Er benutzt die Seite nicht mehr, aber dort stehen noch persönliche Informationen. Louis möchte das Konto dauerhaft schließen, ohne dass es kompliziert wird.",
    checklist: [
        "nicht einfach ignorieren, wenn ein altes Konto noch persönliche Daten enthält",
        "in den Konto-Einstellungen nach „Konto löschen“ oder „Daten löschen“ suchen",
        "vorher prüfen, ob wichtige Inhalte gesichert werden sollen",
        "mit einer erwachsenen Person gemeinsam vorgehen",
        "Bestätigungs-E-Mail oder Löschbestätigung beachten",
        "wenn Löschen nicht klappt, Hilfe- oder Datenschutzkontakt der Webseite nutzen"
    ],
    answers: [
        {
            text: "A) Louis löscht die App oder das Lesezeichen und entfernt seinen Namen aus dem Profil.",
            type: "partial",
            evaluation: "Teilweise hilfreich, aber nicht ausreichend. Das Profil wirkt dann vielleicht leerer, aber das Konto und gespeicherte Daten können trotzdem weiter bestehen.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Louis schreibt dem Support eine Nachricht mit seinen Kontodaten und bittet darum, das Konto zu löschen.",
            type: "partial",
            evaluation: "Teilweise sinnvoll. Den Support zu kontaktieren kann helfen, wenn die Löschung in den Einstellungen nicht funktioniert. Louis sollte aber keine sensiblen Daten oder Passwörter mitschicken und am besten gemeinsam mit einer erwachsenen Person vorgehen.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Louis sucht in den Konto-Einstellungen nach „Konto löschen“ oder „Daten löschen“ und achtet darauf, ob eine Bestätigung kommt.",
            type: "correct",
            evaluation: "Sehr sicher. Louis entfernt nicht nur die App oder sichtbare Profilangaben, sondern prüft, ob das Konto wirklich geschlossen oder die Daten gelöscht werden.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Louis nutzt die „Abmelden“-Funktion und wartet ab, ob das Konto nach einiger Zeit automatisch verschwindet.",
            type: "wrong",
            evaluation: "Riskant. Abmelden bedeutet nicht, dass ein Konto gelöscht wird. Die gespeicherten Daten können weiterhin auf der Webseite bleiben.",
            consequence: "Risiko +2."
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
    situation: "Du spielst mit Freunden ein Online-Spiel. Eigentlich wolltest du nach 30 Minuten aufhören, aber es läuft gerade besonders gut. Dann schreiben deine Freunde: „Komm schon, nur noch eine Runde!“ Du merkst, dass du müde wirst und eigentlich noch etwas anderes vorhast.",
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
            text: "A) Wir spielen noch eine Runde mit, damit die Freunde nicht enttäuscht sind, und hören danach wirklich auf.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar. Rücksicht auf Freunde ist gut, aber Gruppendruck kann dazu führen, dass man die eigene Grenze immer weiter verschiebt. Wenn man schon müde ist und etwas anderes vorhat, ist eine Pause sinnvoll.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Wir hören sofort auf und löschen das Spiel, weil es sonst immer wieder schwer wird aufzuhören.",
            type: "partial",
            evaluation: "Teilweise sicher, aber sehr streng. Sofort aufzuhören kann richtig sein, wenn man müde ist. Das Spiel direkt zu löschen ist aber nicht immer nötig. Besser sind klare Pausen, Absprachen und Regeln.",
            consequence: "Nichts."
        },
        {
            text: "C) Wir stellen den Ton leiser und spielen heimlich weiter, damit niemand merkt, dass die Zeit vorbei ist.",
            type: "wrong",
            evaluation: "Riskant. Heimlich weiterzuspielen schwächt Vertrauen und macht Familienregeln schwieriger. Außerdem ignoriert ihr, dass ihr eigentlich müde seid und etwas anderes vorhabt.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Wir sagen den Freunden, dass wir jetzt eine Pause machen, und schlagen vor, später weiterzuspielen.",
            type: "correct",
            evaluation: "Sehr sicher. Ihr merkt, dass ihr müde werdet, und nehmt eure eigene Grenze ernst. Gleichzeitig bleibt ihr freundlich und macht klar, dass die Pause nicht gegen die Freunde gemeint ist.",
            consequence: "+1 Zeit-Chip und +1 Sicherheits-Chip."
        },
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
    situation: "Noah ist sauer, weil seine Eltern möchten, dass er abends das Handy weglegt. Er sagt:\n" +
        "„Ich habe das Recht, immer online zu sein, wann ich will.“",
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
            text: "A) Noah schlägt vor, gemeinsam eine Abendregel zu finden, zum Beispiel eine feste Handyzeit und einen Platz, wo das Handy nachts liegt.",
            type: "correct",
            evaluation: "Sehr sicher. Noah nimmt sein Bedürfnis ernst, online zu sein, achtet aber auch auf Schlaf, Erholung und gemeinsame Regeln. So wird aus dem Streit eher eine Lösung.",
            consequence: "+1 Zeit-Chip, +1 Sicherheits-Chip."
        },
        {
            text: "B) Noah gibt das Handy abends sofort komplett ab und sagt nichts mehr dazu, damit es keinen Streit gibt.",
            type: "partial",
            evaluation: "Teilweise sicher. Das Handy wegzulegen kann helfen, abends zur Ruhe zu kommen. Aber gar nicht darüber zu sprechen löst den Konflikt nicht. Besser ist es, gemeinsam eine klare Regel zu vereinbaren.",
            consequence: "Nichts."
        },
        {
            text: "C) Noah bittet darum, abends nur noch für wichtige Nachrichten online bleiben zu dürfen, ohne Spiele oder Videos.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar. Eine Ausnahme kann sinnvoll sein, wenn sie klar geregelt ist. Trotzdem sollte gemeinsam geklärt werden, wann wirklich Schluss ist und wie Schlaf und Erholung geschützt werden.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Noah nimmt das Handy mit ins Bett und stellt nur die Helligkeit herunter, damit es niemand merkt.",
            type: "wrong",
            evaluation: "Riskant. Heimlich weiterzumachen schwächt Vertrauen und hilft nicht beim Streit. Außerdem kann das Handy im Bett Schlaf und Erholung stören.",
            consequence: "Risiko +2."
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
    situation: "Max ist im Einkaufszentrum und sieht ein kostenloses WLAN ohne Passwort. Er möchte sich dort in sein E-Mail-Konto einloggen.",
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
            text: "A) Max schaltet WLAN komplett aus und benutzt draußen grundsätzlich kein Internet mehr.",
            type: "partial",
            evaluation: "Teilweise sicher, aber zu streng. Vorsicht bei offenem WLAN ist gut. Es ist aber nicht nötig, unterwegs gar kein Internet mehr zu nutzen. Wichtig ist, sensible Logins und Zahlungsdaten zu vermeiden.",
            consequence: "Nichts."
        },
        {
            text: "B) Max nutzt das offene WLAN nur zum normalen Surfen, aber für sein E-Mail-Konto wartet er oder nimmt mobile Daten.",
            type: "correct",
            evaluation: "Sehr sicher. Max unterscheidet zwischen einfachem Surfen und sensiblen Logins. Für E-Mail, Konten oder Zahlungsdaten sind mobile Daten oder ein vertrauenswürdiges Netz sicherer.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Max loggt sich ein, wenn die Webseite ein Schloss-Symbol zeigt und er sich danach wieder abmeldet.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar. Das Schloss-Symbol und Abmelden sind gute Zeichen, reichen aber nicht immer aus. Ein offenes WLAN ohne Passwort bleibt für sensible Konten riskanter.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Max nutzt lieber die E-Mail-App statt den Browser, weil Apps im WLAN automatisch sicher sind.",
            type: "wrong",
            evaluation: "Riskant. Auch Apps können sensible Daten übertragen. Eine App ist nicht automatisch sicher, nur weil sie kein Browser ist.",
            consequence: "Risiko +2."
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

