// Aos 
AOS.init();

// Variable
const header = document.querySelector('#header');
const sidebar = document.querySelector('#sidebar');
const navbarMobileMenu = document.querySelector('.navbar-mobile-menu');
const sidebarMenuLink = document.querySelector('.sidebar-menu-link');
const aboutLink = document.querySelector('.about-link');
const contactLink = document.querySelector('.contact-link');

// Single Add Event Listener Javascript ES6
navbarMobileMenu.addEventListener('click', function() {
     header.classList.toggle('active');
     sidebar.classList.toggle('active');
});


if (aboutLink != null ) {

// Multiple Add Event Listener Javascript ES6
[aboutLink, contactLink].forEach(item => {
     item.addEventListener('click', event => {
          header.classList.toggle('active');
          sidebar.classList.toggle('active');
     });
});

// Scroll Into View Javascript ES6
aboutLink.addEventListener('click', function() {
     document.getElementById('about').scrollIntoView({behavior: "smooth"})
});

contactLink.addEventListener('click', function() {
     document.getElementById('contact').scrollIntoView({behavior: "smooth"})
});

} else {

     // console.log('About and Contact Link does not exist!');
 
 }

// Scroll Y Vanilla Javascript
window.addEventListener('scroll', function(e){

     if(this.scrollY >= 1) {
          header.classList.add('scrolled-down');
     } else {
          header.classList.remove('scrolled-down');
     }
});

// Fade Toggle Sidebar Jquery
$(document).ready(function(){
     $(".navbar-mobile-menu").click(function(){
       $(".sidebar").fadeToggle();
 
     });
 });

$(document).ready(function(){
     $(".sidebar-menu-link").click(function(){
       $(".sidebar").fadeToggle();
 
     });
});