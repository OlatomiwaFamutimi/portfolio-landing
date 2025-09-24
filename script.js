document.addEventListener('DOMContentLoaded', () => {
    const $ = (id) => document.getElementById(id);

    const toggleBtn     = $('toggleBtn');
    const welcomeBtn    = $('welcomeBtn');
    const checkDayBtn   = $('checkDayBtn');
    const generateBtn   = $('generateBtn');
    const daySwitchBtn  = $('daySwitchBtn');
    const message       = $('message');
    const numbersList   = $('numbersList');

    // Toggle dark mode
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });

    // Welcome message
    welcomeBtn.addEventListener('click', () => {
        message.textContent = 'Welcome to my portfolio!';
    });

    // Check Day
    checkDayBtn.addEventListener('click', () => {
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        const today = new Date().getDay();
        const text = Today is ${days[today]};
        message.textContent = text;
        alert(text);
    });

    // Generate random numbers
    generateBtn.addEventListener('click', () => {
        numbersList.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            const num = Math.floor(Math.random() * 100) + 1; // random 1–100
            const li = document.createElement('li');
            li.textContent = num;
            numbersList.appendChild(li);
        }
    });

    // Day Switch
    daySwitchBtn.addEventListener('click', () => {
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        const randomDay = days[Math.floor(Math.random() * days.length)];
        const text = Randomly picked day: ${randomDay};
        message.textContent = text;
        alert(text);
    });
});

