cards["peinliches-klassenfoto"] = {
    district: "Social-Media-Platz",
    title: "Das peinliche Klassenfoto",
    situation: "Im Klassenchat wird ein peinliches Foto von Tim geteilt. Einige lachen und schreiben: „Schick es weiter!“. Was sollte Leon tun?",
    checklist: [
        "Foto nicht weiterleiten",
        "nicht mitlachen",
        "betroffene Person unterstützen",
        "bei Bedarf Hilfe holen"
    ],
    answers: [
        {
            text: "A) Er schaut nur zu und schreibt nichts.",
            type: "partial",
            evaluation: "Teilweise sicher. Nicht mitzumachen ist gut, aber Tim braucht vielleicht Unterstützung.",
            consequence: "VOID bewegt 2 Felder vor."
        },
        {
            text: "B) Er leitet das Foto nicht weiter, widerspricht fair und holt Hilfe, wenn es weitergeht.",
            type: "correct",
            evaluation: "Sehr sicher und fair. Das Foto wird nicht weiterverbreitet und Tim wird unterstützt. So schützt Leon auch Tims Würde und seinen Ruf in der Klasse.",
            consequence: "+1 Sicherheits-Chip, +1 Zeit-Chip und möglicher Fair-online Badge."
        },
        {
            text: "C) Er macht einen Screenshot und schickt ihn an Freunde.",
            type: "wrong",
            evaluation: "Riskant. Dadurch wird das peinliche Bild weiterverbreitet.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Er schreibt Tim privat, dass er nicht allein ist, unternimmt aber sonst nichts.",
            type: "partial",
            evaluation: "Teilweise unterstützend. Tim privat zu stärken ist gut, aber wenn das Foto weitergeteilt wird, sollte Leon zusätzlich Hilfe holen.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "klicksafe – Cybermobbing",
            url: "https://www.klicksafe.de/cybermobbing"
        },
        {
            name: "klicksafe – Recht am eigenen Bild",
            url: "https://www.klicksafe.de/news/vorsicht-beim-posten-von-bildern-und-videos"
        },
        {
            name: "SCHAU HIN! – Cybermobbing erkennen und handeln",
            url: "https://www.schau-hin.info/cybermobbing"
        },
        {
            name: "Nummer gegen Kummer – Kinder- und Jugendberatung",
            url: "https://www.nummergegenkummer.de/kinder-und-jugendberatung/"
        }
    ]
};

cards["geruecht-im-chat"] = {
    district: "Social-Media-Platz",
    title: "Das Gerücht im Chat",
    situation: "Josie bekommt eine Nachricht: „Cindy ist in Brian verliebt! Sag es weiter.“ Josie weiß nicht, ob das stimmt. Was sollte sie tun?",
    checklist: [
        "Gerücht nicht weiterleiten",
        "niemanden bloßstellen",
        "Privatsphäre respektieren",
        "klar sagen: Das ist privat"
    ],
    answers: [
        {
            text: "A) Sie leitet es nicht weiter und schreibt: „Das ist privat.“",
            type: "correct",
            evaluation: "Sehr sicher und fair. Josie schützt Cindys Privatsphäre und stoppt das Gerücht.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "B) Sie löscht die Nachricht und macht nicht mit.",
            type: "partial",
            evaluation: "Teilweise sicher. Nicht mitzumachen ist gut, aber ein klarer Stopp kann noch besser helfen.",
            consequence: "VOID bewegt 2 Felder vor."
        },
        {
            text: "C) Sie fragt Cindy vorsichtig privat, ob alles okay ist, ohne das Gerücht weiterzuerzählen.",
            type: "partial",
            evaluation: "Gut gemeint, aber heikel. Cindy könnte sich dadurch zusätzlich unwohl fühlen.",
            consequence: "VOID bewegt 4 Felder vor."
        },
        {
            text: "D) Sie fragt Brian heimlich, ob das Gerücht stimmt.",
            type: "wrong",
            evaluation: "Riskant. Dadurch wird das Gerücht weitergetragen.",
            consequence: "Risiko +2."
        }
    ],
    helpSources: [
        {
            name: "klicksafe – Regeln für ein respektvolles Miteinander im Klassenchat",
            url: "https://www.klicksafe.de/news/regeln-fuer-ein-respektvolles-miteinander-im-klassenchat"
        },
        {
            name: "SCHAU HIN! – WhatsApp-Gruppenchats für Kinder",
            url: "https://www.schau-hin.info/grundlagen/whatsapp-gruppenchats-fuer-kinder"
        },
        {
            name: "SCHAU HIN! – Messenger-Apps erobern den Klassenraum",
            url: "https://www.schau-hin.info/grundlagen/messenger-apps-erobern-den-klassenraum"
        }
    ]
};

cards["teamchat-nach-dem-spiel"] = {
    district: "Social-Media-Platz",
    title: "Der Teamchat nach dem Spiel",
    situation: "Joel sieht im Teamchat, dass Matt beleidigt wird, weil er im Basketballspiel den entscheidenden Wurf verfehlt hat. Was sollte Joel tun?",
    checklist: [
        "nicht mitbeleidigen",
        "fair widersprechen",
        "betroffene Person unterstützen",
        "bei Bedarf Erwachsene informieren"
    ],
    answers: [
        {
            text: "A) Er schreibt Matt privat, dass er auf seiner Seite ist.",
            type: "partial",
            evaluation: "Teilweise unterstützend. Wenn die Gruppe weitermacht, sollte Joel zusätzlich Hilfe holen.",
            consequence: "VOID bewegt 1 Feld vor."
        },
        {
            text: "B) Er macht Screenshots und schickt sie in einen anderen Gruppenchat.",
            type: "wrong",
            evaluation: "Riskant. Dadurch wird die Situation weiterverbreitet. Wenn Beweise nötig sind, sollte Joel sie nur einer erwachsenen Vertrauensperson zeigen.",
            consequence: "Risiko +2."
        },
        {
            text: "C) Er schreibt ruhig, dass persönliche Angriffe unfair sind, und holt Hilfe, wenn es weitergeht.",
            type: "correct",
            evaluation: "Sehr sicher und fair. Joel macht nicht mit und setzt eine klare Grenze.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Er macht einen Witz über den verfehlten Wurf.",
            type: "partial",
            evaluation: "Gut gemeint, aber riskant. Auch ein Witz kann Matt noch mehr verletzen.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "klicksafe – Cybermobbing",
            url: "https://www.klicksafe.de/cybermobbing"
        },
        {
            name: "SCHAU HIN! – WhatsApp-Gruppenchats für Kinder",
            url: "https://www.schau-hin.info/grundlagen/whatsapp-gruppenchats-fuer-kinder"
        }
    ]
};

cards["bilder-fuer-praesentation"] = {
    district: "Social-Media-Platz",
    title: "Die Bilder für die Präsentation",
    situation: "Jo und Matt brauchen Bilder für eine Schulpräsentation. Im Internet finden sie viele passende Fotos, sind aber unsicher, ob sie diese einfach kopieren dürfen. Was sollen sie tun?",
    checklist: [
           "prüfen, ob man die Bilder benutzen darf",
            "freie Bildquellen nutzen",
            "Quelle angeben",
            "bei Unsicherheit Lehrkraft fragen"
    ],
    answers: [
        {
            text: "A) Sie geben die Quelle an und nutzen die Bilder.",
            type: "partial",
            evaluation: "Teilweise richtig. Eine Quellenangabe bedeutet nicht automatisch, dass die Nutzung erlaubt ist.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Sie nutzen die Bilder, weil die Präsentation nur in der Schule gezeigt wird.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar. Trotzdem sollten sie prüfen, ob die Nutzung erlaubt ist.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Sie bearbeiten die Bilder mit Filtern, damit sie als eigene Bilder gelten.",
            type: "wrong",
            evaluation: "Riskant. Bearbeiten macht ein Bild nicht automatisch frei nutzbar.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Sie suchen frei nutzbare Bilder und geben die Quelle korrekt an.",
            type: "correct",
            evaluation: "Sehr sicher. So nutzen sie Bilder, die erlaubt sind, und geben trotzdem an, woher sie kommen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        }
    ],
    helpSources: [
        {
            name: "Internet-ABC – Text und Bild: kopieren und weitergeben",
            url: "https://www.internet-abc.de/lernmodul-text-bild-urheberrecht/"
        },
        {
            name: "Internet-ABC – Urheberrecht in der Schule",
            url: "https://www.internet-abc.de/lehrkraefte/praxishilfen/urheberrecht-in-der-schule/"
        }
    ]
};

cards["digitaler-fussabdruck"] = {
    district: "Social-Media-Platz",
    title: "Der digitale Fußabdruck",
    situation: "Mia fragt sich, welchen Eindruck ihre Online-Profile machen. Vielleicht sehen später auch Schulen, Vereine oder Arbeitgeber alte Posts. Was sollte sie tun?",
    checklist: [
        "sichtbare Inhalte prüfen",
        "alte Posts aufräumen",
        "Privatsphäre-Einstellungen kontrollieren",
        "bewusst posten"
    ],
    answers: [
        {
            text: "A) Sie schaut ihr Profil so an, wie andere es sehen, und löscht oder versteckt zu persönliche oder peinliche Inhalte.",
            type: "correct",
            evaluation: "Sehr sicher. Mia schützt ihren digitalen Ruf und entscheidet bewusst, welche Erinnerungen, Fotos und Posts andere sehen können.",
            consequence: "+1 Sicherheits-Chip, +1 Zeit-Chip und möglicher Datenschutz-Badge."
        },
        {
            text: "B) Sie löscht sofort alle Konten.",
            type: "partial",
            evaluation: "Teilweise sicher, aber sehr streng. Oft reichen bessere Einstellungen und bewusstes Aufräumen.",
            consequence: "Nichts."
        },
        {
            text: "C) Sie postet besonders viele perfekte Bilder.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar, aber nicht ideal. Ein perfektes Profil schützt nicht automatisch die Privatsphäre.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Sie lässt alles so, weil alte Posts später niemanden interessieren.",
            type: "wrong",
            evaluation: "Riskant. Online-Inhalte können lange sichtbar bleiben oder weitergegeben werden.",
            consequence: "Risiko +2."
        }
    ],
    helpSources: [
        {
            name: "SCHAU HIN! – Diese Chancen bieten soziale Medien",
            url: "https://www.schau-hin.info/grundlagen/diese-chancen-bieten-soziale-medien"
        },
        {
            name: "SCHAU HIN! – Soziale Netzwerke: Sicherheit für Kinder",
            url: "https://www.schau-hin.info/soziale-netzwerke"
        },
        {
            name: "Internet-ABC – Datenschutz: Das bleibt privat",
            url: "https://www.internet-abc.de/kinder/lernen-schule/lernmodule/datenschutz-das-bleibt-privat/"
        },
        {
            name: "klicksafe – Datenschutz und Privatsphäre",
            url: "https://www.klicksafe.de/privatsphaere-und-big-data"
        }
    ]
};

cards["foto-soll-weg"] = {
    district: "Social-Media-Platz",
    title: "Das Foto soll weg",
    situation: "Auf dem Profil eines Freundes erscheint ein Foto von Romy im Schlafanzug. Sie wusste nicht, dass es gemacht wurde, und möchte, dass es verschwindet. Was sollte sie tun?",
    checklist: [
        "ruhig bleiben",
        "Löschung verlangen",
        "nicht weiterverbreiten",
        "Meldeweg nutzen",
        "Hilfe holen"
    ],
    answers: [
        {
            text: "A) Sie schreibt wütend unter das Foto.",
            type: "partial",
            evaluation: "Verständlich, aber riskant. Ein öffentlicher Streit kann noch mehr Aufmerksamkeit erzeugen.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Sie bittet um Löschung und nutzt die Meldefunktion, wenn es nicht entfernt wird.",
            type: "correct",
            evaluation: "Sehr sicher. Romy schützt ihre Privatsphäre und sorgt dafür, dass ein unangenehmes Foto nicht weiter zu ihrer Online-Geschichte gehört.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Sie speichert das Foto und schickt es Freunden als Beweis.",
            type: "wrong",
            evaluation: "Riskant. Dadurch wird das Foto weiterverbreitet. Wenn Romy Beweise braucht, sollte sie diese nur einer erwachsenen Vertrauensperson zeigen.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Sie meldet das Foto, sagt aber niemandem Bescheid.",
            type: "partial",
            evaluation: "Teilweise sicher. Wenn Romy sich sehr unwohl fühlt, sollte sie zusätzlich Hilfe holen.",
            consequence: "VOID bewegt 3 Felder vor."
        }
    ],
    helpSources: [
        {
            name: "Internet-ABC – Kind und Bild im Internet",
            url: "https://www.internet-abc.de/eltern/kind-und-bild-im-internet/"
        },
        {
            name: "klicksafe – Vorsicht beim Posten von Bildern und Videos",
            url: "https://www.klicksafe.de/news/vorsicht-beim-posten-von-bildern-und-videos"
        }
    ]
};

cards["bild-ohne-erlaubnis"] = {
    district: "Social-Media-Platz",
    title: "Das Bild ohne Erlaubnis",
    situation: "Max hat ein lustiges Foto von einem Freund gemacht und möchte es posten. Was sollte Max tun?",
    checklist: [
        "vorher fragen",
        "Nein akzeptieren",
        "keine peinlichen Fotos posten",
        "an Gefühle anderer denken"
    ],
    answers: [
        {
            text: "A) Er postet es, weil es nur Spaß ist.",
            type: "wrong",
            evaluation: "Riskant. Spaß für eine Person kann für die andere peinlich oder verletzend sein.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Er macht das Gesicht unkenntlich und postet es.",
            type: "partial",
            evaluation: "Teilweise sicher. Die Person kann trotzdem durch Kleidung, Ort oder Situation erkennbar sein.",
            consequence: "VOID bewegt 5 Felder vor."
        },
        {
            text: "C) Er zeigt der Person das Foto und postet es nur mit Zustimmung.",
            type: "correct",
            evaluation: "Sehr sicher und respektvoll. Die Person darf mitentscheiden, welches Bild online erscheint und welche Erinnerungen andere von ihr sehen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Er postet es nur kurz in die Story.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar. Stories können gespeichert oder weitergeleitet werden.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "klicksafe – Vorsicht beim Posten von Bildern und Videos",
            url: "https://www.klicksafe.de/news/vorsicht-beim-posten-von-bildern-und-videos"
        },
        {
            name: "Internet-ABC – Kind und Bild im Internet",
            url: "https://www.internet-abc.de/eltern/kind-und-bild-im-internet/"
        }
    ]
};

cards["unglaubliches-skateboard-video"] = {
    district: "Social-Media-Platz",
    title: "Das unglaubliche Skateboard-Video",
    situation: "Bob bekommt ein Video mit fast unmöglichen Skateboard-Tricks. Freunde schreiben: „Krass, weiterleiten!“ Bob fragt sich, ob das Video echt ist. Was sollte Bob tun?",
    checklist: [
        "prüfen, woher das Video kommt",
        "nach dem Original suchen",
        "Likes nicht als Beweis sehen"
    ],
    answers: [
        {
            text: "A) Er leitet es weiter und schreibt: „Keine Ahnung, ob das echt ist.“",
            type: "partial",
            evaluation: "Teilweise ehrlich, aber nicht ideal. Das Video wird trotzdem weiterverbreitet.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Er schaut genau auf komische Schnitte oder Bewegungen.",
            type: "partial",
            evaluation: "Teilweise sinnvoll. Anschauen allein beweist aber nicht, ob ein Video echt ist.",
            consequence: "VOID bewegt 2 Felder vor."
        },
        {
            text: "C) Er glaubt dem Video, weil es viele Likes hat.",
            type: "wrong",
            evaluation: "Riskant. Viele Likes beweisen nicht, dass ein Video echt ist.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Er prüft, woher das Video kommt, sucht das Original und vergleicht mit verlässlichen Quellen.",
            type: "correct",
            evaluation: "Sehr sicher. Bob prüft das Video, bevor er es glaubt oder teilt.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        }
    ],
    helpSources: [
        {
            name: "SCHAU HIN! – Fake News",
            url: "https://www.schau-hin.info/sicherheit-risiken/fake-news-umgang-mit-falschmeldungen"
        },
        {
            name: "klicksafe – Desinformation und Meinung",
            url: "https://www.klicksafe.de/desinformation-und-meinung"
        },
        {
            name: "Internet-ABC – Fake News erkennen",
            url: "https://www.internet-abc.de/kinder/mitreden-mitmachen/forum/wie-erkennt-ihr-fake-news-falschmeldungen/"
        }
    ]
};

cards["ehrlicher-blog"] = {
    district: "Social-Media-Platz",
    title: "Der ehrliche Blog?",
    situation: "Pua liest einen Blog mit dramatischen Vorher-Nachher-Bildern. Die Autorin empfiehlt ein Produkt und verlinkt einen Rabattcode. Pua fragt sich, ob das ehrliche Erfahrung oder Werbung ist. Was sollte Pua tun?",
    checklist: [
        "Werbung erkennen",
        "Rabattcodes kritisch sehen",
        "Bilder prüfen",
        "unabhängige Quellen suchen"
    ],
    answers: [
        {
            text: "A) Sie glaubt dem Blog, wenn die Bilder überzeugend aussehen.",
            type: "wrong",
            evaluation: "Riskant. Bilder können bearbeitet, gestellt oder einseitig ausgewählt sein.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Sie prüft Werbung, Rabattcodes und sucht unabhängige Informationen.",
            type: "correct",
            evaluation: "Sehr sicher. Pua erkennt, dass der Blog Werbung sein könnte, und verlässt sich nicht nur auf die Bilder oder Kommentare.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Sie vertraut dem Blog eher, wenn viele positive Kommentare darunterstehen.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar. Kommentare können aber gefälscht oder einseitig sein.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Sie bestellt nichts, teilt den Link aber mit Freundinnen.",
            type: "partial",
            evaluation: "Teilweise vorsichtig. Durch Weiterleiten kann problematische Werbung verbreitet werden.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "Verbraucherzentrale – Wann ein Social-Media-Beitrag Werbung ist",
            url: "https://www.verbraucherzentrale.de/wissen/digitale-welt/soziale-netzwerke/influencerin-oder-nicht-wann-ein-beitrag-in-social-media-werbung-ist-39954"
        },
        {
            name: "SCHAU HIN! – Online-Challenges und Produktwerbung kritisch hinterfragen",
            url: "https://www.schau-hin.info/grundlagen/online-challenges-wie-eltern-ihre-kinder-schuetzen-koennen"
        },
        {
            name: "Verbraucherzentrale – Was Werbung verspricht und was wirklich stimmt",
            url: "https://www.verbraucherzentrale.de/wissen/lebensmittel/nahrungsergaenzungsmittel/nahrungsergaenzungsmittel-was-werbung-verspricht-und-was-wirklich-stimmt-107602"
        }
    ]
};

cards["einseitige-webseite"] = {
    district: "Social-Media-Platz",
    title: "Die einseitige Webseite",
    situation: "Nina schreibt einen Aufsatz über Schuluniformen. Eine Webseite passt zu ihrer Meinung, benutzt aber sehr starke Wörter und zeigt fast nur eine Seite. Was sollte Nina tun?",
    checklist: [
        "übertriebene oder starke Wörter erkennen",
        "mehrere Meinungen prüfen",
        "Autor oder Anbieter prüfen",
        "mit anderen Quellen vergleichen"
    ],
    answers: [
        {
            text: "A) Sie nutzt die Seite wegen der starken Wörter.",
            type: "wrong",
            evaluation: "Riskant. Sehr starke Sprache kann auf Einseitigkeit oder Manipulation hinweisen.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Sie nimmt die Seite, weil sie zu ihrer Meinung passt.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar. Eine passende Quelle ist nicht automatisch zuverlässig.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Sie prüft den Autor und vergleicht andere Quellen.",
            type: "correct",
            evaluation: "Sehr sicher. Nina erkennt mögliche Einseitigkeit und prüft die Informationen genauer.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Sie übernimmt nur die stärksten Sätze.",
            type: "partial",
            evaluation: "Teilweise praktisch, aber riskant. Zugespitzte Sätze können ein Thema verzerren.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "klicksafe – Desinformation und Meinung",
            url: "https://www.klicksafe.de/desinformation-und-meinung"
        },
        {
            name: "Internet-ABC – Fake News einfach erklärt",
            url: "https://www.internet-abc.de/kinder/lexikon/f/fake-news/"
        },
        {
            name: "Internet-ABC – Desinformation erkennen und erklären",
            url: "https://www.internet-abc.de/eltern/familie-medien/gefahren-und-schutz-viren-mobbing-werbung/desinformation-erkennen-und-erklaeren/"
        }
    ]
};

cards["komischer-wiki-artikel"] = {
    district: "Social-Media-Platz",
    title: "Der komische Wiki-Artikel",
    situation: "Johann findet einen Wiki-Artikel für seine Schulaufgabe. Einige Aussagen klingen komisch, und der Artikel kann von vielen Personen bearbeitet werden. Was sollte Johann tun?",
    checklist: [
        "nicht blind glauben",
        "Quellen prüfen",
        "mit anderen Seiten vergleichen",
        "wichtige Infos genauer prüfen"
    ],
    answers: [
        {
            text: "A) Er nutzt den Artikel als Überblick und prüft Quellen und wichtige Aussagen.",
            type: "correct",
            evaluation: "Sehr sicher. Johann nutzt den Artikel als Startpunkt, verlässt sich aber nicht blind darauf.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "B) Er übernimmt den Artikel, weil viele ihn verbessern.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar. Viele Bearbeitungen garantieren aber keine richtigen Informationen.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Er verwirft den Artikel sofort.",
            type: "partial",
            evaluation: "Teilweise vorsichtig, aber zu streng. Solche Seiten können nützlich sein, wenn man sie prüft.",
            consequence: "Nichts."
        },
        {
            text: "D) Er nimmt nur die spannendsten Aussagen.",
            type: "wrong",
            evaluation: "Riskant. Gerade auffällige Aussagen müssen besonders sorgfältig geprüft werden.",
            consequence: "Risiko +2."
        }
    ],
    helpSources: [
        {
            name: "Internet-ABC – Lexikon",
            url: "https://www.internet-abc.de/kinder/lexikon/w/wiki/"
        },
        {
            name: "klicksafe – Desinformation und Meinung",
            url: "https://www.klicksafe.de/desinformation-und-meinung"
        }
    ]
};

cards["oeffentliches-profil"] = {
    district: "Social-Media-Platz",
    title: "Das öffentliche Profil",
    situation: "Leas Profil zeigt Name, Alter, Schule, Wohnort und viele Fotos. Sie findet das praktisch, weil Freunde sie so leichter finden. Was sollte Lea tun?",
    checklist: [
        "private Daten entfernen",
        "prüfen, wer das Profil sehen kann",
        "Schule und Wohnort verbergen",
        "Privatsphäre-Einstellungen nutzen"
    ],
    answers: [
        {
            text: "A) Sie lässt alles öffentlich.",
            type: "wrong",
            evaluation: "Riskant. Fremde können viele Informationen über Lea sammeln.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Sie entfernt nur den Wohnort.",
            type: "partial",
            evaluation: "Teilweise sicher. Schule, Alter und Fotos können trotzdem viel verraten.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Sie löscht das Profil sofort.",
            type: "partial",
            evaluation: "Sehr vorsichtig, aber nicht immer nötig. Oft reichen bessere Einstellungen.",
            consequence: "Nichts."
        },
        {
            text: "D) Sie prüft, wer ihr Profil sehen kann, und entfernt Schule, Wohnort und andere private Infos.",
            type: "correct",
            evaluation: "Sehr sicher. Lea schützt nicht nur ihre Daten, sondern auch ihren Alltag, ihre Fotos und ihren eigenen Online-Ruf.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        }
    ],
    helpSources: [
        {
            name: "SCHAU HIN! – Soziale Netzwerke: Sicherheit für Kinder",
            url: "https://www.schau-hin.info/soziale-netzwerke"
        },
        {
            name: "klicksafe – Social-Media-Apps einstellen: so geht’s",
            url: "https://www.klicksafe.de/materialien/teil-5-mobil-safe-social-media-apps-einstellen-so-gehts"
        },
        {
            name: "Internet-ABC – Persönliche Daten im Internet",
            url: "https://www.internet-abc.de/kinder/film-ab/persoenliche-daten-im-internet-eine-heikle-sache/"
        },
        {
            name: "SCHAU HIN! – Instagram sicher einrichten",
            url: "https://www.schau-hin.info/sicherheit-risiken/instagram-sicher-einrichten"
        }
    ]
};

cards["mutprobe"] = {
    district: "Social-Media-Platz",
    title: "Die Mutprobe",
    situation: "In einer Challenge soll Lina ein peinliches Video posten. Andere schreiben: „Traust du dich nicht?“ Lina will nicht langweilig wirken. Was sollte Lina tun?",
    checklist: [
        "Gruppendruck erkennen",
        "Nein sagen",
        "nichts Peinliches posten",
        "Druck nicht weitergeben"
    ],
    answers: [
        {
            text: "A) Sie macht mit, damit die anderen nicht lachen.",
            type: "wrong",
            evaluation: "Riskant. Gruppendruck kann dazu führen, dass man später etwas bereut.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Sie sagt Nein und holt Hilfe, wenn der Druck weitergeht.",
            type: "correct",
            evaluation: "Sehr sicher. Grenzen zu setzen ist stark, auch wenn andere drängen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Sie postet das Video nur kurz oder nur privat.",
            type: "partial",
            evaluation: "Teilweise vorsichtig. Auch kurze oder private Posts können gespeichert werden.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Sie macht nicht mit, nominiert aber jemand anderen.",
            type: "partial",
            evaluation: "Teilweise sicher für Lina selbst, aber unfair. Dadurch gibt sie den Druck an jemand anderen weiter.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "SCHAU HIN! – Online-Challenges: Wie Eltern ihre Kinder schützen können",
            url: "https://www.schau-hin.info/grundlagen/online-challenges-wie-eltern-ihre-kinder-schuetzen-koennen"
        },
        {
            name: "klicksafe – Gefährliche TikTok-Challenges",
            url: "https://www.klicksafe.de/news/gefaehrliche-tiktok-challenges-das-muessen-eltern-und-lehrkraefte-jetzt-wissen"
        },
        {
            name: "Internet-ABC – Challenge einfach erklärt",
            url: "https://www.internet-abc.de/kinder/lexikon/c/challenge/"
        }
    ]
};

cards["fake-account"] = {
    district: "Social-Media-Platz",
    title: "Der Fake-Account",
    situation: "Jemand erstellt ein Profil mit dem Namen eines Mitschülers und postet Unsinn. Viele aus der Klasse folgen dem Profil. Was sollte Emil tun?",
    checklist: [
        "Fake-Profil nicht unterstützen",
        "nicht folgen",
        "betroffene Person informieren",
        "Profil melden",
        "Hilfe holen"
    ],
    answers: [
        {
            text: "A) Er folgt nicht, informiert die Person und meldet den Account.",
            type: "correct",
            evaluation: "Sehr sicher und fair. Der Fake-Account wird nicht unterstützt. So schützt Emil den Namen, den Ruf und die Privatsphäre der betroffenen Person.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "B) Er folgt, weil es lustig ist.",
            type: "wrong",
            evaluation: "Riskant. Folgen oder Liken unterstützt den Fake-Account und kann verletzen.",
            consequence: "Risiko +2."
        },
        {
            text: "C) Er folgt nicht und sagt niemandem etwas.",
            type: "partial",
            evaluation: "Teilweise sicher. Der Fake-Account kann aber weiter Schaden anrichten.",
            consequence: "VOID bewegt 2 Felder vor."
        },
        {
            text: "D) Er schreibt dem Fake-Account öffentlich, dass die Person aufhören soll.",
            type: "partial",
            evaluation: "Gut gemeint, aber riskant. Öffentliche Kommentare können dem Profil mehr Aufmerksamkeit geben.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "klicksafe – Fake-Profile auf Instagram melden",
            url: "https://www.klicksafe.de/instagram/risiken-und-tipps-fuer-eltern"
        },
        {
            name: "SCHAU HIN! – Cybergrooming und Fake-Profile",
            url: "https://www.schau-hin.info/cybergrooming"
        }
    ]
};

cards["verstoerendes-video"] = {
    district: "Social-Media-Platz",
    title: "Das verstörende Video",
    situation: "Lena sieht in einer App plötzlich ein Video mit Bildern, die ihr Angst machen. Was sollte sie tun?",
    checklist: [
        "Video schließen und melden",
        "nicht weiterleiten",
        "keine Screenshots teilen",
        "mit Erwachsenen sprechen"
    ],
    answers: [
        {
            text: "A) Sie schickt das Video an eine Freundin und fragt, ob sie es auch schlimm findet.",
            type: "wrong",
            evaluation: "Riskant. Dadurch wird der belastende Inhalt weiterverbreitet.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Sie schließt das Video und meldet es in der App.",
            type: "partial",
            evaluation: "Sicherer Schritt. Wenn Lena Angst hat, sollte sie zusätzlich mit einer erwachsenen Person sprechen.",
            consequence: "VOID bewegt 1 Feld vor."
        },
        {
            text: "C) Sie schaut es zu Ende, um zu verstehen, ob es wirklich schlimm ist.",
            type: "wrong",
            evaluation: "Riskant. Lena muss belastende Inhalte nicht weiter anschauen.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Sie schließt das Video, meldet es und sucht Hilfe, wenn es ihr nicht gut geht.",
            type: "correct",
            evaluation: "Sehr sicher. Lena schützt sich und bleibt mit ihrer Angst nicht allein.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        }
    ],
    helpSources: [
        {
            name: "jugendschutz.net – Verstoß melden",
            url: "https://www.jugendschutz.net/verstoss-melden"
        },
        {
            name: "klicksafe – Illegale Inhalte schnell und anonym melden",
            url: "https://www.klicksafe.de/news/illegale-inhalte-schnell-und-anonym-melden"
        },
        {
            name: "Nummer gegen Kummer – Kinder- und Jugendberatung",
            url: "https://www.nummergegenkummer.de/kinder-und-jugendberatung/"
        }
    ]
};

cards["urlaubsstandort"] = {
    district: "Social-Media-Platz",
    title: "Der Urlaubsstandort",
    situation: "Maja ist mit ihrer Familie im Urlaub. Sie möchte ein Foto posten und den Ort markieren, weil das Bild dann spannender wirkt. Was sollte sie tun?",
    checklist: [
        "aktuellen Standort nicht öffentlich teilen",
        "lieber später posten",
        "Familie fragen",
        "Privatsphäre prüfen"
    ],
    answers: [
        {
            text: "A) Sie postet sofort, aber ohne Hotelnamen.",
            type: "partial",
            evaluation: "Teilweise vorsichtig. Sie verrät trotzdem, wo sie gerade ist.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Sie postet ohne Standort, schreibt aber: „Zwei Wochen Urlaub!“",
            type: "partial",
           evaluation: "Teilweise sicher. Der Text verrät trotzdem, dass ihre Familie länger nicht zu Hause ist.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Sie postet später, ohne genauen Standort, und fragt ihre Familie vorher.",
            type: "correct",
            evaluation: "Sehr sicher. Maja schützt ihren aktuellen Aufenthaltsort und die Privatsphäre ihrer Familie.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Sie postet mit Standort nur für enge Freunde.",
            type: "partial",
            evaluation: "Teilweise sicherer. Trotzdem können auch enge Kontakte Inhalte speichern oder weiterleiten.",
            consequence: "Risiko +1."
        }
    ],
    helpSources: [
        {
            name: "klicksafe – 10 Tipps zum digitalen Schutz im Sommerurlaub",
            url: "https://www.klicksafe.de/news/10-tipps-zum-schutz-ihrer-familie-waehrend-des-sommerurlaubs"
        },
        {
            name: "Polizeiliche Kriminalprävention – Auch Einbrecher nutzen Facebook, Instagram & Co.",
            url: "https://www.polizei-beratung.de/aktuelles/detailansicht/auch-einbrecher-nutzen-facebook-instagram-und-co/"
        }
    ]
};