$(function() {

	// mobile menu
	$('.toggle-mobile-menu').click(function() {
		$('body').toggleClass('hide-scroll');
		$(this).toggleClass('toggle-mobile-menu_active');
		$('.header-nav-list').toggleClass('header-nav-list_active');
	})
	// /mobile menu

	// index slider
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
	})
	// /index slider


});
