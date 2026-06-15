cards["peinliches-klassenfoto"] = {
    district: "Social-Media-Platz",
    title: "Das peinliche Klassenfoto",
    situation: "Im Klassenchat wird ein peinliches Foto geteilt. Einige schreiben lachende Emojis. Jemand schreibt:\n" +
        "„Schick es weiter, das ist so witzig!“\n" +
        "Du merkst, dass die betroffene Person es nicht witzig findet.",
    checklist: [
        "Foto nicht weiterleiten",
        "nicht mitlachen oder verletzende Kommentare schreiben",
        "betroffene Person unterstützen",
        "falls nötig Beweise sichern, aber nicht weiterverbreiten",
        "erwachsene Vertrauensperson informieren",
        "melden oder blockieren, wenn es weitergeht"
    ],
    answers: [
        {
            text: "A) Wir schauen es uns nur an und schreiben nichts dazu.",
            type: "partial",
            evaluation: "Teilweise sicher. Nicht mitzulachen und nichts Gemeines zu schreiben ist besser als mitzumachen. Aber die betroffene Person braucht vielleicht Unterstützung, und das Foto sollte nicht weiterverbreitet werden.",
            consequence: "+1 Zeit-Chip."
        },
        {
            text: "B) Wir leiten das Foto nicht weiter, schreiben nicht verletzend mit und sagen, dass das unfair ist. Wenn es weitergeht, holen wir Hilfe.",
            type: "correct",
            evaluation: "Sehr sicher und fair. So wird das Foto nicht weiterverbreitet, die betroffene Person wird unterstützt und bei weiterem Druck kann eine erwachsene Vertrauensperson helfen.",
            consequence: "+1 Sicherheits-Chip, +1 Zeit-Chip und möglicher Fair-online Badge."
        },
        {
            text: "C) Wir machen einen Screenshot und schicken ihn an mehrere Freunde, damit alle sehen, was passiert ist.",
            type: "wrong",
            evaluation: "Riskant. Auch wenn es als Beweis gemeint ist, wird das Bild dadurch weiterverbreitet. Beweise sollten nur gezielt für Hilfe oder eine Meldung genutzt werden, nicht im Freundeskreis herumgeschickt werden.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Wir schreiben der betroffenen Person privat, dass sie den Chat einfach ignorieren soll.",
            type: "partial",
            evaluation: "Teilweise unterstützend. Privat nachzufragen kann helfen. Nur zu sagen, dass sie es ignorieren soll, reicht aber nicht immer, weil das Bild weiter Schaden anrichten kann.",
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
    situation: "Josie bekommt eine Nachricht:\n" +
        "„Cindy ist in Brian verliebt! Sag es weiter, das ist voll lustig.“\n" +
        "Josie weiß nicht, ob das stimmt. Außerdem könnte Cindy sehr peinlich berührt sein, wenn andere davon erfahren.",
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
            text: "A) Josie leitet die Nachricht nicht weiter und schreibt zurück: „Das ist privat und geht uns nichts an.“",
            type: "correct",
            evaluation: "Sehr sicher und fair. Josie verbreitet das Gerücht nicht weiter, schützt Cindys Privatsphäre und setzt eine klare Grenze.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "A) Josie löscht die Nachricht und macht nicht mit.",
            type: "partial",
            evaluation: "Teilweise sicher. Nicht mitzumachen ist gut. Wenn andere das Gerücht aber weiterverbreiten, kann es helfen, klar zu sagen, dass Cindy nicht bloßgestellt werden soll.",
            consequence: "Nichts."
        },
        {
            text: "C) Josie fragt Cindy privat, ob das Gerücht stimmt, damit sie besser helfen kann.",
            type: "partial",
            evaluation: "Gut gemeint, aber heikel. Unterstützung kann wichtig sein, aber Cindy könnte sich dadurch zusätzlich unangenehm berührt fühlen. Besser ist zuerst, das Gerücht nicht weiterzutragen und andere zu stoppen.",
            consequence: "Nichts."
        },
        {
            text: "D) Josie fragt Brian heimlich, ob Cindy wirklich in ihn verliebt ist.",
            type: "wrong",
            evaluation: "Riskant. Dadurch wird das Gerücht weitergetragen und Cindy kann bloßgestellt werden, auch wenn Josie es nur überprüfen wollte.",
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
    situation: "Joel loggt sich in den Chat seiner Basketballmannschaft ein. Dort sieht er, dass einige Teammitglieder Matt fertig machen, weil Matt im letzten Spiel den entscheidenden Wurf verfehlt hat. Einige Kommentare werden sehr persönlich.",
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
            text: "A) Joel schreibt Matt privat, dass er auf seiner Seite ist, sagt aber sonst nichts.",
            type: "partial",
            evaluation: "Teilweise unterstützend. Matt privat zu stärken kann helfen. Wenn die Gruppe aber weiter persönlich angreift, sollte Joel zusätzlich Hilfe holen oder fair widersprechen, wenn es sicher möglich ist.",
            consequence: "+1 Zeit-Chip."
        },
        {
            text: "B) Joel macht Screenshots und schickt sie in einen anderen Gruppenchat, damit alle sehen, wer gemein war.",
            type: "wrong",
            evaluation: "Riskant. Auch wenn Joel die Angriffe beweisen möchte, verbreitet er die Situation damit weiter. Screenshots sollten nur gezielt als Beweis für Hilfe oder eine Meldung genutzt werden.",
            consequence: "Risiko +2."
        },
        {
            text: "C) Joel schreibt ruhig in den Chat, dass persönliche Angriffe unfair sind, und informiert eine erwachsene Vertrauensperson, wenn es weitergeht.",
            type: "correct",
            evaluation: "Sehr sicher und fair. Joel macht nicht mit, setzt eine klare Grenze und holt Hilfe, wenn die Kommentare weiter verletzend bleiben.",
            consequence: "+1 Sicherheits-Chip, +1 Zeit-Chip und möglicher Fair-online Badge."
        },
        {
            text: "D) Joel schreibt einen harmlosen Witz über den verfehlten Wurf, damit die Stimmung lockerer wird.",
            type: "partial",
            evaluation: "Gut gemeint, aber riskant. Ein Witz kann die Situation weiter anheizen oder Matt noch mehr verletzen. Besser ist es, persönliche Angriffe zu stoppen und Matt zu unterstützen.",
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
    situation: "Jo und Matt arbeiten gemeinsam an einer Präsentation für die Schule. Sie brauchen dafür passende Bilder und finden im Internet viele Fotos, die gut aussehen.\n" +
        "Jo ist sich aber unsicher, ob sie die Bilder einfach kopieren und in ihre Präsentation einfügen dürfen.",
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
            text: "A) Jo und Matt schreiben die Quelle unter jedes Bild und verwenden es dann.",
            type: "partial",
            evaluation: "Teilweise richtig. Eine Quellenangabe ist wichtig, aber sie bedeutet nicht automatisch, dass das Bild verwendet werden darf. Vorher sollten sie prüfen, ob die Nutzung erlaubt ist.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Jo und Matt verwenden die Bilder, weil die Präsentation nur in der Schule gezeigt wird.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar. Für Schule können andere Regeln gelten als für öffentliche Posts. Trotzdem sollten sie nicht einfach jedes Bild kopieren, sondern die Nutzungsbedingungen prüfen oder die Lehrkraft fragen.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Jo und Matt verändern die Bilder mit Filtern oder schneiden sie zu, damit sie als eigene Bilder gelten.",
            type: "wrong",
            evaluation: "Riskant. Ein Bild zu bearbeiten macht es nicht automatisch frei nutzbar. Auch veränderte Bilder können weiterhin geschützt sein.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Jo und Matt suchen gezielt nach frei nutzbaren Bildern und notieren die Quelle so, wie es dort angegeben ist.",
            type: "correct",
            evaluation: "Sehr sicher. Sie wählen Bilder, die für die Nutzung geeignet sind, und geben die Quelle korrekt an. So respektieren sie, dass Bilder jemandem gehören können.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
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
    situation: "Nach der Unterrichtsstunde über Berufe überlegt Mia, welchen Eindruck ihre Online-Profile machen. Sie fragt sich, was Schulen, Universitäten oder Arbeitgeber über sie sehen könnten. Sie möchte online einen guten Eindruck hinterlassen.",
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
            text: "A) Mia schaut sich ihre Profile aus Sicht anderer an und räumt Inhalte auf, die zu privat, verletzend oder peinlich wirken könnten.",
            type: "correct",
            evaluation: "Sehr sicher. Mia gestaltet ihren digitalen Fußabdruck bewusst, ohne sich falsch darzustellen. Sie prüft, was sichtbar ist, und schützt ihre Privatsphäre.",
            consequence: "+1 Sicherheits-Chip, +1 Zeit-Chip und möglicher Datenschutz-Badge."
        },
        {
            text: "B) Mia löscht sofort alle Konten, damit niemand etwas über sie finden kann.",
            type: "partial",
            evaluation: "Teilweise sicher, aber sehr streng. Löschen kann in manchen Fällen sinnvoll sein. Oft reicht es aber, alte Inhalte zu prüfen, Privatsphäre-Einstellungen anzupassen und bewusster zu posten.",
            consequence: "Nichts."
        },
        {
            text: "C) Mia postet extra viele perfekte Bilder und Erfolgsmomente, damit ihr Profil möglichst beeindruckend aussieht.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar, aber problematisch. Ein guter Eindruck kann wichtig sein, aber übertriebene oder unechte Selbstdarstellung erzeugt Druck und schützt nicht automatisch die Privatsphäre.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Mia lässt alles so, wie es ist, weil alte Kinder- und Jugendprofile später sowieso niemanden interessieren.",
            type: "wrong",
            evaluation: "Riskant. Online-Inhalte können lange sichtbar bleiben, gespeichert oder weitergegeben werden. Deshalb ist es sinnvoll, regelmäßig zu prüfen, was andere sehen können.",
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
    situation: "Auf Romys Profil erscheint plötzlich ein Foto von ihr im Schlafanzug. Sie sieht müde aus, ihre Haare stehen lustig ab, und sie wusste gar nicht, dass jemand dieses Foto bei der Übernachtung gemacht hat. Romy möchte, dass das Foto verschwindet.",
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
            text: "A) Romy schreibt einen wütenden Kommentar unter das Foto, damit alle sehen, dass sie das nicht erlaubt hat.",
            type: "partial",
            evaluation: "Verständlich, aber riskant. Romy setzt zwar eine Grenze, aber ein wütender öffentlicher Kommentar kann den Streit vergrößern und noch mehr Aufmerksamkeit auf das Foto lenken.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Romy bittet die Person, das Foto zu löschen. Wenn es nicht entfernt wird, nutzt sie die Meldefunktion.",
            type: "correct",
            evaluation: "Sehr sicher. Romy reagiert ruhig, verbreitet das Foto nicht weiter und nutzt passende Hilfewege, falls die andere Person nicht reagiert.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Romy speichert das Foto und schickt es ihren Freunden, damit sie zeigen kann, wie gemein das ist.",
            type: "wrong",
            evaluation: "Riskant. Dadurch wird das Foto weiterverbreitet, obwohl Romy eigentlich möchte, dass es verschwindet. Beweise sollten nur gezielt für Hilfe oder eine Meldung genutzt werden.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Romy meldet das Foto in der App, sagt aber niemandem Bescheid, obwohl sie sich sehr unwohl fühlt.",
            type: "partial",
            evaluation: "Teilweise sicher. Die Meldefunktion zu nutzen ist gut. Wenn Romy sich sehr unwohl fühlt oder das Foto nicht entfernt wird, sollte sie zusätzlich eine erwachsene Vertrauensperson um Hilfe bitten.",
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
    situation: "Du hast ein lustiges Foto von einem Freund oder einer Freundin gemacht. Du möchtest es posten, weil du glaubst, dass andere es witzig finden.",
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
            text: "A) Wir posten es, wenn die Person darauf lustig aussieht und es nur als Spaß gemeint ist.",
            type: "wrong",
            evaluation: "Riskant. Lustig für eine Person kann für die andere peinlich oder verletzend sein. Gute Absicht ersetzt keine Erlaubnis.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir machen das Gesicht unkenntlich und posten es, ohne noch einmal zu fragen.",
            type: "partial",
            evaluation: "Teilweise sicher. Das Gesicht unkenntlich zu machen kann helfen. Trotzdem kann die Person durch Kleidung, Ort oder Situation erkennbar sein oder sich unwohl fühlen. Bei Bildern von anderen sollte man vorher fragen.",
            consequence: "Nichts."
        },
        {
            text: "C) Wir zeigen der Person das Foto zuerst und posten es nur, wenn sie wirklich einverstanden ist.",
            type: "correct",
            evaluation: "Sehr sicher und respektvoll. Die andere Person darf mitentscheiden, welches Bild von ihr online erscheint. Ein Nein sollte akzeptiert werden.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Wir posten es nur in die Story, weil es nach kurzer Zeit wieder verschwindet.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar, aber riskant. Stories wirken weniger dauerhaft, können aber gespeichert, gescreenshotet oder weitergeleitet werden. Auch dafür braucht es vorher Zustimmung.",
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
    situation: "Bob bekommt von Ben ein Video. Darin macht ein Skateboarder unglaubliche Tricks, die fast unmöglich aussehen. Einige Freunde schreiben schon:\n" +
        "„Krass, das musst du weiterleiten!“\n" +
        "Bob fragt sich, ob das Video echt ist oder vielleicht geschnitten, gestellt oder bearbeitet wurde.",
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
            text: "A) Bob leitet das Video weiter, schreibt aber dazu: „Keine Ahnung, ob das echt ist.“",
            type: "partial",
            evaluation: "Teilweise ehrlich, aber nicht ideal. Der Hinweis zeigt Unsicherheit, trotzdem wird das Video weiterverbreitet. Besser ist es, erst zu prüfen oder es nicht weiterzuschicken.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Bob schaut sich das Video mehrmals an und achtet auf komische Schnitte oder Bewegungen.",
            type: "partial",
            evaluation: "Teilweise sinnvoll. Auffällige Schnitte oder Bewegungen können Hinweise geben. Allein durch Anschauen erkennt man aber nicht immer sicher, ob ein Video bearbeitet oder gestellt ist.",
            consequence: "+1 Zeit-Chip."
        },
        {
            text: "C) Bob glaubt dem Video, wenn es viele Likes, Kommentare und Aufrufe hat.",
            type: "wrong",
            evaluation: "Riskant. Viele Reaktionen zeigen nur, dass ein Video Aufmerksamkeit bekommt. Sie beweisen nicht, dass es echt oder unverändert ist.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Bob schaut, woher das Video kommt, sucht nach dem Original und prüft, ob andere verlässliche Quellen es erklären.",
            type: "correct",
            evaluation: "Sehr sicher. Bob glaubt das Video nicht nur, weil es beeindruckend aussieht, sondern prüft Herkunft, Original und weitere Hinweise, bevor er es teilt.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
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
    situation: "Pua bekommt einen Link zu einem Blog. Dort werden dramatische „Vorher-Nachher“-Bilder gezeigt. Die Autorin empfiehlt ein Produkt und schreibt, dass es ihr Leben verändert habe.\n" +
        "Pua fragt sich, ob die Empfehlung ehrlich ist oder ob die Autorin damit Geld verdienen möchte.",
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
            type: "wrong",
            evaluation: "Riskant. Bilder können bearbeitet, gestellt oder einseitig ausgewählt sein. Dramatische Bilder sind kein sicherer Beweis dafür, dass ein Produkt wirkt.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Pua schaut nach, ob Werbung, Rabattcodes oder Produktlinks im Beitrag vorkommen, und sucht zusätzlich nach unabhängigen Informationen.",
            type: "correct",
            evaluation: "Sehr sicher. Pua erkennt mögliche kommerzielle Interessen und verlässt sich nicht nur auf persönliche Erfahrungsberichte oder beeindruckende Bilder.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Pua vertraut dem Blog eher, wenn viele positive Kommentare darunterstehen.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar, aber unsicher. Viele positive Kommentare können echt wirken, beweisen aber nicht, dass die Empfehlung unabhängig ist. Kommentare können einseitig, gefälscht oder von Fans geschrieben sein.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Pua bestellt das Produkt nicht, teilt den Link aber mit Freundinnen, damit sie selbst entscheiden können.",
            type: "partial",
            evaluation: "Teilweise vorsichtig. Nicht sofort zu bestellen ist gut. Trotzdem kann Pua durch das Weiterleiten problematische Werbung verbreiten, besonders wenn es um Gesundheit, Körper oder Aussehen geht.",
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
    situation: "Nina und Matt schreiben einen Aufsatz über Schuluniformen. Nina findet eine Webseite, die auf den ersten Blick wie eine gute Quelle aussieht. Beim Lesen merkt sie aber: Die Seite benutzt sehr starke Wörter und zeigt fast nur eine Meinung.\n" +
        "Nina ist sich nicht sicher, ob die Webseite für ihren Aufsatz zuverlässig ist.",
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
            text: "A) Nina nutzt die Webseite, weil starke Wörter zeigen, dass die Autorin oder der Autor sich gut auskennt.",
            type: "wrong",
            evaluation: "Riskant. Sehr starke oder emotionale Sprache kann ein Hinweis darauf sein, dass eine Quelle einseitig, werbend oder manipulativ ist.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Nina nimmt die Webseite, weil sie genau zu ihrer eigenen Meinung über Schuluniformen passt.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar, aber einseitig. Eine Quelle kann zur eigenen Meinung passen, sollte aber trotzdem zuverlässig sein und verschiedene Argumente berücksichtigen.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Nina schaut nach, wer hinter der Seite steht, ob mehrere Sichtweisen vorkommen, und vergleicht die Informationen mit anderen Quellen.",
            type: "correct",
            evaluation: "Sehr sicher. Nina prüft die Quelle genauer, erkennt mögliche Einseitigkeit und verlässt sich nicht nur auf eine Webseite.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Nina verwendet nur die Überschriften und ein paar starke Sätze, weil sie dadurch ihren Aufsatz überzeugender machen kann.",
            type: "partial",
            evaluation: "Teilweise praktisch, aber riskant. Überschriften und zugespitzte Sätze können ein Thema verzerren. Für einen Aufsatz sollte Nina den Inhalt genauer prüfen und neutrale Quellen einbeziehen.",
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
    situation: "Johann und Annie finden einen Artikel in einem Online-Lexikon. Einige Aussagen klingen für Johann ziemlich komisch. Außerdem weiß er, dass solche Artikel manchmal von vielen verschiedenen Personen bearbeitet werden können.\n" +
        "Johann möchte herausfinden, ob der Artikel zuverlässig genug für seine Schulaufgabe ist.",
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
            text: "A) Johann nutzt den Artikel als ersten Überblick, prüft aber die Quellen und vergleicht wichtige Aussagen mit anderen zuverlässigen Seiten.",
            type: "correct",
            evaluation: "Sehr sicher. Johann verwirft den Artikel nicht sofort, verlässt sich aber auch nicht blind darauf. Er nutzt ihn als Startpunkt und überprüft wichtige Informationen genauer.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "B) Johann übernimmt den Artikel, weil Online-Lexika meistens von vielen Menschen verbessert werden.",
            type: "partial",
            evaluation: "Teilweise nachvollziehbar, aber nicht sicher genug. Viele Bearbeitungen können hilfreich sein, garantieren aber nicht, dass alle Aussagen richtig, aktuell oder gut belegt sind.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Johann verwirft den Artikel sofort, weil solche Seiten von verschiedenen Personen bearbeitet werden können.",
            type: "partial",
            evaluation: "Teilweise vorsichtig, aber zu streng. Bearbeitbare Seiten können trotzdem nützlich sein, wenn Quellen, Aktualität und Belege geprüft werden.",
            consequence: "Nichts."
        },
        {
            text: "D) Johann nimmt nur die Stellen, die besonders spannend oder lustig klingen, damit seine Präsentation interessanter wird.",
            type: "wrong",
            evaluation: "Riskant. Auffällige oder lustige Aussagen sind nicht automatisch wahr. Gerade ungewöhnliche Aussagen sollten besonders sorgfältig überprüft werden.",
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
    situation: "Dein Profil zeigt deinen Namen, dein Alter, deine Schule, deinen Wohnort und viele Fotos.\n" +
        "Du findest das praktisch, weil Freunde dich so leichter finden können.",
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
            type: "wrong",
            evaluation: "Riskant. Zu viele öffentliche Informationen können von fremden Personen genutzt werden, zum Beispiel Schule, Wohnort, Alter oder Fotos.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir entfernen nur den Wohnort, weil die Schule nicht so schlimm ist.",
            type: "partial",
            evaluation: "Teilweise sicher. Den Wohnort zu entfernen ist ein guter Anfang. Aber auch Schule, Alter, Fotos und andere Hinweise können zusammen viel über eine Person verraten.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Wir löschen das Profil sofort, damit niemand mehr etwas sehen kann.",
            type: "partial",
            evaluation: "Sehr vorsichtig, aber nicht immer nötig. Oft reicht es, Privatsphäre-Einstellungen zu ändern und private Informationen zu entfernen. Wichtig ist, bewusst zu entscheiden, was sichtbar bleibt.",
            consequence: "Nichts."
        },
        {
            text: "D) Wir prüfen, wer das Profil sehen kann, und entfernen Schule, Wohnort und andere private Informationen.",
            type: "correct",
            evaluation: "Sehr sicher. Das Profil bleibt nutzbar, aber private Daten sind besser geschützt. Freunde können einen trotzdem finden, ohne dass alle Details öffentlich sichtbar sind.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
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
    situation: "In einer Challenge sollst du ein peinliches Video posten. Alle sagen: „Traust du dich nicht?“ Du möchtest nicht als langweilig gelten.",
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
            text: "A) Wir machen mit, damit die anderen nicht denken, dass wir langweilig sind.",
            type: "wrong",
            evaluation: "Riskant. Gruppendruck kann dazu führen, dass man etwas postet, das später peinlich, verletzend oder schwer zu löschen ist.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Wir sagen Nein und machen bei der Challenge nicht mit. Wenn andere weiter Druck machen, holen wir Hilfe.",
            type: "correct",
            evaluation: "Sehr sicher. Grenzen zu setzen ist stark, auch wenn andere drängen. Niemand muss peinliche oder unangenehme Inhalte posten, nur um dazuzugehören.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "C) Wir posten das Video nur kurz oder nur in eine private Story.",
            type: "partial",
            evaluation: "Teilweise vorsichtig, aber riskant. Auch kurze oder private Posts können gespeichert, gescreenshotet oder weitergeleitet werden.",
            consequence: "Risiko +1."
        },
        {
            text: "D) Wir machen selbst nicht mit, nominieren aber jemand anderen.",
            type: "partial",
            evaluation: "Teilweise sicher für uns selbst, aber unfair. Dadurch wird der Druck an eine andere Person weitergegeben. Besser ist es, den Gruppendruck nicht weiterzuführen.",
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
    situation: "Jemand erstellt ein Profil mit dem Namen eines Mitschülers und postet Unsinn. Viele finden es lustig und folgen dem Profil.",
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
            text: "A) Wir folgen dem Profil nicht, informieren die betroffene Person und melden den Account.",
            type: "correct",
            evaluation: "Sehr sicher und fair. So wird der Fake-Account nicht unterstützt, die betroffene Person erfährt davon und es kann Hilfe geholt werden.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "B) Wir folgen dem Profil, weil es lustig gemeint ist und viele aus der Klasse es auch machen.",
            type: "wrong",
            evaluation: "Riskant. Folgen, Liken oder Lachen unterstützt den Fake-Account und kann die betroffene Person verletzen oder bloßstellen.",
            consequence: "Risiko +2."
        },
        {
            text: "C) Wir folgen dem Profil nicht, sagen aber auch niemandem etwas, damit wir uns nicht einmischen.",
            type: "partial",
            evaluation: "Teilweise sicher. Nicht zu folgen ist gut. Trotzdem kann der Fake-Account weiter Schaden anrichten, wenn niemand die betroffene Person informiert oder das Profil meldet.",
            consequence: "Nichts."
        },
        {
            text: "D) Wir schreiben dem Fake-Account öffentlich, dass die Person aufhören soll.",
            type: "partial",
            evaluation: "Gut gemeint, aber riskant. Öffentliche Kommentare können die Situation weiter anheizen und dem Fake-Profil noch mehr Aufmerksamkeit geben. Besser ist melden, nicht teilen und Hilfe holen.",
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
    situation: "Lena schaut ein Video auf einer Plattform. Plötzlich erscheint ein Video mit sehr verstörenden Bildern, das ihr Angst macht. Sie weiß nicht, ob sie einfach weiterschauen, schließen oder etwas sagen soll.",
    checklist: [
        "Video sofort schließen",
        "nicht weiter anschauen",
        "nicht weiterleiten",
        "keine Screenshots machen oder herumzeigen",
        "einer erwachsenen Vertrauensperson davon erzählen",
        "Inhalt melden, wenn möglich",
        "über Gefühle sprechen dürfen"
    ],
    answers: [
        {
            text: "A) Lena schickt das Video an eine Freundin und fragt, ob sie es auch schlimm findet.",
            type: "wrong",
            evaluation: "Riskant. Dadurch wird der belastende Inhalt weiterverbreitet und kann auch andere erschrecken oder belasten. Besser ist es, Hilfe zu holen und den Inhalt zu melden.",
            consequence: "Risiko +2."
        },
        {
            text: "B) Lena schließt das Video und meldet es in der App.",
            type: "correct",
            evaluation: "Sicher. Schließen und Melden ist gut. Wenn Lena Angst bekommen hat oder das Video sie beschäftigt, sollte sie zusätzlich mit einer erwachsenen Vertrauensperson sprechen.",
            consequence: "+1 Zeit-Chip."
        },
        {
            text: "C) Lena schaut das Video zu Ende, um zu verstehen, ob es wirklich so schlimm ist.",
            type: "wrong",
            evaluation: "Riskant. Wenn ein Video Angst macht oder verstörend ist, muss Lena es nicht weiter anschauen. Weiterzuschauen kann sie zusätzlich belasten.",
            consequence: "Risiko +2."
        },
        {
            text: "D) Lena schließt das Video sofort, schaut nicht weiter und sucht Hilfe, wenn es ihr nicht gut geht.",
            type: "correct",
            evaluation: "Sehr sicher. Lena schützt sich vor weiterem belastendem Inhalt und bleibt mit ihrer Angst nicht allein. Eine erwachsene Person kann helfen, den Inhalt zu melden oder die Plattform-Einstellungen zu prüfen.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
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
    situation: "Maja ist mit ihrer Familie im Urlaub. Sie möchte ein schönes Foto posten. Am liebsten würde sie den Ort markieren, weil das Bild dann spannender wirkt. Gleichzeitig ist sie unsicher, wie viel andere dadurch über ihren Urlaub erfahren.",
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
            text: "A) Maja postet das Foto sofort, aber ohne Hotelnamen. Sie schreibt nur dazu, in welcher Stadt sie gerade ist.",
            type: "partial",
            evaluation: "Teilweise vorsichtig. Den Hotelnamen wegzulassen ist gut. Trotzdem verrät Maja öffentlich, wo sie gerade ist und dass sie nicht zu Hause ist.",
            consequence: "Risiko +1."
        },
        {
            text: "B) Maja postet das Foto sofort ohne Standortmarkierung, schreibt aber: „Zwei Wochen Urlaub, endlich weg von zu Hause!“",
            type: "partial",
            evaluation: "Teilweise sicher. Keine Standortmarkierung zu nutzen ist gut. Der Text verrät aber trotzdem, dass Maja gerade verreist ist und länger nicht zu Hause sein könnte.",
            consequence: "Risiko +1."
        },
        {
            text: "C) Maja postet das Foto später, ohne genauen Standort, und fragt ihre Familie, ob alle mit dem Bild einverstanden sind.",
            type: "correct",
            evaluation: "Sehr sicher. Maja teilt den Moment, ohne ihren aktuellen Aufenthaltsort oder die Privatsphäre ihrer Familie unnötig preiszugeben.",
            consequence: "+1 Sicherheits-Chip und +1 Zeit-Chip."
        },
        {
            text: "D) Maja teilt das Foto nur in ihrer Story für enge Freunde und markiert dort den Ort.",
            type: "partial",
            evaluation: "Teilweise sicherer als öffentlich posten. Trotzdem können auch enge Kontakte Inhalte speichern, zeigen oder weiterleiten. Genaue aktuelle Standortdaten bleiben privat.",
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
