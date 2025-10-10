// Minimal smoke-test to verify JS loads and buttons wire up
document.addEventListener('DOMContentLoaded', function () {
  console.log('JS loaded');

  function $(id){ return document.getElementById(id); }
  function setText(id, txt){ const el=$(id); if(el) el.textContent=txt; }

  const parseBtn = $('parseBtn');
  const validateBtn = $('validateBtn');
  const throwBtn = $('throwBtn');
  const calcBtn = $('calcBtn');
  const errInput = $('errInput');

  if (parseBtn) parseBtn.addEventListener('click', function () {
    try { JSON.parse(errInput ? errInput.value : ''); setText('error','Parsed OK'); }
    catch(e){ setText('error','Parse error: ' + e.message); }
  });

  if (validateBtn) validateBtn.addEventListener('click', function () {
    const n = Number(errInput ? errInput.value : '');
    setText('error', Number.isNaN(n) ? 'Not a number' : 'Valid number: ' + n);
  });

  if (throwBtn) throwBtn.addEventListener('click', function () {
    try { throw new Error('Custom error'); }
    catch(e){ setText('error', e.message); }
  });

  if (calcBtn) calcBtn.addEventListener('click', function () {
    const n = Number(errInput ? errInput.value : '');
    setText('calcResult', Number.isNaN(n) ? 'Enter a number first' : 'Result: ' + (n + 10));
  });

  // Optional extra demo buttons if you have them:
  const themeBtn = $('themeBtn');
  const welcomeBtn = $('welcomeBtn');
  const dayBtn = $('dayBtn');
  const genBtn = $('genBtn');
  const githubBtn = $('githubBtn');

  if (themeBtn) themeBtn.addEventListener('click', function(){
    document.body.classList.toggle('dark');
  });
  if (welcomeBtn) welcomeBtn.addEventListener('click', function(){
    setText('messageBox','Welcome - happy coding!');
  });
  if (dayBtn) dayBtn.addEventListener('click', function(){
    setText('messageBox', 'Today is ' + new Date().toLocaleDateString(undefined,{weekday:'long'}));
  });
  if (genBtn) genBtn.addEventListener('click', function(){
    setText('messageBox', 'Generated: ' + Array.from({length:5},()=>Math.floor(Math.random()*100)).join(', '));
  });
  if (githubBtn) githubBtn.addEventListener('click', function(){
    window.open('https://github.com/olatomiwafamutimi','_blank','noopener');
  });
});