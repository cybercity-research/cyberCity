let hasAnswered = false;

function getCardIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("card");
}

function renderCard(card) {
    const container = document.getElementById("card-container");

    container.innerHTML = `
    <article class="card" data-district="${card.district}">
      <div class="badge">${card.district}</div>

      <h1>${card.title}</h1>
      
      <div class="situation">
        <h2>Situation</h2>
        <p>${card.situation}</p>
      </div>

      <h2>Antwort auswählen</h2>

      <div id="answers"></div>
      
      <div class="help-source">
        <strong>Hilfequelle für Eltern:</strong>
          <ul>
            ${card.helpSources.map(source => `
              <li>
                <a href="${source.url}" target="_blank" rel="noopener noreferrer">
                  ${source.name}
                </a>
              </li>
            `).join("")}
          </ul>
      </div>

      <div id="result" class="result hidden"></div>
      <div id="solution-details" class="hidden">
        <h2>Sichere Reaktionen / Checkliste</h2>
        <ul>
          ${card.checklist.map(item => `<li>${item}</li>`).join("")}
        </ul>
    </article>
  `;

    const answersDiv = document.getElementById("answers");

    card.answers.forEach(answer => {
        const button = document.createElement("button");
        button.className = "answer";
        button.textContent = answer.text;
        button.addEventListener("click", () => showResult(answer));

        answersDiv.appendChild(button);
    });
}

function showResult(answer) {
    if (hasAnswered) {
        return;
    }

    hasAnswered = true;

    const resultBox = document.getElementById("result");
    const answerButtons = document.querySelectorAll(".answer");

    answerButtons.forEach(button => {
        button.disabled = true;
        button.classList.add("disabled");
    });

    resultBox.innerHTML = `
    <h2>Auswertung</h2>
    <p>${answer.evaluation}</p>
    <p><strong>Spiel-Folge:</strong> ${answer.consequence}</p>
  `;

    resultBox.classList.remove("hidden", "correct", "wrong", "partial");

    if (answer.type === "correct") {
        resultBox.classList.add("correct");
    } else if (answer.type === "wrong") {
        resultBox.classList.add("wrong");
    } else if (answer.type === "partial") {
        resultBox.classList.add("partial");
    }

    const solutionDetails = document.getElementById("solution-details");
    solutionDetails.classList.remove("hidden");

    resultBox.scrollIntoView({ behavior: "smooth" });
}

function renderNotFoundCard(cardId) {
    const container = document.getElementById("card-container");

    container.innerHTML = `
    <article class="board-error-card">
      <div class="board-corner-label">CyberCity</div>

      <h1 class="board-error-title">KARTE NICHT GEFUNDEN</h1>

      <p class="board-error-subtitle">
        Dieser QR-Code konnte nicht geladen werden.
      </p>

      <div class="board-error-box">
        <p><strong>Mögliche Gründe:</strong></p>
        <ul>
          <li>Der QR-Code enthält einen falschen Kartennamen.</li>
          <li>Die Karte wurde noch nicht ins System eingetragen.</li>
          <li>In der URL fehlt der Teil <code>?card=...</code>.</li>
        </ul>
      </div>
    </article>
  `;
}

function init() {
    const cardId = getCardIdFromUrl();
    const selectedCard = cards[cardId];

    if (selectedCard) {
        renderCard(selectedCard);
    } else {
        renderNotFoundCard(cardId);
    }
}

init();