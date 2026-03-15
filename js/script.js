document.addEventListener("DOMContentLoaded", () => {
  // Selecionando os elementos do DOM
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const overlay = document.querySelector(".overlay");
  const navLinks = document.querySelectorAll(".nav-link");

  // Função para alternar o estado do menu
  function toggleMenu() {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");

    // Acessibilidade: altera atributo aria-expanded
    const isActive = navMenu.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", isActive);
  }

  // Evento de clique no botão hambúrguer
  menuToggle.addEventListener("click", toggleMenu);

  // Fechar menu ao clicar no overlay
  overlay.addEventListener("click", toggleMenu);

  // Fechar menu ao clicar em um link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Apenas fecha se estiver no modo mobile
      if (navMenu.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  // Formulário de Contato WhatsApp
  const contatoForm = document.getElementById("contatoForm");
  const mensagemSucesso = document.getElementById("mensagemSucesso");

  if (contatoForm && mensagemSucesso) {
    contatoForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Bloqueia o envio padrão do formulário

      // Captura os dados do formulário
      const nome = document.getElementById("nome").value.trim();
      const telefone = document.getElementById("telefone").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();

      // Monta a mensagem final
      const textoMensagem = `Novo contato pelo site

Nome: ${nome}
Telefone: ${telefone}
Email: ${email}

Mensagem:
${mensagem}`;

      // Exibe a mensagem de sucesso na tela
      mensagemSucesso.style.display = "block";

      // Limpa os campos após exibir o envio
      contatoForm.reset();

      // Link Oficial WhatsApp e Texto Codificado
      const numeroWhatsApp = "5512997674950";
      const urlEncoded = encodeURIComponent(textoMensagem);
      const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${urlEncoded}`;

      // Abre o WhatsApp
      setTimeout(() => {
        window.open(linkWhatsApp, "_blank");
      }, 500);
    });
  }
});
