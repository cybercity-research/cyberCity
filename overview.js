function groupCardsByDistrict() {
    const groupedCards = {};

    Object.entries(cards).forEach(([cardId, card]) => {
        if (!groupedCards[card.district]) {
            groupedCards[card.district] = [];
        }

        groupedCards[card.district].push({
            id: cardId,
            ...card
        });
    });

    return groupedCards;
}

function createCardLink(cardId) {
    return `index.html?card=${cardId}`;
}

function renderOverview() {
    const container = document.getElementById("overview-container");
    const groupedCards = groupCardsByDistrict();

    const districtOrder = [
        "Betrugs-Basar",
        "Malware-Labor",
        "Passwort-Park",
        "Chat-Café",
        "Social-Media-Platz",
        "App-Allee"
    ];

    container.innerHTML = "";

    districtOrder.forEach(district => {
        const districtCards = groupedCards[district];

        if (!districtCards || districtCards.length === 0) {
            return;
        }

        const districtSection = document.createElement("section");
        districtSection.className = "overview-district";
        districtSection.setAttribute("data-district", district);

        districtSection.innerHTML = `
      <h2>${district}</h2>
      <div class="overview-list"></div>
    `;

        const list = districtSection.querySelector(".overview-list");

        districtCards.forEach(card => {
            const link = createCardLink(card.id);

            const item = document.createElement("div");
            item.className = "overview-item";

            item.innerHTML = `
        <div>
          <strong>${card.title}</strong>
          <div class="overview-id">${card.id}</div>
        </div>

        <div class="overview-actions">
          <a href="${link}" target="_blank" rel="noopener noreferrer">
            Testen
          </a>

          <button type="button" data-link="${link}">
            Link kopieren
          </button>
        </div>
      `;

            const copyButton = item.querySelector("button");

            copyButton.addEventListener("click", async () => {
                const fullUrl = new URL(link, window.location.href).href;

                try {
                    await navigator.clipboard.writeText(fullUrl);
                    copyButton.textContent = "Kopiert!";
                    setTimeout(() => {
                        copyButton.textContent = "Link kopieren";
                    }, 1200);
                } catch (error) {
                    alert("Kopieren hat nicht funktioniert. Link: " + fullUrl);
                }
            });

            list.appendChild(item);
        });

        container.appendChild(districtSection);
    });
}

renderOverview();