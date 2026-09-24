const botaoStatus = document.getElementById("btn-status");
document.addEventListener("DOMContentLoaded", () => {
  // Seleciona todos os cards da seção
  const cards = document.querySelectorAll(".card-servico-expansivel");

  cards.forEach((card) => {
    const btn = card.querySelector("button");
    const conteudo = card.querySelector(".conteudo-oculto");

    if (btn && conteudo) {
      btn.addEventListener("click", () => {
        // Alterna a classe que exibe o conteúdo
        const estaAberto = conteudo.classList.toggle("ativo");

        // Atualiza a acessibilidade (aria-hidden)
        conteudo.setAttribute("aria-hidden", !estaAberto);

        // Altera o texto do botão
        btn.textContent = estaAberto ? "Recolher" : "Saiba mais";
      });
    }
  });
});

