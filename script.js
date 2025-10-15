<<<<<<< Updated upstream
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  console.log('JS connected ✅');
=======
>>>>>>> Stashed changes

  // helpers
  const $ = (id) => document.getElementById(id);
  const setText = (id, txt) => { const el = $(id); if (el) el.textContent = txt; };
  const bind = (id, fn) => { const el = $(id); if (el) el.addEventListener('click', fn); };

  // --- Top row demos ---
  bind('toggleThemeBtn', () => document.body.classList.toggle('dark'));
  bind('welcomeBtn', () => setText('message', 'Welcome! Happy to have you here 😊'));
  bind('checkDayBtn', () =>
    setText('message', Today is ${new Date().toLocaleDateString(undefined,{weekday:'long'})}));
  bind('genBtn', () => setText('message', Random: ${Math.floor(Math.random()*100)}));
  bind('ghBtn', () => window.open('https://github.com/olatomiwafamutimi','_blank','noopener'));

  // --- Error handling demos ---
  bind('parseBtn', () => {
    try { JSON.parse('{ broken json '); }
    catch (err) { setText('error', Parse error: ${err.message}); }
  });

  bind('validateBtn', () => {
    const v = $('errInput')?.value ?? '';
    const n = Number(v);
    if (Number.isNaN(n)) setText('error', 'Please enter a valid number.');
    else setText('error', Thanks! ${n} is a number.);
  });

  bind('throwBtn', () => {
    try { throw new Error('Custom error raised'); }
    catch (err) { setText('error', err.message); }
  });
});