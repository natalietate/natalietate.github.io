// TODO page load transition
// TODO scroll animations - things coming into frame
// TODO navbar collapse

console.log("Hey there! Thanks for checking out my portfolio.")
console.log("You know, I'm currently available for hire...")
console.log("Feel free to reach out to me at martin.nat@gmail.com.")

document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
  var navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if (navbarBurgers.length > 0) {

    // Add a click event on each of them
    navbarBurgers.forEach(function (el) {
      el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = el.dataset.target;
        var targetTwo = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        targetTwo.classList.toggle('is-active');

      });
    });
  }
});

// Different Hero image based on time of day (tabled for now)
// (function easterEgg() {
//   var date = new Date();
//   var hrs = date.getHours();
//   var img = document.querySelector("#rotate");
//
//   // night
//   if (hrs >= 20) {
//     img.className += " night";
//   }
//
//   // evening
//   else if (hrs >= 16) {
//     img.className += " evening";
//   }
//
//   // afternoon
//   else if (hrs >= 12) {
//     img.className += " afternoon";
//   }
//
//   // morning
//   else if (hrs >= 8) {
//     img.className += " morning";
//   }
//
//   // early am
//   else if (hrs >= 4) {
//     img.className += " early";
//   }
//
//   // late night
//   else {
//     img.className += " late";
//   }
//
// })();
