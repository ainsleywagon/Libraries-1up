//ScrollIt.js function
$(function(){
$.scrollIt();
});

//Fixing the sidenav to a certain height
var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
  duration: 5000, // the scene should last for a scroll distance of 2500px
  offset: 390 // start this scene after scrolling 200px
})
.setPin('.sidenav')
.addTo(controller);

// //Adding the current class onto the selected menu
// $('.sidenav li a').click(function() {
// $('.sidenav li a').removeClass(“current”);
// $(this).parent().addClass(“current”);
// });
