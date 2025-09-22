// script.js
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn   = document.getElementById("toggleBtn");
  const welcomeBtn  = document.getElementById("welcomeBtn");
  const checkDayBtn = document.getElementById("checkDayBtn");
  const generateBtn = document.getElementById("generateBtn");

  const dayMsg     = document.getElementById("dayMessage");
  const numberList = document.getElementById("numberList");

  // 1) Toggle Dark Mode
  toggleBtn?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  // 2) Show Welcome Message
  welcomeBtn?.addEventListener("click", () => {
    const msg = "Hello Olatomiwa! Your JavaScript is working 🚀";
    dayMsg.textContent = msg;
    alert(msg);
  });

  // 3) Check Day (switch statement)
  checkDayBtn?.addEventListener("click", () => {
    const dayNum  = new Date().getDay(); // 0 (Sun) - 6 (Sat)
    const names   = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const dayName = names[dayNum];

    let message;
    switch (dayName) {
      case "Saturday":
      case "Sunday":
        message = ${dayName} — weekend 🎉;
        break;
      default:
        message = ${dayName} — keep coding! 💪;
    }

    dayMsg.textContent = message;
    alert(Today is ${dayName});
  });

  // 4) Generate Numbers (loop practice)
  generateBtn?.addEventListener("click", () => {
    numberList.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
      const li = document.createElement("li");
      li.textContent = Number ${i};
      numberList.appendChild(li);
    }
  });
});

