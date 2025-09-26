// ---------- Helpers ----------
const on = (el, evt, fn) => el && el.addEventListener(evt, fn);
const $  = (id) => document.getElementById(id);

// ---------- Elements ----------
const toggleBtn   = $('toggleBtn');
const welcomeBtn  = $('welcomeBtn');
const checkDayBtn = $('checkDayBtn');
const generateBtn = $('generateBtn');
const daySwitchBtn= $('daySwitchBtn');

const revealBtn   = $('revealBtn');
const revealBox   = $('revealBox');
const countBtn    = $('countBtn');
const counterEl   = $('counter');

const calcBtn     = $('calcBtn');
const calcResult  = $('calcResult');

const compareBtn  = $('compareBtn');
const logicalBtn  = $('logicalBtn');
const ternaryBtn  = $('ternaryBtn');

const message     = $('message');
const numbersList = $('numbersList');

// ---------- Core demos ----------
on(toggleBtn, 'click', () => document.body.classList.toggle('dark'));

on(welcomeBtn, 'click', () => {
  if (message) message.textContent = 'Welcome to my portfolio!';
});

on(checkDayBtn, 'click', () => {
  const names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const d = new Date().getDay();
  if (message) message.textContent = 'Today is ' + names[d] + '.';
  alert('Today is ' + names[d]);
});

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

on(generateBtn, 'click', () => {
  if (!numbersList) return;
  if (numbersList.children.length > 0) { numbersList.innerHTML = ''; return; }
  for (let i = 1; i <= 10; i++) {
    const li = document.createElement('li');
    li.textContent = 'Number ' + i;
    numbersList.appendChild(li);
  }
});

// ---------- Animation demos ----------
on(revealBtn, 'click', () => {
  if (!revealBox) return;
  revealBox.classList.toggle('show');
});

on(countBtn, 'click', () => {
  if (!counterEl) return;
  let n = 0;
  const target = 100;
  const t = setInterval(() => {
    n += 2;
    if (n >= target) { n = target; clearInterval(t); }
    counterEl.textContent = String(n);
  }, 20);
});

// Scroll reveal (if present)
const toReveal = document.querySelectorAll('.reveal-on-scroll');
if (toReveal.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.15 });
  toReveal.forEach(el => io.observe(el));
}

// ---------- Calculator (operators + animation) ----------
on(calcBtn, 'click', () => {
  const a = 12, b = 5;
  const sum = a + b;
  const product = a * b;
  if (!calcResult) return;

  animateCalcLine('Sum', sum, 'is-sum', false);
  setTimeout(() => animateCalcLine('Product', product, 'is-product', true), 1000);
});

function animateCalcLine(label, value, className, append) {
  if (!calcResult) return;
  if (!append) calcResult.innerHTML = '';

  const line = document.createElement('div');
  line.className = 'calc-result ' + className;
  line.innerHTML = '<span class="calc-label">' + label + ':</span> ' +
                   '<span class="calc-value">0</span>';
  calcResult.appendChild(line);

  requestAnimationFrame(() => line.classList.add('show'));

  const valueEl = line.querySelector('.calc-value');
  let current = 0;
  const duration = 900;
  const stepTime = 20;
  const steps = Math.ceil(duration / stepTime);
  const inc = value / steps;

  const timer = setInterval(() => {
    current += inc;
    if (current >= value) { current = value; clearInterval(timer); }
    valueEl.textContent = String(Math.floor(current));
  }, stepTime);
}

// ---------- Operators demos (Compare / Logical / Ternary) ----------
function renderList(title, lines) {
  if (!calcResult) return;
  calcResult.innerHTML =
    '<div class="calc-result show">' +
      '<strong>' + title + '</strong>' +
      '<ul>' + lines.map(li => '<li>' + li + '</li>').join('') + '</ul>' +
    '</div>';
}

on(compareBtn, 'click', () => {
  const a = 12, b = 5;
  renderList('Comparison Results', [
    a + ' == "'  + b + '"  → ' + (a == b),
    a + ' === "' + b + '" → ' + (a === b),
    a + ' > ' + b + '     → ' + (a > b),
    a + ' <= ' + b + '    → ' + (a <= b)
  ]);
});

on(logicalBtn, 'click', () => {
  const hasID = true;
  const hasTicket = false;
  renderList('Logical Results', [
    'hasID && hasTicket → ' + (hasID && hasTicket),
    'hasID || hasTicket → ' + (hasID || hasTicket),
    '!hasTicket         → ' + (!hasTicket)
  ]);
});

on(ternaryBtn, 'click', () => {
  const score = 68;
  const verdict = (score >= 70) ? 'Pass ✅' : 'Fail ❌';
  renderList('Ternary Result', [
    'score = ' + score,
    "score >= 70 ? 'Pass' : 'Fail' → " + verdict
  ]);
});