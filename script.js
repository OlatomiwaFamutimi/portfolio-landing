// script.js
document.addEventListener('DOMContentLoaded', () => {
  const $  = id => document.getElementById(id);
  const on = (el, ev, fn) => el && el.addEventListener(ev, fn);

  const toggleBtn    = $('toggleBtn');
  const welcomeBtn   = $('welcomeBtn');
  const checkDayBtn  = $('checkDayBtn');
  const generateBtn  = $('generateBtn');
  const daySwitchBtn = $('daySwitchBtn');
  const message      = $('message');
  const numbersList  = $('numbersList');

  // Dark mode
  on(toggleBtn, 'click', () => document.body.classList.toggle('dark'));

  // Welcome message
  on(welcomeBtn, 'click', () => {
    if (message) message.textContent = 'Welcome to my portfolio!';
  });

  // Check Day (if/else)
  on(checkDayBtn, 'click', () => {
    const d = new Date().getDay(); // 0..6
    const names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    if (message) message.textContent = Today is ${names[d]}.;
    alert(Today is ${names[d]});
  });

  // Check Day (switch)
  on(daySwitchBtn, 'click', () => {
    const d = new Date().getDay();
    const names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let text;
    switch (d) {
      case 0: text = 'Sunday — weekend 🎉'; break;
      case 6: text = 'Saturday — weekend 🎉'; break;
      default: text = ${names[d]} — keep coding!; break;
    }
    if (message) message.textContent = text;
    alert(Today is ${names[d]});
  });

  // Generate Numbers (toggle)
  on(generateBtn, 'click', () => {
    if (!numbersList) return;
    // If list already shown, clear it (toggle off)
    if (numbersList.childElementCount > 0) {
      numbersList.innerHTML = '';
      if (message) message.textContent = '(Cleared numbers)';
      return;
    }
    // Otherwise generate 1..10
    const frag = document.createDocumentFragment();
    for (let i = 1; i <= 10; i++) {
      const li = document.createElement('li');
      li.textContent = Number ${i};
      frag.appendChild(li);
    }
    numbersList.appendChild(frag);
    if (message) message.textContent = 'Generated 1–10 ✅ (click again to clear)';
  });

  // Nav underline “active” on scroll
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = ['about','projects','contact','demos']
    .map(id => document.getElementById(id))
    .filter(Boolean);

  function updateActive() {
    let active = 'about';
    sections.forEach(sec => {
      const r = sec.getBoundingClientRect();
      if (r.top <= 120 && r.bottom >= 120) active = sec.id;
    });
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === #${active}));
  }
  window.addEventListener('scroll', updateActive);
  updateActive();
});
