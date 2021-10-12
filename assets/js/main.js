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

var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "104897068439792");
chatbox.setAttribute("attribution", "biz_inbox");

window.fbAsyncInit = function() {
FB.init({
     xfbml            : true,
     version          : 'v12.0'
});
};

(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var form = document.getElementById("my-form");
               
async function handleSubmit(event) {
event.preventDefault();
var status = document.getElementById("my-form-status");
var data = new FormData(event.target);
fetch(event.target.action, {
method: form.method,
body: data,
headers: {
     'Accept': 'application/json'
}
}).then(response => {
status.innerHTML = "Thanks for your submission!";
form.reset()
}).catch(error => {
status.innerHTML = "Oops! There was a problem submitting your form"
});
}
form.addEventListener("submit", handleSubmit)

setTimeout(function() {

$('#my-form-status').fadeOut('fast');

}, 5000);