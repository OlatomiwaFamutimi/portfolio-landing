// Prove the file is loaded
console.log("✅ script.js loaded");

// Run after the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Small helper
  const $ = (id) => document.getElementById(id);

  // Grab elements (may be null; we guard with ?. below)
  const toggleBtn   = $("toggleBtn");
  const welcomeBtn  = $("welcomeBtn");
  const checkDayBtn = $("checkDayBtn");
  const generateBtn = $("generateBtn");
  const dayMsg      = $("dayMessage");
  const numbersList = $("numbersList");

  // 1) Toggle dark mode
  toggleBtn?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  // 2) Show welcome popup
  welcomeBtn?.addEventListener("click", () => {
    alert("Hello Olatomiwa! 🎉 Your JavaScript is working.");
  });

  // 3) Check Day (switch)
  checkDayBtn?.addEventListener("click", () => {
    const names = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const dayName = names[new Date().getDay()];
    const message = (dayName === "Saturday" || dayName === "Sunday")
      ? ${dayName} – weekend 🥳
      : ${dayName} – keep coding! 💪;

    if (dayMsg) dayMsg.textContent = Today is ${dayName};
    alert(Today is ${dayName});
    console.log(message);
  });

  // 4) Generate numbers (loop practice)
  generateBtn?.addEventListener("click", () => {
    if (!numbersList) return;
    numbersList.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
      const li = document.createElement("li");
      li.textContent = Number ${i};
      numbersList.appendChild(li);
    }
  });

  // 5) Nav active underline on scroll (scroll spy)
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a[href^='#']");
  const setActive = (id) => {
    navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === #${id}));
  };
  const io = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
    { root: null, threshold: 0.6 }
  );
  sections.forEach(s => io.observe(s));
});