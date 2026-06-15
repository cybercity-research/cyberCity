cards["gaming-gutschein"] = {
    district: "Betrugs-Basar",
    title: "Der Gaming-Gutschein",
    situation: "Du bekommst eine Nachricht: „Glückwunsch! Du hast einen 50-Euro-Gaming-Gutschein gewonnen. Klicke schnell auf den Link. Nur heute gültig!“",
    checklist: [
        "nicht sofort auf den Link klicken",
        "Absender und Link genau prüfen",
        "sich nicht durch „Nur heute!“ unter Druck setzen lassen",
        "keine persönlichen Daten eingeben",
        "bei Unsicherheit eine erwachsene Vertrauensperson fragen",
        "Nachricht nicht an andere weiterleiten",
        "Gewinnaktionen über offizielle Webseiten oder Apps prüfen"
    ],
    answers: [
        {
            text: "A) Wir schauen in der offiziellen App oder auf der offiziellen Webseite nach, ob es diese Aktion gibt.",
            type: "correct",
            evaluation: "Sehr sicher. Ihr folgt nicht dem unbekannten Link und lasst euch nicht durch Zeitdruck beeinflussen. Echte Aktionen lassen sich normalerweise über offizielle Wege prüfen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "B) Wir löschen die Nachricht sofort und blockieren alle unbekannten Kontakte, damit so etwas nie wieder passiert.",
            type: "partial",
            evaluation: "Teilweise sicher, aber sehr streng. Die Nachricht nicht zu öffnen ist gut. Es ist aber auch wichtig zu verstehen, woran man solche Tricks erkennt, damit man beim nächsten Mal bewusst reagieren kann.",
            consequence: "Nichts."
        },
        {
            text: "C) Wir klicken auf den Link, geben aber keine Login-Daten oder persönlichen Informationen ein.",
            type: "wrong",
            evaluation: "Riskant. Schon das Öffnen eines verdächtigen Links kann zu einer gefälschten Seite, weiteren Tricks oder gefährlichen Downloads führen. Besser ist es, den Link gar nicht erst zu öffnen.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Wir fragen auf Forum, ob andere die Nachricht auch bekommen haben und ob der Gutschein bei ihnen funktioniert hat.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar. Nachfragen kann helfen, aber andere Menschen können sich auch irren oder selbst getäuscht worden sein. Ein Gewinn sollte über offizielle Quellen geprüft werden.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "BSI – Phishing-E-Mails und Webseiten erkennen",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Spam-Phishing-Co/Passwortdiebstahl-durch-Phishing/Wie-erkenne-ich-Phishing-in-E-Mails-und-auf-Webseiten/wie-erkenne-ich-phishing-in-e-mails-und-auf-webseiten_node.html"
        },
        {
            name: "Verbraucherzentrale – Phishing-Radar",
            url: "https://www.verbraucherzentrale.de/wissen/digitale-welt/phishingradar/phishingradar-aktuelle-warnungen-6059"
        }
    ]
};

cards["falscher-paketdienst"] = {
    district: "Betrugs-Basar",
    title: "Der falsche Paketdienst",
    situation: "Eine SMS sagt:\n" +
        "„Dein Paket konnte nicht zugestellt werden. Zahle 1,99 € Nachgebühr über diesen Link.“",
    checklist: [
        "nicht auf den Link klicken",
        "prüfen, ob wirklich ein Paket erwartet wird",
        "keine Zahlungsdaten eingeben",
        "offizielle Paketdienst-Webseite oder App selbst öffnen",
        "Erwachsene fragen, wenn etwas unklar ist",
        "verdächtige SMS nicht weiterleiten",
        "kleine Beträge nicht unterschätzen"
    ],
    answers: [
        {
            text: "A) Wir bezahlen die 1,99 € nur, weil wir wirklich gerade ein Paket erwarten.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar. Zu prüfen, ob ein Paket erwartet wird, ist gut. Trotzdem sollte man nicht über den Link aus der SMS bezahlen, sondern nur über offizielle Wege des Paketdienstes.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Wir prüfen in der Paketdienst-App oder auf der Packetdienst-Webseite, ob es wirklich eine Sendung gibt.",
            type: "correct",
            evaluation: "Sehr sicher. Ihr folgt nicht dem Link aus der SMS, sondern prüft über einen offiziellen Weg. Gerade kleine Nachgebühren können ein Trick sein, um Zahlungsdaten zu stehlen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir öffnen den Link und schauen, ob dort das Logo des Paketdienstes und unsere Adresse stehen.",
            type: "wrong",
            evaluation: "Riskant. Gefälschte Seiten können echte Logos und persönliche Angaben verwenden. Eine echt aussehende Seite beweist nicht, dass sie sicher ist.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Wir fragen zu Hause nach, ob jemand ein Paket erwartet, und warten erstmal mit der Zahlung.",
            type: "partial",
            evaluation: "Teilweise sicher. Nachzufragen und nicht sofort zu zahlen ist gut. Noch sicherer ist es, den Sendungsstatus über die offizielle Webseite oder App zu prüfen und den SMS-Link nicht zu öffnen.",
            consequence: "Nichts."
        }
    ],
    helpSources: [
        {
            name: "Verbraucherzentrale – Paketdienst-SMS: Vorsicht, Abzocke!",
            url: "https://www.verbraucherzentrale.de/wissen/digitale-welt/mobilfunk-und-festnetz/paketdienstsms-vorsicht-abzocke-58988"
        },
        {
            name: "Bundesnetzagentur – SMS- und Messenger-Spam-Varianten",
            url: "https://www.bundesnetzagentur.de/DE/Vportal/TK/Aerger/Faelle/SMSSpam/start.html"
        }
    ]
};

cards["angeblicher-support"] = {
    district: "Betrugs-Basar",
    title: "Der angebliche Support",
    situation: "Jemand schreibt dir:\n" +
        "„Ich bin vom Support deines Spiels. Dein Konto wird gesperrt, wenn du mir nicht dein Passwort schickst.“",
    checklist: [
        "Passwort niemals weitergeben",
        "nicht auf Druck reagieren",
        "keine privaten Daten schicken",
        "offiziellen Support über die echte Webseite oder App suchen",
        "Nachricht einer erwachsenen Vertrauensperson zeigen",
        "Konto absichern, falls Daten eingegeben wurden",
        "erkennen, dass echter Support nicht nach Passwörtern fragt"
    ],
    answers: [
        {
            text: "A) Wir schicken nicht das Passwort, aber den Benutzernamen und fragen, was genau mit dem Konto los ist.",
            type: "partial",
            evaluation: "Teilweise vorsichtig, aber nicht sicher genug. Das Passwort nicht zu schicken ist gut. Trotzdem sollte man Betrügern keine Kontodaten geben und nicht weiter mit ihnen schreiben.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Wir löschen sofort das Spiel, weil man solchen Support-Nachrichten gar nicht mehr trauen kann.",
            type: "partial",
            evaluation: "Teilweise sicher, aber zu streng. Die Nachricht zu ignorieren ist richtig, aber das Spiel direkt zu löschen ist meistens nicht nötig. Besser ist es, den offiziellen Supportweg zu nutzen und das Konto zu schützen.",
            consequence: "Nichts."
        },
        {
            text: "C) Wir antworten nicht auf die Nachricht und prüfen über die offizielle Webseite oder App, ob es ein Problem mit dem Konto gibt.",
            type: "correct",
            evaluation: "Sehr sicher. Ihr gebt kein Passwort weiter und lasst euch nicht unter Druck setzen. Wenn es wirklich ein Kontoproblem gibt, sollte es über den offiziellen Support geprüft werden.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Wir schreiben zurück: „Ich gebe mein Passwort nicht, aber beweis erst mal, dass du wirklich vom Support bist.“",
            type: "wrong",
            evaluation: "Riskant. Auch wenn ihr das Passwort nicht schickt, kann eine Antwort dazu führen, dass der Betrüger weiter Druck macht oder neue Tricks versucht. Besser ist es, nicht zu antworten und offiziell zu prüfen.",
            consequence: "Risiko +2."
        }
    ],
    helpSources: [
        {
            name: "BSI – Phishing-E-Mails und Webseiten erkennen",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Spam-Phishing-Co/Passwortdiebstahl-durch-Phishing/Wie-erkenne-ich-Phishing-in-E-Mails-und-auf-Webseiten/wie-erkenne-ich-phishing-in-e-mails-und-auf-webseiten_node.html"
        },
        {
            name: "Polizeiliche Kriminalprävention – Tech-Support-Scam erkennen",
            url: "https://www.polizei-beratung.de/aktuelles/detailansicht/tech-support-scam-telefonbetrug-erkennen-und-vermeiden/"
        }
    ]
};

cards["fake-shop"] = {
    district: "Betrugs-Basar",
    title: "Der Fake-Shop",
    situation: "Ein Online-Shop verkauft ein neues Spiel extrem billig. Die Seite sieht modern aus, aber es gibt kein Impressum und kaum Informationen zum Anbieter.",
    checklist: [
        "nicht sofort kaufen",
        "Impressum prüfen",
        "Bewertungen außerhalb der Shop-Seite prüfen",
        "sichere Zahlungsmethoden prüfen",
        "auf sehr niedrige Preise achten",
        "bei Zweifel nicht kaufen",
        "Erwachsene fragen",
        "bekannte Händler oder Prüftools nutzen"
    ],
    answers: [
        {
            text: "A) Wir kaufen grundsätzlich keine Spiele online, weil man Fake-Shops nie sicher erkennen kann.",
            type: "partial",
            evaluation: "Teilweise sicher, aber zu streng. Vorsicht ist gut, aber Online-Shopping ist nicht automatisch gefährlich. Wichtig ist, Shops zu prüfen, bekannte Anbieter zu nutzen und keine riskanten Zahlungsarten zu wählen.",
            consequence: "Nichts."
        },
        {
            text: "B) Wir kaufen nur, wenn eine bekannte Zahlungsmethode angeboten wird, damit das Geld besser geschützt ist.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar. Sichere Zahlungsmethoden sind wichtig, aber sie machen einen verdächtigen Shop nicht automatisch vertrauenswürdig. Impressum, Anbieterinformationen und unabhängige Bewertungen müssen trotzdem geprüft werden.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Wir kaufen schnell, aber nur ein günstiges Spiel, damit der mögliche Verlust nicht so groß ist.",
            type: "wrong",
            evaluation: "Riskant. Auch ein kleiner Kauf kann problematisch sein, weil Zahlungsdaten, Adresse oder andere persönliche Daten abgefragt werden können. Außerdem kann ein Fake-Shop weitere Kosten oder Betrug verursachen.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Wir kaufen nicht direkt in diesem Shop und prüfen den Anbieter zuerst außerhalb der Seite oder suchen das Spiel bei bekannten Händlern.",
            type: "correct",
            evaluation: "Sehr sicher. Ein moderner Shop kann trotzdem unseriös sein. Fehlendes Impressum, kaum Anbieterinfos und ein extrem niedriger Preis sind Warnzeichen. Besser ist es, über bekannte Quellen zu prüfen oder einen vertrauenswürdigen Händler zu nutzen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        }
    ],
    helpSources: [
        {
            name: "Verbraucherzentrale – Fakeshop-Finder",
            url: "https://www.verbraucherzentrale.de/fakeshopfinder-71560"
        },
        {
            name: "BSI – Woran erkenne ich sichere Online-Shops?",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Online-Banking-Online-Shopping-und-mobil-bezahlen/Online-Shopping/Worauf-beim-Online-Einkauf-zu-achten-ist/worauf-beim-online-einkauf-zu-achten-ist_node.html"
        }
    ]
};

cards["gewinnspiel-mail"] = {
    district: "Betrugs-Basar",
    title: "Die Gewinnspiel-Mail",
    situation: "Eine E-Mail sagt: „Du hast ein Tablet gewonnen. Sende deinen Namen, deine Adresse und dein Geburtsdatum.“",
    checklist: [
        "nicht auf Gewinnversprechen unter Druck reagieren",
        "keine Adresse, Geburtsdatum oder Kontaktdaten senden",
        "prüfen, ob man wirklich an einem Gewinnspiel teilgenommen hat",
        "Absender kontrollieren",
        "Gewinnspiel über offizielle Wege prüfen",
        "Erwachsene fragen, wenn etwas unklar ist",
        "verdächtige Nachricht melden oder löschen"
    ],
    answers: [
        {
            text: "A) Wir antworten nicht und prüfen, ob wir überhaupt an diesem Gewinnspiel teilgenommen haben.",
            type: "correct",
            evaluation: "Sehr sicher. Wer nicht teilgenommen hat, kann normalerweise auch nichts gewonnen haben. Private Daten sollten nicht einfach per E-Mail verschickt werden.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "B) Wir senden nur den Namen, aber nicht Adresse und Geburtsdatum.",
            type: "partial",
            evaluation: "Teilweise vorsichtig, aber nicht sicher genug. Weniger Daten zu senden ist besser als alle Daten zu schicken. Trotzdem sollte man auf eine verdächtige Gewinnspiel-Mail nicht antworten.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Wir fragen zurück, von welchem Gewinnspiel die Mail kommt und warum die Daten gebraucht werden.",
            type: "wrong",
            evaluation: "Riskant. Auf verdächtige E-Mails zu antworten kann zeigen, dass die Adresse aktiv ist. Betrüger können dann weiter Druck machen oder neue Tricks versuchen.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Wir löschen die Mail sofort, ohne sie jemandem zu zeigen.",
            type: "partial",
            evaluation: "Teilweise sicher. Nicht zu antworten ist gut. Trotzdem kann es sinnvoll sein, die Nachricht mit einer erwachsenen Person zu besprechen oder sie zu melden, damit man den Trick besser erkennt.",
            consequence: "Nichts."
        }
    ],
    helpSources: [
        {
            name: "Verbraucherzentrale – Fake-Gewinnspiele erkennen",
            url: "https://www.verbraucherzentrale.nrw/wissen/digitale-welt/soziale-netzwerke/fakegewinnspiele-per-email-bei-facebook-und-instagram-erkennen-91061"
        },
        {
            name: "Polizeiliche Kriminalprävention – Falsche Gewinnversprechen",
            url: "https://www.polizei-beratung.de/themen-und-tipps/betrug/gewinnversprechen/"
        },
        {
            name: "BSI – Woran erkennt man Spam?",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Spam-Phishing-Co/Spam/Woran-erkennt-man-Spam/woran-erkennt-man-spam_node.html"
        }
    ]
};

cards["verdaechtiger-qr-code"] = {
    district: "Betrugs-Basar",
    title: "Der verdächtige QR-Code",
    situation: "Auf einem Plakat steht: „Scanne den Code und gewinne Kopfhörer.“ Der QR-Code führt zu einer Seite, die viele Daten abfragt.",
    checklist: [
        "QR-Codes wie Links behandeln",
        "Zielseite prüfen",
        "keine privaten Daten eingeben",
        "Gewinnversprechen kritisch sehen",
        "Erwachsene fragen, wenn etwas unklar ist",
        "Code nicht weiterverbreiten",
        "Gewinnaktionen über offizielle Wege prüfen"
    ],
    answers: [
        {
            text: "A) Wir schließen die Seite sofort und scannen grundsätzlich keine QR-Codes mehr.",
            type: "partial",
            evaluation: "Teilweise sicher, aber zu streng. Keine Daten einzugeben ist gut. QR-Codes sind aber nicht automatisch gefährlich. Wichtig ist, Zielseite und Datenabfrage kritisch zu prüfen.",
            consequence: "Nichts."
        },
        {
            text: "B) Wir geben nicht direkt Daten ein, sondern prüfen zuerst, ob die Aktion auf einer offiziellen Webseite oder beim Anbieter wirklich zu finden ist.",
            type: "correct",
            evaluation: "Sehr sicher. Ihr behandelt den QR-Code wie einen unbekannten Link und gebt keine Daten ein, nur weil ein Gewinn versprochen wird. Echte Aktionen lassen sich meist über offizielle Wege prüfen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir geben nur wenige Daten ein, zum Beispiel den Vornamen und eine E-Mail-Adresse, aber keine Adresse.",
            type: "partial",
            evaluation: "Teilweise vorsichtig, aber riskant. Auch wenige Daten können für Werbung, Spam oder Betrug genutzt werden. Bei unklaren Gewinnseiten sollte man keine privaten Daten eingeben.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Wir geben die Daten nur ein, wenn die Webseite nach dem Scannen professionell aussieht und ein Logo auf der Seite steht.",
            type: "wrong",
            evaluation: "Riskant. Eine gefälschte Seite kann professionell aussehen und echte Logos verwenden. Das beweist nicht, dass die Seite vertrauenswürdig ist.",
            consequence: "Risiko +2."
        }
    ],
    helpSources: [
        {
            name: "BSI – Quishing: QR-Code-Betrug erkennen",
            url: "https://www.bsi.bund.de/DE/Service-Navi/Abonnements/Newsletter/Buerger-CERT-Abos/Newsletter-Einfach-Cybersicher/Einfach_Cybersicher_260401/_documents/Basics_3_Quishing.html"
        },
        {
            name: "Verbraucherzentrale – Quishing: Falsche QR-Codes",
            url: "https://www.verbraucherzentrale.de/wissen/digitale-welt/phishingradar/quishing-falsche-qrcodes-in-mails-briefen-oepnv-und-strassenverkehr-98612"
        },
        {
            name: "Polizeiliche Kriminalprävention – Quishing: Wenn ein QR-Code zur Falle wird",
            url: "https://www.polizei-beratung.de/aktuelles/detailansicht/was-ist-quishing/"
        }
    ]
};

cards["banknachricht"] = {
    district: "Betrugs-Basar",
    title: "Die Banknachricht",
    situation: "Eine Nachricht sagt: „Dein Bankkonto wurde gesperrt. Melde dich sofort über diesen Link an.“ Die Nachricht wirkt dringend und sieht auf den ersten Blick offiziell aus.",
    checklist: [
        "nicht auf den Link klicken",
        "keine Login-Daten eingeben",
        "offizielle Webseite oder App selbst öffnen",
        "Erwachsene fragen",
        "auf Druck und Drohungen achten",
        "verdächtige Nachricht melden",
        "Banknachrichten über offizielle Wege prüfen"
    ],
    answers: [
        {
            text: "A) Wir löschen die Nachricht sofort und ignorieren ab jetzt alle Nachrichten von Banken.",
            type: "partial",
            evaluation: "Teilweise sicher, aber zu streng. Nicht auf den Link zu klicken ist gut. Trotzdem können echte Banknachrichten wichtig sein. Besser ist es, sie über offizielle Wege zu prüfen.",
            consequence: "Nichts."
        },
        {
            text: "B) Wir öffnen den Link nur, um zu schauen, ob die Seite das richtige Banklogo zeigt.",
            type: "wrong",
            evaluation: "Riskant. Gefälschte Seiten können echte Logos, Farben und Namen nachmachen. Ein echt wirkendes Aussehen beweist nicht, dass die Seite sicher ist.",
            consequence: "Risiko +2."
        },
         {
            text: "C) Wir prüfen das Konto über die offizielle Bank-App oder indem wir die Webseite selbst eingeben.",
            type: "correct",
            evaluation: "Sehr sicher. Ihr folgt nicht dem Link aus der Nachricht und gebt keine Login-Daten auf einer möglicherweise gefälschten Seite ein. Dringlichkeit und Drohungen sind typische Warnzeichen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Wir geben nur die E-Mail-Adresse oder Kundennummer ein, aber noch kein Passwort.",
            type: "partial",
            evaluation: "Teilweise vorsichtig, aber riskant. Auch einzelne Login-Daten können missbraucht werden. Auf verdächtigen Seiten sollte man gar keine Zugangsdaten eingeben.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "BSI – Phishing: Bankbetrug im Posteingang",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Wie-geht-Internet/E-Mail-Phishing-Bankbetrug/email-phishing-bankbetrug_node.html"
        },
        {
            name: "BSI – Gefahren und Sicherheitsrisiken beim Onlinebanking",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Online-Banking-Online-Shopping-und-mobil-bezahlen/Online-Banking/Gefahren-und-Sicherheitsrisiken/gefahren-und-sicherheitsrisiken.html"
        }
    ]
};

cards["influencer-code"] = {
    district: "Betrugs-Basar",
    title: "Der Influencer-Code",
    situation: "Ein Influencer verspricht: „Mit meinem Link bekommst du kostenlose Spielwährung. Du musst dich nur anmelden. Viele Kommentare sagen, dass es funktioniert.“",
    checklist: [
        "nicht blind auf Werbelinks klicken",
        "prüfen, ob die Aktion offiziell ist",
        "keine Login-Daten auf fremden Seiten eingeben",
        "Kommentare nicht als Beweis sehen",
        "Erwachsene fragen, wenn etwas unklar ist",
        "kostenlose Versprechen kritisch prüfen",
        "Werbung und echte Spielaktionen unterscheiden"
    ],
    answers: [
        {
            text: "A) Wir folgen dem Influencer nicht mehr und meiden ab jetzt alle Links von Influencern.",
            type: "partial",
            evaluation: "Teilweise sicher, aber zu streng. Vorsicht bei Werbelinks ist gut. Nicht jeder Influencer-Link ist automatisch gefährlich, aber kostenlose Spielwährung und Login auf fremden Seiten sind klare Warnzeichen.",
                consequence: "Nichts."
        },
        {
            text: "B) Wir melden uns mit einem zweiten Account an, damit unser Hauptaccount geschützt bleibt.",
            type: "wrong",
            evaluation: "Riskant. Ein zweiter Account schützt nicht zuverlässig. Die fremde Seite kann trotzdem Daten sammeln, das Gerät gefährden oder gegen Spielregeln verstoßen.",
            consequence: "Risiko +2."
        },
        {
            text: "C) Wir lesen erst Kommentare und fragen Freunde, ob der Link bei ihnen funktioniert hat.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar. Kommentare und Erfahrungen von Freunden können seriös wirken, beweisen aber nicht, dass die Seite sicher ist. Auch andere können getäuscht worden sein.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Wir öffnen das Spiel selbst und schauen dort nach, ob es die Aktion oder den Code offiziell gibt.",
            type: "correct",
            evaluation: "Sehr sicher. Ihr meldet euch nicht über eine fremde Seite an und gebt dort keine Login-Daten ein. Wenn die Aktion echt ist, sollte sie über das Spiel oder den offiziellen Anbieter prüfbar sein.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        }
    ],
    helpSources: [
        {
            name: "klicksafe – Influencer-Marketing: Werbung im Social Web",
            url: "https://www.klicksafe.de/news/influencer-marketing-werbung-im-social-web"
        },
        {
            name: "SCHAU HIN! – Online-Werbung: ein Risiko für Kinder?",
            url: "https://www.schau-hin.info/sicherheit-risiken/online-werbung-ein-risiko-fuer-kinder"
        }
    ]
};

cards["komischer-link-vom-freund"] = {
    district: "Betrugs-Basar",
    title: "Der komische Link vom Freund",
    situation: "Lukas bekommt von einem Freund eine Nachricht:\n" +
        "„Schau dir dieses Video an!“\n" +
        "Dazu kommt ein komischer Link. Der Text klingt anders als sonst.",
    checklist: [
        "Link nicht sofort anklicken",
        "auf ungewöhnliche Sprache achten",
        "Freund über einen anderen Weg fragen",
        "keine Daten eingeben",
        "bei Verdacht Erwachsene informieren",
        "falls Account gehackt wirkt, andere warnen"
    ],
    answers: [
        {
            text: "A) Lukas öffnet den Link nur, wenn der Freund sonst immer vertrauenswürdig ist.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar, aber riskant. Ein Freund kann vertrauenswürdig sein, trotzdem kann sein Konto gehackt worden sein. Ungewöhnliche Sprache und ein komischer Link sind Warnzeichen.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Lukas schreibt zurück: „Bist du das wirklich?“, ohne den Link anzuklicken.",
            type: "partial",
            evaluation: "Teilweise vorsichtig. Nicht zu klicken ist gut. Noch sicherer wäre es aber, den Freund über einen anderen Kanal zu fragen, weil der aktuelle Account möglicherweise nicht mehr unter seiner Kontrolle ist.",
            consequence: "+1 Zeit-Chip."
        },
        {
            text: "C) Lukas öffnet den Link, gibt aber keine Daten ein und schließt die Seite sofort, wenn sie komisch aussieht.",
            type: "wrong",
            evaluation: "Riskant. Schon das Öffnen eines verdächtigen Links kann problematisch sein. Wenn Text und Link ungewöhnlich wirken, sollte Lukas nicht ausprobieren, was passiert.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Lukas fragt den Freund über einen anderen Weg, ob die Nachricht wirklich von ihm kommt, bevor er den Link öffnet.",
            type: "correct",
            evaluation: "Sehr sicher. Lukas vertraut nicht nur dem Namen des Absenders, sondern prüft die Nachricht über einen zweiten Weg. Bekannte Konten können gehackt oder missbraucht werden.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
    ],
    helpSources: [
        {
            name: "Verbraucherzentrale – Facebook-Profil gehackt? Freundschaftsanfragen von Freunden",
            url: "https://www.verbraucherzentrale.de/wissen/digitale-welt/soziale-netzwerke/facebookprofil-gehackt-freundschaftsanfragen-von-freunden-13748"
        },
        {
            name: "BSI – Notfallplan gehacktes E-Mail-Konto",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Identitaetsdiebstahl/Hilfe-fuer-Betroffene/hilfe-fuer-betroffene_node.html"
        },
        {
            name: "BSI – Phishing über gehackte Accounts von Bekannten",
            url: "https://www.bsi.bund.de/DE/Service-Navi/Abonnements/Newsletter/Buerger-CERT-Abos/Newsletter-Einfach-Cybersicher/Einfach_Cybersicher_260114/_documents/News-Update_2_Phishing_WhatsApp_Kopplungsfunktion.html"
        }
    ]
};