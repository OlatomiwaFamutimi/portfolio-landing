document.addEventListener('DOMContentLoaded', () => {
  // helper to write text into any element by id
  const setText = (id, msg) => {
    const el = document.getElementById(id);
    if (el) el.textContent = msg;
  };

  // ---- Top row demos ----
  const toggleBtn   = document.getElementById('toggleThemeBtn');
  const welcomeBtn  = document.getElementById('welcomeBtn');
  const checkDayBtn = document.getElementById('checkDayBtn');
  const genBtn      = document.getElementById('genBtn');
  const gitHubBtn   = document.getElementById('gitHubBtn');

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

  if (gitHubBtn) {
    gitHubBtn.addEventListener('click', () => {
      window.open('https://github.com/OlatomiwaFamuttimi', '_blank');
    });
  }

  // ---- Error handling demos ----
  const parseBtn    = document.getElementById('parseBtn');
  const validateBtn = document.getElementById('validateBtn');
  const throwBtn    = document.getElementById('throwBtn');

  if (parseBtn) {
    parseBtn.addEventListener('click', () => {
      try {
        JSON.parse('bad json'); // intentionally fails
        setText('error', 'Parsed OK'); // won’t run
      } catch (err) {
        setText('error', JSON Error: ${err.message});
      }
    });
  }

  if (validateBtn) {
    validateBtn.addEventListener('click', () => {
      const val = document.getElementById('errInput')?.value;
      if (isNaN(Number(val))) {
        setText('error', 'Please enter a valid number!');
      } else {
        setText('error', '✅ Number looks good!');
      }
    });
  }

  if (throwBtn) {
    throwBtn.addEventListener('click', () => {
      try {
        throw new Error('Custom error thrown');
      } catch (err) {
        setText('error', ⚠️ ${err.message});
      }
    });
  }

  // ---- Calculator (optional) ----
  const calcBtn = document.getElementById('calcBtn');
  if (calcBtn) {
    calcBtn.addEventListener('click', () => {
      const result = 2 + 5; // demo math
      setText('calcResult', Result: ${result});
    });
  }
});

