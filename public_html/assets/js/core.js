$(document).ready(function() {
 
  $("#owl-slider").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 2000,
      paginationSpeed : 800,
      singleItem: true,
      autoPlay: true,
      pagination: false,
      paginationNumbers: false,
      autoHeight: true
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});