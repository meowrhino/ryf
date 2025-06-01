// estrellas-particles.js
// Usa particles.js con caracteres tipo ASCII como estrellas

particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: { enable: true, value_area: 10000 }
    },
    color: { value: "#888" },
    shape: {
      type: "char",
      character: {
        value: ["*", ".", "✶"],
        font: "monospace",
        style: "",
        weight: "400"
      }
    },
    opacity: {
      value: 0.6,
      random: true,
      anim: { enable: true, speed: 0.5, opacity_min: 0.2, sync: false }
    },
    size: {
      value: 8,
      random: true,
      anim: { enable: false }
    },
    move: {
      enable: true,
      speed: 0.3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: false }, onclick: { enable: false } }
  },
  retina_detect: false
});

// Ajustes visuales
const fondo = document.getElementById('particles-js');
Object.assign(fondo.style, {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  zIndex: 0,
  pointerEvents: 'none',
});