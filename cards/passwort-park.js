cards["login-auf-fremdem-geraet"] = {
    district: "Passwort-Park",
    title: "Der Login auf fremdem Gerät",
    checklist: [
        "auf fremden Geräten kein Passwort speichern",
        "nach der Nutzung ausloggen",
        "prüfen, ob der Account wirklich abgemeldet ist",
        "bei Unsicherheit Passwort ändern",
        "möglichst nur auf eigenen oder vertrauenswürdigen Geräten einloggen"
    ],
    answers: [
        {
            text: "A) Wir bleiben eingeloggt, damit es beim nächsten Mal schneller geht.",
            evaluation: "Riskant. Andere Personen könnten auf den Account zugreifen.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir loggen uns danach aus und speichern das Passwort nicht.",
            evaluation: "Sehr sicher. Der Account bleibt besser geschützt.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir speichern das Passwort, weil es praktisch ist.",
            evaluation: "Sehr riskant. Auf fremden Geräten sollten Passwörter nicht gespeichert werden.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Wir löschen nur den Browserverlauf.",
            evaluation: "Teilweise riskant. Der Browserverlauf ersetzt kein Ausloggen und löscht keine gespeicherten Passwörter zuverlässig.",
            consequence: "Risiko +1."
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
    checklist: [
        "Zwei-Faktor-Schutz verstehen",
        "Zusatzcode nicht weitergeben",
        "Einrichtung mit Eltern besprechen",
        "Wiederherstellungsmöglichkeiten sicher aufbewahren",
        "besonders wichtige Konten zusätzlich schützen"
    ],
    answers: [
        {
            text: "A) Wir aktivieren den zusätzlichen Schutz und besprechen ihn mit Eltern.",
            evaluation: "Sehr sicher. Ein zweiter Faktor schützt den Account besser, auch wenn ein Passwort bekannt wird.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "B) Wir aktivieren ihn nicht, weil es länger dauert.",
            evaluation: "Teilweise riskant. Es ist etwas unbequemer, aber deutlich sicherer.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Wir geben den Code an Freunde weiter, wenn sie helfen wollen.",
            evaluation: "Sehr riskant. Auch Zwei-Faktor-Codes sind geheim.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Wir aktivieren ihn nur bei teuren Accounts.",
            evaluation: "Teilweise riskant. Auch E-Mail-, Schul- oder Spielkonten können wichtig sein.",
            consequence: "Risiko +1."
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
            text: "A) Wir lachen darüber, weil es ein peinlicher Fehler ist.",
            evaluation: "Riskant und unfair. Die Person braucht Hilfe, keinen Spott.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Wir warnen die Person und sagen, dass sie das Passwort sofort ändern soll.",
            evaluation: "Sehr sicher und fair. So wird der Account geschützt und die Person unterstützt.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir probieren schnell aus, ob das Passwort funktioniert.",
            evaluation: "Sehr riskant. Das wäre ein Missbrauch des fremden Accounts.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Wir ignorieren die Nachricht.",
            evaluation: "Teilweise riskant. Nicht mitmachen ist gut, aber die Person sollte gewarnt werden.",
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
            text: "A) Wir ignorieren es, vielleicht ist es ein Fehler.",
            evaluation: "Riskant. Wenn der Account fremde Nachrichten verschickt, sollte schnell gehandelt werden.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir ändern das Passwort, prüfen Sitzungen und holen Hilfe.",
            evaluation: "Sehr sicher. Der Account wird abgesichert und andere werden geschützt.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir bitten Freunde, auf die Nachrichten zu antworten.",
            evaluation: "Riskant. Dadurch könnten noch mehr Personen mit gefährlichen Links in Kontakt kommen.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Wir erstellen einen neuen Account und vergessen den alten.",
            evaluation: "Teilweise riskant. Der alte Account kann weiter missbraucht werden.",
            consequence: "Risiko +1."
        }
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
    checklist: [
        "keine leicht recherchierbaren Antworten nutzen",
        "echte Namen, Geburtstage und Haustiernamen vermeiden",
        "schwer erratbare Antwort sicher merken",
        "Antwort nicht öffentlich posten",
        "mit Eltern eine sichere Lösung finden"
    ],
    answers: [
        {
            text: "A) Wir nehmen den echten Haustiernamen.",
            evaluation: "Teilweise riskant. Haustiernamen stehen manchmal in Profilen oder können erraten werden.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Wir wählen eine schwer erratbare Antwort und merken sie sicher.",
            evaluation: "Sehr sicher. Sicherheitsfragen sollten nicht leicht erratbar sein.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir posten die Antwort öffentlich im Profil, damit wir sie nicht vergessen.",
            evaluation: "Sehr riskant. Dann können andere die Sicherheitsfrage beantworten.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Wir tragen immer „weiß nicht“ ein.",
            evaluation: "Teilweise riskant. Eine zufällige oder vergessene Antwort kann später Probleme machen.",
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
            text: "A) Er kann das Passwort geben, wenn er es danach sofort ändert.",
            evaluation: "Teilweise riskant. Auch kurz teilen kann reichen, damit etwas schiefgeht.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Er sollte das Passwort nicht teilen und seinem Freund den Gegenstand auf dem eigenen Gerät zeigen.",
            evaluation: "Sehr sicher. Jonas schützt seinen Account und findet trotzdem eine freundliche Lösung.",
            consequence: "+1 Sicherheits-Chip, +1 Zeit-Chip und möglicher Passwort-Profi Badge."
        },
        {
            text: "C) Er kann sich selbst einloggen und dem Freund das Gerät kurz überlassen.",
            evaluation: "Teilweise sicher. Das ist besser als Passwort teilen, aber Jonas sollte dabei bleiben und nichts Unklares zulassen.",
            consequence: "+1 Zeit-Chip."
        },
        {
            text: "D) Er kann ein einfaches Übergangspasswort erstellen und es später wieder ändern.",
            evaluation: "Riskant. Auch Übergangspasswörter können missbraucht oder vergessen werden.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
      {
        name: "Internet-ABC – Ein sicheres Passwort muss geheim sein",
        url: "https://www.internet-abc.de/kinder/hobby-freizeit/neues-uebers-netz/2021/sicheres-passwort/"
      },
      {
        name: "BSI – Umgang mit Passwörtern",
        url: "https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Sichere-Passwoerter-erstellen/Umgang-mit-Passwoertern/umgang-mit-passwoertern_node.html"
      }
    ]
};

cards["name-und-geburtsdatum"] = {
    district: "Passwort-Park",
    title: "Name und Geburtsdatum",
    checklist: [
        "keine Namen oder Geburtstage verwenden",
        "kein Passwort nutzen, das andere leicht erraten können",
        "langes Passwort oder Passphrase verwenden",
        "Passwort nicht wiederverwenden",
        "Passwort sicher merken oder Passwort-Manager nutzen"
    ],
    answers: [
        {
            text: "A) Sie sollte ihren Namen nutzen, aber Zahlen und Sonderzeichen hinzufügen.",
            evaluation: "Teilweise riskant. Persönliche Informationen bleiben trotz Sonderzeichen leichter erratbar.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Sie sollte ein langes, schwer zu erratendes Passwort oder eine Passphrase verwenden.",
            evaluation: "Sehr sicher. Länge und Unvorhersehbarkeit machen Passwörter stärker.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Sie sollte ein kurzes Passwort nehmen und es niemandem sagen.",
            evaluation: "Teilweise riskant. Geheim halten ist wichtig, aber kurze Passwörter sind oft schwach.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Sie sollte ein Passwort nehmen, das sie schon bei einem anderen Konto nutzt, damit sie es nicht vergisst.",
            evaluation: "Riskant. Wiederverwendete Passwörter gefährden mehrere Konten.",
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
            text: "A) Es ist nur problematisch, wenn Ben das Passwort jemandem erzählt.",
            evaluation: "Riskant. Passwörter können auch durch Datenlecks oder Phishing bekannt werden.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Es ist vor allem dann problematisch, wenn das Passwort kurz oder leicht zu erraten ist.",
            evaluation: "Teilweise richtig, aber unvollständig. Auch starke Passwörter sollten nicht überall gleich sein.",
            consequence: "+1 Zeit-Chip."
        },
        {
            text: "C) Wenn ein Konto gehackt wird, könnten auch die anderen Konten gefährdet sein.",
            evaluation: "Sehr sicher. Genau deshalb sind unterschiedliche Passwörter wichtig.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Es ist nur bei Konten problematisch, auf denen Zahlungsdaten gespeichert sind.",
            evaluation: "Riskant. Auch E-Mail-, Schul- oder Spielkonten können wichtig sein.",
            consequence: "Risiko +1."
        }
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