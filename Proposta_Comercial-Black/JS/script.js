document.addEventListener("DOMContentLoaded", () => {
  // Menu hamburguer (mobile)
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const ativo = nav.classList.toggle("ativo");
      toggle.classList.toggle("ativo", ativo);
      toggle.setAttribute("aria-expanded", String(ativo));
    });
  }

  // Botão "Aceitar proposta"
  const btnAceitar = document.getElementById("btn-aceitar-proposta");
  if (btnAceitar) {
    btnAceitar.addEventListener("click", () => {
      btnAceitar.disabled = true;
      const textoOriginal = btnAceitar.innerHTML;
      btnAceitar.innerHTML = "Proposta aceita ✓";
      setTimeout(() => {
        btnAceitar.innerHTML = textoOriginal;
        btnAceitar.disabled = false;
      }, 2500);
    });
  }
});
