cards["peinliches-klassenfoto"] = {
    district: "Social-Media-Platz",
    title: "Das peinliche Klassenfoto",
    checklist: [
        "Foto nicht weiterleiten",
        "nicht mitlachen oder verletzende Kommentare schreiben",
        "betroffene Person unterstützen",
        "falls nötig Screenshot als Beweis sichern, aber nicht weiterverbreiten",
        "erwachsene Vertrauensperson informieren",
        "melden oder blockieren, wenn es weitergeht"
    ],
    answers: [
        {
            text: "A) Wir schicken es nicht weiter und sagen, dass das unfair ist. Wenn nötig, holen wir Hilfe.",
            evaluation: "Sehr sicher und fair. Nicht weiterverbreiten, Unterstützung zeigen und Hilfe holen schützt die betroffene Person.",
            consequence: "+1 Sicherheits-Chip, +1 Zeit-Chip und möglicher Fair-online Badge."
        },
        {
            text: "B) Wir schauen es nur an, aber schreiben nichts dazu.",
            evaluation: "Teilweise sicher. Nicht mitmachen ist besser als weiterleiten, aber manchmal braucht die betroffene Person Unterstützung.",
            consequence: "+1 Zeit-Chip."
        },
        {
            text: "C) Wir schicken es nur an eine beste Freundin oder einen besten Freund weiter.",
            evaluation: "Riskant. Auch „nur an eine Person“ ist Weiterverbreitung.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Wir machen einen Screenshot und posten ihn anonym, damit niemand weiß, dass wir es waren.",
            evaluation: "Sehr riskant. Anonym posten schützt nicht vor Schaden und kann das Mobbing verstärken.",
            consequence: "Risiko +2."
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
  checklist: [
    "Nachricht nicht weiterleiten",
    "nicht über Cindy lachen oder sie bloßstellen",
    "private Gefühle anderer respektieren",
    "nicht prüfen wollen, ob das Gerücht stimmt, indem man andere fragt",
    "bei Druck ruhig sagen: „Das geht uns nichts an“",
    "Cindy unterstützen, falls das Gerücht schon herumgeht"
  ],
  answers: [
    {
      text: "A) Josie leitet die Nachricht nicht weiter und schreibt zurück, dass Cindy nicht bloßgestellt werden soll.",
      evaluation: "Sehr sicher und fair. Josie stoppt das Gerücht und schützt Cindys Privatsphäre.",
      consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
    },
    {
      text: "B) Josie fragt Brian heimlich, ob Cindy wirklich in ihn verliebt ist.",
      evaluation: "Riskant. Dadurch wird das Gerücht weitergetragen und Cindy könnte bloßgestellt werden.",
      consequence: "Risiko +1."
    },
    {
      text: "C) Josie schickt die Nachricht nur an ihre beste Freundin, damit sie gemeinsam überlegen können.",
      evaluation: "Teilweise riskant. Auch „nur an eine Person“ verbreitet das Gerücht weiter.",
      consequence: "Risiko +1."
    },
    {
      text: "D) Josie postet im Gruppenchat: „Cindy mag Brian!“ und schreibt dazu, dass es nur Spaß ist.",
      evaluation: "Sehr riskant. Das stellt Cindy öffentlich bloß und kann Mobbing auslösen.",
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

cards["angriff-im-online-spiel"] = {
  district: "Social-Media-Platz",
  title: "Der Angriff im Online-Spiel",
  checklist: [
    "nicht zurückbeleidigen",
    "Jo unterstützen, ohne den Streit anzuheizen",
    "ruhig sagen, dass Beleidigungen im Team nicht okay sind",
    "Teamregeln oder Spielregeln nutzen",
    "beleidigende Person stummschalten, blockieren oder melden, wenn nötig",
    "Erwachsene oder Moderation einbeziehen, wenn es weitergeht"
  ],
  answers: [
    {
      text: "A) Josie schreibt ruhig: „Stopp, Beleidigungen sind nicht okay. Wir spielen fair.“ und nutzt Melden oder Stummschalten, wenn es weitergeht.",
      evaluation: "Sehr sicher und fair. Josie setzt eine klare Grenze, unterstützt Jo und heizt den Streit nicht weiter an.",
      consequence: "+1 Sicherheits-Chip, +1 Zeit-Chip."
    },
    {
      text: "B) Josie beleidigt die andere Person zurück, damit sie merkt, wie sich das anfühlt.",
      evaluation: "Riskant. Zurückbeleidigen macht die Situation schlimmer und kann Josie selbst Ärger bringen.",
      consequence: "Risiko +2."
    },
    {
      text: "C) Josie schreibt Jo privat, dass er die Beleidigung einfach ignorieren soll.",
      evaluation: "Teilweise sicher. Private Unterstützung kann helfen, aber bei Beleidigungen sollte auch die Grenze im Spiel klar werden.",
      consequence: "+1 Zeit-Chip."
    },
    {
      text: "D) Josie macht einen Screenshot und postet ihn öffentlich, damit alle sehen, wer angefangen hat.",
      evaluation: "Riskant. Öffentliches Bloßstellen kann den Streit vergrößern und weitere Angriffe auslösen.",
      consequence: "Risiko +1."
    }
  ],
  helpSources: [
    {
      name: "SCHAU HIN! – In-Game-Chats: Chatten im Spiel birgt Risiken",
      url: "https://www.schau-hin.info/grundlagen/in-game-chats-chatten-im-spiel-birgt-risiken-fuer-kinder"
    },
    {
      name: "klicksafe – Digitale Spiele: Risiken und Tipps",
      url: "https://www.klicksafe.de/digitale-spiele"
    }
  ]
};


cards["teamchat-nach-dem-spiel"] = {
  district: "Social-Media-Platz",
  title: "Der Teamchat nach dem Spiel",
  checklist: [
    "nicht mitbeleidigen oder mitlachen",
    "Matt nicht öffentlich bloßstellen",
    "ruhig und fair widersprechen, wenn es sicher möglich ist",
    "Matt privat unterstützen",
    "Screenshots nur als Beweis sichern und nicht weiterverbreiten",
    "Trainerin, Trainer oder eine erwachsene Vertrauensperson informieren, wenn es persönlich oder verletzend wird"
  ],
  answers: [
    {
      text: "A) Joel schreibt in den Chat: „Hört auf, Matt fertigzumachen. Das ist unfair.“ und holt Hilfe, wenn es weitergeht.",
      evaluation: "Sehr sicher und fair. Joel widerspricht ruhig, macht nicht mit und kann Hilfe holen, wenn die Gruppe weiter angreift.",
      consequence: "+1 Sicherheits-Chip, +1 Zeit-Chip und möglicher Fair-online Badge."
    },
    {
      text: "B) Joel schreibt Matt privat, dass er das auch schlimm findet, sagt aber im Gruppenchat nichts.",
      evaluation: "Teilweise sicher. Private Unterstützung hilft Matt, aber wenn die Angriffe weitergehen, sollte zusätzlich eine erwachsene Person einbezogen werden.",
      consequence: "+1 Zeit-Chip."
    },
    {
      text: "C) Joel schreibt einen Witz über Matt, damit die anderen ihn nicht selbst angreifen.",
      evaluation: "Riskant. Auch ein Witz kann Mobbing verstärken und Matt weiter verletzen.",
      consequence: "Risiko +2."
    },
    {
      text: "D) Joel postet Screenshots öffentlich, damit alle sehen, wie gemein die anderen sind.",
      evaluation: "Riskant. Öffentliche Screenshots können den Streit vergrößern und Matt noch mehr bloßstellen.",
      consequence: "Risiko +2."
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
  checklist: [
    "Nutzungsrechte prüfen",
    "nicht automatisch jedes Bild kopieren",
    "freie Bildquellen oder Creative-Commons-Bilder nutzen",
    "Quelle korrekt angeben, wenn erlaubt",
    "bei Unsicherheit Lehrkraft oder Erwachsene fragen",
    "respektieren, dass Bilder jemandem gehören können"
  ],
  answers: [
    {
      text: "A) Jo und Matt dürfen die Bilder verwenden, wenn sie die Quelle unter jedes Bild schreiben.",
      evaluation: "Teilweise riskant. Eine Quellenangabe ist wichtig, bedeutet aber nicht automatisch, dass die Nutzung erlaubt ist.",
      consequence: "Risiko +1."
    },
    {
      text: "B) Jo und Matt dürfen die Bilder verwenden, weil die Präsentation nur für die Schule ist.",
      evaluation: "Teilweise riskant. Für Schule kann es besondere Regeln geben, aber man sollte trotzdem prüfen, ob und wie Bilder genutzt werden dürfen.",
      consequence: "Risiko +1."
    },
    {
      text: "C) Jo und Matt sollten prüfen, ob sie die Bilder verwenden dürfen, oder frei nutzbare Bilder suchen.",
      evaluation: "Sehr sicher. Sie respektieren Urheberrechte und wählen eine sichere Lösung für ihr Schulprojekt.",
      consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
    },
    {
      text: "D) Jo und Matt dürfen die Bilder verwenden, wenn sie sie zuschneiden oder mit Filtern verändern.",
      evaluation: "Riskant. Ein Bild zu verändern macht es nicht automatisch frei nutzbar.",
      consequence: "Risiko +1."
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
  checklist: [
    "überlegen, welchen Eindruck das eigene Profil macht",
    "alte Posts, Kommentare und Fotos prüfen",
    "peinliche, verletzende oder zu private Inhalte entfernen oder verbergen",
    "Privatsphäre-Einstellungen kontrollieren",
    "keine falschen oder übertriebenen Informationen posten",
    "sich fragen: Würde ich wollen, dass Lehrkräfte, Vereine oder spätere Arbeitgeber das sehen?"
  ],
  answers: [
    {
      text: "A) Mia prüft ihre Profile, entfernt zu private oder peinliche Inhalte und stellt ein, wer was sehen darf.",
      evaluation: "Sehr sicher. Mia gestaltet ihren digitalen Fußabdruck bewusst und schützt ihre Privatsphäre.",
      consequence: "+1 Sicherheits-Chip, +1 Zeit-Chip und möglicher Datenschutz-Badge."
    },
    {
      text: "B) Mia löscht sofort alle Konten, damit niemand etwas über sie findet.",
      evaluation: "Teilweise sicher, aber nicht immer nötig. Löschen kann helfen, aber oft reichen gute Einstellungen und bewusstes Aufräumen.",
      consequence: "+1 Zeit-Chip."
    },
    {
      text: "C) Mia postet extra viele perfekte Bilder, damit sie online besonders gut wirkt.",
      evaluation: "Riskant. Ein guter Eindruck entsteht nicht durch Druck oder falsche Selbstdarstellung, sondern durch bewusste und ehrliche Inhalte.",
      consequence: "Risiko +1."
    },
    {
      text: "D) Mia ignoriert das Thema, weil Universitäten oder Arbeitgeber Kinderprofile sowieso nie sehen.",
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
    }]
};


cards["foto-soll-weg"] = {
  district: "Social-Media-Platz",
  title: "Das Foto soll weg",
  checklist: [
    "ruhig bleiben und nicht selbst beleidigend reagieren",
    "die Person bitten, das Foto zu löschen",
    "Foto nicht weiterverbreiten oder selbst erneut posten",
    "Screenshot nur als Beweis sichern, wenn nötig",
    "Privatsphäre- oder Meldefunktion der Plattform nutzen",
    "eine erwachsene Vertrauensperson um Hilfe bitten"
  ],
  answers: [
    {
      text: "A) Romy bittet die Person ruhig, das Foto zu löschen, und holt Hilfe, wenn es nicht entfernt wird.",
      evaluation: "Sehr sicher. Romy schützt sich, ohne die Situation größer zu machen.",
      consequence: "+1 Sicherheits-Chip, +1 Zeit-Chip."
    },
    {
      text: "B) Romy schreibt einen wütenden Kommentar unter das Foto.",
      evaluation: "Riskant. Das kann den Streit vergrößern und noch mehr Aufmerksamkeit auf das Foto lenken.",
      consequence: "Risiko +1."
    },
    {
      text: "C) Romy speichert das Foto und schickt es ihren Freunden, damit sie sehen, wie gemein das ist.",
      evaluation: "Sehr riskant. Dadurch wird das Foto weiterverbreitet, obwohl Romy eigentlich möchte, dass es verschwindet.",
      consequence: "Risiko +2."
    },
    {
      text: "D) Romy ignoriert es, obwohl sie sich sehr unwohl fühlt.",
      evaluation: "Teilweise riskant. Ignorieren kann manchmal okay sein, aber wenn sie sich verletzt fühlt, sollte sie Hilfe holen oder das Foto melden.",
      consequence: "Nichts."
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
    checklist: [
        "vorher um Erlaubnis fragen",
        "ein Nein akzeptieren",
        "keine peinlichen oder privaten Fotos posten",
        "überlegen, wie sich die andere Person fühlen könnte",
        "Bilder nicht heimlich teilen",
        "bei Gruppenfotos alle Beteiligten beachten"
    ],
    answers: [
        {
            text: "A) Wir posten es, wenn es lustig ist.",
            evaluation: "Riskant. Lustig für eine Person kann peinlich oder verletzend für eine andere Person sein.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir fragen vorher und akzeptieren ein Nein.",
            evaluation: "Sehr sicher und respektvoll. Die andere Person darf mitentscheiden, was von ihr online erscheint.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir machen das Gesicht unkenntlich und posten es.",
            evaluation: "Teilweise sicher. Das kann helfen, aber trotzdem sollte vorher gefragt werden, wenn die Person erkennbar oder betroffen ist.",
            consequence: "+1 Zeit-Chip."
        },
        {
            text: "D) Wir posten es nur in die Story, weil sie verschwindet.",
            evaluation: "Riskant. Stories können gespeichert, gescreenshotet oder weitergeleitet werden.",
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
  checklist: [
    "nicht sofort glauben oder weiterleiten",
    "prüfen, wer das Video veröffentlicht hat",
    "nach dem Originalvideo oder weiteren Quellen suchen",
    "auf Schnitte, ungewöhnliche Bewegungen oder Bearbeitung achten",
    "Kommentare, Likes und viele Aufrufe nicht als Beweis sehen",
    "bei Unsicherheit sagen: „Ich weiß nicht, ob das echt ist.“"
  ],
  answers: [
    {
      text: "A) Bob leitet das Video sofort weiter, weil es so unglaublich aussieht.",
      evaluation: "Riskant. Gerade sehr unglaubliche Videos sollte man erst prüfen, bevor man sie weiterverbreitet.",
      consequence: "Risiko +1."
    },
    {
      text: "B) Bob prüft, woher das Video kommt, sucht nach dem Original und vergleicht mit anderen Quellen.",
      evaluation: "Sehr sicher. Bob prüft das Video, bevor er entscheidet, ob er es glaubt oder teilt.",
      consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
    },
    {
      text: "C) Bob glaubt dem Video, wenn es viele Likes und Kommentare hat.",
      evaluation: "Riskant. Viele Likes oder Kommentare beweisen nicht, dass ein Video echt ist.",
      consequence: "Risiko +1."
    },
    {
      text: "D) Bob schreibt dazu: „Keine Ahnung, ob das echt ist“ und teilt es trotzdem.",
      evaluation: "Teilweise riskant. Der Hinweis ist ehrlich, aber das Video wird trotzdem weiterverbreitet.",
      consequence: "Risiko +1."
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
  checklist: [
    "prüfen, ob der Beitrag Werbung oder gesponsert ist",
    "auf Affiliate-Links, Rabattcodes oder Produktverkauf achten",
    "dramatische Vorher-Nachher-Bilder kritisch betrachten",
    "nach unabhängigen Quellen oder fachlichen Informationen suchen",
    "nicht nur auf persönliche Erfahrungsberichte vertrauen",
    "bei Gesundheits- oder Körperthemen Erwachsene oder Fachpersonen fragen"
  ],
  answers: [
    {
      text: "A) Pua glaubt dem Blog, wenn die Vorher-Nachher-Bilder überzeugend aussehen.",
      evaluation: "Riskant. Bilder können bearbeitet, gestellt oder einseitig ausgewählt sein.",
      consequence: "Risiko +2."
    },
    {
      text: "B) Pua prüft, ob der Beitrag Werbung ist, ob Produkte verkauft werden und ob unabhängige Quellen die Aussagen bestätigen.",
      evaluation: "Sehr sicher. Pua erkennt mögliche kommerzielle Interessen und prüft die Empfehlung kritisch.",
      consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
    },
    {
      text: "C) Pua vertraut dem Blog, wenn viele positive Kommentare darunterstehen.",
      evaluation: "Teilweise riskant. Kommentare können gefälscht, einseitig oder von Fans geschrieben sein.",
      consequence: "Risiko +1."
    },
    {
      text: "D) Pua bestellt das Produkt nicht, teilt den Link aber mit Freundinnen, damit sie selbst entscheiden können.",
      evaluation: "Teilweise riskant. Auch das Weiterleiten kann problematische Werbung verbreiten.",
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
  checklist: [
    "auf übertriebene oder sehr emotionale Wörter achten",
    "prüfen, ob verschiedene Seiten des Themas gezeigt werden",
    "zwischen Meinung, Werbung und Information unterscheiden",
    "nach Autor, Herausgeber und Ziel der Webseite schauen",
    "Informationen mit anderen zuverlässigen Quellen vergleichen",
    "bei Schulaufgaben neutrale oder fachliche Quellen bevorzugen"
  ],
  answers: [
    {
      text: "A) Nina nutzt die Webseite, wenn sie viele starke Wörter und klare Meinungen enthält.",
      evaluation: "Riskant. Starke Sprache kann zeigen, dass eine Quelle einseitig oder manipulativ ist.",
      consequence: "Risiko +1."
    },
    {
      text: "B) Nina prüft, wer die Seite geschrieben hat, ob mehrere Sichtweisen vorkommen und vergleicht mit anderen Quellen.",
      evaluation: "Sehr sicher. Nina erkennt mögliche Einseitigkeit und prüft die Information sorgfältig.",
      consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
    },
    {
      text: "C) Nina nimmt die Webseite, wenn sie genau ihre eigene Meinung bestätigt.",
      evaluation: "Riskant. Quellen nur zu nutzen, weil sie die eigene Meinung bestätigen, kann zu einseitigen Ergebnissen führen.",
      consequence: "Risiko +2."
    },
    {
      text: "D) Nina verwendet nur die Überschriften, weil man daran schnell erkennt, worum es geht.",
      evaluation: "Teilweise riskant. Überschriften können zugespitzt sein; wichtig ist, den Inhalt und die Quellen genauer zu prüfen.",
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
  checklist: [
    "nicht alles sofort glauben, nur weil es online steht",
    "prüfen, ob Quellen oder Belege angegeben sind",
    "Information mit anderen zuverlässigen Quellen vergleichen",
    "auf Änderungsverlauf, Aktualität und Diskussionen achten, wenn möglich",
    "bei wichtigen Informationen offizielle oder fachliche Quellen nutzen",
    "bei Unsicherheit Lehrkraft oder Erwachsene fragen"
  ],
  answers: [
    {
      text: "A) Johann nutzt den Artikel sofort, weil Online-Lexika meistens stimmen.",
      evaluation: "Teilweise riskant. Viele Artikel können hilfreich sein, aber man sollte Quellen und Belege trotzdem prüfen.",
      consequence: "Risiko +1."
    },
    {
      text: "B) Johann prüft Quellen, Aktualität und vergleicht die Information mit anderen zuverlässigen Seiten.",
      evaluation: "Sehr sicher. Johann verlässt sich nicht nur auf eine Seite, sondern bewertet die Information sorgfältig.",
      consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
    },
    {
      text: "C) Johann verwirft den Artikel sofort, weil jeder solche Seiten bearbeiten kann.",
      evaluation: "Teilweise sicher, aber zu schnell. Bearbeitbare Seiten können trotzdem nützlich sein, wenn man Quellen und Belege prüft.",
      consequence: "+1 Zeit-Chip."
    },
    {
      text: "D) Johann nimmt nur die Stellen, die lustig klingen, weil sie für die Präsentation spannender sind.",
      evaluation: "Riskant. Lustige oder auffällige Aussagen sind nicht automatisch wahr.",
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

cards["schule-wirklich-zu"] = {
  district: "Social-Media-Platz",
  title: "Ist die Schule wirklich zu?",
  checklist: [
    "Nachricht nicht sofort weiterleiten",
    "prüfen, von wem die Information stammt",
    "offizielle Quellen anschauen, zum Beispiel Schule, Stadt oder Wetterdienst",
    "nicht nur auf Kommentare oder Likes vertrauen",
    "bei Unsicherheit Eltern oder Schule fragen",
    "erst teilen, wenn die Information bestätigt ist"
  ],
  answers: [
    {
      text: "A) Lara teilt die Nachricht sofort, damit alle rechtzeitig Bescheid wissen.",
      evaluation: "Riskant. Wenn die Information falsch ist, verbreitet Lara ein Gerücht und sorgt für Verwirrung.",
      consequence: "Risiko +2."
    },
    {
      text: "B) Lara prüft zuerst offizielle Quellen, zum Beispiel die Schulwebseite, eine Nachricht der Schule oder eine Info der Stadt.",
      evaluation: "Sehr sicher. Lara verlässt sich nicht nur auf Social Media, sondern prüft die Information zuverlässig.",
      consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
    },
    {
      text: "C) Lara fragt in den Kommentaren, ob andere auch gehört haben, dass die Schule ausfällt.",
      evaluation: "Teilweise riskant. Kommentare können Hinweise geben, ersetzen aber keine offizielle Bestätigung.",
      consequence: "Risiko +1."
    },
    {
      text: "D) Lara wartet ab und sagt niemandem etwas.",
      evaluation: "Teilweise sicher. Nicht weiterleiten ist gut, aber bei wichtigen Informationen sollte man aktiv zuverlässige Quellen prüfen.",
      consequence: "+1 Zeit-Chip."
    }
  ],
  helpSources: [
    {
      name: "klicksafe – Fake News",
      url: "https://www.klicksafe.de/desinformation-und-meinung/fake-news"
    },
    {
      name: "Internet-ABC – Fake News einfach erklärt",
      url: "https://www.internet-abc.de/kinder/lexikon/f/fake-news/"
    }
  ]
};


cards["trauriger-blog"] = {
  district: "Social-Media-Platz",
  title: "Der traurige Blog",
  checklist: [
    "Bens Blog nicht herumzeigen oder weiterleiten",
    "Ben nicht bloßstellen oder auslachen",
    "Ben freundlich und privat ansprechen, wenn es passend ist",
    "Sorgen ernst nehmen",
    "eine erwachsene Vertrauensperson einbeziehen, wenn Mo sich wirklich Sorgen macht",
    "bei akuter Gefahr sofort Hilfe holen"
  ],
  answers: [
    {
      text: "A) Mo zeigt den Blog im Klassenchat, damit alle Ben aufmuntern können.",
      evaluation: "Riskant. Dadurch werden Bens private Gefühle öffentlich gemacht und Ben könnte sich bloßgestellt fühlen.",
      consequence: "Risiko +2."
    },
    {
      text: "B) Mo spricht Ben ruhig und privat an oder holt eine erwachsene Vertrauensperson dazu, wenn er sich ernsthaft Sorgen macht.",
      evaluation: "Sehr sicher und fürsorglich. Mo respektiert Bens Privatsphäre und nimmt seine Sorge ernst.",
      consequence: "+1 Sicherheits-Chip, +1 Zeit-Chip und möglicher Hilfe-holen Badge."
    },
    {
      text: "C) Mo macht einen Screenshot und schickt ihn nur an seine beste Freundin, um Rat zu fragen.",
      evaluation: "Teilweise riskant. Auch gut gemeintes Weiterleiten kann private Inhalte verbreiten. Besser ist eine erwachsene Vertrauensperson.",
      consequence: "Risiko +1."
    },
    {
      text: "D) Mo ignoriert den Blog, weil es ihn nichts angeht.",
      evaluation: "Teilweise riskant. Privatsphäre ist wichtig, aber wenn Mo sich ernsthaft Sorgen macht, sollte er Hilfe holen.",
      consequence: "+1 Zeit-Chip."
    }
  ],
  helpSources: [
    {
      name: "Nummer gegen Kummer – Kinder- und Jugendberatung",
      url: "https://www.nummergegenkummer.de/kinder-und-jugendberatung/"
    },
    {
      name: "Nummer gegen Kummer – Elternberatung",
      url: "https://www.nummergegenkummer.de/elternberatung/"
    },
    {
      name: "Internet-ABC – Cybermobbing",
      url: "https://www.internet-abc.de/lernmodul-cybermobbing/"
    }
  ]
};

cards["oeffentliches-profil"] = {
    district: "Social-Media-Platz",
    title: "Das öffentliche Profil",
    checklist: [
        "Schule und Wohnort nicht öffentlich zeigen",
        "Alter und private Fotos bewusst prüfen",
        "Privatsphäre-Einstellungen nutzen",
        "Profil nur für bekannte Personen sichtbar machen",
        "keine Adresse, Telefonnummer oder Tagesabläufe posten",
        "gemeinsam mit Erwachsenen Einstellungen prüfen"
    ],
    answers: [
        {
            text: "A) Wir lassen alles öffentlich, damit Freunde uns leichter finden.",
            evaluation: "Riskant. Zu viele öffentliche Informationen können von fremden Personen genutzt werden.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir prüfen Privatsphäre-Einstellungen und entfernen private Infos.",
            evaluation: "Sehr sicher. Das Profil wird so eingestellt, dass weniger private Daten sichtbar sind.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir entfernen nur den Wohnort.",
            evaluation: "Teilweise sicher. Das ist ein guter Anfang, aber auch Schule, Fotos und weitere Daten sollten geprüft werden.",
            consequence: "+1 Zeit-Chip."
        },
        {
            text: "D) Wir löschen das Profil sofort, ohne darüber zu sprechen.",
            evaluation: "Teilweise sicher. Löschen kann eine Lösung sein, aber gemeinsam prüfen und verstehen ist besser.",
            consequence: "+1 Zeit-Chip."
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
    checklist: [
        "Gruppendruck erkennen",
        "Nein sagen dürfen",
        "keine peinlichen oder gefährlichen Inhalte posten",
        "nicht andere unter Druck setzen",
        "Hilfe holen, wenn Druck stark wird",
        "überlegen, ob man den Inhalt später bereuen könnte"
    ],
    answers: [
        {
            text: "A) Wir machen mit, damit wir dazugehören.",
            evaluation: "Riskant. Gruppendruck kann dazu führen, dass man Dinge postet, die man später bereut.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir sagen Nein und holen Hilfe, wenn der Druck weitergeht.",
            evaluation: "Sehr sicher. Grenzen setzen ist stark, auch wenn andere drängen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir stellen das Video nur kurz online.",
            evaluation: "Teilweise riskant. Auch kurz online kann gespeichert oder weitergeleitet werden.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Wir nominieren jemand anderen.",
            evaluation: "Riskant. Dadurch wird der Druck an eine andere Person weitergegeben.",
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
    checklist: [
        "Fake-Profil nicht unterstützen",
        "nicht folgen oder teilen",
        "betroffene Person informieren",
        "Profil melden",
        "Erwachsene oder Lehrkraft einbeziehen",
        "verstehen, dass Identitätsmissbrauch verletzend sein kann"
    ],
    answers: [
        {
            text: "A) Wir folgen dem Profil und lachen mit.",
            evaluation: "Riskant. Das unterstützt den Fake-Account und kann die betroffene Person verletzen.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Wir melden das Profil, teilen es nicht und informieren Erwachsene.",
            evaluation: "Sehr sicher. So wird der Schaden begrenzt und Hilfe geholt.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir erstellen selbst ein Fake-Profil.",
            evaluation: "Sehr riskant. Dadurch wird das Problem nachgemacht und verstärkt.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Wir schreiben dem Fake-Account.",
            evaluation: "Teilweise riskant. Kontakt kann die Situation weiter anheizen. Besser ist melden und Hilfe holen.",
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
    checklist: [
        "Video sofort schließen",
        "nicht weiter anschauen",
        "nicht weiterleiten",
        "einer erwachsenen Vertrauensperson davon erzählen",
        "Inhalt melden, wenn möglich",
        "über Gefühle sprechen dürfen"
    ],
    answers: [
        {
            text: "A) Sie sollte das Video schließen und einem Erwachsenen davon erzählen.",
            evaluation: "Sehr sicher. Lena schützt sich und holt Hilfe.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "B) Sie sollte das Video schließen und versuchen, es einfach zu vergessen.",
            evaluation: "Teilweise sicher. Schließen ist gut, aber darüber sprechen kann helfen.",
            consequence: "+1 Zeit-Chip."
        },
        {
            text: "C) Sie sollte in den Kommentaren schreiben, dass das Video unangemessen ist.",
            evaluation: "Riskant. Dadurch bleibt sie weiter mit dem Inhalt beschäftigt und kann Reaktionen auslösen.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Sie sollte das Video an eine Freundin schicken und fragen, ob sie es auch schlimm findet.",
            evaluation: "Riskant. Dadurch wird der belastende Inhalt weiterverbreitet.",
            consequence: "Risiko +2."
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

cards["verletzendes-video-klassengruppe"] = {
    district: "Social-Media-Platz",
    title: "Das verletzende Video in der Klassengruppe",
    checklist: [
        "Video nicht weiterleiten",
        "nicht kommentieren oder mitmachen",
        "erwachsene Vertrauensperson informieren",
        "Plattform melden",
        "betroffene Person schützen",
        "Beweise nur sichern, wenn Erwachsene dabei helfen und nichts weiterverbreitet wird"
    ],
    answers: [
        {
            text: "A) Das Video nicht weiterverbreiten und einem Erwachsenen oder der Plattform melden.",
            evaluation: "Sehr sicher. Nicht verbreiten, Hilfe holen und melden ist die beste Reaktion.",
            consequence: "+1 Sicherheits-Chip, +1 Zeit-Chip."
        },
        {
            text: "B) Das Video nur an eine vertraute Person schicken, um Rat zu bekommen.",
            evaluation: "Riskant. Auch an eine vertraute Person weiterleiten verbreitet den Inhalt weiter.",
            consequence: "Risiko +2."
        },
        {
            text: "C) In die Gruppe schreiben, dass niemand mehr darüber lachen soll.",
            evaluation: "Teilweise sicher. Das Zeichen ist gut, aber Hilfe holen und Melden sind wichtiger.",
            consequence: "+1 Zeit-Chip."
        },
        {
            text: "D) Das Video speichern, falls man später beweisen muss, was passiert ist.",
            evaluation: "Teilweise riskant. Beweise sichern kann sinnvoll sein, sollte aber mit Erwachsenen passieren und nicht weiterverbreitet werden.",
            consequence: "Risiko +1."
        }
    ],
  helpSources: [
    {
      name: "klicksafe – Cybermobbing",
      url: "https://www.klicksafe.de/cybermobbing"
    },
    {
      name: "SCHAU HIN! – Klassenchats: Regeln für Schüler und Eltern",
      url: "https://www.schau-hin.info/grundlagen/whatsapp-gruppenchats-fuer-kinder"
    },
    {
      name: "jugendschutz.net – Verstoß melden",
      url: "https://www.jugendschutz.net/verstoss-melden"
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
    checklist: [
        "genauen aktuellen Standort nicht öffentlich teilen",
        "erst später posten",
        "Privatsphäre-Einstellungen prüfen",
        "keine Reisedauer öffentlich machen",
        "Familie fragen, bevor gemeinsame Bilder gepostet werden",
        "Standortdaten als private Information verstehen"
    ],
    answers: [
        {
            text: "A) Sie kann den Standort teilen, wenn ihr Profil nur von Freunden gesehen wird.",
            evaluation: "Teilweise riskant. Auch Freunde oder Kontakte können Inhalte weitergeben.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Sie sollte keine genauen aktuellen Standortdaten öffentlich teilen oder erst später posten.",
            evaluation: "Sehr sicher. Maja schützt ihre Privatsphäre und die ihrer Familie.",
            consequence: "+1 Sicherheits-Chip, +1 Zeit-Chip."
        },
        {
            text: "C) Sie kann den Standort teilen, wenn sie keine Adresse dazuschreibt.",
            evaluation: "Teilweise riskant. Auch ein genauer Ort kann viel verraten.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Sie sollte nur den Ort markieren, aber nicht schreiben, wie lange sie dort bleibt.",
            evaluation: "Teilweise sicher, aber nicht ideal. Der aktuelle Standort bleibt sichtbar.",
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
