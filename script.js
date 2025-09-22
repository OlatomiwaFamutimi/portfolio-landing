
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
});// Button to generate numbers dynamically
const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

generateBtn.addEventListener("click", () => {
  numberList.innerHTML = ""; // clear old numbers before generating new ones

  for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    li.textContent = "Number " + i;
    numberList.appendChild(li);
  }
});document.getElementById("dayBtn").addEventListener("click", () => {
  const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
  let message = "";

  switch (today) {
    case 0:
      message = "It's Sunday! Time to rest 😴";
      break;
    case 1:
      message = "Happy Monday! Let’s start the week 💪";
      break;
    case 3:
      message = "It’s Wednesday! Midweek checkpoint 📝";
      break;
    case 5:
      message = "Friday is here 🎉 Weekend loading...";
      break;
    default:
      message = "Just another day, keep coding 🚀";
  }

  document.getElementById("dayMessage").textContent = message;
});