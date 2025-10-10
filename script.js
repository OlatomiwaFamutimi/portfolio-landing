document.addEventListener('DOMContentLoaded', function () {
  console.log('JS OK');                         // should appear in Console

  // Demo: Generate Numbers -> writes into #message (adjust to your IDs)
  var genBtn = document.getElementById('genBtn');
  if (genBtn) {
    genBtn.addEventListener('click', function () {
      var out = document.getElementById('message');
      if (out) { out.textContent = 'Clicked! ' + Math.floor(Math.random() * 100); }
    });
  }
});