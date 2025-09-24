document.addEventListener('DOMContentLoaded', function () {
  const $ = (id) => document.getElementById(id);
  const on = (el, evt, fn) => el && el.addEventListener(evt, fn);

  const toggleBtn   = $('toggleBtn');
  const welcomeBtn  = $('welcomeBtn');
  const checkDayBtn = $('checkDayBtn');
  const generateBtn = $('generateBtn');
  const daySwitchBtn= $('daySwitchBtn');
  const message     = $('message');
  const numbersList = $('numbersList');

  // Toggle Dark Mode
  on(toggleBtn, 'click', function () {
    document.body.classList.toggle('dark');
  });

  // Welcome Message
  on(welcomeBtn, 'click', function () {
    if (message) message.textContent = 'Welcome to my portfolio!';
  });

  // Check Day (if/else)
  on(checkDayBtn, 'click', function () {
    const names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const d = (new Date()).getDay();
    const txt = 'Today is ' + names[d] + '.';
    if (message) message.textContent = txt;
    alert(txt);
  });

  // Check Day (switch)
  on(daySwitchBtn, 'click', function () {
    const names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const d = (new Date()).getDay();
    let txt;
    switch (d) {
      case 0: txt = 'Sunday - weekend!'; break;
      case 6: txt = 'Saturday - weekend!'; break;
      default: txt = names[d] + ' - keep coding!'; break;
    }
    if (message) message.textContent = txt;
    alert('Today is ' + names[d]);
  });

  // Generate Numbers (toggle)
  on(generateBtn, 'click', function () {
    if (!numbersList) return;
    if (numbersList.children.length) {   // toggle: clear if already filled
      numbersList.innerHTML = '';
      return;
    }
    for (let i = 1; i <= 10; i++) {
      const li = document.createElement('li');
      li.textContent = 'Number ' + i;
      numbersList.appendChild(li);
    }
  });
});