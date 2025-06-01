// vuelo-suave.js
// Scroll animado hacia anchors (#id) tipo "vuelo interestelar"

(function vueloSuave() {
  document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function (e) {
      const destinoID = this.getAttribute('href').substring(1);
      const destino = document.getElementById(destinoID);
      if (!destino) return;

      e.preventDefault(); // Evita el salto seco

      destino.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });

      // Opcional: highlight temporal al llegar
      destino.classList.add('destino-visitado');
      setTimeout(() => {
        destino.classList.remove('destino-visitado');
      }, 1000);
    });
  });

  // Estilo para destacar brevemente la isla visitada
  const style = document.createElement('style');
  style.textContent = `
    .destino-visitado {
      outline: 2px solid #fff;
      outline-offset: 4px;
      transition: outline 0.3s ease-in-out;
    }
  `;
  document.head.appendChild(style);
})();