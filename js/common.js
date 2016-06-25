/*!
 * Simple jQuery Equal Heights
 *
 * Copyright (c) 2013 Matt Banks
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://docs.jquery.com/License
 *
 * @version 1.5.1
 */
(function($) {

    $.fn.equalHeights = function() {
        var maxHeight = 0,
            $this = $(this);

        $this.each( function() {
            var height = $(this).innerHeight();

            if ( height > maxHeight ) { maxHeight = height; }
        });

        return $this.css('height', maxHeight);
    };

    // auto-initialize plugin
    $('[data-equal]').each(function(){
        var $this = $(this),
            target = $this.data('equal');
        $this.find(target).equalHeights();
    });

})(jQuery);


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
		nextSelector: '.slider__next',
  		prevSelector: '.slider__prev',
  		infiniteLoop: true
	});


	setEqualHeight();

});



function setEqualHeight() {

	var container = '.js-equal-height__container';
	var items = '.js-equal-height__item';

		$(container).each(function() {
		
		$(this).find(items).equalHeights();

	});


} // setEqualHeight

