// Enhanced Particle animation
const canvas = document.querySelector(".particleCanvas");
const ctx = canvas.getContext("2d");
let particles = [];
let raf = 0;
let time = 0;

function setSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function count() {
  return Math.floor((canvas.width * canvas.height) / 5000);
}

function makeParticle() {
  const fadeDelay = Math.random() * 600 + 100;
  const size = Math.random() * 2 + 0.5;
  const type = Math.random();

  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.5,
    vy: -Math.random() * 0.8 - 0.2,
    speed: Math.random() / 150 + 0.001,
    size: size,
    opacity: 0.6,
    maxOpacity: Math.random() * 0.4 + 0.3,
    fadeDelay: fadeDelay,
    fadeStart: Date.now() + fadeDelay,
    fadingOut: false,
    angle: Math.random() * Math.PI * 2,
    rotation: Math.random() * 0.02,
    type: type, // different particle types
    pulse: Math.random() * Math.PI * 2,
  };
}

function resetParticle(p) {
  p.x = Math.random() * canvas.width;
  p.y = canvas.height + 10;
  p.vx = (Math.random() - 0.5) * 0.5;
  p.vy = -Math.random() * 0.8 - 0.2;
  p.speed = Math.random() / 150 + 0.001;
  p.opacity = 0.6;
  p.maxOpacity = Math.random() * 0.4 + 0.3;
  p.fadeDelay = Math.random() * 600 + 100;
  p.fadeStart = Date.now() + p.fadeDelay;
  p.fadingOut = false;
  p.angle = Math.random() * Math.PI * 2;
  p.pulse = Math.random() * Math.PI * 2;
}

function init() {
  particles = [];
  for (let i = 0; i < count(); i++) {
    particles.push(makeParticle());
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  time += 1;

  particles.forEach((p) => {
    // Movement with drift
    p.x += p.vx;
    p.y += p.vy;

    // Add sinusoidal drift for more organic movement
    p.x += Math.sin(time * 0.005 + p.angle) * 0.1;
    p.vy -= 0.0001; // slight acceleration upward

    // Reset if off screen
    if (p.y < -10 || p.x < -10 || p.x > canvas.width + 10) {
      resetParticle(p);
    }

    // Fading effect
    if (!p.fadingOut && Date.now() > p.fadeStart) {
      p.fadingOut = true;
    }

    if (p.fadingOut) {
      p.opacity -= 0.004;
      if (p.opacity <= 0) {
        resetParticle(p);
      }
    } else {
      // Pulsing effect before fading
      p.pulse += 0.03;
      p.opacity = p.maxOpacity + Math.sin(p.pulse) * 0.15;
    }

    // Draw different particle types
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle);

    if (p.type < 0.5) {
      // Glowing dots
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 2);
      gradient.addColorStop(0, `rgba(150, 200, 255, ${p.opacity * 0.8})`);
      gradient.addColorStop(1, `rgba(100, 150, 255, ${p.opacity * 0.2})`);
      ctx.fillStyle = gradient;
      ctx.fillRect(-p.size * 2, -p.size * 2, p.size * 4, p.size * 4);
    } else if (p.type < 0.8) {
      // Larger particles with glow
      ctx.shadowBlur = p.size * 3;
      ctx.shadowColor = `rgba(100, 150, 255, ${p.opacity})`;
      ctx.fillStyle = `rgba(200, 220, 255, ${p.opacity})`;
      ctx.fillRect(-p.size, -p.size, p.size * 2, p.size * 2);
    } else {
      // Thin streaks
      ctx.strokeStyle = `rgba(150, 180, 255, ${p.opacity})`;
      ctx.lineWidth = p.size * 0.5;
      ctx.beginPath();
      ctx.moveTo(0, -p.size * 3);
      ctx.lineTo(0, p.size * 3);
      ctx.stroke();
    }

    ctx.restore();

    p.angle += p.rotation;
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

// Cleanup on page unload
window.addEventListener("beforeunload", function () {
  window.removeEventListener("resize", onResize);
  cancelAnimationFrame(raf);
});
