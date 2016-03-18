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
  duration: 0, // the scene should last for a scroll distance of 2500px
  offset: 390 // start this scene after scrolling 390px
})
.setPin('.sidenav')
.addTo(controller);

//Revealing the logo and subscribe button in the navbar after you've scrolled past header
var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: 0,
    offset: 180
  }
});

//build scenes
new ScrollMagic.Scene({
  triggerElement: ".content"
})
      .setClassToggle(".sub-nav-hide", "reveal") //add class toggle
      .addTo(controller);

//change button style when it's clicked
$('.subscribe-btn').on('click', function(){
  $(this).toggleClass( "subscribed");
});

//reveal more content code from cssnewbie.com
function showHide(shID) {
	if (document.getElementById(shID)) {
		if (document.getElementById(shID+'-show').style.display != 'none') {
			document.getElementById(shID+'-show').style.display = 'none';
			document.getElementById(shID).style.display = 'block';
		}
		else {
			document.getElementById(shID+'-show').style.display = 'inline';
			document.getElementById(shID).style.display = 'none';
		}
	}
}

//fading top text with scroll
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    $('.cover').css({
        'opacity': ((height - scrollTop - 100) / height)
    });
});

//masonry
$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 210
});
