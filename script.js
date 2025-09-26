// Utility function (safe, one-line)
const on = (el, evt, fn) => el && el.addEventListener(evt, fn);

// Get elements (all ASCII, no smart quotes)
const toggleBtn   = document.getElementById('toggleBtn');
const welcomeBtn  = document.getElementById('welcomeBtn');
const checkDayBtn = document.getElementById('checkDayBtn');
const generateBtn = document.getElementById('generateBtn');
const daySwitchBtn= document.getElementById('daySwitchBtn');
const message     = document.getElementById('message');
const numbersList = document.getElementById('numbersList');

// Toggle Dark Mode
on(toggleBtn, 'click', () => {
  document.body.classList.toggle('dark');
});

// Welcome Message
on(welcomeBtn, 'click', () => {
  if (message) message.textContent = 'Welcome to my portfolio!';
});

// Check Day (if/else)
on(checkDayBtn, 'click', () => {
  const names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const d = new Date().getDay();
  if (message) message.textContent = 'Today is ' + names[d] + '.';
  alert('Today is ' + names[d]);
});

// Check Day (switch)
on(daySwitchBtn, 'click', () => {
  const names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const d = new Date().getDay();
  let text;
  switch (d) {
    case 0: text = 'Sunday — weekend 🎉'; break;
    case 6: text = 'Saturday — weekend 🎉'; break;
    default: text = names[d] + ' — keep coding!';
  }
  if (message) message.textContent = text;
  alert('Today is ' + names[d]);
});

// Generate Numbers (toggle list on/off)
on(generateBtn, 'click', () => {
  if (!numbersList) return;
  if (numbersList.children.length > 0) { numbersList.innerHTML = ''; return; }
  for (let i = 1; i <= 10; i++) {
    const li = document.createElement('li');
    li.textContent = 'Number ' + i;
    numbersList.appendChild(li);
  }
});// Reveal Box Animation
const revealBtn = document.getElementById('revealBtn');
const revealBox = document.getElementById('revealBox');
revealBtn?.addEventListener('click', () => {
  revealBox?.classList.toggle('show');
});

// Counter Animation
const countBtn = document.getElementById('countBtn');
const counterEl = document.getElementById('counter');

function animateCount(el, to, duration = 1200) {
  const start = performance.now();
  const from = 0;
  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
    el.textContent = Math.floor(from + (to - from) * eased);
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
countBtn?.addEventListener('click', () => animateCount(counterEl, 100));

// Scroll Reveal Animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal-on-scroll')
  .forEach(el => observer.observe(el));// Operators Demo
const calcBtn = document.getElementById('calcBtn');
const calcResult = document.getElementById('calcResult');

on(calcBtn, 'click', () => {
  const a = 10;
  const b = 3;

  // Arithmetic
  const sum = a + b;
  const product = a * b;

  // Comparison
  const isGreater = a > b;

  // Logical
  const check = (a > 5 && b < 5);

  calcResult.textContent =
    a = ${a}, b = ${b} → sum: ${sum}, product: ${product}, a > b? ${isGreater}, check: ${check};
});// ==== Operators Demo (animated) ====
on(calcBtn, 'click', () => {
  const a = 12, b = 5;

  const box = document.getElementById('calcResult');
  if (!box) return;

  // Build result layout
  box.innerHTML = `
    <p><strong>a</strong> = ${a}, <strong>b</strong> = ${b}</p>
    <p>Sum: <span id="sumVal">0</span></p>
    <p>Product: <span id="prodVal">0</span></p>
    <p>Difference: <span id="diffVal">0</span></p>
    <p>Quotient: <span id="quotVal">0</span></p>
  `;

  // Animate each value
  animateNumber(document.getElementById('sumVal'), a + b);
  setTimeout(() => animateNumber(document.getElementById('prodVal'), a * b), 250);
  setTimeout(() => animateNumber(document.getElementById('diffVal'), a - b), 500);
  setTimeout(() => animateNumber(document.getElementById('quotVal'), (a / b), {decimals: 2}), 750);
});

// Utility: animate a number counting up
function animateNumber(el, value, opts = {}) {
  if (!el) return;
  const decimals = opts.decimals || 0;
  const duration = 900;         // ms
  const stepTime = 20;          // ms
  const steps = Math.ceil(duration / stepTime);
  let n = 0;

  const timer = setInterval(() => {
    n++;
    const progress = n / steps;
    const current = value * progress;
    el.textContent = (decimals ? current.toFixed(decimals) : Math.floor(current));
    if (n >= steps) {
      clearInterval(timer);
      el.textContent = decimals ? Number(value).toFixed(decimals) : Math.round(value);
    }
  }, stepTime);
}