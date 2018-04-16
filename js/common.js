$(function() {

	// mobile menu
	if (document.querySelector('.toggle-mobile-menu')) {
		$('.toggle-mobile-menu').click(function () {
			$('body').toggleClass('hide-scroll');
			$(this).toggleClass('toggle-mobile-menu_active');
			$('.header-nav-list').toggleClass('header-nav-list_active');
		});

		$('.header-nav-list__link').click(function() {
			if ($(this).parent().parent().hasClass('header-nav-list_active')) {
				$('.toggle-mobile-menu').click();
			}
		})

	}
	// /mobile menu

	// index slider
	if (document.querySelector('.slider')) {
		$('.slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
			responsive: [
				{
					breakpoint: 1400,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
	}
	// /index slider

	// /index slider-single
	if (document.querySelector('.slider-single')) {
		$('.slider-single').slick({
			slidesToShow: 1,
			autoplay: true,
			autoplaySpeed: 5000
		});
	}
	// /index slider-single

	// faq-list
	if (document.querySelector('.faq-list')) {
		$('.faq-list__title').click(function() {
			$(this).parent().find('.faq-list__title').removeClass('faq-list__title_active');
			$(this).parent().find('.faq-list__content').slideUp(250);
			$(this).toggleClass('faq-list__title_active');
			$(this).next('.faq-list__content').slideToggle(250);
		});

		$('.faq-list__title:first-of-type').click();
	}
	// /faq-list

	//  flowing scroll
	$('a[href^="#"]').click( function(event) {
		event.preventDefault();
		var target = this.hash,
			$target = $(target);
		if (target == "") {
			$('html, body').stop().animate({
				'scrollTop': 0
			}, 700, 'swing', function() {
				window.location.hash = target;
			});
		} else {
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 700, 'swing', function() {
				window.location.hash = target;
			});
		}
	});
	//  /flowing scroll

	// toggle aside
	if (document.querySelector('.toggle-aside')) {
		$('.toggle-aside').click(function() {
			$(this).toggleClass('toggle-aside_active');
			$('.aside').toggleClass('aside_active');
		})
	}
	// /toggle aside


});
