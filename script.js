// Day 3 JavaScript practice 🚀

// Log a message in the browser console
console.log("Hello, Olatomiwa! 🎉 You’ve started JavaScript!");

// Example: Show an alert when the page loads
alert("Welcome to my portfolio site!");

// Example: Simple function
function greet() {
    console.log("Thanks for visiting my portfolio!");
}console.log("JavaScript is working!");
alert("Welcome to my portfolio!");// Test script to confirm JavaScript is linked
alert("Hello Olatomiwa! Your JavaScript file is working 🎉");
console.log("JavaScript is connected and running!");// Get the button by its ID
const button = document.getElementById("colorBtn");

// Add a click event listener
button.addEventListener("click", () => {
  // Generate a random color
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

  // Apply the color as the background
  document.body.style.backgroundColor = randomColor;
});const toggleBtn = document.getElementById("toggleModeBtn");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});const welcomeBtn = document.getElementById("welcomeBtn");
const welcomeMsg = document.getElementById("welcomeMsg");

welcomeBtn.addEventListener("click", () => {
  welcomeMsg.textContent = "🎉 Welcome to Olatomiwa’s Portfolio!";
});
