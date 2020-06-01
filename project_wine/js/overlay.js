// JavaScript Document
(function($){
	"use strict";
$(function(){

	$('#toggle').click(function() {
		$(this).toggleClass('toggle-active');
		$('#overlay').toggleClass('nav-active');
	});
	$("#overlay").click(function(){
		$("#toggle").removeClass("toggle-active");
		$('#overlay').toggleClass('nav-active');
	});
	
	//ページトップへ戻る
	
	$('#pagetop a').click(function () {
				$('body,html').animate({			
				scrollTop: 0
				}, 400);
				return false;
	});
	//slider
	jQuery(function($){
    $('.slider').each(function(){
		$(this).slick({
			autoplay:true,
			autoplaySpeed:800,
			dots:false,
			arrows:false,
			/*slidesToShow:2,*/
		});
	});	
});	
		
});
})(jQuery);
 