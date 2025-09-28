// ===== Portfolio Demos - Clean script.js =====
document.addEventListener('DOMContentLoaded', () => {
  // ---- Tiny helper ----
  const on = (el, ev, fn) => el && el.addEventListener(ev, fn);

  // ---- Grab elements (by id) ----
  const toggleBtn    = document.getElementById('toggleBtn');
  const welcomeBtn   = document.getElementById('welcomeBtn');
  const checkDayBtn  = document.getElementById('checkDayBtn');
  const generateBtn  = document.getElementById('generateBtn');
  const daySwitchBtn = document.getElementById('daySwitchBtn');

  const revealBtn    = document.getElementById('revealBtn');
  const revealBox    = document.getElementById('revealBox');
  const countBtn     = document.getElementById('countBtn');
  const counterEl    = document.getElementById('counter');

  const calcBtn      = document.getElementById('calcBtn');
  const compareBtn   = document.getElementById('compareBtn');
  const logicalBtn   = document.getElementById('logicalBtn');
  const ternaryBtn   = document.getElementById('ternaryBtn');

  const message      = document.getElementById('message');
  const numbersList  = document.getElementById('numbersList');
  const calcResult   = document.getElementById('calcResult');

  // ================= Core demos =================

  // 1) Dark mode
  on(toggleBtn, 'click', () => {
    document.body.classList.toggle('dark');
  });

  // 2) Welcome message
  on(welcomeBtn, 'click', () => {
    if (message) message.textContent = 'Welcome to my portfolio!';
  });

  // 3) Check day (if/else)
  on(checkDayBtn, 'click', () => {
    const names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const d = new Date().getDay();
    const text = Today is ${names[d]}.;
    if (message) message.textContent = text;
    alert(text);
  });

  // 4) Check day (switch)
  on(daySwitchBtn, 'click', () => {
    const names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const d = new Date().getDay();
    let text;
    switch (d) {
      case 0: text = 'Sunday — weekend 🎉';   break;
      case 6: text = 'Saturday — weekend 🎉'; break;
      default: text = ${names[d]} — keep coding!;
    }
    if (message) message.textContent = text;
  });

  // 5) Generate numbers (toggle on/off)
  on(generateBtn, 'click', () => {
    if (!numbersList) return;
    if (numbersList.children.length > 0) {
      numbersList.innerHTML = '';
      return;
    }
    for (let i = 1; i <= 10; i++) {
      const li = document.createElement('li');
      li.textContent = Number ${i};
      numbersList.appendChild(li);
    }
  });

  // ================= Animation demos =================

  // 6) Reveal box
  on(revealBtn, 'click', () => {
    if (revealBox) revealBox.classList.toggle('show');
  });

  // 7) Animate counter
  on(countBtn, 'click', () => {
    animateNumber(counterEl, 100, 1000); // to 100 in 1s
  });

  function animateNumber(el, target, duration) {
    if (!el) return;
    let current = 0;
    const stepTime = 20;
    const steps = Math.max(1, Math.floor(duration / stepTime));
    const inc = target / steps;

    const t = setInterval(() => {
      current += inc;
      if (current >= target) {
        current = target;
        clearInterval(t);
      }
      el.textContent = String(Math.floor(current));
    }, stepTime);
  }

  // 😎 Scroll reveal
  const toReveal = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window && toReveal.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    toReveal.forEach(el => io.observe(el));
  }

  // ================= Operators demos =================

  // A. Small helper to put a titled list in the green box
  function renderList(title, lines) {
    if (!calcResult) return;
    calcResult.innerHTML = `
      <div class="calc-result show">
        <strong>${title}</strong>
        <ul>${lines.map(li => <li>${li}</li>).join('')}</ul>
      </div>`;
  }

  // B. Calculator (sum + product) with animated values
  on(calcBtn, 'click', () => {
    const a = 12, b = 5;
    const sum = a + b;
    const product = a * b;
    if (!calcResult) return;

    animateCalcLine('Sum', sum, 'is-sum', false);
    setTimeout(() => animateCalcLine('Product', product, 'is-product', true), 900);
  });

  function animateCalcLine(label, value, className, append) {
    if (!calcResult) return;
    if (!append) calcResult.innerHTML = '';

    const line = document.createElement('div');
    line.className = calc-result ${className};
    line.innerHTML = <span class="calc-label">${label}:</span> <span class="calc-value">0</span>;
    calcResult.appendChild(line);

    requestAnimationFrame(() => line.classList.add('show'));

    const valueEl = line.querySelector('.calc-value');
    let current = 0;
    const duration = 900;
    const stepTime = 20;
    const steps = Math.ceil(duration / stepTime);
    const inc = value / steps;

    const timer = setInterval(() => {
      current += inc;
      if (current >= value) {
        current = value;
        clearInterval(timer);
      }
      valueEl.textContent = String(Math.floor(current));
    }, stepTime);
  }

  // C. Comparison
  on(compareBtn, 'click', () => {
    const a = 12, b = 5;
    renderList('Comparison Results', [
      ${a} ==  ${b}  → ${a == b},
      ${a} === ${b} → ${a === b},
      ${a} > ${b}   → ${a > b},
      ${a} <= ${b}  → ${a <= b}
    ]);
  });

  // D. Logical
  on(logicalBtn, 'click', () => {
    const hasID = true;
    const hasTicket = false;
    renderList('Logical Results', [
      hasID && hasTicket → ${hasID && hasTicket},
      hasID || hasTicket → ${hasID || hasTicket},
      !hasTicket         → ${!hasTicket}
    ]);
  });

  // E. Ternary
  on(ternaryBtn, 'click', () => {
    const score = 68;
    const verdict = (score >= 70) ? 'Pass ✅' : 'Fail ❌';
    renderList('Ternary Result', [
      score = ${score},
      score >= 70 ? 'Pass' : 'Fail' → ${verdict}
    ]);
  });
});