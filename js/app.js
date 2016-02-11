//ScrollIt.js function
$(function(){
$.scrollIt({
  activeClass: 'active', // class given to the active nav element
  topOffset: -120           // offste (in px) for fixed top navigation
});
});

//Fixing the sidenav to a certain height
var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
  duration: 5000, // the scene should last for a scroll distance of 2500px
  offset: 390 // start this scene after scrolling 200px
})
.setPin('.sidenav')
.addTo(controller);
