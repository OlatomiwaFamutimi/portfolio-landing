'use strict';

// --- tiny DOM helpers (null-safe) ---
const $ = (id) => document.getElementById(id);
const on = (id, evt, fn, opts) => { const el = $(id); if (el) el.addEventListener(evt, fn, opts); };
const setText = (id, txt) => { const el = $(id); if (el) el.textContent = txt; };

// --- theme handling (works even if button/boxes are missing) ---
const THEME_KEY = 'theme';
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = localStorage.getItem(THEME_KEY) || (prefersDark ? 'dark' : 'light');

// store the theme on <html data-theme="dark|light"> (easy to style in CSS)
document.documentElement.dataset.theme = initialTheme;

on('toggleTheme', 'click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem(THEME_KEY, next);
});

// --- example: wire up demos only if the elements exist ---
on('welcomeBtn', 'click', () => setText('message', 'Welcome to my portfolio! 😊'));

on('checkDayBtn', 'click', () => {
  const today = new Date().toLocaleDateString(undefined, { weekday: 'long' });
  setText('message', Today is ${today}.);
});

on('generateBtn', 'click', () => {
  const nums = Array.from({ length: 5 }, () => Math.floor(Math.random() * 90) + 10);
  setText('message', Numbers: ${nums.join(', ')});
});

// calculator example (guarded)
on('calcBtn', 'click', () => {
  const aEl = $('a'), bEl = $('b'), out = $('calcResult');
  if (!aEl || !bEl || !out) return;
  const a = Number(aEl.value), b = Number(bEl.value);
  if (Number.isNaN(a) || Number.isNaN(b)) { out.textContent = 'Please enter valid numbers.'; return; }
  out.textContent = ${a} + ${b} = ${a + b};
});

// cookie demo helpers remain the same—just wrap each with on('id', ...) like above
// ===== Helpers =====
function $(id) { return document.getElementById(id); }
function on(id, evt, fn) {
  var el = $(id);
  if (!el) { console.warn('Missing element:', id); return; }
  el.addEventListener(evt, fn);
}
function setText(id, txt) { var el = $(id); if (el) el.textContent = txt; }
function setHTML(id, html) { var el = $(id); if (el) el.innerHTML = html; }

// Catch uncaught runtime errors
window.onerror = function (msg) {
  var box = $('message');
  if (box) box.textContent = 'JS error: ' + msg;
  return false;
};

// ===== Dark mode =====
(function () {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
  on('toggleBtn', 'click', function () {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme',
      document.body.classList.contains('dark') ? 'dark' : 'light'
    );
  });
})();

// ===== Welcome message =====
(function () {
  on('welcomeBtn', 'click', function () {
    setText('message', 'Welcome to my portfolio! 👋');
  });
})();

// ===== Check day (if/else) =====
(function () {
  on('checkDayBtn', 'click', function () {
    var day = new Date().toLocaleDateString(undefined, { weekday: 'long' });
    setText('message', 'Today is ' + day + '.');
  });
})();

// ===== Generate numbers =====
(function () {
  on('generateBtn', 'click', function () {
    var nums = [];
    for (var i = 0; i < 5; i++) {
      nums.push(Math.floor(Math.random() * 90) + 10);
    }
    setHTML('message', 'Numbers: ' + nums.join(', '));
  });
})();

// ===== Check day (switch) =====
(function () {
  on('daySwitchBtn', 'click', function () {
    var d = new Date().getDay();
    var map = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    setText('message', 'Switch says: ' + map[d]);
  });
})();

// ===== Simple calculator =====
(function () {
  var calcResult = $('calcResult');

  function animateCalcLine(label, value, className, append) {
    if (!calcResult) return;
    if (!append) calcResult.innerHTML = '';

    var line = document.createElement('div');
    line.className = 'calc-result ' + className;
    line.innerHTML = '<span class="calc-label">' + label + ':</span> <span class="calc-value">0</span>';
    calcResult.appendChild(line);

    var valueEl = line.querySelector('.calc-value');
    var current = 0, duration = 900, step = 20, inc = value / (duration / step);
    var timer = setInterval(function () {
      current += inc;
      if (current >= value) { current = value; clearInterval(timer); }
      valueEl.textContent = Math.floor(current);
    }, step);
  }

  on('calcBtn', 'click', function () {
    var a = 12, b = 5;
    animateCalcLine('Sum', a + b, 'is-sum', false);
    setTimeout(function () { animateCalcLine('Product', a * b, 'is-product', true); }, 800);
  });
})();

// ===== Operators demo =====
(function () {
  var calcResult = $('calcResult');
  function renderList(title, lines) {
    if (!calcResult) return;
    calcResult.innerHTML =
      '<div class="calc-result show"><strong>' + title + '</strong><ul>' +
      lines.map(function (li) { return '<li>' + li + '</li>'; }).join('') +
      '</ul></div>';
  }

  on('compareBtn', 'click', function () {
    var a = 12, b = 5;
    renderList('Comparison Results', [
      a + ' ==  ' + b + '  → ' + (a == b),
      a + ' === ' + b + ' → ' + (a === b),
      a + ' > ' + b + '   → ' + (a > b),
      a + ' <= ' + b + '  → ' + (a <= b)
    ]);
  });

  on('logicalBtn', 'click', function () {
    var hasID = true, hasTicket = false;
    renderList('Logical Results', [
      'hasID && hasTicket → ' + (hasID && hasTicket),
      'hasID || hasTicket → ' + (hasID || hasTicket),
      '!hasTicket         → ' + (!hasTicket)
    ]);
  });

  on('ternaryBtn', 'click', function () {
    var score = 68;
    var verdict = score >= 70 ? 'Pass ✅' : 'Fail ❌';
    renderList('Ternary Result', [
      'score = ' + score,
      "score >= 70 ? 'Pass' : 'Fail' → " + verdict
    ]);
  });
})();

// ===== Cookie demo =====
(function () {
  var result = $('cookieResult');
  function getSelectedCookieType() {
    var el = document.querySelector('input[name="cookieType"]:checked');
    return el ? el.value : 'session';
  }

  function setCookie(name, value, days) {
    var opts = [];
    if (days) {
      var d = new Date(); d.setTime(d.getTime() + days * 864e5);
      opts.push('expires=' + d.toUTCString());
    }
    opts.push('path=/');
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '; ' + opts.join('; ');
  }
  function getCookie(name) {
    var m = document.cookie.match(new RegExp('(?:^|; )' + encodeURIComponent(name) + '=([^;]*)'));
    return m ? decodeURIComponent(m[1]) : null;
  }
  function deleteCookie(name) { document.cookie = encodeURIComponent(name) + '=; Max-Age=0; path=/'; }

  on('setCookieBtn', 'click', function () {
    var name = ($('cookieInput') && $('cookieInput').value || '').trim();
    if (!name) { if (result) result.textContent = 'Please enter a name.'; return; }
    var type = getSelectedCookieType();
    if (type === 'persistent') setCookie('username', name, 7);
    else setCookie('username', name); // session
    if (result) result.textContent = 'Saved ' + type + ' cookie for "' + name + '".';
  });

  on('getCookieBtn', 'click', function () {
    var v = getCookie('username');
    if (result) result.textContent = v ? 'Hello, ' + v + '!' : 'No cookie found.';
  });

  on('deleteCookieBtn', 'click', function () {
    deleteCookie('username');
    if (result) result.textContent = 'Cookie deleted.';
  });
})();

// ===== Error-handling demo =====
(function () {
  var result = $('errorBox');
  function show(type, msg) {
    if (!result) return;
    result.className = 'notice ' + type;
    result.textContent = msg;
  }

  on('parseBtn', 'click', function () {
    try {
      var raw = ($('errInput') && $('errInput').value) || '';
      JSON.parse(raw);
      show('ok', 'Valid JSON ✅');
    } catch (e) {
      show('error', 'JSON error: ' + e.message);
    }
  });

  on('validateBtn', 'click', function () {
    try {
      var n = Number((($('errInput') && $('errInput').value) || '').trim());
      if (!Number.isFinite(n)) throw new Error('Please enter a valid number');
      show('ok', 'Thanks, number is ' + n);
    } catch (e) {
      show('error', e.message);
    }
  });

  on('throwBtn', 'click', function () {
    try { throw new Error('Custom error from demo'); }
    catch (e) { show('error', e.message); }
  });
})();// ===== Redirect Demo =====
(function () {
  on('redirectBtn', 'click', function () {
    setText('redirectMsg', 'Redirecting to GitHub... 🐙');
    setTimeout(function () {
      window.location.href = 'https://github.com';
    }, 1500);
  });
})();