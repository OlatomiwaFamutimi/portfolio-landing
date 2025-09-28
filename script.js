'use strict';

// Small helper
const on = (el, evt, fn) => el && el.addEventListener(evt, fn);

// Grab all elements safely
const byId = id => document.getElementById(id);
const toggleBtn       = byId('toggleBtn');
const welcomeBtn      = byId('welcomeBtn');
const checkDayBtn     = byId('checkDayBtn');
const generateBtn     = byId('generateBtn');
const daySwitchBtn    = byId('daySwitchBtn');

const revealBtn       = byId('revealBtn');
const revealBox       = byId('revealBox');
const countBtn        = byId('countBtn');
const counter         = byId('counter');

const calcBtn         = byId('calcBtn');
const calcResult      = byId('calcResult');
const compareBtn      = byId('compareBtn');
const logicalBtn      = byId('logicalBtn');
const ternaryBtn      = byId('ternaryBtn');

const cookieInput     = byId('cookieInput');
const setCookieBtn    = byId('setCookieBtn');
const getCookieBtn    = byId('getCookieBtn');
const deleteCookieBtn = byId('deleteCookieBtn');
const clearInputBtn   = byId('clearInputBtn'); // ok if missing
const cookieResult    = byId('cookieResult');

const message         = byId('message');
const numbersList     = byId('numbersList');

// ============ Core demos ============

// Dark mode
on(toggleBtn, 'click', () => {
  document.body.classList.toggle('dark');
});

// Welcome
on(welcomeBtn, 'click', () => {
  if (message) message.textContent = 'Welcome to my portfolio!';
});

// Check day (if/else)
on(checkDayBtn, 'click', () => {
  const names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const d = new Date().getDay();
  if (message) message.textContent = 'Today is ' + names[d] + '.';
  alert('Today is ' + names[d]);
});

// Check day (switch)
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

// Generate numbers (toggle)
on(generateBtn, 'click', () => {
  if (!numbersList) return;
  if (numbersList.children.length > 0) { numbersList.innerHTML = ''; return; }
  for (let i = 1; i <= 10; i++) {
    const li = document.createElement('li');
    li.textContent = 'Number ' + i;
    numbersList.appendChild(li);
  }
});

// Reveal box (CSS handles .show)
on(revealBtn, 'click', () => {
  if (revealBox) revealBox.classList.toggle('show');
});

// Counter animation
on(countBtn, 'click', () => animateNumber(counter, 0, 100, 1000));
function animateNumber(el, start, end, duration) {
  if (!el) return;
  let current = start;
  const stepTime = 20;
  const steps = Math.ceil(duration / stepTime);
  const inc = (end - start) / steps;
  const t = setInterval(() => {
    current += inc;
    if ((inc > 0 && current >= end) || (inc < 0 && current <= end)) {
      current = end;
      clearInterval(t);
    }
    el.textContent = String(Math.floor(current));
  }, stepTime);
}

// ============ Calculator + operators ============

// Helper to show a titled list in the green box
function renderList(title, lines) {
  if (!calcResult) return;
  calcResult.innerHTML =
    '<div class="calc-result show">' +
    '<strong>' + title + '</strong>' +
    '<ul>' + lines.map(li => '<li>' + li + '</li>').join('') + '</ul>' +
    '</div>';
}

// Animate one “Sum: 17” style line
function animateCalcLine(label, value, className, append) {
  if (!calcResult) return;
  if (!append) calcResult.innerHTML = '';

  const line = document.createElement('div');
  line.className = 'calc-result ' + className;
  line.innerHTML = '<span class="calc-label">' + label + ':</span> ' +
                   '<span class="calc-value">0</span>';
  calcResult.appendChild(line);

  // fade in
  requestAnimationFrame(() => line.classList.add('show'));

  // count up
  const valueEl = line.querySelector('.calc-value');
  let current = 0;
  const duration = 900, stepTime = 20;
  const steps = Math.ceil(duration / stepTime);
  const inc = value / steps;

  const timer = setInterval(() => {
    current += inc;
    if (current >= value) { current = value; clearInterval(timer); }
    valueEl.textContent = String(Math.floor(current));
  }, stepTime);
}

// Calculator demo
on(calcBtn, 'click', () => {
  const a = 12, b = 5;
  const sum = a + b;
  const product = a * b;

  animateCalcLine('Sum', sum, 'is-sum', false);
  setTimeout(() => animateCalcLine('Product', product, 'is-product', true), 1000);
});

// Comparison demo
on(compareBtn, 'click', () => {
  const a = 12, b = 5;
  renderList('Comparison Results', [
    a + ' ==  ' + b + '  → ' + (a == b),
    a + ' === ' + b + ' → ' + (a === b),
    a + ' > ' + b + '   → ' + (a > b),
    a + ' <= ' + b + '  → ' + (a <= b)
  ]);
});

// Logical demo
on(logicalBtn, 'click', () => {
  const hasID = true;
  const hasTicket = false;
  renderList('Logical Results', [
    'hasID && hasTicket → ' + (hasID && hasTicket),
    'hasID || hasTicket → ' + (hasID || hasTicket),
    '!hasTicket         → ' + (!hasTicket)
  ]);
});

// Ternary demo
on(ternaryBtn, 'click', () => {
  const score = 68;
  const verdict = (score >= 70) ? 'Pass ✅' : 'Fail ❌';
  renderList('Ternary Result', [
    'score = ' + score,
    "score >= 70 ? 'Pass' : 'Fail' → " + verdict
  ]);
});

// ============ Cookie helpers + demo ============

function setCookie(name, value, days) {
  let expires = '';
  if (days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + d.toUTCString();
  }
  document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/';
}
function getCookie(name) {
  const key = name + '=';
  const row = document.cookie.split('; ').find(c => c.startsWith(key));
  return row ? decodeURIComponent(row.split('=')[1]) : null;
}
function deleteCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
}

// Cookie demo buttons
on(setCookieBtn, 'click', () => {
  if (!cookieResult) return;
  const name = (cookieInput && cookieInput.value.trim()) || '';
  if (!name) { cookieResult.textContent = 'Please enter a name.'; return; }
  setCookie('username', name, 7); // 7-day persistent cookie
  cookieResult.textContent = 'Cookie set ✔';
});
on(getCookieBtn, 'click', () => {
  if (!cookieResult) return;
  const v = getCookie('username');
  cookieResult.textContent = v ? ('Welcome back, ' + v + '!') : 'No cookie found.';
});
on(deleteCookieBtn, 'click', () => {
  if (!cookieResult) return;
  deleteCookie('username');
  cookieResult.textContent = 'Cookie deleted.';
});
on(clearInputBtn, 'click', () => {
  if (cookieInput) cookieInput.value = '';
});