document.addEventListener('DOMContentLoaded', () => {
  console.log('JS ready');

  const $ = (id) => document.getElementById(id);
  const setMsg = (txt) => { const m = $('message'); if (m) m.textContent = txt; };
  const on = (id, fn) => { const el = $(id); if (el) el.addEventListener('click', fn); };

  // Buttons (ensure these IDs exist in index.html)
  on('toggleThemeBtn', () => document.body.classList.toggle('dark'));
  on('welcomeBtn',     () => setMsg('Welcome to my portfolio!'));
  on('checkDayBtn',    () => setMsg(Today is ${new Date().toLocaleDateString()}));
  on('genBtn',         () => setMsg(Random number: ${Math.floor(Math.random() * 100)}));
  on('ghBtn',          () => window.open('https://github.com/olatomiwafamutimi', '_blank'));

  // Error-handling demo (optional IDs)
  on('parseBtn', () => { try { JSON.parse('{ oops }'); } catch (e) { setMsg(Parse error: ${e.message}); } });
  on('validateBtn', () => {
    const v = Number(($('errInput') || {}).value);
    setMsg(Number.isFinite(v) ? Valid number: ${v} : 'Please enter a valid number');
  });
  on('throwBtn', () => { try { throw new Error('Custom error fired'); } catch (e) { setMsg(e.message); } });

  // Simple calc demo
  on('calcBtn', () => setMsg(2 + 3 = ${2 + 3}));
});
