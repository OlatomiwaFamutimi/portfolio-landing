
// Console check
console.log("JavaScript is linked and running!");

// Show a welcome alert when the page loads
window.onload = () => {
  alert("Welcome to my portfolio site!");
};

// Toggle Dark Mode
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode"); 
});

// Show Welcome Message
const welcomeBtn = document.getElementById("welcomeBtn");
welcomeBtn.addEventListener("click", () => {
  alert("Hello Olatomiwa! Thanks for visiting my portfolio 🚀");
});