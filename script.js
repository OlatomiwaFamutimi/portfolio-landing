// ---- My Portfolio JS (stable) ----
'use strict';
console.log('script.js loaded');

const $ = (id) => document.getElementById(id);
const on = (el, evt, fn) => el && el.addEventListener(evt, fn);

// Elements
const toggleBtn   = $('toggleBtn');
const welcomeBtn  = $('welcomeBtn');
const checkDayBtn = $('checkDayBtn');
const generateBtn = $('generateBtn');
const daySwitchBtn= $('daySwitchBtn');
const revealBtn   = $('revealBtn');
const countBtn    = $('countBtn');
const calcBtn     = $('calcBtn');

const message     = $('message');
const numbersList = $('numbersList');
const revealBox   = $('revealBox');
const counter     = $('counter');
const calcResult  = $('calcResult');

// Dark mode
on(toggleBtn, 'click', () => document.body.classList.toggle('dark'));

// Welcome message
on(welcomeBtn, 'click', () => { if (message) message.textContent = 'Welcome to my portfolio!'; });

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
    default: text = names[d] + ' — keep coding!'; break;
  }
  if (message) message.textContent = text;
  alert('Today is ' + names[d]);
});

// Generate Numbers (toggle)
on(generateBtn, 'click', () => {
  if (!numbersList) return;
  if (numbersList.children.length > 0) { numbersList.innerHTML = ''; return; }
  const frag = document.createDocumentFragment();
  for (let i = 1; i <= 10; i++) {
    const li = document.createElement('li');
    li.textContent = 'Number ' + i;
    frag.appendChild(li);
  }
  numbersList.appendChild(frag);
});

// Reveal box
on(revealBtn, 'click', () => { if (revealBox) revealBox.classList.toggle('show'); });

// Counter
on(countBtn, 'click', () => {
  if (!counter) return;
  let start = 0, end = 100;
  const duration = 1000, stepTime = 20, step = end / (duration / stepTime);
  const t = setInterval(() => {
    start += step;
    if (start >= end) { start = end; clearInterval(t); }
    counter.textContent = String(Math.floor(start));
  }, stepTime);
});// --- Operator Demo: Simple Calculator with animated, styled output ---
on(calcBtn, 'click', () => {
  const a = 12, b = 5;
  const sum = a + b;
  const product = a * b;

  if (!calcResult) return;

  // First line: Sum (clears box)
  animateCalcLine('Sum', sum, 'is-sum', false);

  // Second line: Product (appends after a short delay)
  setTimeout(() => animateCalcLine('Product', product, 'is-product', true), 1000);
});

/**
 * Animate one result line inside #calcResult
 * @param {string} label - e.g. 'Sum'
 * @param {number} value - target number
 * @param {string} className - e.g. 'is-sum'
 * @param {boolean} append - if false, clear box first
 */
function animateCalcLine(label, value, className, append) {
  if (!append) calcResult.innerHTML = '';

  const line = document.createElement('div');
  line.className = calc-result ${className};
  line.innerHTML = <span class="calc-label">${label}:</span> <span class="calc-value">0</span>;
  calcResult.appendChild(line);

  // trigger fade-in
  requestAnimationFrame(() => line.classList.add('show'));

  // count-up animation
  const valueEl = line.querySelector('.calc-value');
  let current = 0;
  const duration = 900;          // ms
  const stepTime = 20;           // ms
  const steps = Math.ceil(duration / stepTime);
  const inc = value / steps;

  const timer = setInterval(() => {
    current += inc;
    if (current >= value) {
      current = value;
      clearInterval(timer);
    }
    valueEl.textContent = Math.floor(current);
  }, stepTime);
}


// Scroll reveal (keeps working even if JS runs later)
const ro = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal-on-scroll').forEach(el => ro.observe(el));