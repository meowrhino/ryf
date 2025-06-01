// Fondo de estrellas ASCII estático
// Genera un fondo con caracteres * y . distribuidos aleatoriamente

(function crearFondoEstrellas() {
  const universo = document.getElementById('universo');

  const capa = document.createElement('pre');
  capa.id = 'fondo-ascii';
  capa.style.position = 'absolute';
  capa.style.top = '0';
  capa.style.left = '0';
  capa.style.width = '100%';
  capa.style.height = '100%';
  capa.style.color = '#444';
  capa.style.pointerEvents = 'none';
  capa.style.fontSize = '12px';
  capa.style.lineHeight = '12px';
  capa.style.whiteSpace = 'pre';
  capa.style.zIndex = '0';

  // Generar patrón ASCII
  const filas = 500;
  const columnas = 300;
  let estrellas = '';

  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      const r = Math.random();
      if (r < 0.002) estrellas += '*';
      else if (r < 0.004) estrellas += '.';
      else estrellas += ' ';
    }
    estrellas += '\n';
  }

  capa.textContent = estrellas;
  universo.appendChild(capa);
})();