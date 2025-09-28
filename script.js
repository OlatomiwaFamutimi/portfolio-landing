// === DIAGNOSTICS (temporary) ===
console.clear();
console.log("JS loaded ✅", new Date().toISOString());
document.body.setAttribute("data-js", "on");

const REQUIRED_IDS = [
  "toggleBtn","welcomeBtn","checkDayBtn","generateBtn","daySwitchBtn",
  "calcBtn","calcResult","compareBtn","logicalBtn","ternaryBtn",
  "cookieInput","setCookieBtn","getCookieBtn","deleteCookieBtn","cookieResult",
  "errInput","parseBtn","validateBtn","throwBtn","errorBox","message"
];
const missing = REQUIRED_IDS.filter(id => !document.getElementById(id));
if (missing.length) console.error("Missing elements:", missing);

// catch any runtime errors so they don’t kill other listeners
window.addEventListener("error", (e) => console.error("Runtime error:", e.message));// ===== Safety + helpers =====
'use strict';

function $(id) { return document.getElementById(id); }
function safeAdd(id, evt, handler) {
  const el = $(id);
  if (!el) { console.warn('Missing element:', id); return; }
  try { el.addEventListener(evt, handler); }
  catch (e) { console.error('Listener failed for', id, e); }
}

function setText(id, text) { const el = $(id); if (el) el.textContent = text; }
function appendHtml(id, html) { const el = $(id); if (el) el.innerHTML = html; }

// Catch any uncaught runtime error so others still run
window.addEventListener('error', (e) => {
  console.error('Uncaught error:', e.message);
  const box = $('message');
  if (box) box.textContent = JS error: ${e.message};
});

// ===== Dark mode =====
(function () {
  if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark');
  safeAdd('toggleBtn', 'click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });
})();

// ===== Welcome message =====
(function () {
  safeAdd('welcomeBtn', 'click', () => {
    setText('message', 'Welcome to my portfolio! 👋');
  });
})();

// ===== Check day (if/else) =====
(function () {
  safeAdd('checkDayBtn', 'click', () => {
    const day = new Date().toLocaleDateString(undefined, { weekday: 'long' });
    setText('message', Today is ${day}.);
  });
})();

// ===== Generate numbers (simple demo) =====
(function () {
  safeAdd('generateBtn', 'click', () => {
    const nums = Array.from({ length: 5 }, () => Math.floor(Math.random() * 90) + 10);
    appendHtml('message', Numbers: ${nums.join(', ')});
  });
})();

// ===== Check day (switch) =====
(function () {
  safeAdd('daySwitchBtn', 'click', () => {
    const d = new Date().getDay();
    const map = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    setText('message', Switch says: ${map[d]});
  });
})();

// ===== Simple calculator with animated lines =====
(function () {
  const calcResult = $('calcResult');

  function animateCalcLine(label, value, className, append) {
    if (!calcResult) return;
    if (!append) calcResult.innerHTML = '';

    const line = document.createElement('div');
    line.className = calc-result ${className};
    line.innerHTML = <span class="calc-label">${label}:</span> <span class="calc-value">0</span>;
    calcResult.appendChild(line);
    requestAnimationFrame(() => line.classList.add('show'));

    const valueEl = line.querySelector('.calc-value');
    let current = 0, duration = 900, step = 20, inc = value / (duration / step);
    const timer = setInterval(() => {
      current += inc;
      if (current >= value) { current = value; clearInterval(timer); }
      valueEl.textContent = Math.floor(current);
    }, step);
  }

  safeAdd('calcBtn', 'click', () => {
    const a = 12, b = 5;
    animateCalcLine('Sum', a + b, 'is-sum', false);
    setTimeout(() => animateCalcLine('Product', a * b, 'is-product', true), 800);
  });
})();

// ===== Operators: comparison / logical / ternary =====
(function () {
  const calcResult = $('calcResult');
  function renderList(title, lines) {
    if (!calcResult) return;
    calcResult.innerHTML =
      <div class="calc-result show"><strong>${title}</strong><ul>${lines.map(li => `<li>${li}</li>).join('')}</ul></div>`;
  }

  safeAdd('compareBtn', 'click', () => {
    const a = 12, b = 5;
    renderList('Comparison Results', [
      ${a} ==  ${b}  → ${a == b},
      ${a} === ${b} → ${a === b},
      ${a} > ${b}   → ${a > b},
      ${a} <= ${b}  → ${a <= b}
    ]);
  });

  safeAdd('logicalBtn', 'click', () => {
    const hasID = true, hasTicket = false;
    renderList('Logical Results', [
      hasID && hasTicket → ${hasID && hasTicket},
      hasID || hasTicket → ${hasID || hasTicket},
      !hasTicket         → ${!hasTicket}
    ]);
  });

  safeAdd('ternaryBtn', 'click', () => {
    const score = 68;
    const verdict = score >= 70 ? 'Pass ✅' : 'Fail ❌';
    renderList('Ternary Result', [
      score = ${score},
      score >= 70 ? 'Pass' : 'Fail' → ${verdict}
    ]);
  });
})();

// ===== Cookie demo (session vs persistent) =====
(function () {
  const result = $('cookieResult');
  function getSelectedCookieType() {
    const el = document.querySelector('input[name="cookieType"]:checked');
    return el ? el.value : 'session';
  }

  function setCookie(name, value, days) {
    const opts = [];
    if (days) {
      const d = new Date(); d.setTime(d.getTime() + days * 864e5);
      opts.push('expires=' + d.toUTCString());
    }
    opts.push('path=/');
    document.cookie = ${encodeURIComponent(name)}=${encodeURIComponent(value)}; ${opts.join('; ')};
  }
  function getCookie(name) {
    const m = document.cookie.match(new RegExp('(?:^|; )' + encodeURIComponent(name) + '=([^;]*)'));
    return m ? decodeURIComponent(m[1]) : null;
  }
  function deleteCookie(name) { document.cookie = encodeURIComponent(name) + '=; Max-Age=0; path=/'; }

  safeAdd('setCookieBtn', 'click', () => {
    const name = ($('cookieInput')?.value || '').trim();
    if (!name) { if (result) result.textContent = 'Please enter a name.'; return; }
    const type = getSelectedCookieType();
    if (type === 'persistent') setCookie('username', name, 7);
    else setCookie('username', name); // session
    if (result) result.textContent = Saved ${type} cookie for "${name}".;
  });

  safeAdd('getCookieBtn', 'click', () => {
    const v = getCookie('username');
    if (result) result.textContent = v ? Hello, ${v}! : 'No cookie found.';
  });

  safeAdd('deleteCookieBtn', 'click', () => {
    deleteCookie('username');
    if (result) result.textContent = 'Cookie deleted.';
  });
})();

// ===== Error-handling demo =====
(function () {
  const result = $('errorBox');
  function show(type, msg) {
    if (!result) return;
    result.className = 'notice ' + type;
    result.textContent = msg;
  }

  safeAdd('parseBtn', 'click', () => {
    try {
      const raw = $('errInput')?.value ?? '';
      JSON.parse(raw); // will fail if not valid JSON
      show('ok', 'Valid JSON ✅');
    } catch (e) {
      show('error', 'JSON error: ' + e.message);
    }
  });

  safeAdd('validateBtn', 'click', () => {
    try {
      const n = Number(($('errInput')?.value ?? '').trim());
      if (!Number.isFinite(n)) throw new Error('Please enter a valid number');
      show('ok', Thanks, number is ${n});
    } catch (e) {
      show('error', e.message);
    }
  });

  safeAdd('throwBtn', 'click', () => {
    try { throw new Error('Custom error from demo'); }
    catch (e) { show('error', e.message); }
  });
})();