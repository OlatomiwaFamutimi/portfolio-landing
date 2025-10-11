document.addEventListener('DOMContentLoaded', () => {
  console.log('JS connected ✅');

  const $ = (id) => document.getElementById(id);
  const setMsg = (txt) => { const el = $('message'); if (el) el.textContent = txt; };
  const on = (id, fn) => { const el = $(id); if (el) el.addEventListener('click', fn); };

  // Toggle theme
  on('toggleThemeBtn', () => document.body.classList.toggle('dark'));

  // Welcome message
  on('welcomeBtn', () => setMsg('Welcome to my portfolio 👋'));

  // Check day
  on('checkDayBtn', () => setMsg(Today is ${new Date().toLocaleDateString()}));

  // Generate random number
  on('genBtn', () => setMsg(Random number: ${Math.floor(Math.random() * 100)}));

  // Go to GitHub
  on('ghBtn', () => window.open('https://github.com/olatomiwafamutimi', '_blank'));

  // Error handling demos
  on('parseBtn', () => {
    try { JSON.parse('{ invalid JSON }'); }
    catch (e) { setMsg(Parse error: ${e.message}); }
  });

  on('validateBtn', () => {
    const v = Number(($('errInput') || {}).value);
    setMsg(Number.isFinite(v) ? Valid number: ${v} : 'Please enter a valid number');
  });

  on('throwBtn', () => {
    try { throw new Error('Custom error fired 🚨'); }
    catch (e) { setMsg(e.message); }
  });

  // Simple calculator demo
  on('calcBtn', () => setMsg(2 + 3 = ${2 + 3}));
});
