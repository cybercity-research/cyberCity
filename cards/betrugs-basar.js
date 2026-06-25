cards["gaming-gutschein"] = {
    district: "Betrugs-Basar",
    title: "Der Gaming-Gutschein",
    situation: "Nora bekommt eine Nachricht: „Du hast einen 50-Euro-Gaming-Gutschein gewonnen. Klicke schnell auf den Link. Nur heute gültig!“ Was sollte sie tun?",
    checklist: [
        "nicht sofort auf Links klicken",
        "prüfen, wer die Nachricht geschickt hat",
        "Link nicht direkt öffnen",
        "offizielle Webseite oder App selbst öffnen",
        "Zeitdruck erkennen",
        "keine persönlichen Daten eingeben",
    ],
    answers: [
        {
            text: "A) Nora prüft in der offiziellen App oder Webseite, ob es diese Aktion gibt.",
            type: "correct",
            evaluation: "Sehr sicher. Nora folgt nicht dem unbekannten Link und lässt sich nicht unter Druck setzen. So schützt sie auch ihren Gaming-Account und alles, was sie sich dort aufgebaut hat.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "B) Nora löscht die Nachricht sofort und blockiert alle unbekannten Kontakte.",
            type: "partial",
            evaluation: "Teilweise sicher. Nicht zu klicken ist gut, aber Nora sollte auch verstehen, woran sie den Trick erkennt.",
            consequence: "Nichts."
        },
        {
            text: "C) Nora klickt auf den Link, gibt aber keine Daten ein.",
            type: "wrong",
            evaluation: "Riskant. Schon das Öffnen eines verdächtigen Links kann zu weiteren Tricks oder gefährlichen Seiten führen.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Nora fragt in einem Forum, ob der Gutschein bei anderen funktioniert hat.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar. Andere können sich aber auch irren oder selbst getäuscht worden sein.",
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
    situation: "Tom bekommt eine SMS: „Dein Paket konnte nicht zugestellt werden. Zahle 1,99 € Nachgebühr über diesen Link.“ Er erwartet wirklich ein Paket. Was sollte er tun?",
    checklist: [
        "nicht auf SMS-Link klicken",
        "Sendung offiziell prüfen",
        "keine Zahlungsdaten eingeben",
        "kleine Beträge nicht unterschätzen",
        "bei Unsicherheit Erwachsene fragen"
    ],
    answers: [
        {
            text: "A) Tom bezahlt die 1,99 €, weil er wirklich ein Paket erwartet.",
            type: "wrong",
            evaluation: "Riskant. Auch wenn Tom ein Paket erwartet, sollte er nicht über einen SMS-Link zahlen. Betrüger nutzen genau solche Zufälle aus.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Tom prüft die Sendung in der offiziellen Paketdienst-App oder Webseite.",
            type: "correct",
            evaluation: "Sehr sicher. Tom folgt nicht dem SMS-Link und gibt keine Zahlungsdaten auf einer unbekannten Seite ein.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Tom öffnet den Link und schaut, ob Logo und Adresse stimmen.",
            type: "wrong",
            evaluation: "Riskant. Gefälschte Seiten können echte Logos und persönliche Angaben nachmachen.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Tom fragt zu Hause nach und wartet erstmal mit der Zahlung.",
            type: "partial",
            evaluation: "Teilweise sicher. Nachfragen ist gut. Noch sicherer ist die Prüfung über die offizielle App oder Webseite.",
            consequence: "VOID bewegt 3 Felder vor."
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
    situation: "Milan bekommt im Chat eine Nachricht: „Ich bin vom Support deines Spiels. Dein Konto wird gesperrt, wenn du mir nicht dein Passwort schickst.“ Was sollte Milan tun?",
    checklist: [
        "Passwort niemals weitergeben",
        "nicht auf Druck reagieren",
        "offiziellen Supportweg nutzen",
        "Nachricht Erwachsenen zeigen",
        "Konto absichern",
        "Person blockieren oder melden"
    ],
    answers: [
        {
            text: "A) Milan schickt nicht das Passwort, aber seinen Benutzernamen.",
            type: "partial",
            evaluation: "Teilweise vorsichtig. Das Passwort nicht zu schicken ist gut, aber auch andere Kontodaten sollte er nicht an Fremde geben.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Milan löscht sofort das Spiel.",
            type: "partial",
            evaluation: "Teilweise sicher, aber sehr streng. Besser ist es, den offiziellen Support zu prüfen und das Konto zu schützen.",
            consequence: "Nichts."
        },
        {
            text: "C) Milan antwortet nicht und prüft über die Webseite oder App, ob es ein Problem gibt.",
            type: "correct",
            evaluation: "Sehr sicher. Echter Support fragt nicht nach Passwörtern, und Milan lässt sich nicht unter Druck setzen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Milan schreibt zurück: „Beweis erst mal, dass du vom Support bist.“",
            type: "wrong",
            evaluation: "Riskant. Eine Antwort kann dazu führen, dass der Betrüger weiter Druck macht oder neue Tricks versucht.",
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
    situation: "Lena findet ein neues Spiel in einem Online-Shop extrem billig. Die Seite sieht modern aus, aber es gibt kein Impressum, also keine klaren Infos darüber, wem der Shop gehört. Was sollte sie tun?",
    checklist: [
        "nicht sofort kaufen",
        "prüfen, wem der Shop gehört",
        "nicht nur auf modernes Aussehen vertrauen",
        "Preis kritisch sehen",
        "unabhängige Bewertungen suchen",
        "bekannte Händler nutzen"
    ],
    answers: [
        {
            text: "A) Lena kauft grundsätzlich keine Spiele online.",
            type: "partial",
            evaluation: "Teilweise sicher, aber zu streng. Online-Shopping ist nicht automatisch gefährlich, wenn man Shops gut prüft.",
            consequence: "Nichts."
        },
        {
            text: "B) Lena kauft nur, wenn eine bekannte Zahlungsmethode angeboten wird.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar. Eine sichere Zahlungsmethode allein macht einen verdächtigen Shop nicht vertrauenswürdig.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Lena kauft schnell, weil der mögliche Verlust klein ist.",
            type: "wrong",
            evaluation: "Riskant. Auch bei kleinen Käufen können Adresse, Zahlungsdaten oder andere private Daten missbraucht werden.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Lena kauft nicht direkt und prüft den Anbieter zuerst außerhalb der Shop-Seite.",
            type: "correct",
            evaluation: "Sehr sicher. Fehlendes Impressum, kaum Anbieterinfos und ein extrem niedriger Preis sind Warnzeichen.",
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
    situation: "Ella bekommt eine E-Mail: „Du hast ein Tablet gewonnen. Sende deinen Namen, deine Adresse und dein Geburtsdatum.“ Was sollte Ella tun?",
    checklist: [
        "nicht auf Gewinnversprechen reagieren",
        "keine privaten Daten senden",
        "Teilnahme prüfen",
        "Absender kontrollieren",
        "Erwachsene fragen",
        "verdächtige Mail als Spam melden"
    ],
    answers: [
        {
            text: "A) Ella antwortet nicht und prüft, ob sie überhaupt teilgenommen hat.",
            type: "correct",
            evaluation: "Sehr sicher. Wenn Ella bei keinem Gewinnspiel mitgemacht hat, ist die Nachricht wahrscheinlich ein Trick.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "B) Ella sendet nur ihren Namen.",
            type: "partial",
            evaluation: "Teilweise vorsichtig. Trotzdem sollte sie auf eine verdächtige Gewinnspiel-Mail gar nicht antworten.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Ella fragt zurück, von welchem Gewinnspiel die Mail kommt.",
            type: "wrong",
            evaluation: "Riskant. Eine Antwort kann zeigen, dass ihre E-Mail-Adresse aktiv ist.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Ella löscht die Mail sofort, ohne sie jemandem zu zeigen.",
            type: "partial",
            evaluation: "Teilweise sicher. Nicht zu antworten ist gut. Noch besser ist es, die Mail einem Erwachsenen zu zeigen oder als Spam zu melden.",
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
    situation: "Lea sieht auf einem Plakat vor der Schule: „Scanne den Code und gewinne Kopfhörer.“ Nach dem Scannen fragt die Seite nach Name, Adresse und E-Mail. Was sollte Lea tun?",
    checklist: [
        "QR-Codes wie Links behandeln",
        "prüfen, welche Webseite sich nach dem Scannen öffnet",
        "keine privaten Daten eingeben",
        "Gewinnversprechen kritisch sehen",
        "offizielle Aktion suchen"
    ],
    answers: [
        {
            text: "A) Lea schließt die Seite und scannt ab jetzt nie wieder QR-Codes.",
            type: "partial",
            evaluation: "Teilweise sicher, aber zu streng. QR-Codes sind nicht automatisch gefährlich, aber man muss prüfen, welche Webseite sich öffnet.",
            consequence: "Nichts."
        },
        {
            text: "B) Lea gibt keine Daten ein und prüft, ob die Aktion offiziell ist.",
            type: "correct",
            evaluation: "Sehr sicher. Lea behandelt den QR-Code wie einen unbekannten Link und gibt keine privaten Daten ein.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Lea gibt nur Vornamen und E-Mail ein.",
            type: "partial",
            evaluation: "Teilweise vorsichtig. Auch wenige Daten können für Spam, Werbung oder Betrug genutzt werden.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Lea gibt die Daten ein, weil die Seite professionell aussieht.",
            type: "wrong",
            evaluation: "Riskant. Gefälschte Seiten können professionell aussehen und echte Logos verwenden.",
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
    situation: "Eine Nachricht auf Pauls Handy sagt: „Dein Bankkonto oder Bezahlkonto wurde gesperrt. Melde dich sofort über diesen Link an.“ Die Nachricht sieht offiziell aus. Was sollte Paul tun?",
    checklist: [
        "nicht auf Bank-Links klicken",
        "keine Login-Daten eingeben",
        "offizielle App selbst öffnen",
        "Druck und Drohungen erkennen",
        "Erwachsene fragen"
    ],
    answers: [
        {
            text: "A) Paul löscht die Nachricht und ignoriert ab jetzt alle Banknachrichten.",
            type: "partial",
            evaluation: "Teilweise sicher, aber zu streng. Echte Banknachrichten können wichtig sein und sollten offiziell geprüft werden.",
            consequence: "Nichts."
        },
        {
            text: "B) Paul öffnet den Link, um zu schauen, ob das Banklogo stimmt.",
            type: "wrong",
            evaluation: "Riskant. Gefälschte Seiten können Logos, Farben und Namen nachmachen.",
            consequence: "Risiko +2."
        },
        {
            text: "C) Paul prüft das Konto über die offizielle Bank-App oder gibt die Webseite selbst ein.",
            type: "correct",
            evaluation: "Sehr sicher. Paul folgt nicht dem Link und gibt keine Login-Daten auf einer unbekannten Seite ein.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Paul gibt nur seine E-Mail-Adresse oder Kundennummer ein.",
            type: "wrong",
            evaluation: "Riskant. Auch einzelne Infos können Betrügern helfen, ein Konto anzugreifen oder glaubwürdiger zu wirken.",
            consequence: "Risiko +2."
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
    situation: "Ein Influencer sagt im Video: „Mit meinem Link bekommst du kostenlose Spielwährung.“ Auf der Seite soll Mia sich mit ihrem Spielkonto anmelden. Was sollte Mia tun?",
    checklist: [
        "Links aus Videos kritisch prüfen",
        "keine Login-Daten auf fremden Seiten eingeben",
        "Kommentare nicht als Beweis sehen",
        "Aktion im Spiel selbst prüfen",
        "bei Unsicherheit Erwachsene fragen"
    ],
    answers: [
        {
            text: "A) Mia meidet ab jetzt alle Links von Influencern.",
            type: "partial",
            evaluation: "Teilweise sicher, aber zu streng. Nicht jeder Influencer-Link ist gefährlich, aber Login-Daten auf fremden Seiten sind ein Warnzeichen.",
            consequence: "Nichts."
        },
        {
            text: "B) Mia meldet sich mit einem zweiten Account an.",
            type: "wrong",
            evaluation: "Riskant. Auch mit einem zweiten Account kann Mia Daten verlieren, auf eine Fake-Seite geraten oder Ärger mit dem Spielkonto bekommen.",
            consequence: "Risiko +2."
        },
        {
            text: "C) Mia liest Kommentare und fragt Freunde, ob der Link funktioniert.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar. Kommentare und Freunde beweisen nicht, dass eine Seite sicher ist.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Mia öffnet das Spiel und prüft dort, ob es die Aktion offiziell gibt.",
            type: "correct",
            evaluation: "Sehr sicher. Mia gibt keine Login-Daten auf einer fremden Seite ein und schützt so ihren Account, ihre Spielwährung und ihren Fortschritt.",
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
    situation: "Lukas bekommt von einem Freund eine Nachricht: „Schau dir dieses Video an!“ Der Link sieht komisch aus und der Text klingt anders als sonst. Was sollte Lukas tun?",
    checklist: [
        "Link nicht sofort anklicken",
        "ungewöhnliche Sprache beachten",
        "Freund über anderen Weg fragen",
        "keine Daten eingeben",
        "bei Verdacht Erwachsene informieren"
    ],
    answers: [
        {
            text: "A) Lukas öffnet den Link, weil der Freund sonst vertrauenswürdig ist.",
            type: "wrong",
            evaluation: "Riskant. Auch ein Konto von einem Freund kann gehackt sein.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Lukas fragt im gleichen Chat: „Hast du mir das wirklich geschickt?“",
            type: "partial",
            evaluation: "Teilweise vorsichtig. Nicht zu klicken ist gut. Aber wenn der Account gehackt wurde, antwortet vielleicht gar nicht der echte Freund.",
            consequence: "VOID bewegt 5 Felder vor."
        },
        {
            text: "C) Lukas öffnet den Link, gibt aber keine Daten ein.",
            type: "wrong",
            evaluation: "Riskant. Schon das Öffnen eines verdächtigen Links kann problematisch sein.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Lukas fragt den Freund über einen anderen Weg, ob die Nachricht echt ist.",
            type: "correct",
            evaluation: "Sehr sicher. Lukas prüft die Nachricht über einen zweiten Weg, bevor er dem Link vertraut. So schützt er seinen Account, seine Chats und seine Kontakte.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        }
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