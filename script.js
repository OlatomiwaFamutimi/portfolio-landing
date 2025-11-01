// script.js
document.addEventListener('DOMContentLoaded', () => {
  console.log('JS connected ✅');

  const $ = (id) => document.getElementById(id);
  const setText = (id, msg) => {
    const el = $(id);
    if (el) el.textContent = msg;
  };

  // --- Top row buttons ---
  const toggleBtn   = $('toggleThemeBtn');
  const welcomeBtn  = $('welcomeBtn');
  const checkDayBtn = $('checkDayBtn');
  const genBtn      = $('genBtn');
  const gitBtn      = $('gitHubBtn');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      setText('message', 'Dark mode toggled 🌙');
    });
  }

  if (welcomeBtn) {
    welcomeBtn.addEventListener('click', () => {
      setText('message', 'Welcome to my portfolio!');
    });
  }

  if (checkDayBtn) {
    checkDayBtn.addEventListener('click', () => {
      const day = new Date().toLocaleDateString('en-US', { weekday: 'long' });
      setText('message', Today is ${day});
    });
  }

  if (genBtn) {
    genBtn.addEventListener('click', () => {
      const n = Math.floor(Math.random() * 100);
      setText('message', Generated number: ${n});
    });
  }

  if (gitBtn) {
    gitBtn.addEventListener('click', () => {
      window.open('https://github.com/olatomiwafamutimi', '_blank');
    });
  }

  // --- Error handling section ---
  const parseBtn    = $('parseBtn');
  const validateBtn = $('validateBtn');
  const throwBtn    = $('throwBtn');

  if (parseBtn) {
    parseBtn.addEventListener('click', () => {
      try { JSON.parse('bad json'); }
      catch (err) { setText('error', ❌ JSON Error: ${err.message}); }
    });
  }

  if (validateBtn) {
    validateBtn.addEventListener('click', () => {
      const val = $('errInput')?.value;
      if (isNaN(Number(val))) setText('error', '⚠️ Please enter a valid number!');
      else setText('error', '✅ Number looks good!');
    });
  }

  if (throwBtn) {
    throwBtn.addEventListener('click', () => {
      try { throw new Error('Custom error thrown'); }
      catch (err) { setText('error', ⚠️ ${err.message}); }
    });
  }

  // --- Calculator demo ---
  const calcBtn = $('calcBtn');
  if (calcBtn) {
    calcBtn.addEventListener('click', () => {
      const result = 2 + 5; // demo calc
      setText('calcResult', Result: ${result});
    });
  }
});