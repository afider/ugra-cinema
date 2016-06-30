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
		mode: 'fade',
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
	animateTabs();
	customizeSelect();

});



function setEqualHeight() {

	var container = '.js-equal-height__container';
	var items = '.js-equal-height__item';
	var infTeasersH = '.inf-teasers__h';
	var infTeasersTxt = '.inf-teasers__txt';

		$(container).each(function() {
		
		$(this).find(items).css({height: 'auto'}).equalHeights();

	});

	setTimeout(function() { $(infTeasersH).equalHeights(); }, 0);

} // setEqualHeight

function animateTabs() {

	var activeState = 'is-active';

	$(document).on('click', '.js-tabs dt', function() {

		$(this)
			.siblings()
			.removeClass(activeState)
			.end()
			.next('dd')
			.andSelf()
			.addClass(activeState);
	});

	setInterval( function() { setEqualHeight(); } , 0);

	
} // animateTabs()


function customizeSelect() {

	$(".js-custom-select").select2({
		width: 'copy'
	});

} // customizeSelect ()