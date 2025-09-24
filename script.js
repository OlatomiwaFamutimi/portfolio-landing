document.addEventListener('DOMContentLoaded', function () {
  // Grab elements
  var toggleBtn   = document.getElementById('toggleBtn');
  var welcomeBtn  = document.getElementById('welcomeBtn');
  var checkDayBtn = document.getElementById('checkDayBtn');
  var generateBtn = document.getElementById('generateBtn');
  var message     = document.getElementById('message');
  var numbersList = document.getElementById('numbersList');

  // Safety check: if anything is missing, stop
  if (!toggleBtn || !welcomeBtn || !checkDayBtn || !generateBtn || !message || !numbersList) {
    console.log('One or more elements not found.');
    return;
  }

  // Toggle dark mode
  toggleBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark');
  });

  // Show welcome message
  welcomeBtn.addEventListener('click', function () {
    message.textContent = 'Welcome to my portfolio!';
  });

  // Check current day (switch-style)
  checkDayBtn.addEventListener('click', function () {
    var names   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var dayName = names[(new Date()).getDay()];
    message.textContent = 'Today is ' + dayName;
    alert('Today is ' + dayName);
  });

  // Generate numbers 1–10
  generateBtn.addEventListener('click', function () {
    numbersList.innerHTML = '';
    for (var i = 1; i <= 10; i++) {
      var li = document.createElement('li');
      li.textContent = 'Number ' + i;
      numbersList.appendChild(li);
    }
  });
});
// Switch statement demo
daySwitchBtn.addEventListener("click", () => {
  const dayNumber = prompt("Enter a number (1-7):");
  let dayName;

  switch (parseInt(dayNumber)) {
    case 1:
      dayName = "Sunday";
      break;
    case 2:
      dayName = "Monday";
      break;
    case 3:
      dayName = "Tuesday";
      break;
    case 4:
      dayName = "Wednesday";
      break;
    case 5:
      dayName = "Thursday";
      break;
    case 6:
      dayName = "Friday";
      break;
    case 7:
      dayName = "Saturday";
      break;
    default:
      dayName = "Invalid number! Please enter 1–7.";
  }

  message.textContent = Result: ${dayName};
});

