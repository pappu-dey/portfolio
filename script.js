// ====================== Canvas Trail Effect ======================
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let mouseMoved = false;

const pointer = {
  x: window.innerWidth * 0.5,
  y: window.innerHeight * 0.5,
};

const params = {
  pointsNumber: 40,
  widthFactor: 10,
  spring: 0.25,
  friction: 0.5,
};

const trail = Array.from({ length: params.pointsNumber }, () => ({
  x: pointer.x,
  y: pointer.y,
  dx: 0,
  dy: 0,
}));

function updateMousePosition(x, y) {
  pointer.x = x;
  pointer.y = y;
}

window.addEventListener("click", (e) => updateMousePosition(e.pageX, e.pageY));
window.addEventListener("mousemove", (e) => {
  mouseMoved = true;
  updateMousePosition(e.pageX, e.pageY);
});
window.addEventListener("touchmove", (e) => {
  mouseMoved = true;
  updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
});

function setupCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function update(t) {
  if (!mouseMoved) {
    // idle animation if no mouse movement
    pointer.x =
      (0.5 + 0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) *
      window.innerWidth;
    pointer.y =
      (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.cos(0.01 * t)) *
      window.innerHeight;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // update trail points
  trail.forEach((p, i) => {
    const prev = i === 0 ? pointer : trail[i - 1];
    const spring = i === 0 ? params.spring * 0.4 : params.spring;
    p.dx += (prev.x - p.x) * spring;
    p.dy += (prev.y - p.y) * spring;
    p.dx *= params.friction;
    p.dy *= params.friction;
    p.x += p.dx;
    p.y += p.dy;
  });

  // gradient line
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "rgba(160,93,134,1)");
  gradient.addColorStop(1, "rgba(57,34,115,1)");

  ctx.strokeStyle = gradient;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(trail[0].x, trail[0].y);

  for (let i = 1; i < trail.length - 1; i++) {
    const xc = 0.5 * (trail[i].x + trail[i + 1].x);
    const yc = 0.5 * (trail[i].y + trail[i + 1].y);
    ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
    ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
    ctx.stroke();
  }

  ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
  ctx.stroke();

  requestAnimationFrame(update);
}

setupCanvas();
update(0);
window.addEventListener("resize", setupCanvas);

// ====================== Image Preloading ======================
const imagesToPreload = [
  "/image/html.webp",
  "/image/css.webp",
  "/image/js.webp",
  "/image/react.webp",
  "/image/firebase.webp",
  "/image/python.webp",
  "/image/java.webp",
  "/image/android_studio.webp",
  "/image/sql.webp",
  "/image/tick_tac_toe.webp",
  "/image/calculator.webp",
  "/image/news.webp",
  "/image/bmical.webp",
  "/image/ardent.webp",
  "/image/deamz.webp",
  "/image/pomnptl.webp",
];

function preloadImages(imagePaths) {
  const preloadDiv = document.getElementById("preload-images");
  if (!preloadDiv) return;

  imagePaths.forEach((src) => {
    const img = new Image();
    img.src = src;
    preloadDiv.appendChild(img);
  });
}

preloadImages(imagesToPreload);

// ====================== Navigation Menu ======================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const toggleIcon = document.getElementById("toggle-icon");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  toggleIcon.src = navLinks.classList.contains("active")
    ? "/image/swords.webp"
    : "/image/manu.webp";
});

// Close menu after clicking a link (mobile fix)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    toggleIcon.src = "/image/manu.webp"; // reset to hamburger
  });
});

// ====================== Disable Right-Click & Shortcuts ======================
document.addEventListener("contextmenu", (e) => e.preventDefault());

document.addEventListener("keydown", (e) => {
  const blocked = [
    { key: "F12" },
    { key: "i", ctrl: true, shift: true },
    { key: "c", ctrl: true, shift: true },
    { key: "j", ctrl: true, shift: true },
    { key: "u", ctrl: true },
  ];

  blocked.forEach((b) => {
    if (
      e.key.toLowerCase() === b.key.toLowerCase() &&
      (!!b.ctrl === (e.ctrlKey || e.metaKey)) &&
      (!!b.shift === e.shiftKey)
    ) {
      e.preventDefault();
    }
  });
});
