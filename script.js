// script.js
document.addEventListener('DOMContentLoaded', () => {
  console.log('JS connected ✅');

  // helpers
  const $ = (id) => document.getElementById(id);
  const setText = (id, msg) => { const el = $(id); if (el) el.textContent = msg; };

  // ------- Top row -------
  const toggleBtn = $('toggleThemeBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      setText('message', 'Dark mode toggled 🌙');
    });
  }

  const welcomeBtn = $('welcomeBtn');
  if (welcomeBtn) {
    welcomeBtn.addEventListener('click', () => {
      setText('message', 'Welcome to my portfolio!');
    });
  }

  const checkDayBtn = $('checkDayBtn');
  if (checkDayBtn) {
    checkDayBtn.addEventListener('click', () => {
      const day = new Date().toLocaleDateString('en-US', { weekday: 'long' });
      setText('message', Today is ${day});
    });
  }

  const genBtn = $('genBtn');
  if (genBtn) {
    genBtn.addEventListener('click', () => {
      setText('message', 'Clicked! ' + Math.floor(Math.random() * 100));
    });
  }

  const githubBtn = $('githubBtn');
  if (githubBtn) {
    githubBtn.addEventListener('click', () => {
      window.open('https://github.com/OlatomiwaFamutimi', '_blank');
    });
  }

  // ------- Error handling demo -------
  const parseBtn = $('parseBtn');
  const validateBtn = $('validateBtn');
  const throwBtn = $('throwBtn');

  if (parseBtn) {
    parseBtn.addEventListener('click', () => {
      try { JSON.parse('{ bad json }'); }            // will throw
      catch (err) { setText('error', ❌ JSON Error: ${err.message}); }
    });
  }

  if (validateBtn) {
    validateBtn.addEventListener('click', () => {
      const val = $('errInput')?.value;
      if (isNaN(val)) setText('error', '❌ Please enter a valid number!');
      else            setText('error', '✅ Number looks good!');
    });
  }

  if (throwBtn) {
    throwBtn.addEventListener('click', () => {
      try { throw new Error('Custom error thrown'); }
      catch (err) { setText('error', ⚠️ ${err.message}); }
    });
  }

  // ------- Calculator -------
  const calcBtn = $('calcBtn');
  if (calcBtn) {
    calcBtn.addEventListener('click', () => {
      const result = 2 + 6; // example
      setText('calcResult', Result: ${result});
    });
  }
});