document.getElementById("contact-info-button").addEventListener("click", function() {
  // Define the height you want to scroll to
  var scrollHeight = 2060; // Adjust this value as needed
  if (window.innerWidth <= 1250) {
    scrollHeight = 2560;
  }
  // Scroll smoothly to the specified height
  window.scrollTo({
    top: scrollHeight,
    behavior: "smooth"
  });
});

document.getElementById("projects-button").addEventListener("click", function() {
  // Define the height you want to scroll to
  var scrollHeight = 953; // Adjust this value as needed
  // Scroll smoothly to the specified height
  window.scrollTo({
    top: scrollHeight,
    behavior: "smooth"
  });
});

document.getElementById("about-me-button").addEventListener("click", function() {
  // Define the height you want to scroll to
  var scrollHeight = 2060; // Adjust this value as needed
  if (window.innerWidth <= 1250) {
    scrollHeight = 2560;
  }
  // Scroll smoothly to the specified height
  window.scrollTo({
    top: scrollHeight,
    behavior: "smooth"
  });
});



