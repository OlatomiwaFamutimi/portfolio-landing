// Quick proof the file is loading:
console.log('✅ script.js loaded');

document.addEventListener('DOMContentLoaded', () => {
  // Grab elements
  const toggleBtn   = document.getElementById('toggleBtn');
  const welcomeBtn  = document.getElementById('welcomeBtn');
  const checkDayBtn = document.getElementById('checkDayBtn');
  const generateBtn = document.getElementById('generateBtn');
  const dayMsg      = document.getElementById('dayMessage');
  const numbersList = document.getElementById('numbersList');

  // Guard logs (helpful if something doesn't click)
  [
    ['toggleBtn', toggleBtn],
    ['welcomeBtn', welcomeBtn],
    ['checkDayBtn', checkDayBtn],
    ['generateBtn', generateBtn],
    ['dayMessage', dayMsg],
    ['numbersList', numbersList],
  ].forEach(([name, el]) => { if (!el) console.warn(⚠️ Missing element: ${name}); });

  // 1) Dark mode
  toggleBtn?.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

  // 2) Welcome popup + inline message
  welcomeBtn?.addEventListener('click', () => {
    alert('Hello Olatomiwa, your JavaScript is working 💪');
    if (dayMsg) dayMsg.textContent = 'Welcome to my portfolio!';
  });

  // 3) Check day (switch)
  checkDayBtn?.addEventListener('click', () => {
    const names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const dayName = names[new Date().getDay()];
    const message = (dayName === 'Saturday' || dayName === 'Sunday')
      ? Today is ${dayName} — weekend 🎉
      : Today is ${dayName} — keep coding! 👨‍💻;
    if (dayMsg) dayMsg.textContent = message;
    alert(message);
  });

  // 4) Generate numbers (loop practice)
  generateBtn?.addEventListener('click', () => {
    if (!numbersList) return;
    numbersList.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
      const li = document.createElement('li');
      li.textContent = Number ${i};
      numbersList.appendChild(li);
    }
  });

  // 5) Active nav link on scroll (no special class required)
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const id = #${e.target.id};
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id));
      }
    });
  }, { threshold: 0.6 });

  sections.forEach(sec => observer.observe(sec));
});