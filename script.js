function hiddenUl() {
  var element = document.getElementById("ul-responsive");
  element.classList.add("visually-hidden");
}
function showUl() {
  var element = document.getElementById("ul-responsive");
  element.classList.remove("visually-hidden");
}
var x1 = window.matchMedia("(min-width: 1000px)");
var x2 = window.matchMedia("(max-width: 400px)");
if (x1.matches) {
  // If media query matches
  hiddenUl();
}
if (x2.matches) {
  showUl();
}

// hiddenUl();

// navbarResponse(x1, x2); // Call listener function at run time
// x.addListener(navbarResponse); // Attach listener function on state changes
