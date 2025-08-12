function desenharPontuacao(pontos) {
  const container = document.getElementById("pontuacao-bolas");
  if (!container) return;  // evita erro se container não existir
  container.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    const bolinha = document.createElement("div");
    bolinha.style.width = "20px";
    bolinha.style.height = "20px";
    bolinha.style.borderRadius = "50%";
    bolinha.style.border = "2px solid white";
    bolinha.style.backgroundColor = "transparent";
    bolinha.style.position = "relative";
    bolinha.style.overflow = "hidden";

    const pontosRestantes = pontos - i;

    if (pontosRestantes >= 1) {
      bolinha.style.backgroundColor = "white";
    } else if (pontosRestantes >= 0.5) {
      const meio = document.createElement("div");
      meio.style.position = "absolute";
      meio.style.left = "0";
      meio.style.top = "0";
      meio.style.width = "50%";
      meio.style.height = "100%";
      meio.style.backgroundColor = "white";
      bolinha.appendChild(meio);
    }

    container.appendChild(bolinha);
  }
}

function mostrarTelaFinal(pontuacaoFinal) {
  // Remove elementos do jogo anterior
  const elementosParaRemover = [
    ".game-container",
    ".respostas-area",
    ".regras-box",
    ".status-box",
    "#btnProximoRound"
  ];
  elementosParaRemover.forEach(selector => {
    const el = document.querySelector(selector);
    if (el) el.remove();
  });

  const moldura = document.querySelector(".moldura");
  if (moldura) {
    moldura.style.border = "none";
    moldura.style.background = "transparent";
    moldura.innerHTML = "";
  } else {
    document.body.innerHTML = "";
  }

  // Container da tela final
  const fimContainer = document.createElement("div");
  fimContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #111;
    color: white;
    font-family: 'MinhaFonte', sans-serif;
    text-align: center;
    opacity: 0;
    transition: opacity 1.5s ease;
    position: relative;
    overflow: hidden;
  `;
  document.body.appendChild(fimContainer);

  const titulo = document.createElement("h1");
  titulo.textContent = "Obrigado por jogar!";
  titulo.style.fontSize = "3rem";
  titulo.style.marginBottom = "20px";
  fimContainer.appendChild(titulo);

  const textoExplicativo = document.createElement("p");
  textoExplicativo.textContent = "Sua pontuação final:";
  textoExplicativo.style.fontSize = "1.5rem";
  textoExplicativo.style.marginBottom = "10px";
  fimContainer.appendChild(textoExplicativo);

  // Container para as bolinhas da pontuação final
  const pontuacaoBolas = document.createElement("div");
  pontuacaoBolas.id = "pontuacao-bolas";
  pontuacaoBolas.style.cssText = `
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 30px;
  `;
  fimContainer.appendChild(pontuacaoBolas);

  desenharPontuacao(pontuacaoFinal);

  // Botão para reiniciar o jogo
  const btnReiniciar = document.createElement("button");
  btnReiniciar.textContent = "Jogar Novamente";
  btnReiniciar.style.cssText = `
    padding: 12px 24px;
    font-size: 1.2rem;
    border: none;
    border-radius: 8px;
    background-color: white;
    color: black;
    cursor: pointer;
    transition: background-color 0.3s ease;
  `;
  btnReiniciar.onmouseover = () => {
    btnReiniciar.style.backgroundColor = "#ccc";
  };
  btnReiniciar.onmouseout = () => {
    btnReiniciar.style.backgroundColor = "white";
  };
  btnReiniciar.addEventListener("click", () => {
    location.reload();
  });
  fimContainer.appendChild(btnReiniciar);

  // Animação suave de aparecimento
  requestAnimationFrame(() => {
    fimContainer.style.opacity = "1";
  });

  // === Confetti animation (15 segundos) ===
  const end = Date.now() + (15 * 1000);
  const colors = ['#bb0000', '#ffffff'];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}