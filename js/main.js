// header导航滑块
function block() {
	var oldLeft = $('.menu_on').position().left;
	$('.block').css('left', oldLeft);
};

$(document).ready(function() {
	block();
	$('.fir_item').hover(function() {
		var runtimeLeft = $(this).position().left;
		$('.block').css('left', runtimeLeft);
		$('.menu_on').children('.fir_link').css('color', '#444');
		$(this).children('.fir_link').css('color', '#da251c');
		// $(this).find('.sec_item').each(function(index, el) {
		// 	$(el).css('transition-delay', '0.'+index+'s');
		// });
	}, function() {
		block();
		$('.fir_link').css('color', '#444');
		$('.menu_on').children('.fir_link').css('color', '#da251c');
	});
});