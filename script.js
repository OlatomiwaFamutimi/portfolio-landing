document.addEventListener("DOMContentLoaded", function () {
  console.log("JS loaded successfully!");

  const message = document.getElementById("message");
  const genBtn = document.getElementById("genBtn");
  const themeBtn = document.getElementById("themeBtn");
  const welcomeBtn = document.getElementById("welcomeBtn");
  const githubBtn = document.getElementById("githubBtn");
  const dayBtn = document.getElementById("dayBtn");

  // Generate random number
  if (genBtn) {
    genBtn.addEventListener("click", function () {
      const num = Math.floor(Math.random() * 100);
      message.textContent = Random number: ${num};
    });
  }

  // Toggle theme
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      message.textContent = "Theme toggled!";
    });
  }

  // Show welcome message
  if (welcomeBtn) {
    welcomeBtn.addEventListener("click", function () {
      message.textContent = "Welcome to my portfolio!";
    });
  }

  // Go to GitHub
  if (githubBtn) {
    githubBtn.addEventListener("click", function () {
      window.open("https://github.com/olatomiwafamutimi", "_blank");
    });
  }

  // Check the current day
  if (dayBtn) {
    dayBtn.addEventListener("click", function () {
      const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
      message.textContent = Today is ${today}.;
    });
  }
});