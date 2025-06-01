// generador-botones.js
// Genera botones de navegación a cada isla usando su ID

(function generarBotonesIslas() {
  const panel = document.getElementById('panel-ui');
  const islas = document.querySelectorAll('.isla');

  islas.forEach(isla => {
    if (!isla.id) return; // ignorar islas sin id

    const boton = document.createElement('a');
    boton.href = `#${isla.id}`;
    boton.className = 'boton-isla';
    boton.textContent = isla.dataset.label || isla.id;

    panel.appendChild(boton);
  });
})();