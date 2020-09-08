var menu = "close";
$(".mobile .menu-toggle").click(function() {
    
    if (menu === "close") {
      	$(this).parent().next(".mobile-nav").css("transform", "translate(0, 0)");
     	 menu = "open";
    } else {
      	$(this).parent().next(".mobile-nav").css("transform", "translate(0, -999%)");
      	menu = "close";
    }
});

$(document).ready(function(){
  $(".menu-toggle").click(function(){
    $(this).toggleClass("active");
  });
});



AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({

  once: true, // whether animation should happen only once - while scrolling down

});
