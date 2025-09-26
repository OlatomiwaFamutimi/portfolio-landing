// Safe utility
const on = (el, evt, fn) => el && el.addEventListener(evt, fn);

document.addEventListener('DOMContentLoaded', () => {
  // Get elements
  const toggleBtn    = document.getElementById('toggleBtn');
  const welcomeBtn   = document.getElementById('welcomeBtn');
  const checkDayBtn  = document.getElementById('checkDayBtn');
  const generateBtn  = document.getElementById('generateBtn');
  const daySwitchBtn = document.getElementById('daySwitchBtn');
  const revealBtn    = document.getElementById('revealBtn');
  const countBtn     = document.getElementById('countBtn');
  const calcBtn      = document.getElementById('calcBtn');

  const message      = document.getElementById('message');
  const numbersList  = document.getElementById('numbersList');
  const revealBox    = document.getElementById('revealBox');
  const counterEl    = document.getElementById('counter');
  const calcResult   = document.getElementById('calcResult');

  // Dark mode
  on(toggleBtn, 'click', () => document.body.classList.toggle('dark'));

  // Welcome message
  on(welcomeBtn, 'click', () => { if (message) message.textContent = 'Welcome to my portfolio!'; });

  // Check Day (if/else)
  on(checkDayBtn, 'click', () => {
    const names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const d = new Date().getDay();
    if (message) message.textContent = 'Today is ' + names[d] + '.';
    alert('Today is ' + names[d]);
  });

  // Check Day (switch)
  on(daySwitchBtn, 'click', () => {
    const names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const d = new Date().getDay();
    let text;
    switch (d) {
      case 0: text = 'Sunday — weekend 🎉'; break;
      case 6: text = 'Saturday — weekend 🎉'; break;
      default: text = names[d] + ' — keep coding!'; break;
    }
    if (message) message.textContent = text;
    alert('Today is ' + names[d]);
  });

  // Generate Numbers (toggle list)
  on(generateBtn, 'click', () => {
    if (!numbersList) return;
    if (numbersList.children.length > 0) { numbersList.innerHTML = ''; return; }
    for (let i = 1; i <= 10; i++) {
      const li = document.createElement('li');
      li.textContent = 'Number ' + i;
      numbersList.appendChild(li);
    }
  });

  // Reveal box
  on(revealBtn, 'click', () => { if (revealBox) revealBox.classList.toggle('show'); });

  // Animate counter 0 → 100
  on(countBtn, 'click', () => {
    if (!counterEl) return;
    let n = 0;
    counterEl.textContent = '0';
    const t = setInterval(() => {
      n++;
      counterEl.textContent = String(n);
      if (n >= 100) clearInterval(t);
    }, 20);
  });

  // --- Operator Demo: animated, styled output ---
  on(calcBtn, 'click', () => {
    const a = 12, b = 5;
    const sum = a + b;
    const product = a * b;
    if (!calcResult) return;
    animateCalcLine('Sum', sum, 'is-sum', false);
    setTimeout(() => animateCalcLine('Product', product, 'is-product', true), 1000);
  });

  function animateCalcLine(label, value, className, append) {
    if (!calcResult) return;
    if (!append) calcResult.innerHTML = '';
    const line = document.createElement('div');
    line.className = 'calc-result ' + className;
    line.innerHTML = '<span class="calc-label">' + label + ':</span> <span class="calc-value">0</span>';
    calcResult.appendChild(line);
    requestAnimationFrame(() => line.classList.add('show'));
    const valueEl = line.querySelector('.calc-value');
    let current = 0;
    const duration = 900, stepTime = 20;
    const steps = Math.ceil(duration / stepTime);
    const inc = value / steps;
    const timer = setInterval(() => {
      current += inc;
      if (current >= value) { current = value; clearInterval(timer); }
      valueEl.textContent = String(Math.floor(current));
    }, stepTime);
  }

  // Scroll reveal (optional, if you added the section)
  const revealEls = document.querySelectorAll('.reveal-on-scroll');
  if (revealEls.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting));
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  }
});