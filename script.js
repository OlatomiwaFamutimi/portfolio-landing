// ===== Helpers =====
function on(el, evt, fn) { if (el) el.addEventListener(evt, fn); }
function $(id) { return document.getElementById(id); }

// ===== Elements =====
const toggleBtn      = $('toggleBtn');
const welcomeBtn     = $('welcomeBtn');
const checkDayBtn    = $('checkDayBtn');
const generateBtn    = $('generateBtn');
const daySwitchBtn   = $('daySwitchBtn');
const message        = $('message');
const numbersList    = $('numbersList');

const revealBtn      = $('revealBtn');
const revealBox      = $('revealBox');
const countBtn       = $('countBtn');
const counterEl      = $('counter');

const calcBtn        = $('calcBtn');
const calcResult     = $('calcResult');
const compareBtn     = $('compareBtn');
const logicalBtn     = $('logicalBtn');
const ternaryBtn     = $('ternaryBtn');

// Cookie demo elements
const cookieInput       = $('cookieInput');
const setCookieBtn      = $('setCookieBtn');
const getCookieBtn      = $('getCookieBtn');
const deleteCookieBtn   = $('deleteCookieBtn');
const cookieResult      = $('cookieResult');
const cookieTypeSession = $('cookieTypeSession');
const cookieTypePersist = $('cookieTypePersist');

// ===== Tiny cookie helpers (ASCII only) =====
function setCookie(name, value, days) {
  let expires = "";
  if (days && days > 0) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + d.toUTCString();
  }
  document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length));
  }
  return null;
}
function deleteCookie(name) { setCookie(name, "", -1); }

// ===== Dark mode + remember with cookie =====
function applyThemeFromCookie() {
  const theme = getCookie("theme");
  if (theme === "dark") document.body.classList.add("dark");
}
applyThemeFromCookie();

on(toggleBtn, 'click', function () {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    setCookie("theme", "dark", 7);
  } else {
    deleteCookie("theme");
  }
});

// ===== Welcome =====
on(welcomeBtn, 'click', function () {
  if (message) message.textContent = "Welcome to my portfolio!";
});

// ===== Check day (if/else) =====
on(checkDayBtn, 'click', function () {
  const names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const d = new Date().getDay();
  if (message) message.textContent = "Today is " + names[d] + ".";
  alert("Today is " + names[d]);
});

// ===== Check day (switch) =====
on(daySwitchBtn, 'click', function () {
  const names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const d = new Date().getDay();
  let text;
  switch (d) {
    case 0: text = "Sunday — weekend!"; break;
    case 6: text = "Saturday — weekend!"; break;
    default: text = names[d] + " — keep coding!"; break;
  }
  if (message) message.textContent = text;
});

// ===== Numbers (toggle) =====
on(generateBtn, 'click', function () {
  if (!numbersList) return;
  if (numbersList.children.length > 0) { numbersList.innerHTML = ""; return; }
  for (let i = 1; i <= 10; i++) {
    const li = document.createElement('li');
    li.textContent = "Number " + i;
    numbersList.appendChild(li);
  }
});

// ===== Reveal box =====
on(revealBtn, 'click', function () {
  if (!revealBox) return;
  revealBox.classList.toggle('show');
});

// ===== Counter animation =====
on(countBtn, 'click', function () {
  if (!counterEl) return;
  let start = 0;
  const target = 100;
  const duration = 1000;
  const stepTime = 20;
  const inc = target / (duration / stepTime);
  const t = setInterval(function () {
    start += inc;
    if (start >= target) { start = target; clearInterval(t); }
    counterEl.textContent = String(Math.floor(start));
  }, stepTime);
});

// ===== Calculator demo (operators) =====
function renderLines(title, lines) {
  if (!calcResult) return;
  let html = "";
  html += '<div class="calc-result show">';
  html += '<strong>' + title + '</strong>';
  html += '<ul>';
  for (let i = 0; i < lines.length; i++) {
    html += '<li>' + lines[i] + '</li>';
  }
  html += '</ul></div>';
  calcResult.innerHTML = html;
}

on(calcBtn, 'click', function () {
  const a = 12, b = 5;
  const sum = a + b;
  const product = a * b;
  renderLines("Calculator Result", [
    "a = " + a + ", b = " + b,
    "a + b = " + sum,
    "a * b = " + product
  ]);
});

// ===== Comparison / Logical / Ternary demos =====
on(compareBtn, 'click', function () {
  const a = 12, b = 5;
  renderLines("Comparison Results", [
    a + " == "  + b + "  -> " + (a ==  b),
    a + " === " + b + " -> " + (a === b),
    a + " > "   + b + "   -> " + (a >   b),
    a + " <= "  + b + "  -> " + (a <=  b)
  ]);
});

on(logicalBtn, 'click', function () {
  const hasID = true;
  const hasTicket = false;
  renderLines("Logical Results", [
    "hasID && hasTicket -> " + (hasID && hasTicket),
    "hasID || hasTicket -> " + (hasID || hasTicket),
    "!hasTicket         -> " + (!hasTicket)
  ]);
});

on(ternaryBtn, 'click', function () {
  const score = 68;
  const verdict = (score >= 70) ? "Pass" : "Fail";
  renderLines("Ternary Result", [
    "score = " + score,
    "score >= 70 ? 'Pass' : 'Fail' -> " + verdict
  ]);
});

// ===== Cookie demo (session vs persistent) =====
on(setCookieBtn, 'click', function () {
  if (!cookieInput || !cookieResult) return;
  const name = cookieInput.value.trim();
  if (!name) {
    cookieResult.textContent = "Enter a name first.";
    return;
  }
  // session vs 7-day cookie
  if (cookieTypePersist && cookieTypePersist.checked) {
    setCookie("username", name, 7);
    cookieResult.textContent = "Set persistent cookie: username=" + name + " (7 days).";
  } else {
    // session cookie: no expiry set
    setCookie("username", name, 0);
    cookieResult.textContent = "Set session cookie: username=" + name + ".";
  }
});

on(getCookieBtn, 'click', function () {
  if (!cookieResult) return;
  const val = getCookie("username");
  cookieResult.textContent = val ? ("Cookie value -> " + val) : "No cookie found.";
});

on(deleteCookieBtn, 'click', function () {
  if (!cookieResult) return;
  deleteCookie("username");
  cookieResult.textContent = "Cookie deleted.";
});