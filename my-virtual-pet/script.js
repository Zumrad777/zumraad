// Kitty click color change
document.addEventListener("DOMContentLoaded", function() {
  let kitty = document.querySelector(".kitty");
  if (kitty) {
    kitty.addEventListener("click", function() {
      this.style.background = this.style.background === "pink" ? "lightblue" : "pink";
    });
  }
});

// Functions for care.html
function feed() {
  document.getElementById("status").textContent = " You fed the kitty!";
}

function play() {
  document.getElementById("status").textContent = " The kitty is happy and playing!";
}
