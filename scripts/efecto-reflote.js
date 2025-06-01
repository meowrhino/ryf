// efecto-reflote.js
// Las islas emergen suavemente del fondo con animación

(function aplicarEfectoReflote() {
  const islas = document.querySelectorAll('.isla');

  islas.forEach(isla => {
    isla.classList.add('reflotar');
  });

  // Si aún no lo tienes, añadimos el CSS dinámicamente:
  const estilo = document.createElement('style');
  estilo.textContent = `
    .reflotar {
      opacity: 0;
      transform: translateY(20px);
      animation: emerger 1s ease-out forwards;
      animation-delay: calc(var(--orden, 0) * 0.1s);
    }

    @keyframes emerger {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(estilo);
})();