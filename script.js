// ---- My Portfolio JS (stable) ----
'use strict';
console.log('script.js loaded');

const $ = (id) => document.getElementById(id);
const on = (el, evt, fn) => el && el.addEventListener(evt, fn);

// Elements
const toggleBtn   = $('toggleBtn');
const welcomeBtn  = $('welcomeBtn');
const checkDayBtn = $('checkDayBtn');
const generateBtn = $('generateBtn');
const daySwitchBtn= $('daySwitchBtn');
const revealBtn   = $('revealBtn');
const countBtn    = $('countBtn');
const calcBtn     = $('calcBtn');

const message     = $('message');
const numbersList = $('numbersList');
const revealBox   = $('revealBox');
const counter     = $('counter');
const calcResult  = $('calcResult');

// Dark mode
on(toggleBtn, 'click', () => document.body.classList.toggle('dark'));

// Welcome message
on(welcomeBtn, 'click', () => { if (message) message.textContent = 'Welcome to my portfolio!'; });

// Check Day (if/else)
on(checkDayBtn, 'click', () => {
  const names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const d = new Date().getDay();
  if (message) message.textContent = 'Today is ' + names[d] + '.';
  alert('Today is ' + names[d]);
});

// Check Day (switch)
on(daySwitchBtn, 'click', () => {
  const names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const d = new Date().getDay();
  let text;
  switch (d) {
    case 0: text = 'Sunday — weekend 🎉'; break;
    case 6: text = 'Saturday — weekend 🎉'; break;
    default: text = names[d] + ' — keep coding!'; break;
  }
  if (message) message.textContent = text;
  alert('Today is ' + names[d]);
});

// Generate Numbers (toggle)
on(generateBtn, 'click', () => {
  if (!numbersList) return;
  if (numbersList.children.length > 0) { numbersList.innerHTML = ''; return; }
  const frag = document.createDocumentFragment();
  for (let i = 1; i <= 10; i++) {
    const li = document.createElement('li');
    li.textContent = 'Number ' + i;
    frag.appendChild(li);
  }
  numbersList.appendChild(frag);
});

// Reveal box
on(revealBtn, 'click', () => { if (revealBox) revealBox.classList.toggle('show'); });

// Counter
on(countBtn, 'click', () => {
  if (!counter) return;
  let start = 0, end = 100;
  const duration = 1000, stepTime = 20, step = end / (duration / stepTime);
  const t = setInterval(() => {
    start += step;
    if (start >= end) { start = end; clearInterval(t); }
    counter.textContent = String(Math.floor(start));
  }, stepTime);
});

// Calculator (operators + animation)
const animateNumber = (el, value, label) => {
  let start = 0;
  const duration = 1000, stepTime = 20, inc = value / (duration / stepTime);
  const t = setInterval(() => {
    start += inc;
    if (start >= value) { start = value; clearInterval(t); }
    el.textContent = label + ': ' + Math.floor(start);
  }, stepTime);
};

on(calcBtn, 'click', () => {
  const a = 12, b = 5;
  const sum = a + b;
  const product = a * b;
  if (!calcResult) return;
  calcResult.innerHTML = '';                      // clear
  const sumEl = document.createElement('div');
  const prodEl = document.createElement('div');
  calcResult.appendChild(sumEl);
  calcResult.appendChild(prodEl);
  animateNumber(sumEl,  sum,     'Sum');
  setTimeout(() => animateNumber(prodEl, product, 'Product'), 1200);
});

// Scroll reveal (keeps working even if JS runs later)
const ro = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal-on-scroll').forEach(el => ro.observe(el));