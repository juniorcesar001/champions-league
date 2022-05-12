(function($){

	new Progressive({
		el: '.champions-league',
		lazyClass: 'lazy',
	}).fire();

	var containerHistoria = $('.container-slick')
	var containerHistoria = $('.historia-slick')
	var containerArtilheiros = $('.artilheiros-slick')
	var navArtilheiros = $('.artilheiros-nav')
	var containerUniformes = $('.uniformes-slick')
	var containerCuriosidade = $('.curiosidade-slick')
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

	containerCuriosidade.slick({
		autoplay: false,
		autoplaySpeed: 4000,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		rows: 2,
		
		//prevArrow: '<button type="button" class="slick-prev slick-arrow icon-arrow-left"></button>',
		//nextArrow: '<button type="button" class="slick-next slick-arrow icon-arrow-right"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				rows: 1,
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
				slidesToShow: 2,
			}
			
		}]
	});

	navArtilheiros.find('.item-option').on('click', function(){
		var index = $(this).data('index');
		navArtilheiros.find('.item-option').each(function(i, el){
			$(el).removeClass('item-active');
		})
		$(this).addClass('item-active')
		containerArtilheiros.slick('slickGoTo', index);
	});

	$('body').on('click', '.seemore-button', function(){
            
		$(this).parents('.seemore-container').toggleClass('seemore-close');
		multiSlideAdaptiveHeight($('.container-slick'))

		if ($(this).parents('.seemore-container').hasClass('seemore-close')) {
			$(this).html('Ver mais +');
		} else {
			$(this).html('Ver menos -');
		}
		return false;
	});

	function multiSlideAdaptiveHeight(slider) {

        var activeSlides = [];
        var tallestSlide = 0;
        
        setTimeout(function() {
        
            $('.slick-track .slick-active', slider).each(function(item) {
                activeSlides[item] = $(this).outerHeight();
            });
        
            activeSlides.forEach(function(item) {
            	if (item > tallestSlide) {
					tallestSlide = item;
				}
			});
        
			$('.slick-list', slider).height(tallestSlide);
        }, 10);
    }

})(jQuery);