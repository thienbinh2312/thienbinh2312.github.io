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
			autoplay:false,
			autoplaySpeed:700,
			dots:false,
			/*slidesToShow:2,*/
		});
	});	
});	
		
});
})(jQuery);
 

(function($){
		"use strict";
	$(function(){
	$(window).scroll(function(){
				var windowHeight = $(window).height();
				var topWindow = $(window).scrollTop();
				var blockAni = $('.parallax');
				blockAni.each(function(){
					var targetPosition = $(this).offset().top;
					if(topWindow + windowHeight > targetPosition + 100){
						$(this).addClass("css_show");
					}
					else {
						$(this).removeClass('css_show');
					}
				});
	});		
});
})(jQuery);