// radar-islas.js
// Muestra botones de islas cercanas a la isla activa según posición absoluta

(function radarDeIslas() {
  const RANGO_PIXELES = 400; // distancia máxima para que una isla se considere cercana

  // Asegúrate de tener esto en tu HTML:
  // <div id="panel-radar"></div>
  const panelRadar = document.createElement('div');
  panelRadar.id = 'panel-radar';
  document.body.appendChild(panelRadar);

  Object.assign(panelRadar.style, {
    position: 'fixed',
    top: '10px',
    left: '10px',
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: '10px',
    border: '1px solid white',
    zIndex: 1000,
    fontFamily: 'monospace'
  });

  // FUNCIONES
  function getPos(el) {
    return {
      x: parseInt(el.style.left),
      y: parseInt(el.style.top)
    };
  }

  function detectarCercanas(islaActiva) {
    const idRef = islaActiva.id;
    const refPos = getPos(islaActiva);
    const todas = [...document.querySelectorAll('.isla')];
    const cercanas = [];

    for (const isla of todas) {
      if (isla.id === idRef) continue;
      const { x, y } = getPos(isla);
      const dist = Math.hypot(x - refPos.x, y - refPos.y);
      if (dist <= RANGO_PIXELES) {
        cercanas.push({ id: isla.id, dist: Math.round(dist) });
      }
    }

    return cercanas.sort((a, b) => a.dist - b.dist);
  }

  function mostrarRadar(islaActiva) {
    const cercanas = detectarCercanas(islaActiva);
    panelRadar.innerHTML = `<b>Cerca de ${islaActiva.id}:</b><br/>`;

    if (cercanas.length === 0) {
      panelRadar.innerHTML += "<i>No hay islas cercanas.</i>";
      return;
    }

    for (const c of cercanas) {
      const btn = document.createElement('a');
      btn.href = `#${c.id}`;
      btn.textContent = `→ ${c.id} (${c.dist}px)`;
      btn.style.display = 'block';
      btn.style.color = 'white';
      btn.style.margin = '2px 0';
      panelRadar.appendChild(btn);
    }
  }

  // ACTIVACIÓN: haz clic en una isla para activar el radar
  document.querySelectorAll('.isla').forEach(isla => {
    isla.addEventListener('click', () => {
      mostrarRadar(isla);
    });
  });
})();