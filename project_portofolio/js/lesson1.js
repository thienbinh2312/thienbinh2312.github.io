
$(function(){
$('#id_modal_box').each(function(index){
$(this).find('a').click(function(){
event.preventDefault();
// copy noi dung cua web	
var imgCopy = $(this).find('.item_img').clone();
var txtCopy = $(this).find('.modal_text').clone();	
//bo noi dung vua lay duoc vao modal box	
$('.noidung').find('.img').append(imgCopy.html());
$('.noidung').find('.text').append(txtCopy.html());	
//them class
$('.noidung').addClass('noidunghienra');
$('.momo').addClass('momohienra');


});	
	
});
	
$(function(){
$('.momo, .nutdong a').click(function(){
event.preventDefault();	
$('.noidung').removeClass('noidunghienra');
$('.momo').removeClass('momohienra');	
// xoa noi dung da chua trong modal box
$('.noidung').find('.img').empty();
$('.noidung').find('.text').empty();	
	
});	
	
});	
	
	
});	

	
