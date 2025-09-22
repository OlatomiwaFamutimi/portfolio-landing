document.addEventListener('DOMContentLoaded', () => {
  // ===== Nav active underline on scroll =====
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const idByHref = Object.fromEntries(
    navLinks.map(a => [a.getAttribute('href').slice(1), a])
  );
  const sections = [...document.querySelectorAll('section')];

  const setActive = (id) => {
    navLinks.forEach(a => a.classList.remove('active'));
    if (idByHref[id]) idByHref[id].classList.add('active');
  };

  // Observe which section is on screen
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { root: null, threshold: 0.6 }); // 60% visible

  sections.forEach(sec => observer.observe(sec));

  // ===== Demo buttons =====
  const toggleBtn    = document.getElementById('toggleBtn');
  const welcomeBtn   = document.getElementById('welcomeBtn');
  const checkDayBtn  = document.getElementById('checkDayBtn');
  const generateBtn  = document.getElementById('generateBtn');
  const dayMsg       = document.getElementById('dayMessage');
  const numberList   = document.getElementById('numberList');

  // Dark mode
  toggleBtn?.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

  // Welcome popup
  welcomeBtn?.addEventListener('click', () => {
    alert("Hello Olatomiwa! Your JavaScript is working 🎯");
  });

  // Check day (switch demo)
  checkDayBtn?.addEventListener('click', () => {
    const names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const dayName = names[new Date().getDay()];
    let message;
    switch (dayName) {
      case 'Saturday':
      case 'Sunday':
        message = Today is ${dayName} — weekend 🕶️; break;
      default:
        message = Today is ${dayName} — keep coding! 💪;
    }
    dayMsg.textContent = message;     // show on page
    alert(message);                    // and popup
  });

  // Generate numbers 1..10 (for loop)
  generateBtn?.addEventListener('click', () => {
    numberList.innerHTML = '';               // clear previous
    for (let i = 1; i <= 10; i++) {
      const li = document.createElement('li');
      li.textContent = Number ${i};
      numberList.appendChild(li);
    }
  });
});

