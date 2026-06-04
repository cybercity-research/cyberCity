from pathlib import Path
import qrcode

# Hier deine echte GitHub-Pages-URL eintragen
BASE_URL = "https://cybercity-research.github.io/cyberCity"

# Hier kommen die Karten-IDs rein
CARD_IDS = [
    "gaming-gutschein",
    "falscher-paketdienst",
    "angeblicher-support",
    "fake-shop",
    "gewinnspiel-mail",
    "freund-braucht-geld",
    "verdaechtiger-qr-code",
    "banknachricht",
    "influencer-code",
    "konto-diebstahl-melden",
    "komischer-online-shop",
    "handy-gewinn",
    "komischer-link-vom-freund",
    "geruecht-im-chat",
    "kostenloser-skin",
    "email-anhang",
    "update-fenster",
    "mod-app",
    "unbekanntes-usb-geraet",
    "popup-warnung",
    "cheat-code-download",
    "alte-app",
    "link-im-video-kommentar",
    "echtes-sicherheitsupdate",
    "anti-virus-werbung",
    "anti-virus-ausschalten",
    "kostenlose-filme-spiele",
    "unbekannte-referatsdatei",

    "geteiltes-passwort",
    "ein-passwort-fuer-alles",
    "login-auf-fremdem-geraet",
    "einfacher-name",
    "zwei-faktor-schutz",
    "passwort-im-klassenchat",
    "account-uebernommen",
    "passwort-im-browser-speichern",
    "sicherheitsfrage",
    "freund-will-passwort",
    "name-und-geburtsdatum",
    "passwort-fuer-mehrere-konten",

    "online-bekanntschaft",
    "frage-nach-schule",
    "profilfoto",
    "schlechtes-bauchgefuehl",
    "geheimer-chat",
    "altersluege",
    "sprachchat",
    "telefonnummer",
    "geschenk-im-spiel",
    "treffen-online-bekanntschaft",
    "unbekannte-freundschaftsanfrage",

    "peinliches-klassenfoto",
    "angriff-im-online-spiel",
    "teamchat-nach-dem-spiel",
    "bild-ohne-erlaubnis",
    "trauriger-blog",
    "streit-im-chat",
    "oeffentliches-profil",
    "mutprobe",
    "fake-account",
    "verstoerendes-video",
    "verletzendes-video-klassengruppe",
    "urlaubsstandort",
    "schule-wirklich-zu",
    "komischer-wiki-artikel",
    "einseitige-webseite",
    "ehrlicher-blog",
    "unglaubliches-skateboard-video",

    "taschenlampen-app",
    "online-quiz",
    "in-app-kauf",
    "standortfreigabe",
    "mikrofonzugriff",
    "altersabfrage",
    "app-aus-dem-internet",
    "peinliche-werbung",
    "altes-kinderkonto",
    "bildschirmzeit-check",
    "streit-um-bildschirmzeit",
    "oeffentliches-wlan",
    "foto-soll-weg",
    "digitaler-fussabdruck",
    "bilder-fuer-praesentation",
]

OUTPUT_DIR = Path("qr-codes")
OUTPUT_DIR.mkdir(exist_ok=True)

for card_id in CARD_IDS:
    url = f"{BASE_URL}/index.html?card={card_id}"

    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=12,
        border=4,
    )

    qr.add_data(url)
    qr.make(fit=True)

    image = qr.make_image(fill_color="black", back_color="white")

    output_path = OUTPUT_DIR / f"qr-{card_id}.png"
    image.save(output_path)

    print(f"Erstellt: {output_path} -> {url}")

print("Fertig! Alle QR-Codes wurden erstellt.")