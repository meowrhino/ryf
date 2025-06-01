// estrellas-dinamicas.js
// Crea estrellas ASCII como spans absolutamente posicionados
// que parpadean suavemente en el fondo

(function crearEstrellasDinamicas() {
  const universo = document.getElementById('universo');

  const NUM_ESTRELLAS = 1200; // Ajusta este número según rendimiento
  const ANCHO = universo.offsetWidth;
  const ALTO = universo.offsetHeight;

  for (let i = 0; i < NUM_ESTRELLAS; i++) {
    const star = document.createElement('span');
    star.className = 'estrella';
    star.textContent = Math.random() > 0.5 ? '*' : '.';

    // Posición aleatoria
    const x = Math.floor(Math.random() * ANCHO);
    const y = Math.floor(Math.random() * ALTO);

    Object.assign(star.style, {
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
      color: '#666',
      opacity: 0.6,
      fontSize: '10px',
      pointerEvents: 'none',
      animation: `parpadeo ${2 + Math.random() * 3}s infinite ease-in-out`,
    });

    universo.appendChild(star);
  }
})();

/* Si no lo tienes ya, añade esto en tu CSS */
const style = document.createElement('style');
style.textContent = `
@keyframes parpadeo {
  0%, 100% { opacity: 0.2; transform: translateY(0px); }
  50% { opacity: 1; transform: translateY(-2px); }
}
`;
document.head.appendChild(style);