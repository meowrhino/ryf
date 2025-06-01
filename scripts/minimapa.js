// minimapa.js
// Crea un popup con enlaces a todas las islas por ID

(function crearMinimapa() {
  const TOGGLE_ID = 'toggle-minimapa';
  const PANEL_ID = 'panel-minimapa';

  // Botón para mostrar/ocultar el minimapa
  const toggle = document.createElement('button');
  toggle.id = TOGGLE_ID;
  toggle.textContent = '🗺️ Mapa';
  Object.assign(toggle.style, {
    position: 'fixed',
    bottom: '60px',
    right: '10px',
    zIndex: 999,
    fontSize: '14px',
    padding: '6px 10px',
    borderRadius: '5px',
    background: '#111',
    color: 'white',
    border: '1px solid white',
    cursor: 'pointer'
  });

  // Contenedor del minimapa
  const panel = document.createElement('div');
  panel.id = PANEL_ID;
  panel.style.display = 'none'; // oculto al inicio
  Object.assign(panel.style, {
    position: 'fixed',
    bottom: '100px',
    right: '10px',
    width: '200px',
    maxHeight: '300px',
    overflowY: 'auto',
    background: 'rgba(0,0,0,0.85)',
    padding: '10px',
    border: '1px solid white',
    borderRadius: '8px',
    zIndex: 1000,
    fontFamily: 'monospace'
  });

  // Rellenar minimapa con links
  const islas = document.querySelectorAll('.isla');
  islas.forEach(isla => {
    if (!isla.id) return;

    const link = document.createElement('a');
    link.href = `#${isla.id}`;
    link.textContent = isla.dataset.label || isla.id;
    Object.assign(link.style, {
      display: 'block',
      color: 'white',
      marginBottom: '4px',
      textDecoration: 'none',
      fontSize: '13px'
    });
    link.onmouseover = () => link.style.textDecoration = 'underline';
    link.onmouseout = () => link.style.textDecoration = 'none';

    panel.appendChild(link);
  });

  // Mostrar/ocultar
  toggle.onclick = () => {
    panel.style.display = (panel.style.display === 'none') ? 'block' : 'none';
  };

  document.body.appendChild(toggle);
  document.body.appendChild(panel);
})();