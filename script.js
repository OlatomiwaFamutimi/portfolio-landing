// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const on = (el, evt, fn) => el && el.addEventListener(evt, fn);

  // Grab elements
  const toggleBtn   = document.getElementById("toggleBtn");
  const welcomeBtn  = document.getElementById("welcomeBtn");
  const checkDayBtn = document.getElementById("checkDayBtn");
  const generateBtn = document.getElementById("generateBtn");
  const message     = document.getElementById("message");
  const numbersList = document.getElementById("numbersList");

  // Toggle dark mode
  on(toggleBtn, "click", () => {
    document.body.classList.toggle("dark");
  });

  // Welcome message
  on(welcomeBtn, "click", () => {
    if (message) message.textContent = "Welcome to my portfolio!";
  });

  // Check day
  on(checkDayBtn, "click", () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = new Date().getDay();
    const text = "Today is " + days[day];
    if (message) message.textContent = text;
    alert(text);
  });

  // Generate numbers
  on(generateBtn, "click", () => {
    if (!numbersList) return;
    numbersList.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
      const li = document.createElement("li");
      li.textContent = "Number " + i;
      numbersList.appendChild(li);
    }
  });
});