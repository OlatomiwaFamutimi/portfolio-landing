
You sent
// Utility function
const on = (el, evt, fn) => el && el.addEventListener(evt, fn);

// Get elements
const toggleBtn = document.getElementById('toggleBtn');
const welcomeBtn = document.getElementById('welcomeBtn');
const checkDayBtn = document.getElementById('checkDayBtn');
const generateBtn = document.getElementById('generateBtn');
const daySwitchBtn = document.getElementById('daySwitchBtn');
const message = document.getElementById('message');
const numbersList = document.getElementById('numbersList');

// Toggle Dark Mode
on(toggleBtn, 'click', () => {
  document.body.classList.toggle('dark');
});

// Welcome Message
on(welcomeBtn, 'click', () => {
  if (message) message.textContent = "Welcome to my portfolio!";
});

// Check Day (if/else)
on(checkDayBtn, 'click', () => {
  const names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const d = new Date().getDay();
  if (message) message.textContent = "Today is " + names[d] + ".";
  alert("Today is " + names[d]);
});

// Check Day (switch)
on(daySwitchBtn, 'click', () => {
  const names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const d = new Date().getDay();
  let text;
  switch (d) {
    case 0: text = "Sunday — weekend 🎉"; break;
    case 6: text = "Saturday — weekend 🎉"; break;
    default: text = names[d] + " — keep coding!"; break;
  }
  if (message) message.textContent = text;
  alert("Today is " + names[d]);
});

// Generate Numbers (toggle)
on(generateBtn, 'click', () => {
  if (!numbersList) return;
  // If list already has items, clear it (toggle behavior)
  if (numbersList.children.length > 0) {
    numbersList.innerHTML = "";
    return;
  }
  for (let i = 1; i <= 10; i++) {
    const li = document.createElement('li');
    li.textContent = "Number " + i;
    numbersList.appendChild(li);
  }
});