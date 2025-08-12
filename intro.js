document.getElementById("btnAcao").addEventListener("click", function () {
    const dna = document.getElementById("dnaf");
    const moldura = document.querySelector(".moldura");
    const titulo = moldura.querySelector("h1");
    const botao = moldura.querySelector("button");

    // Adiciona blur no fundo
    document.body.classList.add("blur-fundo");

    // Anima saída do DNA
    dna.classList.add("dna-sair");

    // Some com o título
    titulo.classList.add("sumir-texto");

    // Expande moldura com blur extra
    setTimeout(() => {
        moldura.classList.add("moldura-expandir", "moldura-blur");

        // Troca conteúdo após a expansão ser visível
        setTimeout(() => {
            titulo.remove();
            const p = document.createElement("p");
            p.textContent =
                "O relativismo cultural, no contexto da época em que surgiu, principalmente no início do século XX, representou uma mudança de perspectiva na antropologia e nas ciências sociais. Ele se opunha ao etnocentrismo, que via a própria cultura como superior, e defendia que cada cultura deveria ser compreendida em seus próprios termos, sem julgamentos de valor baseados em padrões externos.";
            moldura.insertBefore(p, botao);

            // Troca o botão
            botao.textContent = "Continuar";
            botao.classList.remove("btn-acao");
            botao.classList.add("btn-continuar", "botao-baixo");
        }, 800);
    }, 500);
});
