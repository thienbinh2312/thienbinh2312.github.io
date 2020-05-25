// JavaScript Document
$(function(){
	//cho tat ca noi dung thu lai
	$('.ndmotkhoi').slideUp();
	//click vao the h3
	$('.motkhoi h3').click(function(event){
		if($(this).parent().hasClass('active')){
			$(this).next().slideUp('slow');
			$(this).parent().removeClass('active');
		}else{
			$(this).parent().addClass('active');
			$(this).next().slideDown('slow');
		}
	});
});

 