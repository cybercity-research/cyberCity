cards["gaming-gutschein"] = {
    district: "Betrugs-Basar",
    title: "Der Gaming-Gutschein",
    checklist: [
        "nicht sofort auf den Link klicken",
        "Absender und Link genau prüfen",
        "sich nicht durch „Nur heute!“ unter Druck setzen lassen",
        "keine persönlichen Daten eingeben",
        "bei Unsicherheit eine erwachsene Vertrauensperson fragen",
        "Nachricht nicht an andere weiterleiten"
    ],
    answers: [
        {
            text: "A) Wir klicken auf den Link, aber geben erstmal kein Passwort ein.",
            evaluation: "Teilweise riskant. Auch das Öffnen eines verdächtigen Links kann gefährlich sein.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Wir prüfen Absender und Link genau und fragen eine erwachsene Person, bevor wir etwas öffnen.",
            evaluation: "Sehr sicher. Erst prüfen, nicht unter Druck setzen lassen und Hilfe holen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir leiten die Nachricht an Freunde weiter, damit sie auch mitmachen können.",
            evaluation: "Riskant. Dadurch könnten auch andere in die Falle geraten.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Wir löschen die Nachricht sofort und erzählen niemandem davon.",
            evaluation: "Teilweise sicher. Löschen ist gut, aber bei solchen Nachrichten ist es besser, gemeinsam darüber zu sprechen.",
            consequence: "+1 Zeit-Chip."
        }
    ],
    helpSources: [
        {
            name: "BSI – Phishing erkennen",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Spam-Phishing-Co/Passwortdiebstahl-durch-Phishing/Wie-erkenne-ich-Phishing-in-E-Mails-und-auf-Webseiten/wie-erkenne-ich-phishing-in-e-mails-und-auf-webseiten_node.html"
        }
    ]
};

cards["falscher-paketdienst"] = {
    district: "Betrugs-Basar",
    title: "Der falsche Paketdienst",
    checklist: [
        "nicht auf den Link klicken",
        "prüfen, ob wirklich ein Paket erwartet wird",
        "keine Zahlungsdaten eingeben",
        "offizielle Paketdienst-Webseite selbst öffnen",
        "Erwachsene fragen",
        "verdächtige SMS nicht weiterleiten"
    ],
    answers: [
        {
            text: "A) Wir bezahlen die 1,99 €, weil es nur wenig Geld ist.",
            evaluation: "Riskant. Auch kleine Beträge können genutzt werden, um Zahlungsdaten zu stehlen.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir öffnen den Link und schauen, ob die Seite echt aussieht.",
            evaluation: "Teilweise riskant. Schon das Öffnen eines verdächtigen Links kann gefährlich sein.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Wir klicken nicht und prüfen gemeinsam, ob wirklich ein Paket erwartet wird.",
            evaluation: "Sehr sicher. Erst prüfen und nicht vorschnell Zahlungsdaten eingeben.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Wir schicken die SMS an andere und fragen, ob sie echt ist.",
            evaluation: "Riskant. Dadurch kann der gefährliche Link weiterverbreitet werden.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "BSI – Spam, Phishing & Co.",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Spam-Phishing-Co/spam-phishing-co_node.html"
        },
        {
            name: "Verbraucherzentrale – Phishing-Radar",
            url: "https://www.verbraucherzentrale.de/wissen/digitale-welt/phishingradar/phishingradar-aktuelle-warnungen-6059"
        }
    ]
};

cards["angeblicher-support"] = {
    district: "Betrugs-Basar",
    title: "Der angebliche Support",
    checklist: [
        "Passwort niemals weitergeben",
        "nicht auf Druck reagieren",
        "keine privaten Daten schicken",
        "offiziellen Support über die echte Webseite suchen",
        "Nachricht Erwachsenen zeigen",
        "Konto absichern, falls Daten eingegeben wurden"
    ],
    answers: [
        {
            text: "A) Wir schicken das Passwort, damit das Konto sicher bleibt.",
            evaluation: "Sehr riskant. Echter Support fragt nicht nach deinem Passwort.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir antworten nicht und suchen Hilfe über die offizielle Webseite.",
            evaluation: "Sehr sicher. Der Kontakt wird über einen vertrauenswürdigen Weg geprüft.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir schicken nur den Benutzernamen.",
            evaluation: "Teilweise riskant. Auch einzelne Kontodaten können für Betrug genutzt werden.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Wir schreiben zurück: „Beweise erst, dass du echt bist.“",
            evaluation: "Riskant. Antworten kann dazu führen, dass der Betrüger weiter Druck macht.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "BSI – Phishing erkennen",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Spam-Phishing-Co/Passwortdiebstahl-durch-Phishing/Wie-erkenne-ich-Phishing-in-E-Mails-und-auf-Webseiten/wie-erkenne-ich-phishing-in-e-mails-und-auf-webseiten_node.html"
        },
        {
            name: "BSI – Schutz gegen Phishing",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Spam-Phishing-Co/Passwortdiebstahl-durch-Phishing/Schutz-gegen-Phishing/schutz-gegen-phishing_node.html"
        }
    ]
};

cards["fake-shop"] = {
    district: "Betrugs-Basar",
    title: "Der Fake-Shop",
    checklist: [
        "nicht sofort kaufen",
        "Impressum prüfen",
        "Bewertungen außerhalb der Shop-Seite prüfen",
        "sichere Zahlungsmethoden prüfen",
        "auf sehr niedrige Preise achten",
        "bei Zweifel nicht kaufen",
        "Erwachsene fragen"
    ],
    answers: [
        {
            text: "A) Wir kaufen sofort, bevor das Angebot weg ist.",
            evaluation: "Riskant. Sehr günstige Angebote und Zeitdruck sind typische Warnzeichen.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir prüfen Bewertungen, Impressum und Zahlungsmethoden gemeinsam.",
            evaluation: "Sehr sicher. Der Shop wird erst geprüft, bevor Daten oder Geld eingegeben werden.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir kaufen nur, wenn Vorkasse möglich ist.",
            evaluation: "Sehr riskant. Vorkasse ist bei unbekannten Shops besonders gefährlich.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Wir speichern den Link und prüfen später allein.",
            evaluation: "Teilweise riskant. Später prüfen ist besser als sofort kaufen, aber allein kann man Warnzeichen übersehen.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "Verbraucherzentrale – Fakeshop-Finder",
            url: "https://www.verbraucherzentrale.de/fakeshopfinder-71560"
        }
    ]
};

cards["gewinnspiel-mail"] = {
    district: "Betrugs-Basar",
    title: "Die Gewinnspiel-Mail",
    checklist: [
        "nicht antworten",
        "keine Adresse, Geburtsdatum oder Kontaktdaten senden",
        "prüfen, ob man wirklich teilgenommen hat",
        "Absender kontrollieren",
        "Erwachsene fragen",
        "verdächtige Nachricht melden oder löschen"
    ],
    answers: [
        {
            text: "A) Wir senden die Daten, weil man sonst den Gewinn verliert.",
            evaluation: "Riskant. Der angebliche Gewinn erzeugt Druck, damit private Daten herausgegeben werden.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir senden nur den Vornamen.",
            evaluation: "Teilweise riskant. Auch kleine Informationen können Teil eines Betrugs sein.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Wir antworten nicht und prüfen mit Eltern, ob das Gewinnspiel echt ist.",
            evaluation: "Sehr sicher. Private Daten werden geschützt und die Nachricht gemeinsam geprüft.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Wir senden eine falsche Adresse.",
            evaluation: "Riskant. Auf Betrugsnachrichten zu reagieren ist keine gute Idee.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "Polizeiliche Kriminalprävention – falsche Gewinnversprechen",
            url: "https://www.polizei-beratung.de/themen-und-tipps/betrug/gewinnversprechen/"
        },
        {
            name: "BSI – Spam erkennen",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Spam-Phishing-Co/Spam/Woran-erkennt-man-Spam/woran-erkennt-man-spam_node.html"
        }
    ]
};

cards["freund-braucht-geld"] = {
    district: "Betrugs-Basar",
    title: "Der Freund braucht Geld",
    checklist: [
        "nicht sofort Geld oder Codes schicken",
        "über einen anderen Weg prüfen, ob die Nachricht echt ist",
        "auf ungewohnte Sprache achten",
        "Erwachsene fragen",
        "keine Codes, Zahlungsdaten oder Passwörter senden",
        "bei Betrugsverdacht melden"
    ],
    answers: [
        {
            text: "A) Wir helfen sofort und schicken den Gutschein-Code.",
            evaluation: "Sehr riskant. Gutschein-Codes können wie Geld gestohlen und sofort eingelöst werden.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir prüfen über einen anderen Weg, ob die Nachricht wirklich vom Freund kommt.",
            evaluation: "Sehr sicher. Die Nachricht wird überprüft, bevor Geld oder Codes verschickt werden.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir fragen nur, warum er Geld braucht.",
            evaluation: "Teilweise riskant. Betrüger können weitere Ausreden erfinden. Besser ist ein anderer Kontaktweg.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Wir ignorieren die Nachricht.",
            evaluation: "Teilweise sicher. Nichts zu schicken ist gut, aber der echte Freund könnte Hilfe brauchen oder sein Konto wurde übernommen.",
            consequence: "+1 Zeit-Chip."
        }
    ],
    helpSources: [
        {
            name: "Verbraucherzentrale – Phishing-Radar",
            url: "https://www.verbraucherzentrale.de/wissen/digitale-welt/phishingradar/phishingradar-aktuelle-warnungen-6059"
        },
        {
            name: "BSI – Spam, Phishing & Co.",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Spam-Phishing-Co/spam-phishing-co_node.html"
        }
    ]
};

cards["verdaechtiger-qr-code"] = {
    district: "Betrugs-Basar",
    title: "Der verdächtige QR-Code",
    checklist: [
        "QR-Codes wie Links behandeln",
        "Zielseite prüfen",
        "keine privaten Daten eingeben",
        "Gewinnversprechen kritisch sehen",
        "Erwachsene fragen",
        "Code nicht weiterverbreiten"
    ],
    answers: [
        {
            text: "A) Wir geben die Daten ein, weil QR-Codes meistens sicher sind.",
            evaluation: "Riskant. QR-Codes können zu gefährlichen oder gefälschten Webseiten führen.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir schließen die Seite und geben keine Daten ein.",
            evaluation: "Sicher. Keine Daten einzugeben schützt vor Missbrauch.",
            consequence: "+1 Sicherheits-Chip."
        },
        {
            text: "C) Wir prüfen erst mit einer erwachsenen Person, ob die Seite vertrauenswürdig ist.",
            evaluation: "Sehr sicher. Der QR-Code wird nicht blind vertraut, sondern gemeinsam geprüft.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Wir schicken den QR-Code an Freunde.",
            evaluation: "Riskant. Dadurch könnten auch andere auf die Datensammel-Seite gelangen.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "BSI – Phishing erkennen",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Spam-Phishing-Co/Passwortdiebstahl-durch-Phishing/Wie-erkenne-ich-Phishing-in-E-Mails-und-auf-Webseiten/wie-erkenne-ich-phishing-in-e-mails-und-auf-webseiten_node.html"
        }
    ]
};

cards["banknachricht"] = {
    district: "Betrugs-Basar",
    title: "Die Banknachricht",
    checklist: [
        "nicht auf den Link klicken",
        "keine Login-Daten eingeben",
        "offizielle Webseite selbst öffnen",
        "Erwachsene fragen",
        "auf Druck und Drohungen achten",
        "verdächtige Nachricht melden"
    ],
    answers: [
        {
            text: "A) Wir nutzen den Link, weil es dringend klingt.",
            evaluation: "Sehr riskant. Dringlichkeit wird oft benutzt, um Menschen zu schnellen Fehlern zu bringen.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir öffnen selbst die offizielle Webseite oder fragen Erwachsene.",
            evaluation: "Sehr sicher. Der Login erfolgt nicht über einen fremden Link.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir geben nur die E-Mail-Adresse ein.",
            evaluation: "Riskant. Auch einzelne Login-Daten können für Betrug genutzt werden.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Wir löschen die Nachricht, ohne darüber zu sprechen.",
            evaluation: "Teilweise sicher. Löschen schützt, aber gemeinsames Prüfen hilft beim Lernen und Erkennen.",
            consequence: "+1 Zeit-Chip."
        }
    ],
    helpSources: [
        {
            name: "BSI – Schutz gegen Phishing",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Spam-Phishing-Co/Passwortdiebstahl-durch-Phishing/Schutz-gegen-Phishing/schutz-gegen-phishing_node.html"
        }
    ]
};

cards["influencer-code"] = {
    district: "Betrugs-Basar",
    title: "Der Influencer-Code",
    checklist: [
        "nicht blind auf Werbelinks klicken",
        "prüfen, ob die Aktion offiziell ist",
        "keine Login-Daten auf fremden Seiten eingeben",
        "Kommentare nicht als Beweis sehen",
        "Erwachsene fragen",
        "kostenlose Versprechen kritisch prüfen"
    ],
    answers: [
        {
            text: "A) Wir melden uns an, weil der Influencer beliebt ist.",
            evaluation: "Riskant. Beliebtheit bedeutet nicht automatisch, dass ein Link sicher ist.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir prüfen, ob die Aktion offiziell vom Spielanbieter kommt.",
            evaluation: "Sehr sicher. Das Angebot wird über eine vertrauenswürdige Quelle überprüft.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir fragen Freunde, ob sie es ausprobiert haben.",
            evaluation: "Teilweise riskant. Freunde können sich irren oder selbst auf Betrug hereingefallen sein.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Wir erstellen einen zweiten Account dafür.",
            evaluation: "Riskant. Auch ein zweiter Account kann Daten, Geräte oder andere Konten gefährden.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "klicksafe – Influencer-Marketing und Werbung",
            url: "https://www.klicksafe.de/news/influencer-marketing-werbung-im-social-web"
        }
    ]
};

cards["konto-diebstahl-melden"] = {
    district: "Betrugs-Basar",
    title: "Konto-Diebstahl melden",
    checklist: [
        "Nachricht nicht anklicken",
        "keine Daten eingeben",
        "Beweise sichern, zum Beispiel Screenshot",
        "erwachsene Vertrauensperson informieren",
        "Plattform oder passende Meldestelle nutzen",
        "Passwort ändern, wenn Daten eingegeben wurden"
    ],
    answers: [
        {
            text: "A) Sie sollte die Nachricht löschen, damit niemand versehentlich darauf klickt.",
            evaluation: "Teilweise sicher. Löschen schützt sie selbst, aber Melden und Hilfe holen fehlen.",
            consequence: "+1 Zeit-Chip."
        },
        {
            text: "B) Sie sollte die Nachricht ignorieren, aber ihr Passwort vorsichtshalber ändern.",
            evaluation: "Teilweise sicher. Passwortschutz ist gut, aber die Nachricht sollte nicht einfach ignoriert werden.",
            consequence: "+1 Sicherheits-Chip."
        },
        {
            text: "C) Sie sollte die Nachricht nicht anklicken, Beweise sichern und einem Erwachsenen oder einer passenden Meldestelle zeigen.",
            evaluation: "Sehr sicher. Sie schützt sich und hilft, den Betrug sichtbar zu machen.",
            consequence: "+1 Sicherheits-Chip, +1 Zeit-Chip und möglicher Melde-Mut Badge."
        },
        {
            text: "D) Sie sollte dem Absender schreiben, dass sie weiß, dass es Betrug ist.",
            evaluation: "Riskant. Antworten kann zu mehr Kontakt oder Druck führen.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "BSI – Phishing erkennen",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Spam-Phishing-Co/Passwortdiebstahl-durch-Phishing/Wie-erkenne-ich-Phishing-in-E-Mails-und-auf-Webseiten/wie-erkenne-ich-phishing-in-e-mails-und-auf-webseiten_node.html"
        },
        {
            name: "BSI – Schutz gegen Phishing",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Spam-Phishing-Co/Passwortdiebstahl-durch-Phishing/Schutz-gegen-Phishing/schutz-gegen-phishing_node.html"
        }
    ]
};

cards["komischer-online-shop"] = {
    district: "Betrugs-Basar",
    title: "Der komische Online-Shop",
    checklist: [
        "nicht sofort Zahlungsdaten eingeben",
        "Impressum, Bewertungen und Sicherheitszeichen prüfen",
        "auf Rechtschreibfehler und Druck achten",
        "Erwachsene fragen",
        "sichere Zahlungsmethoden prüfen",
        "bei Zweifel nicht kaufen"
    ],
    answers: [
        {
            text: "A) Sie sollte erst mit einem Erwachsenen prüfen, ob die Webseite sicher und vertrauenswürdig ist.",
            evaluation: "Sehr sicher. Sophie stoppt rechtzeitig und prüft gemeinsam.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "B) Sie kann kaufen, wenn sie eine Zahlungsmethode mit Käuferschutz benutzt.",
            evaluation: "Teilweise sicher, aber nicht genug. Käuferschutz hilft, ersetzt aber keine Prüfung der Webseite.",
            consequence: "+1 Zeit-Chip."
        },
        {
            text: "C) Sie kann kaufen, wenn der Shop in den Suchergebnissen weit oben angezeigt wird.",
            evaluation: "Riskant. Suchergebnisse allein zeigen nicht, ob ein Shop seriös ist.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Sie sollte nur die nötigsten Zahlungsdaten eingeben und danach das Passwort ändern.",
            evaluation: "Riskant. Zahlungsdaten sollten gar nicht auf verdächtigen Seiten eingegeben werden.",
            consequence: "Risiko +2."
        }
    ],
    helpSources: [
        {
            name: "Verbraucherzentrale – Fakeshop-Finder",
            url: "https://www.verbraucherzentrale.de/fakeshopfinder-71560"
        },
        {
            name: "BSI – Phishing erkennen",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Spam-Phishing-Co/Passwortdiebstahl-durch-Phishing/Wie-erkenne-ich-Phishing-in-E-Mails-und-auf-Webseiten/wie-erkenne-ich-phishing-in-e-mails-und-auf-webseiten_node.html"
        }
    ]
};

cards["handy-gewinn"] = {
    district: "Betrugs-Basar",
    title: "Der Handy-Gewinn",
    checklist: [
        "Link nicht anklicken",
        "keine persönlichen Daten eingeben",
        "unbekannte Absender kritisch prüfen",
        "angebliche Gewinne hinterfragen",
        "Erwachsene informieren",
        "Nachricht melden oder löschen"
    ],
    answers: [
        {
            text: "A) Sie kann klicken, aber keine persönlichen Daten eingeben.",
            evaluation: "Teilweise riskant. Schon das Anklicken kann auf eine gefährliche Webseite führen.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Sie sollte den Link nicht anklicken und die Nachricht einem Erwachsenen zeigen.",
            evaluation: "Sehr sicher. Ella stoppt, prüft und holt Hilfe.",
            consequence: "+1 Sicherheits-Chip, +1 Zeit-Chip und möglicher Link-Detektiv Badge."
        },
        {
            text: "C) Sie kann erst googeln, ob andere auch so eine Nachricht bekommen haben.",
            evaluation: "Teilweise sicher. Nachschauen kann helfen, aber der Link aus der Nachricht sollte nicht geöffnet werden.",
            consequence: "+1 Zeit-Chip."
        },
        {
            text: "D) Sie sollte auf die E-Mail antworten und fragen, woher der Gewinn kommt.",
            evaluation: "Riskant. Antworten kann zeigen, dass die E-Mail-Adresse aktiv ist.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "Polizeiliche Kriminalprävention – falsche Gewinnversprechen",
            url: "https://www.polizei-beratung.de/themen-und-tipps/betrug/gewinnversprechen/"
        },
        {
            name: "BSI – Phishing erkennen",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Spam-Phishing-Co/Passwortdiebstahl-durch-Phishing/Wie-erkenne-ich-Phishing-in-E-Mails-und-auf-Webseiten/wie-erkenne-ich-phishing-in-e-mails-und-auf-webseiten_node.html"
        }
    ]
};

cards["komischer-link-vom-freund"] = {
    district: "Betrugs-Basar",
    title: "Der komische Link vom Freund",
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
            text: "A) Er sollte den Freund über einen anderen Weg fragen, ob er den Link wirklich geschickt hat.",
            evaluation: "Sehr sicher. Lukas prüft den Kontakt, ohne den Link zu öffnen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "B) Er kann den Link anklicken, weil er von einem bekannten Kontakt kommt.",
            evaluation: "Riskant. Auch bekannte Konten können gehackt sein.",
            consequence: "Risiko +2."
        },
        {
            text: "C) Er kann den Link öffnen, wenn er vorher keine persönlichen Daten eingibt.",
            evaluation: "Riskant. Auch ohne Dateneingabe kann ein gefährlicher Link problematisch sein.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Er sollte den Link öffnen, aber die Webseite sofort schließen, wenn sie komisch aussieht.",
            evaluation: "Riskant. Dann wurde der Link bereits geöffnet.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "BSI – Phishing erkennen",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Spam-Phishing-Co/Passwortdiebstahl-durch-Phishing/Wie-erkenne-ich-Phishing-in-E-Mails-und-auf-Webseiten/wie-erkenne-ich-phishing-in-e-mails-und-auf-webseiten_node.html"
        },
        {
            name: "BSI – Spam, Phishing & Co.",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Spam-Phishing-Co/spam-phishing-co_node.html"
        }
    ]
};