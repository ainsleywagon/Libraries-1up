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

//reveal overflow content
$(".view-more").click(function () {

  $overflow = $(this);
  //getting the next element
  $content = $overflow.next();
  //open up the content needed - toggle the slide - if visible, slide up, if not slide down.
  $content.slideToggle(500, function () {
    //execute this after slideToggle is done
    //change text of header based on visibility of content div
    $overflow.text(function () {
      //change text based on condition
      return $content.is(":visible") ? "Collapse" : "Expand";

    });
  });
});

//masonry
$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});
