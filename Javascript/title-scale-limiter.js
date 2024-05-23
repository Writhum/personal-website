// JavaScript to toggle a class when the media query condition is met
window.addEventListener('resize', function() {
  var slidingElement = document.getElementById('geoffrey-title');
  if (window.innerWidth <= 1456) {
    slidingElement.classList.add('stopped');
  } else {
    slidingElement.classList.remove('stopped');
  }
});

window.addEventListener('resize', function() {
  var slidingElement = document.getElementById('ashton-title');
  if (window.innerWidth <= 1490) {
    slidingElement.classList.add('stopped');
  } else {
    slidingElement.classList.remove('stopped');
  }
});

