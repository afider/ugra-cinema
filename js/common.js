
$(function() {

	//document.getElementById('svg-icons').innerHTML = SVG_ICONS;

	$('.js-slider').bxSlider({
		mode: 'fade',
		minSlides: 1,
		maxSlides: 1,
		slideMargin: 0,
		auto: true,
		pause: 5000,
		speed: 1000,
		autoHover: true

	});

	$('.js-slider_movies').bxSlider({
		mode: 'horizontal',
		minSlides: 1,
		maxSlides: 1,
		slideMargin: 0,
		auto: true,
		pause: 5000,
		speed: 1000,
		autoHover: true,
		pager: false
	});

	$('.js-slider_several-items').bxSlider({
		mode: 'horizontal',
		minSlides: 3,
		maxSlides: 3,
		slideMargin: 0,
		auto: true,
		pause: 5000,
		speed: 1000,
		autoHover: true,
		slideWidth: 270,
		slideHeight: 70,
		slideMargin: 0,
		nextSelector: '.slider__next',
  		prevSelector: '.slider__prev',
  		infiniteLoop: true
	});

});



function goToElement () {

	var animationAllow = 'is-animate';
	var openState = 'is-open';
	var nav = $('.js-nav');
	var navControl = $('.js-nav__control');
	var navPhone = $('.js-nav__phone');
	var navH = 40;

	$(".js-goto").click(function(e) {

		nav.removeClass(animationAllow + ' ' + openState);
		navControl.removeClass(animationAllow + ' ' + openState);
		navPhone.removeClass(openState);
		$('body').removeClass(openState);

		var self = $(this),
			targetClass = self.data('goto');
		    target = $(targetClass);

		var speed = 1000;

		 e.preventDefault();


	    $('html, body').stop().animate({
	        scrollTop: target.offset().top - (navH + 10)
	        
	    }, speed, 'easeInOutCubic');
	});

} // goToElement

