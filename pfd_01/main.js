$(function(){
	// slideshow
    $('.slider').slick({
		autoplay: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		prevArrow: '<div class="slick-prev"></div>',
		nextArrow: '<div class="slick-next"></div>',
		dots: true,
		responsive: [
			{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
        ]
	});
	
	// animation
	function fadeAnime(){
		$('.fadeInTrigger').each(function(){
			var elemPos = $(this).offset().top-50;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight){
				$(this).addClass('fadeIn');
			}
		});
	}
	$(window).scroll(function () {
		fadeAnime();
	});
});