$(function() {

	$('.toggle-mobile-menu').click(function() {
		$('body').toggleClass('hide-scroll');
		$(this).toggleClass('toggle-mobile-menu_active');
		$('.header-nav-list').toggleClass('header-nav-list_active');
	})
});
