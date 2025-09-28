// ---------- helpers ----------
const $ = (id) => document.getElementById(id);
const on = (el, evt, fn) => el && el.addEventListener(evt, fn);

// ---------- refs ----------
const toggleBtn     = $('toggleBtn');
const welcomeBtn    = $('welcomeBtn');
const checkDayBtn   = $('checkDayBtn');
const daySwitchBtn  = $('daySwitchBtn');
const generateBtn   = $('generateBtn');

const revealBtn     = $('revealBtn');
const revealBox     = $('revealBox');
const countBtn      = $('countBtn');
const counter       = $('counter');

const calcBtn       = $('calcBtn');
const compareBtn    = $('compareBtn');
const logicalBtn    = $('logicalBtn');
const ternaryBtn    = $('ternaryBtn');

const message       = $('message');
const numbersList   = $('numbersList');
const calcResult    = $('calcResult');

const cookieInput   = $('cookieInput');
const setCookieBtn  = $('setCookieBtn');
const getCookieBtn  = $('getCookieBtn');
const deleteCookieBtn = $('deleteCookieBtn');
const clearInputBtn = $('clearInputBtn');
const cookieResult  = $('cookieResult');

// ---------- base demos ----------

// Dark mode
on(toggleBtn, 'click', () => {
  document.body.classList.toggle('dark');
});

// Welcome text
on(welcomeBtn, 'click', () => {
  if (message) message.textContent = 'Welcome to my portfolio!';
});

// Check day (if/else)
on(checkDayBtn, 'click', () => {
  const names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const d = new Date().getDay();
  if (message) message.textContent = 'Today is ' + names[d] + '.';
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
});

// Generate numbers (toggle list)
on(generateBtn, 'click', () => {
  if (!numbersList) return;
  if (numbersList.children.length > 0) {
    numbersList.innerHTML = '';
    return;
  }
  for (let i = 1; i <= 10; i++) {
    const li = document.createElement('li');
    li.textContent = 'Number ' + i;
    numbersList.appendChild(li);
  }
});

// Reveal box
on(revealBtn, 'click', () => {
  if (!revealBox) return;
  revealBox.classList.toggle('show'); // CSS: .hidden-box.show { opacity:1; transform:translateY(0); }
});

// Counter animation
on(countBtn, 'click', () => {
  if (!counter) return;
  let n = 0;
  const target = 100;
  const step = 2;
  const t = setInterval(() => {
    n += step;
    if (n >= target) {
      n = target;
      clearInterval(t);
    }
    counter.textContent = String(n);
  }, 20);
});

// ---------- calculator + operators ----------

// pretty line renderer for green box
function renderList(title, lines) {
  if (!calcResult) return;
  calcResult.innerHTML =
    '<div class="calc-result show">' +
      '<strong>' + title + '</strong>' +
      '<ul>' + lines.map(li => '<li>' + li + '</li>').join('') + '</ul>' +
    '</div>';
}

// animate one labeled value (Sum/Product)
function animateCalcLine(label, value, className, append) {
  if (!calcResult) return;
  if (!append) calcResult.innerHTML = '';
  const line = document.createElement('div');
  line.className = 'calc-result ' + className;
  line.innerHTML = '<span class="calc-label">' + label + ':</span> ' +
                   '<span class="calc-value">0</span>';
  calcResult.appendChild(line);

  // fade-in
  requestAnimationFrame(() => line.classList.add('show'));

  // count-up
  const valueEl = line.querySelector('.calc-value');
  let current = 0;
  const duration = 900;
  const stepTime = 20;
  const steps = Math.ceil(duration / stepTime);
  const inc = value / steps;
  const timer = setInterval(() => {
    current += inc;
    if (current >= value) {
      current = value;
      clearInterval(timer);
    }
    valueEl.textContent = String(Math.floor(current));
  }, stepTime);
}

// Calculator demo (uses arithmetic + comparison)
on(calcBtn, 'click', () => {
  const a = 12, b = 5;
  const sum = a + b;
  const product = a * b;
  animateCalcLine('Sum', sum, 'is-sum', false);
  setTimeout(() => animateCalcLine('Product', product, 'is-product', true), 1000);
});

// Comparison operators
on(compareBtn, 'click', () => {
  const a = 12, b = 5;
  renderList('Comparison Results', [
    a + ' ==  ' + b + '  \u2192 ' + (a == b),
    a + ' === ' + b + ' \u2192 ' + (a === b),
    a + ' > ' + b + '   \u2192 ' + (a > b),
    a + ' <= ' + b + '  \u2192 ' + (a <= b)
  ]);
});

// Logical operators
on(logicalBtn, 'click', () => {
  const hasID = true;
  const hasTicket = false;
  renderList('Logical Results', [
    'hasID && hasTicket \u2192 ' + (hasID && hasTicket),
    'hasID || hasTicket \u2192 ' + (hasID || hasTicket),
    '!hasTicket         \u2192 ' + (!hasTicket)
  ]);
});

// Ternary operator
on(ternaryBtn, 'click', () => {
  const score = 68;
  const verdict = (score >= 70) ? 'Pass \u2705' : 'Fail \u274C';
  renderList('Ternary Result', [
    'score = ' + score,
    "score >= 70 ? 'Pass' : 'Fail' \u2192 " + verdict
  ]);
});

// Cookie helpers
function setCookie(name, value, days) {
  let cookie = ${name}=${value}; path=/;
  if (days) {
    const maxAge = days * 24 * 60 * 60; // convert days → seconds
    cookie += ; max-age=${maxAge};
  }
  document.cookie = cookie;
}

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let c of cookies) {
    const [key, val] = c.split('=');
    if (key === name) return val;
  }
  return null;
}

function deleteCookie(name) {
  document.cookie = ${name}=; max-age=0; path=/;
}

// Elements
const cookieInput = document.getElementById('cookieInput');
const cookieResult = document.getElementById('cookieResult');
const setCookieBtn = document.getElementById('setCookieBtn');
const getCookieBtn = document.getElementById('getCookieBtn');
const deleteCookieBtn = document.getElementById('deleteCookieBtn');

// === Persist Dark Mode with a cookie ===
const THEME_COOKIE = 'theme';

// Apply saved theme on load
(function applyThemeFromCookie() {
  const saved = getCookie(THEME_COOKIE); // uses your existing helper
  if (saved === 'dark') {
    document.body.classList.add('dark');
  }
})();

// When user toggles, save choice for 30 days
on(toggleBtn, 'click', () => {
  document.body.classList.toggle('dark');
  const mode = document.body.classList.contains('dark') ? 'dark' : 'light';
  setCookie(THEME_COOKIE, mode, 30);     // uses your existing helper
});

// Set cookie → choose session or persistent
on(setCookieBtn, 'click', () => {
  const value = cookieInput.value.trim();
  if (!value) {
    cookieResult.textContent = "⚠️ Please enter a value!";
    return;
  }

  const type = document.querySelector('input[name="cookieType"]:checked').value;

  if (type === "session") {
    setCookie("username", value); // session cookie
    cookieResult.textContent = ✅ Session cookie set (username=${value});
  } else {
    setCookie("username", value, 7); // persistent for 7 days
    cookieResult.textContent = ✅ Persistent cookie set (username=${value}, 7 days);
  }
});

// Get cookie
on(getCookieBtn, 'click', () => {
  const value = getCookie("username");
  cookieResult.textContent = value
    ? 🍪 Found cookie: username=${value}
    : "❌ No cookie found.";
});

// Delete cookie
on(deleteCookieBtn, 'click', () => {
  deleteCookie("username");
  cookieResult.textContent = "🗑️ Cookie deleted.";
});