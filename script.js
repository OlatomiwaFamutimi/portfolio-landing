// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Tiny helpers
  const $ = (id) => document.getElementById(id);
  const setPanel = (id, text, type = 'info') => {
    const el = $(id);
    if (!el) return;
    el.textContent = text;
    el.className = panel ${type}; // assumes you have .panel styles
  };

  // --- Error-handling demo ---
  const inputEl = $('errorInput');

  const parseBtn = $('parseBtn');
  if (parseBtn) {
    parseBtn.addEventListener('click', () => {
      try {
        const n = Number(inputEl?.value ?? '');
        if (Number.isNaN(n)) throw new Error('Not a number');
        setPanel('error', 'Parsed number: ' + n, 'success');
      } catch (e) {
        setPanel('error', 'Error: ' + e.message, 'danger');
      }
    });
  }

  const validateBtn = $('validateBtn');
  if (validateBtn) {
    validateBtn.addEventListener('click', () => {
      const v = inputEl?.value ?? '';
      if (/^\d+$/.test(v)) {
        setPanel('error', 'Valid input ✅', 'success');
      } else {
        setPanel('error', 'Please enter digits only.', 'warning');
      }
    });
  }

  const throwBtn = $('throwBtn');
  if (throwBtn) {
    throwBtn.addEventListener('click', () => {
      try {
        throw new Error('Custom error from demo');
      } catch (e) {
        setPanel('error', e.message, 'danger');
      }
    });
  }

  // --- Simple calculator demo (random product just to show action) ---
  const calcBtn = $('calcBtn');
  if (calcBtn) {
    calcBtn.addEventListener('click', () => {
      const a = Math.floor(Math.random() * 10) + 1;
      const b = Math.floor(Math.random() * 10) + 1;
      setPanel('calcResult', ${a} × ${b} = ${a * b}, 'info');
    });
  }
});