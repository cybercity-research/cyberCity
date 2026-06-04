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
      text: "A) Jonny macht das Quiz nur, wenn er keine privaten Informationen eingeben und keine zusätzlichen Zugriffe erlauben muss.",
      evaluation: "Sehr sicher. Jonny achtet darauf, dass das Quiz nicht unnötig Daten sammelt.",
      consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
    },
    {
      text: "B) Jonny macht das Quiz und gibt falsche Antworten ein, damit seine echten Daten geschützt sind.",
      evaluation: "Teilweise sicher, aber nicht ideal. Falsche Antworten können helfen, aber das Quiz kann trotzdem Daten über Gerät, Profil oder Verhalten sammeln.",
      consequence: "+1 Zeit-Chip."
    },
    {
      text: "C) Jonny erlaubt dem Quiz Zugriff auf sein Profil, weil es dann genauere Ergebnisse liefert.",
      evaluation: "Riskant. Dadurch kann das Quiz mehr persönliche Daten sammeln, als Jonny vielleicht merkt.",
      consequence: "Risiko +2."
    },
    {
      text: "D) Jonny teilt das Quiz mit Freunden, bevor er weiß, ob es sicher ist.",
      evaluation: "Riskant. So könnten auch andere ihre Daten preisgeben.",
      consequence: "Risiko +1."
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
    checklist: [
        "nicht heimlich kaufen",
        "vorher mit Eltern sprechen",
        "verstehen, dass kleine Beträge sich summieren können",
        "Familienregeln für Käufe erstellen und beachten",
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
            text: "D) Wir lassen den Standort an und versuchen später daran zu denken.",
            evaluation: "Riskant. Vergessene Berechtigungen können dauerhaft private Daten preisgeben.",
            consequence: "Risiko +1."
        }
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
        name: "Elternguide.online – App-Berechtigungen: Kamera, Mikrofon und Co.",
        url: "https://www.elternguide.online/app-berechtigungen-kamera-mikrofon-und-co/"
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
        name: "BSI – Sicherer Umgang mit Apps auf mobilen Geräten",
        url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Basisschutz-fuer-Computer-Mobilgeraete/Schutz-fuer-Mobilgeraete/Sicherheit-bei-Apps/sicherheit-bei-apps.html"
      },
      {
        name: "BSI – Schutz für Mobilgeräte",
        url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Basisschutz-fuer-Computer-Mobilgeraete/Schutz-fuer-Mobilgeraete/schutz-fuer-mobilgeraete_node.html"
      }
    ]
};

cards["peinliche-werbung"] = {
  district: "App-Allee",
  title: "Die peinliche Werbung",
  checklist: [
    "verstehen, dass Suchverlauf und Cookies Werbung beeinflussen können",
    "auf gemeinsam genutzten Geräten private Sucheinstellungen beachten",
    "Browser-Verlauf, Cookies oder Werbeeinstellungen gemeinsam prüfen",
    "sich nicht über peinliche Werbung lustig machen",
    "bei privaten Themen ein eigenes Profil oder einen privaten Modus nutzen",
    "mit Erwachsenen über Datenschutz- und Werbeeinstellungen sprechen"
  ],
  answers: [
    {
      text: "A) Lea löscht oder prüft den Verlauf, Cookies und Werbeeinstellungen und nutzt bei privaten Themen ein eigenes Profil oder den privaten Modus.",
      evaluation: "Sehr sicher. Lea schützt ihre Privatsphäre und versteht, warum Werbung durch Such- und Nutzungsdaten beeinflusst werden kann.",
      consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
    },
    {
      text: "B) Lea löscht nur die Werbung, wenn sie angezeigt wird.",
      evaluation: "Teilweise sicher. Einzelne Werbung zu schließen hilft kurz, aber die Ursache können Verlauf, Cookies oder Werbeeinstellungen sein.",
      consequence: "+1 Zeit-Chip."
    },
    {
      text: "C) Lea gibt Daniel die Schuld, weil er die Werbung gesehen hat.",
      evaluation: "Riskant. Das löst das Datenschutzproblem nicht und kann peinlich oder verletzend sein.",
      consequence: "Risiko +1."
    },
    {
      text: "D) Lea benutzt ab jetzt heimlich fremde Geräte, damit niemand ihre Suche sieht.",
      evaluation: "Riskant. Heimlich fremde Geräte zu nutzen ist keine gute Lösung und kann neue Datenschutzprobleme verursachen.",
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
      text: "A) Louis löscht nur die App oder entfernt das Lesezeichen, damit er die Seite nicht mehr sieht.",
      evaluation: "Riskant. Die App oder das Lesezeichen zu löschen entfernt meistens nicht das Konto oder die gespeicherten Daten.",
      consequence: "Risiko +1."
    },
    {
      text: "B) Louis sucht gemeinsam mit einem Erwachsenen in den Einstellungen nach „Konto löschen“ oder „Daten löschen“ und prüft die Bestätigung.",
      evaluation: "Sehr sicher. Louis geht Schritt für Schritt vor und achtet darauf, dass das Konto wirklich geschlossen wird.",
      consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
    },
    {
      text: "C) Louis ändert einfach seinen Namen im Profil auf einen Fantasienamen.",
      evaluation: "Teilweise sicher, aber nicht genug. Einige Daten sind dann vielleicht weniger sichtbar, aber das Konto und gespeicherte Informationen bleiben bestehen.",
      consequence: "Nichts passiert."
    },
    {
      text: "D) Louis gibt sein Passwort an einen Freund, damit dieser das Konto für ihn löscht.",
      evaluation: "Sehr riskant. Passwörter sollten nicht weitergegeben werden, auch nicht zum Löschen eines Kontos.",
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
            consequence: "+1 Zeit-Chip, +1 Sicherheits-Chip."
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
        name: "BSI – Sicherheitstipps für privates und öffentliches WLAN",
        url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Router-WLAN-VPN/Sicherheitstipps-fuer-privates-und-oeffentliches-WLAN/sicherheitstipps-fuer-privates-und-oeffentliches-wlan_node.html"
      },
      {
        name: "Verbraucherzentrale – Öffentliche WLAN-Netze sicher nutzen",
        url: "https://www.verbraucherzentrale.de/wissen/digitale-welt/datenschutz/oeffentliche-wlannetze-sicher-nutzen-darauf-sollten-sie-achten-19264"
      }
    ]
};