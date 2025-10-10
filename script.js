/* ---------- tiny helpers ---------- */
const $ = (sel) => document.querySelector(sel);
const byId = (id) => document.getElementById(id);
const setText = (id, txt) => { const el = byId(id); if (el) el.textContent = txt; };

// add listener only if the element exists (prevents errors when section is missing)
function on(id, type, handler) {
  const el = byId(id);
  if (el) el.addEventListener(type, handler);
}

/* ---------- boot ---------- */
document.addEventListener('DOMContentLoaded', () => {
  console.log('JS loaded ✅');

  /* ===== Basic demo buttons (optional, only if present in your HTML) ===== */
  on('toggleBtn', 'click', () => {
    document.documentElement.classList.toggle('dark');
    setText('message', 'Toggled dark mode');
  });

  on('welcomeBtn', 'click', () => {
    setText('message', 'Welcome! Thanks for visiting 👋');
  });

  on('dayBtn', 'click', () => {
    const day = new Date().toLocaleDateString(undefined, { weekday: 'long' });
    setText('message', Today is ${day});
  });

  on('genBtn', 'click', () => {
    const nums = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
    setText('message', Generated: ${nums.join(', ')});
  });

  on('githubBtn', 'click', () => {
    window.location.href = 'https://github.com/olatomiwafamutimi';
  });

  /* ===== Error handling demo ===== */
  on('parseBtn', 'click', () => {
    // intentionally tries to parse invalid JSON to show a caught error
    try {
      JSON.parse('{ not: "json" }'); // will throw
      setText('error', 'Parsed OK (unexpected)');
    } catch (err) {
      setText('error', Parse error: ${err.message});
    }
  });

  on('validateBtn', 'click', () => {
    const raw = (byId('errInput')?.value ?? '').trim();
    const n = Number(raw);
    if (raw === '') return setText('error', 'Please type a number.');
    if (Number.isNaN(n)) return setText('error', 'Not a valid number.');
    if (!Number.isFinite(n)) return setText('error', 'Number is not finite.');
    setText('error', Valid number ✅: ${n});
  });

  on('throwBtn', 'click', () => {
    try {
      throw new Error('Custom error thrown for demo');
    } catch (err) {
      setText('error', Custom error: ${err.message});
    }
  });

  /* ===== Simple calculator demo (optional) ===== */
  on('calcBtn', 'click', () => {
    // tiny demo: sum 1..5
    const result = [1, 2, 3, 4, 5].reduce((a, b) => a + b, 0);
    setText('calcResult', Sum of 1..5 = ${result});
  });
});
