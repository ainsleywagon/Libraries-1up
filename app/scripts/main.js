  // vanilla JS
  // init with element
  var grid = document.querySelector('#masonry-box');
  var msnry = new Masonry( grid, {
    // options...
    itemSelector: '.item-mason',
    columnWidth: 200
  });

  // init with selector
  var msnry = new Masonry( '#masonry-box', {
    // options...
  });

  //ScrollIt.js function
  $(function(){
  $.scrollIt();
  });
