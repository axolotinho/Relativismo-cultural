const dialogos = [
  {
    "id": 1,
    "npc": "Taverneiro",
    "npcDialog": "Aqui a cerveja é feita com o melhor malte da região. Muitos dizem que não há nada igual além do rio.",
    "regra": "",
    "respostas": [
      {
        "texto": "Já provei cervejas de muitos lugares, mas essa tem um gosto especial.",
        "tipo": "correta",
        "npcResposta": "Fico feliz que goste. É segredo da família há gerações."
      },
      {
        "texto": "Nunca fui muito de beber, prefiro vinho ou hidromel.",
        "tipo": "duvidosa",
        "npcResposta": "Cada um com seu gosto, mas aqui a cerveja une as pessoas."
      },
      {
        "texto": "Gosto mais dos sabores que se encontram na cidade, acho que aqui é meio simples.",
        "tipo": "errada",
        "npcResposta": "A cidade tem suas belezas, mas não subestime o coração do campo."
      }
    ]
  },
  {
    "id": 2,
    "npc": "Morador da vila",
    "npcDialog": "A água desta fonte é pura e traz proteção à nossa aldeia. Sempre a tratamos com cuidado e respeito.",
    "regra": "",
    "respostas": [
      {
        "texto": "Sei que essa fonte é importante para vocês e também respeito isso.",
        "tipo": "correta",
        "npcResposta": "Suas palavras mostram um coração aberto. Fico feliz."
      },
      {
        "texto": "Nunca pensei muito nisso, mas imagino que a água seja boa.",
        "tipo": "duvidosa",
        "npcResposta": "Ao menos reconhece o valor que damos a ela."
      },
      {
        "texto": "Para mim, água é só água — não entendo essa veneração toda.",
        "tipo": "errada",
        "npcResposta": "A água pode parecer comum, mas para nós é a vida que corre em nossas veias."
      }
    ]
  },
  {
  "id": 3,
  "npc": "Ancião sentado no banco da praça",
  "npcDialog": "Vejo que a juventude anda inquieta, mas aprenda que o silêncio diante dos mais velhos é sinal de respeito.",
  "regra": "Na vila, é esperado que os mais jovens não contradigam diretamente os mais velhos, principalmente em público.",
  "respostas": [
    {
      "texto": "Entendo a importância do respeito aos mais velhos e ouvirei com atenção.",
      "tipo": "correta",
      "npcResposta": "É bom ver que as tradições ainda vivem no coração dos jovens."
    },
    {
      "texto": "Às vezes é difícil conter a vontade de falar, mas tentarei ser mais paciente.",
      "tipo": "duvidosa",
      "npcResposta": "A paciência é uma virtude que poucos dominam, mas é um bom começo."
    },
    {
      "texto": "Não acho que o silêncio seja necessário; todos deveriam expressar suas opiniões livremente.",
      "tipo": "errada",
      "npcResposta": "Palavras assim podem causar discórdia onde deveria haver harmonia."
    }
  ]
    },
    {
  "id": 4,
  "npc": "Morador local",
  "npcDialog": "Por aqui, os grilos assados são uma iguaria que sustenta muitos durante o verão.",
  "regra": "Na vila, é comum consumir insetos como fonte de alimento, e rejeitar isso pode ser visto como estranhamento ou falta de adaptação.",
  "respostas": [
    {
      "texto": "Nunca experimentei, mas estou aberto a provar essas comidas diferentes.",
      "tipo": "correta",
      "npcResposta": "Boa atitude! Quem se adapta vive melhor aqui."
    },
    {
      "texto": "Já ouvi falar, mas acho difícil me acostumar com isso.",
      "tipo": "duvidosa",
      "npcResposta": "Entendo, nem todos se acostumam facilmente, mas é importante tentar."
    },
    {
      "texto": "Comer insetos? Prefiro não tocar nisso.",
      "tipo": "errada",
      "npcResposta": "É uma tradição que ajuda a manter nossa gente forte, não rejeite assim."
    }
  ]
    },
    {
  "id": 5,
  "npc": "Morador da vila",
  "npcDialog": "Hoje preparei uma mistura especial de grilos assados para o jantar. Venha compartilhar conosco.",
  "regra": "Na vila, consumir insetos é um costume nutritivo e valorizado. Na vila, é considerado deselegante recusar um convite para comer junto com os outros.",
  "respostas": [
    {
      "texto": "Obrigado, aceito experimentar essa comida tão importante para vocês.",
      "tipo": "correta",
      "npcResposta": "Fico feliz que queira participar. Isso fortalece nossos laços."
    },
    {
      "texto": "Talvez eu experimente, mas não sei se vou gostar muito.",
      "tipo": "duvidosa",
      "npcResposta": "É bom ver abertura, mesmo com alguma dúvida."
    },
    {
      "texto": "Prefiro não comer isso, obrigado.",
      "tipo": "errada",
      "npcResposta": "Recusar o convite pode parecer falta de respeito entre nós."
    }
  ]
    },
{
  "id": 6,
  "npc": "Camponês na plantação",
  "npcDialog": "Durante a colheita, mantemos silêncio para que todos possam se concentrar. Além disso, cada um deve ajudar, seja forte ou fraco.",
  "regra": "Na vila, é costume não fazer barulho durante a colheita para respeitar o trabalho coletivo. Também é tradição que todos ajudem na colheita, ninguém deve se omitir.",
  "respostas": [
    {
      "texto": "Entendo, o silêncio ajuda na concentração e ninguém deve fugir do trabalho.",
      "tipo": "correta",
      "npcResposta": "Assim é que se mantém a harmonia da colheita."
    },
    {
      "texto": "Às vezes o silêncio é difícil, mas vou tentar respeitar. Sobre ajudar, nem sempre sei se posso contribuir muito.",
      "tipo": "duvidosa",
      "npcResposta": "A vontade já conta, o resto se aprende com o tempo."
    },
    {
      "texto": "Não vejo problema em conversar enquanto trabalho, e não me sinto obrigado a ajudar sempre.",
      "tipo": "errada",
      "npcResposta": "Falar demais e não ajudar só atrapalha quem confia no esforço comum."
    }
  ]
}

]

let rodadaAtual = 1;
const totalRodadas = 3;
let pontuacao = 0;
let dialogoIndex = 0;

function iniciarJogo() {
  // Função para embaralhar array (Fisher-Yates)
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // Limpeza inicial da página
  document.querySelector("#dnaf")?.remove();
  document.querySelector(".creditos")?.remove();
  const moldura = document.querySelector(".moldura");
  if (moldura) {
    moldura.style.border = "none";
    moldura.style.background = "transparent";
    moldura.innerHTML = "";
  }

  // Embaralha os diálogos para ordem aleatória
  shuffleArray(dialogos);

  // Container principal do jogo
  const gameContainer = document.createElement("div");
  gameContainer.className = "game-container";
  Object.assign(gameContainer.style, {
    position: "relative",
    width: "688px",
    height: "550px",
    margin: "40px auto",
    border: "3px solid white",
    backgroundImage: "url('background.png')",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    opacity: "0",
    transition: "opacity 1.5s ease",
    overflow: "hidden"
  });
  document.body.appendChild(gameContainer);

  // Configurações dos personagens
  const playerX = 150;
  const playerY = 400;
  const botBaseX = 500;
  const botY = 400;
  const scale = 3;
  const spriteWidth = 32;
  const spriteHeight = 32;

  // Criação do balão do player
  let dialogoPlayer = document.querySelector(".dialogo-player");
  if (!dialogoPlayer) {
    dialogoPlayer = document.createElement("div");
    dialogoPlayer.className = "dialogo-player";
    gameContainer.appendChild(dialogoPlayer);
  }
  Object.assign(dialogoPlayer.style, {
    position: "absolute",
    left: (playerX + (spriteWidth * scale) / 2) + "px",
    bottom: (550 - playerY + 10) + "px",
    padding: "8px 12px",
    backgroundColor: "rgba(0,0,0,0.75)",
    color: "white",
    fontFamily: "'MinhaFonte', sans-serif",
    fontSize: "1rem",
    borderRadius: "12px",
    textAlign: "center",
    zIndex: "20",
    boxShadow: "0 0 10px rgba(0,0,0,0.7)",
    pointerEvents: "none",
    transform: "translateX(-50%)",
    transformOrigin: "bottom center",
    maxWidth: "180px",
    overflowWrap: "break-word",
    whiteSpace: "normal",
    opacity: "0",            // Inicialmente invisível
    transition: "opacity 0.7s ease"
  });

  // Criação do balão do bot
  let dialogoBot = document.querySelector(".dialogo-bot");
  if (!dialogoBot) {
    dialogoBot = document.createElement("div");
    dialogoBot.className = "dialogo-bot";
    gameContainer.appendChild(dialogoBot);
  }
  Object.assign(dialogoBot.style, {
    position: "absolute",
    left: (botBaseX + (spriteWidth * scale) / 2) + "px",
    bottom: (550 - botY + 10) + "px",
    minWidth: "140px",
    padding: "8px 12px",
    backgroundColor: "rgba(0,0,0,0.75)",
    color: "white",
    fontFamily: "'MinhaFonte', sans-serif",
    fontSize: "1rem",
    borderRadius: "12px",
    textAlign: "center",
    zIndex: "20",
    boxShadow: "0 0 10px rgba(0,0,0,0.7)",
    pointerEvents: "none",
    transform: "translateX(-50%)",
    transformOrigin: "bottom center",
    maxWidth: "300px",
    overflowWrap: "break-word",
    whiteSpace: "normal",
    opacity: "0",           // Inicialmente invisível
    transition: "opacity 0.7s ease"
  });

  // Estilo para a seta dos balões (seta para baixo)
  if (!document.getElementById('dialogo-box-style')) {
    const styleEl = document.createElement('style');
    styleEl.id = 'dialogo-box-style';
    styleEl.innerHTML = `
      .dialogo-player::after, .dialogo-bot::after {
        content: "";
        position: absolute;
        top: 100%; /* seta abaixo do balão */
        left: 50%;
        transform: translateX(-50%);
        border-width: 0 10px 10px 10px;
        border-style: solid;
        border-color: transparent transparent rgba(0, 0, 0, 0.75) transparent;
        width: 0;
        height: 0;
        z-index: 20;
      }
    `;
    document.head.appendChild(styleEl);
  }

  // Canvas para personagens, invisível inicialmente
  const canvas = document.createElement("canvas");
  canvas.width = 688;
  canvas.height = 550;
  canvas.className = "game-canvas";
  Object.assign(canvas.style, {
    position: "absolute",
    left: "0",
    top: "0",
    zIndex: "5",
    opacity: "0",
    transition: "opacity 1s ease"
  });
  gameContainer.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  // Imagens dos personagens
  const playerImg = new Image();
  playerImg.src = "Outline/MiniNobleMan.png";

  const bots = [
    "Outline/MiniPeasant.png",
    "Outline/MiniWorker.png",
    "Outline/MiniVillagerWoman.png",
    "Outline/MiniVillagerMan.png"
  ];
  const botImg = new Image();
  botImg.src = bots[Math.floor(Math.random() * bots.length)];

  // Variáveis para animação dos sprites
  let frame = 0;
  const totalFrames = 3;
  const frameWidth = 32;
  const frameHeight = 32;
  const frameDelay = 150;

  // Flag para saber quando o player apareceu no canvas
  let playerVisivel = false;

  function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenha player no canvas
    ctx.drawImage(
      playerImg,
      frame * frameWidth,
      0,
      frameWidth,
      frameHeight,
      playerX,
      playerY,
      frameWidth * scale,
      frameHeight * scale
    );

    // Marca player como visível na primeira renderização
    if (!playerVisivel) {
      playerVisivel = true;
    }

    // Desenha bot (espelhado horizontalmente)
    ctx.save();
    ctx.translate(botBaseX + frameWidth * scale, botY);
    ctx.scale(-1, 1);
    ctx.drawImage(
      botImg,
      frame * frameWidth,
      0,
      frameWidth,
      frameHeight,
      0,
      0,
      frameWidth * scale,
      frameHeight * scale
    );
    ctx.restore();

    requestAnimationFrame(animar);
  }

  const frameInterval = setInterval(() => {
    frame = (frame + 1) % totalFrames;
  }, frameDelay);

  // Caixa fixa de regras (direita)
  let regrasBox = document.querySelector(".regras-box");
  if (!regrasBox) {
    regrasBox = document.createElement("div");
    regrasBox.className = "regras-box";
    document.body.appendChild(regrasBox);
  }
  Object.assign(regrasBox.style, {
    position: "fixed",
    top: "120px",
    right: "20px",
    width: "200px",
    height: "400px",
    backgroundColor: "rgba(0,0,0,0.7)",
    color: "white",
    fontFamily: "'MinhaFonte', sans-serif",
    fontSize: "1rem",
    borderRadius: "8px",
    padding: "10px",
    overflowY: "auto",
    zIndex: "20"
  });
  regrasBox.innerHTML = `
    <h3>Regras:</h3>
    <p>1. Siga as instruções.</p>
    <p>2. Interaja com o personagem.</p>
  `;

  // Função para digitar texto com efeito
  function digitarTexto(elemento, texto, velocidade = 30, callback) {
    elemento.textContent = "";
    let i = 0;
    const intervalo = setInterval(() => {
      elemento.textContent += texto[i];
      i++;
      if (i >= texto.length) {
        clearInterval(intervalo);
        if (callback) callback();
      }
    }, velocidade);
  }

  // Função que aguarda o player ficar visível para iniciar o diálogo do NPC
  function iniciarDialogoQuandoPlayerVisivel(dialogo) {
    const checarPlayer = setInterval(() => {
      if (playerVisivel) {
        clearInterval(checarPlayer);

        // Exibe os balões de diálogo suavemente
        dialogoPlayer.style.opacity = "1";
        dialogoBot.style.opacity = "1";

        // Começa a digitar o diálogo do NPC (bot)
        digitarTexto(dialogoBot, dialogo.npcDialog, 30, () => {
          criarBotoesRespostas(dialogo);
        });
      }
    }, 50);
  }

  // Área de respostas fixa (esquerda)
  let respostasArea = document.querySelector(".respostas-area");
  if (!respostasArea) {
    respostasArea = document.createElement("div");
    respostasArea.className = "respostas-area";
    document.body.appendChild(respostasArea);
  }
  Object.assign(respostasArea.style, {
    position: "fixed",
    top: "120px",
    left: "20px",
    width: "220px",
    height: "400px",
    backgroundColor: "rgba(0,0,0,0.7)",
    color: "white",
    fontFamily: "'MinhaFonte', sans-serif",
    fontSize: "1rem",
    borderRadius: "8px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: "20"
  });

  // Box para os botões de respostas
  let respostasBox = document.querySelector(".respostas-box");
  if (!respostasBox) {
    respostasBox = document.createElement("div");
    respostasBox.className = "respostas-box";
    respostasArea.appendChild(respostasBox);
  }
  respostasBox.style.display = "flex";
  respostasBox.style.flexDirection = "column";
  respostasBox.style.gap = "15px";

  // Função para desenhar a pontuação em bolinhas
  function desenharPontuacao(pontos) {
    const container = document.getElementById("pontuacao-bolas");
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

  let animPlayerInterval = null;
  let dialogoIndex = 0;
  let pontuacao = 0;

  // Função para atualizar a interface em cada rodada
  function atualizarInterface() {
    const dialogo = dialogos[dialogoIndex];

    // Limpa respostas anteriores
    respostasBox.innerHTML = "";

    // Inicia animação dos pontos no balão do player
    dialogoPlayer.innerText = '.';
    let count = 1;
    if (animPlayerInterval) clearInterval(animPlayerInterval);
    animPlayerInterval = setInterval(() => {
      count = (count % 3) + 1;
      dialogoPlayer.innerText = '.'.repeat(count);
    }, 500);

    // Atualiza regras de acordo com o diálogo atual
    if (dialogo.regra && dialogo.regra.trim() !== "") {
      regrasBox.innerHTML = `
        <h3>Regras:</h3>
        <p>${dialogo.regra}</p>
      `;
    } else {
      regrasBox.innerHTML = `
        <h3>Regras:</h3>
        <p>1. Siga as instruções.</p>
        <p>2. Interaja com o personagem.</p>
      `;
    }

    // Ao invés de iniciar diretamente o diálogo, aguarda o player estar visível
    iniciarDialogoQuandoPlayerVisivel(dialogo);
  }

  // Função para criar botão "Próximo Round"
  function criarBotaoProximoRound() {
    if (document.getElementById("btnProximoRound")) return;

    const botao = document.createElement("button");
    botao.id = "btnProximoRound";
    botao.innerText = "Próximo Round";

    Object.assign(botao.style, {
      position: "fixed",
      top: "600px", // Posicionado logo abaixo da moldura das regras
      right: "20px",
      width: "200px",
      padding: "12px",
      fontSize: "1.1rem",
      borderRadius: "10px",
      border: "2px solid white",
      backgroundColor: "rgba(0,0,0,0.7)",
      color: "white",
      cursor: "pointer",
      transition: "background-color 0.3s ease, color 0.3s ease",
      textAlign: "center",
      zIndex: "21"
    });

    botao.onmouseover = () => {
      botao.style.backgroundColor = "white";
      botao.style.color = "black";
    };
    botao.onmouseout = () => {
      botao.style.backgroundColor = "rgba(0,0,0,0.7)";
      botao.style.color = "white";
    };

    botao.addEventListener("click", () => {
      proximoRound();
      botao.remove();
    });

    document.body.appendChild(botao);
  }

  // Função para criar botões das respostas
  function criarBotoesRespostas(dialogo) {
    respostasBox.innerHTML = "";
    dialogo.respostas.forEach((resp, i) => {
      const btn = document.createElement("button");
      btn.className = "resposta-btn";
      Object.assign(btn.style, {
        padding: "12px",
        fontSize: "1.1rem",
        borderRadius: "10px",
        border: "2px solid white",
        backgroundColor: "rgba(0,0,0,0.7)",
        color: "white",
        cursor: "pointer",
        transition: "background-color 0.3s ease, color 0.3s ease",
      });
      btn.onmouseover = () => {
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
      };
      btn.onmouseout = () => {
        btn.style.backgroundColor = "rgba(0,0,0,0.7)";
        btn.style.color = "white";
      };
      btn.innerText = resp.texto;

      btn.addEventListener("click", () => {
        // Para animação dos pontos do player
        if (animPlayerInterval) {
          clearInterval(animPlayerInterval);
          animPlayerInterval = null;
        }

        // Mostra fala do player com efeito de digitação
        digitarTexto(dialogoPlayer, resp.texto, 30, () => {
          // Depois que o player terminar de "falar", NPC "pensa"
          dialogoBot.innerText = "...";
          setTimeout(() => {
            // Anima a resposta do NPC
            digitarTexto(dialogoBot, resp.npcResposta, 30, () => {
              // Quando terminar, cria botão para avançar rodada
              criarBotaoProximoRound();
            });
          }, 600);
        });

        // Atualiza pontuação conforme resposta
        if (resp.tipo === "correta") pontuacao += 1;
        else if (resp.tipo === "duvidosa") pontuacao += 0.5;
        desenharPontuacao(pontuacao);

        // Desativa botões para evitar múltiplos cliques
        const botoes = respostasBox.querySelectorAll("button");
        botoes.forEach(b => {
          b.disabled = true;
          b.style.cursor = "default";
          b.style.opacity = "0.7";
        });
      });

      respostasBox.appendChild(btn);
    });
  }

  // Função para avançar para o próximo round
  function proximoRound() {
    dialogoIndex++;
    if (dialogoIndex >= 3) {
      // Aqui chama o fim.js ou a função que mostra a tela final
      mostrarTelaFinal(pontuacao);
      return;
    }
    atualizarInterface();
    document.getElementById("rodada-atual").innerText = dialogoIndex + 1;
  }

  // Área para exibir rodada e pontuação, abaixo das respostas
  let statusBox = document.querySelector(".status-box");
  if (!statusBox) {
    statusBox = document.createElement("div");
    statusBox.className = "status-box";
    respostasArea.appendChild(statusBox);
  }
  Object.assign(statusBox.style, {
    textAlign: "center",
    userSelect: "none",
    marginTop: "20px"
  });
  statusBox.innerHTML = `
    <div><strong>Rodada:</strong> <span id="rodada-atual">1</span> / 3</div>
    <div style="margin-top:12px;">
      <strong>Pontuação:</strong>
      <div id="pontuacao-bolas" style="display:flex; justify-content:center; gap:6px; margin-top:6px;"></div>
    </div>
  `;

  // Inicializa pontuação e interface
  desenharPontuacao(0);

  // Exibe suavemente o container do jogo
  setTimeout(() => {
    gameContainer.style.opacity = "1";
  }, 100);

  // Aguarda carregamento das imagens para mostrar canvas e iniciar animação
  playerImg.onload = () => {
    botImg.onload = () => {
      setTimeout(() => {
        canvas.style.opacity = "1";
        animar();

        // Antes, NÃO chama direto atualizarInterface()
        // Agora, só inicia a interface após o player estar visível, via a flag

        atualizarInterface(); // essa função já espera o player via iniciarDialogoQuandoPlayerVisivel()
      }, 1000); // tempo para o canvas aparecer e iniciar animação
    };
  };
}

// Evento para iniciar o jogo ao clicar no botão "Continuar"
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-continuar") && e.target.textContent.trim() === "Continuar") {
    iniciarJogo();
  }
});

