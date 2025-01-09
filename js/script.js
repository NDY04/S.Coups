//Toggle class active
   const navbarNav = document.querySelector('navbar-nav');
//ketika hamburger menu diklik
document.querySelector('#hamburger-menu').
onclick = () => {
 navbarNav.classList.toggle('active');
};

// klik diluar sidbar untuk menghilangkan nav
const hamburger = document.querySelector
('#hamburger-menu');
document.addEventListener('click', function(e) {
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
 }
});



// script.js
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  // Toggle menu
  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });
});