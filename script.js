document.addEventListener('DOMContentLoaded', () => {
  const setText = (id, msg) => {
    const el = document.getElementById(id);
    if (el) el.textContent = msg;
  };

  const toggleBtn = document.getElementById('toggleThemeBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      setText('message', 'Dark mode toggled 🌙');
    });
  }

  const welcomeBtn = document.getElementById('welcomeBtn');
  if (welcomeBtn) {
    welcomeBtn.addEventListener('click', () => {
      setText('message', 'Welcome to my portfolio!');
    });
  }

  const checkDayBtn = document.getElementById('checkDayBtn');
  if (checkDayBtn) {
    checkDayBtn.addEventListener('click', () => {
      const day = new Date().toLocaleDateString('en-US', { weekday: 'long' });
      setText('message', Today is ${day});
    });
  }

  const genBtn = document.getElementById('genBtn');
  if (genBtn) {
    genBtn.addEventListener('click', () => {
      const n = Math.floor(Math.random() * 100);
      setText('message', Generated: ${n});
    });
  }

  const gitHubBtn = document.getElementById('gitHubBtn');
  if (gitHubBtn) {
    gitHubBtn.addEventListener('click', () => {
      window.open('https://github.com/OlatomiwaFamuttimi', '_blank');
    });
  }

  const parseBtn = document.getElementById('parseBtn');
  const validateBtn = document.getElementById('validateBtn');
  const throwBtn = document.getElementById('throwBtn');

  if (parseBtn) {
    parseBtn.addEventListener('click', () => {
      try {
        JSON.parse('bad json');
        setText('error', 'Parsed!');
      } catch (err) {
        setText('error', JSON Error: ${err.message});
      }
    });
  }

  if (validateBtn) {
    validateBtn.addEventListener('click', () => {
      const val = document.getElementById('errInput')?.value;
      if (isNaN(Number(val))) setText('error', 'Please enter a valid number!');
      else setText('error', '✅ Number looks good!');
    });
  }

  if (throwBtn) {
    throwBtn.addEventListener('click', () => {
      try { throw new Error('Custom error thrown'); }
      catch (err) { setText('error', ⚠️ ${err.message}); }
    });
  }

  const calcBtn = document.getElementById('calcBtn');
  if (calcBtn) {
    calcBtn.addEventListener('click', () => {
      const result = 2 + 5; // example calc
      setText('calcResult', Result: ${result});
    });
  }
});
