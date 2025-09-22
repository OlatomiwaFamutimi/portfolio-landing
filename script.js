// Quick proof the file is loading:
console.log("✅ script.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  // Grab elements (ensure IDs match the HTML)
  const toggleBtn    = document.getElementById("toggleBtn");
  const welcomeBtn   = document.getElementById("welcomeBtn");
  const checkDayBtn  = document.getElementById("checkDayBtn");
  const generateBtn  = document.getElementById("generateBtn");
  const dayMsg       = document.getElementById("dayMessage");
  const numbersList  = document.getElementById("numbersList");
  const navLinks     = [...document.querySelectorAll(".nav-link")];

  // 1) Dark mode
  toggleBtn?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  // 2) Welcome popup + message
  welcomeBtn?.addEventListener("click", () => {
    alert("Hello Olatomiwa! Your JavaScript is working 🛠️");
    dayMsg.textContent = "Welcome to my portfolio!";
  });

  // 3) Check day (switch)
  checkDayBtn?.addEventListener("click", () => {
    const names = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const dayName = names[new Date().getDay()];
    let message;
    switch (dayName) {
      case "Saturday":
      case "Sunday":
        message = Today is ${dayName} — weekend 👟; break;
      default:
        message = Today is ${dayName} — keep coding! 💻; break;
    }
    dayMsg.textContent = message; // show on page
    alert(message);               // and popup
  });

  // 4) Generate 1..10 list (for loop)
  generateBtn?.addEventListener("click", () => {
    numbersList.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
      const li = document.createElement("li");
      li.textContent = Number ${i};
      numbersList.appendChild(li);
    }
  });

  // 5) Highlight nav link on scroll (IntersectionObserver)
  const sectionsById = ["about","projects","contact","jsdemos"]
    .map(id => document.getElementById(id))
    .filter(Boolean);

  function setActive(id) {
    navLinks.forEach(a => a.classList.remove("active"));
    const match = navLinks.find(a => a.getAttribute("href") === #${id});
    match?.classList.add("active");
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { root: null, threshold: 0.6 } // when 60% of a section is visible
  );

  sectionsById.forEach(sec => observer.observe(sec));
});