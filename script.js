document.addEventListener('DOMContentLoaded', () => {
  const $ = (id) => document.getElementById(id);
  const on = (el, evt, fn) => el && el.addEventListener(evt, fn);

  const toggleBtn    = $('toggleBtn');
  const welcomeBtn   = $('welcomeBtn');
  const checkDayBtn  = $('checkDayBtn');
  const generateBtn  = $('generateBtn');
  const daySwitchBtn = $('daySwitchBtn');
  const message      = $('message');
  const numbersList  = $('numbersList');

  // Toggle dark mode
  on(toggleBtn, 'click', () => {
    document.body.classList.toggle('dark');
  });

  // Welcome message
  on(welcomeBtn, 'click', () => {
    if (message) message.textContent = 'Welcome to my portfolio!';
  });

  // Check day (array)
  on(checkDayBtn, 'click', () => {
    const names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const d = new Date().getDay();
    const text = Today is ${names[d]};
    if (message) message.textContent = text;
    alert(text);
  });

  // Generate numbers 1–10
  on(generateBtn, 'click', () => {
    if (!numbersList) return;
    numbersList.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
      const li = document.createElement('li');
      li.textContent = Number ${i};
      numbersList.appendChild(li);
    }
  });

  // Check day (switch)
  on(daySwitchBtn, 'click', () => {
    const d = new Date().getDay();
    let label;
    switch (d) {
      case 0: label = 'Sunday'; break;
      case 6: label = 'Saturday'; break;
      default: label = 'Weekday'; break;
    }
    if (message) message.textContent = Switch says: ${label};
    alert(Switch says: ${label});
  });
});

