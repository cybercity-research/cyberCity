cards["login-auf-fremdem-geraet"] = {
    district: "Passwort-Park",
    title: "Der Login auf fremdem Gerät",
    situation: "Du meldest dich bei einem Freund auf dessen Tablet in deinem Account an. Nach dem Spielen fragt das Tablet, ob es dein Passwort speichern soll.",
    checklist: [
        "auf fremden Geräten kein Passwort speichern",
        "nach der Nutzung ausloggen",
        "prüfen, ob der Account wirklich abgemeldet ist",
        "bei Unsicherheit Passwort ändern",
        "möglichst nur auf eigenen oder vertrauenswürdigen Geräten einloggen"
    ],
    answers: [
        {
            text: "A) Wir wählen „Nicht speichern“ und melden uns nach dem Spielen wieder aus.",
            type: "correct",
            evaluation: "Sehr sicher. Das Passwort wird nicht auf einem fremden Gerät gespeichert, und der Account bleibt nach dem Spielen nicht offen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "B) Wir wählen „Nicht speichern“, bleiben aber eingeloggt, weil es das Tablet eines Freundes ist.",
            type: "partial",
            evaluation: "Teilweise sicher. Das Passwort nicht zu speichern ist gut. Trotzdem kann der Account offen bleiben, wenn man sich nicht ausloggt.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Wir melden uns aus und löschen danach den Browserverlauf.",
            type: "partial",
            evaluation: "Teilweise sicher. Ausloggen ist wichtig. Der Browserverlauf allein löscht aber nicht zuverlässig gespeicherte Passwörter oder andere Kontodaten. Man sollte auch prüfen, dass nichts gespeichert wurde.",
            consequence: "Nichts."
        },
        {
            text: "D) Wir speichern das Passwort nur, wenn unser Freund verspricht, nicht in den Account zu schauen.",
            type: "wrong",
            evaluation: "Riskant. Auch bei Freunden sollten Passwörter nicht auf fremden Geräten gespeichert werden. Andere Personen könnten das Gerät ebenfalls nutzen oder später Zugriff bekommen.",
            consequence: "Risiko +2."
        }
    ],
    helpSources: [
        {
            name: "BSI – Gemeinsam genutzte Geräte und sensible Vorgänge",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Basisschutz-fuer-Computer-Mobilgeraete/Basisschutz-fuer-Computer/Benutzerkonten/benutzerkonten.html"
        },
        {
            name: "BSI – Umgang mit Passwörtern",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Sichere-Passwoerter-erstellen/Umgang-mit-Passwoertern/umgang-mit-passwoertern_node.html"
        },
        {
            name: "Google-Konto-Hilfe – Geräte mit Kontozugriff ansehen",
            url: "https://support.google.com/accounts/answer/3067630?hl=de"
        }
    ]
};

cards["zwei-faktor-schutz"] = {
    district: "Passwort-Park",
    title: "Zwei-Faktor-Schutz",
    situation: "Ein Spiel bietet an, den Account mit einem zusätzlichen Code zu schützen. Dann reicht das Passwort allein nicht mehr aus, um sich anzumelden.",
    checklist: [
        "Zwei-Faktor-Schutz verstehen",
        "Zusatzcode nicht weitergeben",
        "Einrichtung mit Eltern besprechen",
        "Wiederherstellungsmöglichkeiten sicher aufbewahren",
        "besonders wichtige Konten zusätzlich schützen",
        "Codes nicht in Chats oder öffentlich speichern"
    ],
    answers: [
        {
            text: "A) Wir aktivieren den Schutz und machen einen Screenshot vom Wiederherstellungscode, damit wir ihn schnell wiederfinden.",
            type: "partial",
            evaluation: "Teilweise sicher. Den Schutz zu aktivieren ist gut. Ein Screenshot kann aber unsicher sein, wenn andere Zugriff auf Fotos, Cloud-Speicher oder das Gerät bekommen. Wiederherstellungscodes sollten besonders geschützt aufbewahrt werden.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Wir aktivieren den zusätzlichen Schutz und bewahren die Wiederherstellungsinfos sicher auf.",
            type: "correct",
            evaluation: "Sehr sicher. Ein zweiter Faktor schützt den Account besser, falls das Passwort bekannt wird. Wichtig ist, Zusatzcodes nicht weiterzugeben und Wiederherstellungsmöglichkeiten sicher aufzubewahren.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir aktivieren den Schutz nur bei Accounts, in denen Geld, Käufe oder seltene Spielgegenstände gespeichert sind.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar. Solche Accounts sind besonders wichtig. Aber auch E-Mail-, Schul- oder Spielkonten ohne Geld können wertvoll sein und sollten gut geschützt werden.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Wir lassen den Schutz aus und nehmen lieber ein längeres Passwort, das wir uns gut merken können.",
            type: "wrong",
            evaluation: "Riskant. Ein Passwort kann erraten werden. Gerade wichtige Accounts sind mit einem starken Passwort und zusätzlichem Schutz besser gesichert.",
            consequence: "Risiko +2."
        }
    ],
    helpSources: [
        {
            name: "BSI – Zwei-Faktor-Authentisierung",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Zwei-Faktor-Authentisierung/zwei-faktor-authentisierung_node.html"
        },
        {
            name: "Verbraucherzentrale – Zwei-Faktor-Authentisierung: So schützen Sie Ihre Accounts",
            url: "https://www.verbraucherzentrale.de/wissen/digitale-welt/datenschutz/zweifaktorauthentisierung-so-schuetzen-sie-ihre-accounts-85173"
        }
    ]
};

cards["passwort-im-klassenchat"] = {
    district: "Passwort-Park",
    title: "Passwort im Klassenchat",
    situation: "Jemand schreibt versehentlich sein Passwort in den Klassenchat. Einige machen sich darüber lustig. Andere überlegen, ob sie ausprobieren sollen, ob es funktioniert.",
    checklist: [
        "nicht ausprobieren",
        "nicht weiterleiten",
        "Person warnen",
        "Passwort sofort ändern lassen",
        "bei Bedarf Erwachsene oder Lehrkraft informieren",
        "fair bleiben und nicht bloßstellen"
    ],
    answers: [
        {
            text: "A) Wir löschen die Nachricht bei uns und tun so, als hätten wir sie nicht gesehen.",
            type: "partial",
            evaluation: "Teilweise fair. Nicht weiterzuleiten und nicht darüber zu lachen ist gut. Aber die Person sollte schnell erfahren, dass ihr Passwort sichtbar war, damit sie es ändern kann.",
            consequence: "Nichts."
        },
        {
            text: "B) Wir testen das Passwort nicht, schicken aber einen Screenshot an Freunde, damit sie Bescheid wissen.",
            type: "wrong",
            evaluation: "Riskant und unfair. Auch ohne Einloggen wird das Passwort dadurch weiterverbreitet. Passwörter sollten nicht geteilt oder herumgeschickt werden.",
            consequence: "Risiko +2."
        },
        {
            text: "C) Wir schreiben der Person privat, dass das Passwort im Chat steht, und sagen ihr, dass sie es sofort ändern sollte.",
            type: "correct",
            evaluation: "Sehr sicher und fair. Ihr nutzt das Passwort nicht aus, stellt die Person nicht bloß und helft dabei, den Account schnell zu schützen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Wir schreiben in den Gruppenchat, dass alle das Passwort ignorieren sollen.",
            type: "partial",
            evaluation: "Teilweise gut gemeint, aber nicht ideal. Dadurch wird noch mehr Aufmerksamkeit auf das Passwort gelenkt. Besser ist es, die Person direkt und möglichst unauffällig zu warnen.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "BSI – Umgang mit Passwörtern",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Sichere-Passwoerter-erstellen/Umgang-mit-Passwoertern/umgang-mit-passwoertern_node.html"
        },
        {
            name: "BSI – Sichere Passwörter erstellen",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Sichere-Passwoerter-erstellen/sichere-passwoerter-erstellen_node.html"
        },
        {
            name: "klicksafe – Datenschutz und Privatsphäre",
            url: "https://www.klicksafe.de/privatsphaere-und-big-data"
        }
    ]
};

cards["account-uebernommen"] = {
    district: "Passwort-Park",
    title: "Der Account wurde übernommen",
    situation: "Dein Account verschickt Nachrichten, die du nicht geschrieben hast. Freunde fragen dich, warum du ihnen komische Links geschickt hast.",
    checklist: [
        "Passwort sofort ändern",
        "aktive Sitzungen prüfen und abmelden",
        "Zwei-Faktor-Schutz aktivieren",
        "Freunde warnen",
        "Erwachsene um Hilfe bitten",
        "verdächtige Nachrichten melden"
    ],
    answers: [
        {
            text: "A) Wir antworten den Freunden, dass sie die Links öffnen sollen, damit sie sehen, ob wirklich etwas komisch ist.",
            type: "wrong",
            evaluation: "Riskant. Dadurch könnten noch mehr Personen auf gefährliche Links klicken. Bei verdächtigen Nachrichten sollte man andere warnen, nicht zum Testen auffordern.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir löschen die App vom Handy und warten ab, ob keine weiteren Nachrichten verschickt werden.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar, aber nicht ausreichend. Die App zu löschen kann Abstand schaffen, aber der Account bleibt online und kann weiter missbraucht werden. Das Passwort und aktive Sitzungen müssen geprüft werden.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Wir erstellen sofort einen neuen Account und schreiben allen, dass sie den alten ignorieren sollen.",
            type: "partial",
            evaluation: "Teilweise sicher, aber unvollständig. Freunde zu warnen ist gut. Der alte Account kann aber weiter missbraucht werden, wenn er nicht abgesichert, gemeldet oder zurückgeholt wird.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Wir ändern sofort das Passwort, melden fremde Sitzungen ab und warnen Freunde, nicht auf die Links zu klicken.",
            type: "correct",
            evaluation: "Sehr sicher. Der Account wird schnell abgesichert und andere werden vor den verschickten Links gewarnt. Wenn es nicht klappt, sollte man Hilfe holen oder den Support nutzen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
    ],
    helpSources: [
        {
            name: "BSI – Notfallplan gehacktes E-Mail-Konto",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Identitaetsdiebstahl/Hilfe-fuer-Betroffene/hilfe-fuer-betroffene_node.html"
        },
        {
            name: "BSI – Gehackter Account: Der Fremde im eigenen Social-Media-Konto",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Wie-geht-Internet/Identitaetsdiebstahl-Social-Media/identitaetsdiebstahl-social-media.html"
        },
        {
            name: "Verbraucherzentrale – Erste Hilfe bei gehackten Online-Konten",
            url: "https://www.verbraucherzentrale.de/wissen/digitale-welt/phishingradar/erste-hilfe-bei-gehackten-onlinekonten-63228"
        }
    ]
};

cards["sicherheitsfrage"] = {
    district: "Passwort-Park",
    title: "Sicherheitsfrage",
    situation: "Eine Webseite fragt als Sicherheitsfrage: „Wie heißt dein Haustier?“",
    checklist: [
        "keine leicht recherchierbaren Antworten nutzen",
        "echte Namen, Geburtstage und Haustiernamen vermeiden",
        "schwer erratbare Antwort sicher merken",
        "Antwort nicht öffentlich posten",
        "mit Eltern eine sichere Lösung finden"
    ],
    answers: [
        {
            text: "A) Wir nehmen den echten Haustiernamen, weil man die Frage ehrlich beantworten soll.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar, aber riskant. Sicherheitsfragen sollen zwar später wiedererkennbar sein, aber echte Haustiernamen können erraten oder aus Profilen herausgefunden werden.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Wir nutzen eine schwer erratbare Antwort und bewahren sie sicher auf, zum Beispiel zusammen mit den Kontoinformationen.",
            type: "correct",
            evaluation: "Sehr sicher. Die Antwort muss nicht leicht erratbar oder öffentlich bekannt sein. Wichtig ist, dass sie schwer zu erraten ist und später zuverlässig wiedergefunden werden kann.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir nehmen eine lustige Fantasieantwort, erzählen sie aber auch Freunden, damit sie uns erinnern können.",
            type: "wrong",
            evaluation: "Riskant. Eine schwer erratbare Antwort ist nur dann sicher, wenn sie geheim bleibt. Freunde sollten Sicherheitsantworten nicht kennen.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Wir schreiben bei jeder Sicherheitsfrage dieselbe kurze Antwort, damit wir sie nie vergessen.",
            type: "partial",
            evaluation: "Teilweise praktisch, aber nicht ideal. Eine kurze gleiche Antwort kann leichter erraten oder bei mehreren Konten missbraucht werden. Besser ist eine schwer erratbare Antwort, die sicher aufbewahrt wird.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "Okta – Sicherheitsfragen: Best Practices",
            url: "https://www.okta.com/de-de/blog/identity-security/security-questions/"
        },
        {
            name: "BSI – Accountschutz",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/accountschutz_node.html"
        }
    ]
};

cards["freund-will-passwort"] = {
    district: "Passwort-Park",
    title: "Der Freund will das Passwort",
    situation: "Jonas’ bester Freund möchte sich kurz mit Jonas’ Account in einem Spiel anmelden, weil er einen seltenen Gegenstand anschauen will. Jonas vertraut seinem Freund, ist sich aber unsicher.",
    checklist: [
        "Passwort nicht teilen",
        "Account nicht aus der Hand geben",
        "freundliche Alternative anbieten",
        "Gegenstand auf dem eigenen Gerät zeigen",
        "erklären, dass Passwortschutz nichts mit Misstrauen zu tun hat",
        "bei bereits geteiltem Passwort Passwort ändern"
    ],
    answers: [
        {
            text: "A) Jonas loggt sich selbst ein und zeigt den Gegenstand auf seinem eigenen Gerät, ohne sein Passwort weiterzugeben.",
            type: "correct",
            evaluation: "Sehr sicher. Jonas schützt seinen Account und findet trotzdem eine freundliche Lösung. Ein Passwort geheim zu halten bedeutet nicht, dass er seinem Freund misstraut.",
            consequence: "+1 Sicherheits-Chip, +1 Zeit-Chip und möglicher Passwort-Profi Badge."
        },
        {
            text: "B) Jonas gibt das Passwort nur kurz weiter und ändert es direkt danach.",
            type: "partial",
            evaluation: "Teilweise vorsichtig, aber riskant. Das Passwort danach zu ändern ist besser als es dauerhaft zu teilen. Trotzdem kann schon ein kurzer Zugriff reichen, damit etwas verändert, weitergegeben oder missbraucht wird.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Jonas erstellt ein einfaches Übergangspasswort, damit sein richtiges Passwort geheim bleibt.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar, aber nicht sicher genug. Ein Übergangspasswort schützt vielleicht das alte Passwort, gibt aber trotzdem Zugriff auf den Account. Besser ist es, den Account nicht aus der Hand zu geben.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Jonas lässt seinen Freund allein an seinem Gerät spielen, weil das Passwort dann nicht verraten wird.",
            type: "wrong",
            evaluation: "Riskant. Das Passwort bleibt zwar geheim, aber der Account ist trotzdem unbeaufsichtigt offen. Der Freund könnte aus Versehen oder absichtlich Einstellungen ändern, Käufe machen oder Nachrichten schreiben.",
            consequence: "Risiko +2."
        }
    ],
    helpSources: [
        {
            name: "Internet-ABC – Ein sicheres Passwort muss geheim sein",
            url: "https://www.internet-abc.de/kinder/hobby-freizeit/neues-uebers-netz/2021/sicheres-passwort/"
        },
        {
            name: "BSI – Umgang mit Passwörtern",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Sichere-Passwoerter-erstellen/Umgang-mit-passwoertern/umgang-mit-passwoertern_node.html"
        }
    ]
};

cards["name-und-geburtsdatum"] = {
    district: "Passwort-Park",
    title: "Name und Geburtsdatum",
    situation: "Leyla erstellt ein neues Passwort. Sie überlegt, ihren Vornamen und ihr Geburtsdatum zu benutzen, damit sie es sich gut merken kann.",
    checklist: [
        "keine Namen oder Geburtstage verwenden",
        "kein Passwort nutzen, das andere leicht erraten können",
        "langes Passwort oder Passphrase verwenden",
        "Passwort nicht wiederverwenden",
        "Passwort sicher merken oder Passwort-Manager nutzen"
    ],
    answers: [
        {
            text: "A) Leyla nimmt ihren Namen und Geburtstag, ersetzt aber ein paar Buchstaben durch Zahlen und Sonderzeichen.",
            type: "partial",
            evaluation: "Teilweise besser als nur Name und Geburtstag, aber immer noch riskant. Persönliche Informationen bleiben leichter erratbar, auch wenn einzelne Zeichen verändert werden.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Leyla nimmt ein kurzes Passwort, das sie niemandem sagt und nicht aufschreibt.",
            type: "partial",
            evaluation: "Teilweise richtig. Ein Passwort geheim zu halten ist wichtig. Wenn es aber kurz ist, kann es trotzdem leichter erraten oder geknackt werden.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Leyla denkt sich einen längeren Merksatz aus, der nichts mit ihrem Namen, Geburtstag oder Profil zu tun hat.",
            type: "correct",
            evaluation: "Sehr sicher. Ein längerer Merksatz kann gut merkbar und trotzdem schwer zu erraten sein. Persönliche Daten wie Name oder Geburtstag sollten nicht im Passwort vorkommen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Leyla nimmt ein Passwort, das sie schon bei einem anderen Konto nutzt, und fügt hinten eine neue Zahl an.",
            type: "wrong",
            evaluation: "Riskant. Wiederverwendete oder nur leicht veränderte Passwörter können mehrere Konten gefährden, wenn eines davon bekannt wird.",
            consequence: "Risiko +2."
        }
    ],
    helpSources: [
        {
            name: "Internet-ABC – Ein wasserdichtes Passwort",
            url: "https://www.internet-abc.de/kinder/hobby-freizeit/surfratgeber/ein-wasserdichtes-passwort/"
        },
        {
            name: "BSI – Sichere Passwörter erstellen",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Sichere-Passwoerter-erstellen/sichere-passwoerter-erstellen_node.html"
        }
    ]
};

cards["passwort-fuer-mehrere-konten"] = {
    district: "Passwort-Park",
    title: "Ein Passwort für mehrere Konten",
    situation: "Ben benutzt dasselbe Passwort für sein Spielkonto, seine E-Mail und eine Lernplattform. Er findet das praktisch, weil er es sich gut merken kann.",
    checklist: [
        "nicht dasselbe Passwort überall verwenden",
        "verstehen, dass ein gehacktes Konto andere Konten gefährden kann",
        "unterschiedliche Passwörter nutzen",
        "E-Mail-Konto besonders schützen",
        "Passwort-Manager oder Familienlösung überlegen",
        "Zwei-Faktor-Schutz nutzen, wenn möglich"
    ],
    answers: [
         {
            text: "A) Ben schreibt sein gemeinsames Passwort in eine private Chatnachricht an sich selbst, damit er es nicht vergisst.",
            type: "wrong",
            evaluation: "Riskant. Passwörter sollten nicht in Chats gespeichert werden. Außerdem bleibt das Problem bestehen, dass ein einziges bekanntes Passwort mehrere Konten gefährden kann.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Ben behält das Passwort, solange es lang ist und er es niemandem erzählt.",
            type: "partial",
            evaluation: "Teilweise richtig. Ein langes und geheimes Passwort ist besser als ein kurzes. Trotzdem sollte dasselbe Passwort nicht für mehrere Konten genutzt werden, weil es durch Datenlecks oder Phishing bekannt werden kann.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Ben nutzt dasselbe Passwort nur für unwichtige Konten und ein anderes für Konten mit Geld.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar, aber unvollständig. Konten mit Geld sind besonders wichtig. Aber auch E-Mail-, Schul-, Lern- oder Spielkonten können wertvoll sein und andere Konten gefährden.",
            consequence: "Risiko +1."
        },
        {
            text: "A) Ben ändert zuerst das E-Mail-Passwort und nutzt danach für wichtige Konten unterschiedliche Passwörter.",
            type: "correct",
            evaluation: "Sehr sicher. Wenn ein Passwort mehrfach genutzt wird, können mehrere Konten gefährdet sein. Das E-Mail-Konto ist besonders wichtig, weil darüber oft andere Konten zurückgesetzt werden können.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
    ],
    helpSources: [
        {
            name: "BSI – Passwort-Manager",
            url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Sichere-Passwoerter-erstellen/Passwort-Manager/passwort-manager_node.html"
        },
        {
            name: "Verbraucherzentrale – Starke Passwörter erstellen",
            url: "https://www.verbraucherzentrale.de/wissen/digitale-welt/datenschutz/starke-passwoerter-erstellen-so-schuetzen-sie-ihre-onlinekonten-effektiv-11672"
        },
        {
            name: "Internet-ABC – Ein wasserdichtes Passwort",
            url: "https://www.internet-abc.de/kinder/hobby-freizeit/surfratgeber/ein-wasserdichtes-passwort/"
        }
    ]
};