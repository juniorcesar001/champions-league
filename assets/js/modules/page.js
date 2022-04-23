(function($){


	new Progressive({
		el: '.champions-league',
		lazyClass: 'lazy',
	}).fire();

	var containerHistoria = $('.historia-slick')
	var containerArtilheiros = $('.artilheiros-slick')
	var containerUniformes = $('.uniformes-slick')
	var containerEstatistica = $('.estatistica-slick')

	containerHistoria.slick({
		autoplay: false,
		autoplaySpeed: 4000,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		//prevArrow: '<button type="button" class="slick-prev slick-arrow icon-arrow-left"></button>',
		//nextArrow: '<button type="button" class="slick-next slick-arrow icon-arrow-right"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {
			}
			
		}]
	});

	containerArtilheiros.slick({
		autoplay: false,
		autoplaySpeed: 4000,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		//prevArrow: '<button type="button" class="slick-prev slick-arrow icon-arrow-left"></button>',
		//nextArrow: '<button type="button" class="slick-next slick-arrow icon-arrow-right"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {
			}
			
		}]
	});

	containerUniformes.slick({
		autoplay: false,
		autoplaySpeed: 4000,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		//prevArrow: '<button type="button" class="slick-prev slick-arrow icon-arrow-left"></button>',
		//nextArrow: '<button type="button" class="slick-next slick-arrow icon-arrow-right"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {
			}
			
		}]
	});
	
	containerEstatistica.slick({
		autoplay: false,
		autoplaySpeed: 4000,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		//prevArrow: '<button type="button" class="slick-prev slick-arrow icon-arrow-left"></button>',
		//nextArrow: '<button type="button" class="slick-next slick-arrow icon-arrow-right"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {
			}
			
		}]
	});


})(jQuery);