// Wait until page fully loads
document.addEventListener('DOMContentLoaded', () => {
  console.log('JS connected ✅');

  // Helper function to update text
  const setText = (id, msg) => {
    const el = document.getElementById(id);
    if (el) el.textContent = msg;
  };

  // ===== Toggle Dark Mode =====
  const toggleBtn = document.getElementById('toggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      setText('message', 'Dark mode toggled 🌙');
    });
  }

  // ===== Show Welcome Message =====
  const welcomeBtn = document.getElementById('welcomeBtn');
  if (welcomeBtn) {
    welcomeBtn.addEventListener('click', () => {
      setText('message', '👋 Welcome to my portfolio!');
    });
  }

  // ===== Check Day =====
  const checkDayBtn = document.getElementById('checkDayBtn');
  if (checkDayBtn) {
    checkDayBtn.addEventListener('click', () => {
      const day = new Date().toLocaleDateString('en-US', { weekday: 'long' });
      setText('message', Today is ${day});
    });
  }

  // ===== Generate Numbers =====
  const genBtn = document.getElementById('genBtn');
  if (genBtn) {
    genBtn.addEventListener('click', () => {
      const num = Math.floor(Math.random() * 100);
      setText('message', Generated number: ${num});
    });
  }

  // ===== Go to GitHub =====
  const githubBtn = document.getElementById('githubBtn');
  if (githubBtn) {
    githubBtn.addEventListener('click', () => {
      window.open('https://github.com/OlatomiwaFamutimi', '_blank');
    });
  }

  // ===== Error Handling =====
  const parseBtn = document.getElementById('parseBtn');
  const validateBtn = document.getElementById('validateBtn');
  const throwBtn = document.getElementById('throwBtn');

  if (parseBtn) {
    parseBtn.addEventListener('click', () => {
      try {
        JSON.parse('{ bad json }');
      } catch (err) {
        setText('error', ❌ JSON Error: ${err.message});
      }
    });
  }

  if (validateBtn) {
    validateBtn.addEventListener('click', () => {
      const val = document.getElementById('errInput').value;
      if (isNaN(val)) {
        setText('error', '❌ Please enter a valid number!');
      } else {
        setText('error', '✅ Number looks good!');
      }
    });
  }

  if (throwBtn) {
    throwBtn.addEventListener('click', () => {
      try {
        throw new Error('Custom error thrown!');
      } catch (err) {
        setText('error', ⚠️ ${err.message});
      }
    });
  }

  // ===== Calculator =====
  const calcBtn = document.getElementById('calcBtn');
  if (calcBtn) {
    calcBtn.addEventListener('click', () => {
      const result = 7 * 6; // Example calculation
      setText('calcResult', Result: ${result});
    });
  }
});