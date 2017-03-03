(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

/*jslint browser: true*/
/*global $, jQuery, alert*/
$('.gallery ul li a').click(function () {
    
	'use strict';
	var itemID = $(this).attr('href');
    $('.gallery ul').addClass('item_open');
    $(itemID).addClass('item_open');
    return false;
});
$('.close').click(function () {
	'use strict';
    $('.port, .gallery ul').removeClass('item_open');
    return false;
});

$(".gallery ul li a").click(function () {
	'use strict';
    $('html, body').animate({
        scrollTop: parseInt($("#top").offset().top)
     });
 });