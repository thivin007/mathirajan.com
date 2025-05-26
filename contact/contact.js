document.querySelector(".back-button").addEventListener("click", () => {
  history.back();
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Your message has been sent!");
  this.reset();
});