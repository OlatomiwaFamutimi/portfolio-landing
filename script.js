// Quick proof the file loads
console.log("✅ script.js is loading...");

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOM fully loaded");

  // Grab elements
  const toggleBtn = document.getElementById("toggleBtn");
  const welcomeBtn = document.getElementById("welcomeBtn");
  const checkDayBtn = document.getElementById("checkDayBtn");
  const generateBtn = document.getElementById("generateBtn");
  const message = document.getElementById("message");
  const numbersList = document.getElementById("numbersList");

  console.log({ toggleBtn, welcomeBtn, checkDayBtn, generateBtn, message, numbersList });

  // Dark mode
  toggleBtn.addEventListener("click", () => {
    console.log("🌙 Dark mode toggled");
    document.body.classList.toggle("dark");
  });

  // Welcome message
  welcomeBtn.addEventListener("click", () => {
    console.log("👋 Welcome clicked");
    message.textContent = "Welcome to my portfolio!";
  });

  // Check day
  checkDayBtn.addEventListener("click", () => {
    console.log("📅 Check day clicked");
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const today = new Date().getDay();
    message.textContent = Today is ${days[today]};
  });

  // Generate numbers
  generateBtn.addEventListener("click", () => {
    console.log("🔢 Generate numbers clicked");
    numbersList.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
      const li = document.createElement("li");
      li.textContent = i;
      numbersList.appendChild(li);
    }
  });
});
