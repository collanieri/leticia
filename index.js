const cardData = [
    "https://imgur.com/nh4LlYt.png",
    "https://imgur.com/fcnVDwu.png",
    "https://imgur.com/W833bXN.png",
    "https://imgur.com/53Sdrxl.png",
    "https://imgur.com/ZjBEwGg.png",
    "https://imgur.com/5NdmOJx.png",
    "https://imgur.com/z1e5W1Z.png",
    "https://imgur.com/MH0waID.png",
    "https://imgur.com/jj1ETgC.png",
    "https://imgur.com/CloIAtm.png",
    "https://imgur.com/smut5ha.png",
    "https://imgur.com/i8YYh3m.png",
    "https://imgur.com/KA0asvw.png",
    "https://imgur.com/ZVoSFWr.png",
    "https://imgur.com/eP3yfOG.png",
    "https://imgur.com/J98lIaJ.png",
    "https://imgur.com/crSler9.png",
    "https://imgur.com/mVIpwTW.png",
    "https://imgur.com/nTeb6OY.png",
    "https://imgur.com/a5D5pRS.png"
  ];
  
  const discountLimits = {
    5: 350,
    10: 340,
    15: 170,
    20: 1,
    25: 10,
    30: 10,
    35: 10,
    40: 10,
    50: 10,
    60: 10,
    70: 10,
    80: 10,
    85: 10
  };
  
  let availableDiscounts = Object.keys(discountLimits).flatMap((discount) =>
    Array(discountLimits[discount]).fill(discount)
  );
  let cardContainer = document.getElementById("cardContainer");
  let shuffleButton = document.getElementById("shuffleButton");
  
  // Função para gerar e embaralhar descontos
  function generateShuffledDiscounts() {
    let shuffledDiscounts = [...availableDiscounts];
    for (let i = shuffledDiscounts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledDiscounts[i], shuffledDiscounts[j]] = [
        shuffledDiscounts[j],
        shuffledDiscounts[i]
      ];
    }
    return shuffledDiscounts;
  }
  
  // Função para gerar e embaralhar imagens
  function generateShuffledCards() {
    let shuffledCards = [...cardData];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }
    return shuffledCards;
  }
  
  // Função para atualizar os cartões com as novas imagens e descontos
  function updateCards() {
    const shuffledDiscounts = generateShuffledDiscounts();
    const shuffledCards = generateShuffledCards();
    cardContainer.innerHTML = shuffledCards
      .map((image, index) => {
        const discount = shuffledDiscounts[index];
        return `
              <div class="card">
                  <div class="card-inner" onclick="revealCard(this)">
                      <div class="card-front">
                          <img src="${image}" alt="Card Image">
                      </div>
                      <div class="card-back">
                          <div class="reveal-text">
                              <p>Parabéns!</p>
                              <p>Você ganhou</p>
                              <p class="discount">${discount}%</p>
                              <p>de desconto!</p>
                          </div>
                      </div>
                  </div>
              </div>
          `;
      })
      .join("");
  }
  
  // Função para revelar o desconto ao clicar no cartão
  function revealCard(card) {
    card.classList.toggle("flipped");
  }
  
  // Função para embaralhar cartões ao clicar no botão
  function shuffleCards() {
    cardContainer.classList.add("shuffle");
    setTimeout(() => {
      cardContainer.classList.remove("shuffle");
      updateCards();
    }, 600); // Tempo da animação
  }
  
  // Atualizar os cartões ao carregar a página
  updateCards();
  
  // Adicionar evento de clique ao botão de embaralhar
  shuffleButton.addEventListener("click", shuffleCards);
  
