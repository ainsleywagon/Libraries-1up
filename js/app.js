//ScrollIt.js function
$(function(){
$.scrollIt();
});

var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
  duration: 2500, // the scene should last for a scroll distance of 2500px
  offset: 300 // start this scene after scrolling 200px
})
.setPin('.sidenav')
.addTo(controller);
