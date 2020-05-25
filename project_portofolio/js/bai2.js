// JavaScript Document
$(function(){
console.log('du me');
// scrollTop vitri
$('.menutren ul li').each(function(){
	$(this).find('a').on('click',function(){
		var stt = $(this).parent().index()+1;
		var vitri = $('.chapter'+stt+'').offset().top;
		$('html').animate({scrollTop:vitri},600);	
	});	
});	
// page top
$('.pnavi a').on('click',function(){
	$('html').animate({scrollTop:0},400);
});	
// scrollwindow
$(window).on('scroll',function(){
 console.log('run');	
	 if($(this).scrollTop()>100){
		 $('.pnavi').addClass('show');
		 
	 }else{
		 $('.pnavi').removeClass('show');	 
	 }
});	
	
//header
$(window).on('scroll',function(){
var vitrimain = $('#header').offset().top;
     //console.log('vitrila:'+vitrimain);	
	if($(window).scrollTop() > vitrimain){
		 //console.log('da vao');
		 $('#header').addClass('fixmenu');
	}else{
		 $('#header').removeClass('fixmenu');	 
	 }
});	

	
});