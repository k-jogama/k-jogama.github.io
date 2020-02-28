$(function(){

	var
	  	winW = $(window).width(),
		winH = $(window).height(),
		nav = $('#mainnav ul a'),
		who = $('#mainImg p a'),
		curPos = $(this).scrollTop();

	if (winW > 800){
		var headerH =200;
	}
	else{
		var headerH =70;
	}

	$(nav).on('click', function(){
  	var $el = $(this),
		id = $el.attr('href');
 		$('html, body').animate({
   		scrollTop: $(id).offset().top - headerH
 		}, 500);
		// if (winW < 890){
		// 	$('#menuWrap').next().slideToggle();
		// 	$('#menuBtn').removeClass('close');
		// }
 		return false;
	});

	$(who).on('click', function(){
  	var $el = $(this),
		id = $el.attr('href');
 		$('html, body').animate({
   		scrollTop: $(id).offset().top - headerH
 		}, 500);
 		return false;
	});

	$('.panel').hide();
	$('#menuWrap').toggle(function(){
		$(this).next().slideToggle();
		$('#menuBtn').toggleClass('close');
	},
	function(){
		$(this).next().slideToggle();
		$('#menuBtn').removeClass('close');
	});

	jQuery(function($) {
	var nav = $('#mainnav'),
	offset = nav.offset();
	$(window).scroll(function () {
	  if($(window).scrollTop() > offset.top) {
	    nav.addClass('fixed');
	  } else {
	    nav.removeClass('fixed');
	  }
	});
});
});
