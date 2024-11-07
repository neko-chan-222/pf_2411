$(function(){
	// ac-menu
	$(".ac-menu .question").on("click", function() {
		$(this).next().slideToggle();
		 $(this).toggleClass("open");
	});

	// slideshow
    $('.slider').slick({
		autoplay: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev"></div>',
		nextArrow: '<div class="slick-next"></div>',
		dots: true,
	});
	
	// animation
	function delayScrollAnime() {
		var time = 0.4;
		var value = time;
		$('.delayScroll').each(function () {
			var parent = this;
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			var childs = $(this).children();
			
			if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
				$(childs).each(function () {	
					if (!$(this).hasClass("fadeUp")) {
						
						$(parent).addClass("play");
						$(this).css("animation-delay", value + "s");
						$(this).addClass("fadeUp");
						value = value + time;
						
						var index = $(childs).index(this);
						if((childs.length-1) == index){
							$(parent).removeClass("play");
						}
					}
				})
			}
		})
	}
	$(window).scroll(function (){
		delayScrollAnime();
	});
	$(window).on('load', function(){
		delayScrollAnime();
	});
});