// Particle animation
const canvas = document.querySelector(".particleCanvas");
const ctx = canvas.getContext("2d");
let particles = [];
let raf = 0;

function setSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function count() {
  return Math.floor((canvas.width * canvas.height) / 7000);
}

function makeParticle() {
  const fadeDelay = Math.random() * 600 + 100;
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speed: Math.random() / 150 + 0.001,
    opacity: 0.7,
    fadeDelay: fadeDelay,
    fadeStart: Date.now() + fadeDelay,
    fadingOut: false,
  };
}

function resetParticle(p) {
  p.x = Math.random() * canvas.width;
  p.y = Math.random() * canvas.height;
  p.speed = Math.random() / 150 + 0.001;
  p.opacity = 0.7;
  p.fadeDelay = Math.random() * 600 + 100;
  p.fadeStart = Date.now() + p.fadeDelay;
  p.fadingOut = false;
}

function init() {
  particles = [];
  for (let i = 0; i < count(); i++) {
    particles.push(makeParticle());
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p) => {
    p.y -= p.speed;

    if (p.y < 0) {
      resetParticle(p);
    }

    if (!p.fadingOut && Date.now() > p.fadeStart) {
      p.fadingOut = true;
    }

    if (p.fadingOut) {
      p.opacity -= 0.003;
      if (p.opacity <= 0) {
        resetParticle(p);
      }
    }

    ctx.fillStyle = `rgba(250, 250, 250, ${p.opacity})`;
    ctx.fillRect(p.x, p.y, 0.6, Math.random() * 2 + 1);
  });

  raf = requestAnimationFrame(draw);
}

function onResize() {
  setSize();
  init();
}

// Initialize
setSize();
init();
raf = requestAnimationFrame(draw);

// Event listeners
window.addEventListener("resize", onResize);

// Button click handler
document.querySelector(".cta").addEventListener("click", function () {
  alert("We'll get back to you soon.");
});

// Cleanup on page unload
window.addEventListener("beforeunload", function () {
  window.removeEventListener("resize", onResize);
  cancelAnimationFrame(raf);
});
