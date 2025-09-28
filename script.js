// ===== script.js (no backticks anywhere) =====
document.addEventListener('DOMContentLoaded', function () {
  // helper
  function on(el, ev, fn){ if(el) el.addEventListener(ev, fn); }

  // elements
  var toggleBtn    = document.getElementById('toggleBtn');
  var welcomeBtn   = document.getElementById('welcomeBtn');
  var checkDayBtn  = document.getElementById('checkDayBtn');
  var generateBtn  = document.getElementById('generateBtn');
  var daySwitchBtn = document.getElementById('daySwitchBtn');

  var revealBtn    = document.getElementById('revealBtn');
  var revealBox    = document.getElementById('revealBox');
  var countBtn     = document.getElementById('countBtn');
  var counterEl    = document.getElementById('counter');

  var calcBtn      = document.getElementById('calcBtn');
  var compareBtn   = document.getElementById('compareBtn');
  var logicalBtn   = document.getElementById('logicalBtn');
  var ternaryBtn   = document.getElementById('ternaryBtn');

  var message      = document.getElementById('message');
  var numbersList  = document.getElementById('numbersList');
  var calcResult   = document.getElementById('calcResult');

  // ===== Core demos =====
  on(toggleBtn, 'click', function(){ document.body.classList.toggle('dark'); });

  on(welcomeBtn, 'click', function(){
    if (message) message.textContent = 'Welcome to my portfolio!';
  });

  on(checkDayBtn, 'click', function(){
    var names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var d = new Date().getDay();
    var text = 'Today is ' + names[d] + '.';
    if (message) message.textContent = text;
    alert(text);
  });

  on(daySwitchBtn, 'click', function(){
    var names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var d = new Date().getDay();
    var text = (d===0) ? 'Sunday — weekend 🎉'
             : (d===6) ? 'Saturday — weekend 🎉'
             : names[d] + ' — keep coding!';
    if (message) message.textContent = text;
  });

  on(generateBtn, 'click', function(){
    if (!numbersList) return;
    if (numbersList.children.length > 0) { numbersList.innerHTML = ''; return; }
    for (var i=1;i<=10;i++){
      var li = document.createElement('li');
      li.textContent = 'Number ' + i;
      numbersList.appendChild(li);
    }
  });

  // ===== Animations =====
  on(revealBtn, 'click', function(){ if (revealBox) revealBox.classList.toggle('show'); });

  on(countBtn, 'click', function(){ animateNumber(counterEl, 100, 1000); });

  function animateNumber(el, target, duration){
    if (!el) return;
    var current = 0, stepTime = 20;
    var steps = Math.max(1, Math.floor(duration/stepTime));
    var inc = target / steps;
    var t = setInterval(function(){
      current += inc;
      if (current >= target){ current = target; clearInterval(t); }
      el.textContent = String(Math.floor(current));
    }, stepTime);
  }

  // scroll reveal (kept minimal)
  var toReveal = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window && toReveal.length){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, {threshold:0.15});
    toReveal.forEach(function(el){ io.observe(el); });
  }

  // ===== Operators =====
  function renderList(title, lines){
    if (!calcResult) return;
    var html = '<div class="calc-result show"><strong>' + title + '</strong><ul>';
    for (var i=0;i<lines.length;i++){ html += '<li>' + lines[i] + '</li>'; }
    html += '</ul></div>';
    calcResult.innerHTML = html;
  }

  on(calcBtn, 'click', function(){
    var a = 12, b = 5;
    var sum = a + b, product = a * b;
    if (!calcResult) return;
    animateCalcLine('Sum', sum, 'is-sum', false);
    setTimeout(function(){ animateCalcLine('Product', product, 'is-product', true); }, 900);
  });

  function animateCalcLine(label, value, className, append){
    if (!calcResult) return;
    if (!append) calcResult.innerHTML = '';
    var line = document.createElement('div');
    line.className = 'calc-result ' + className;
    line.innerHTML = '<span class="calc-label">' + label + ':</span> <span class="calc-value">0</span>';
    calcResult.appendChild(line);
    requestAnimationFrame(function(){ line.classList.add('show'); });

    var valueEl = line.querySelector('.calc-value');
    var current = 0, duration = 900, stepTime = 20;
    var steps = Math.ceil(duration/stepTime), inc = value/steps;
    var timer = setInterval(function(){
      current += inc;
      if (current >= value){ current = value; clearInterval(timer); }
      valueEl.textContent = String(Math.floor(current));
    }, stepTime);
  }

  on(compareBtn, 'click', function(){
    var a = 12, b = 5;
    renderList('Comparison Results', [
      a + ' == '  + b + '  → ' + (a == b),
      a + ' === ' + b + ' → ' + (a === b),
      a + ' > '   + b + '   → ' + (a > b),
      a + ' <= '  + b + '  → ' + (a <= b)
    ]);
  });

  on(logicalBtn, 'click', function(){
    var hasID = true, hasTicket = false;
    renderList('Logical Results', [
      'hasID && hasTicket → ' + (hasID && hasTicket),
      'hasID || hasTicket → ' + (hasID || hasTicket),
      '!hasTicket         → ' + (!hasTicket)
    ]);
  });

  on(ternaryBtn, 'click', function(){
    var score = 68;
    var verdict = (score >= 70) ? 'Pass ✅' : 'Fail ❌';
    renderList('Ternary Result', [
      'score = ' + score,
      "score >= 70 ? 'Pass' : 'Fail' → " + verdict
    ]);
  });
});