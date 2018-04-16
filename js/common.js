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

	// open popup form login
	$( '.btn__login-js' ).click(function(event) {
		event.preventDefault();
		$( '.overlay' ).addClass( 'overlay_active' );
		$( 'html, body' ).toggleClass( 'hide-scroll' )
		$( '.popup-form__login' ).addClass( 'popup-form_active' );
	});
	// /open popup form login

	// open popup form forgot
	$( '.popup-form__link-forgot' ).click(function(event) {
		event.preventDefault();
		$( '.popup-form' ).removeClass( 'popup-form_active' );
		$( '.popup-form__forgot' ).addClass( 'popup-form_active' );
	});
	// /open popup form forgot

	// open popup form registr
	$( '.btn__registr-js' ).click(function(event) {
		event.preventDefault();
		$( '.overlay' ).addClass( 'overlay_active' );
		$( 'html, body' ).toggleClass( 'hide-scroll' )
		$( '.popup-form__registr' ).addClass( 'popup-form_active' );
	});
	// /open popup form registr

	// open popup info
	var infoTime = setTimeout(function() {
		$( 'html, body' ).toggleClass( 'hide-scroll' );
		$( '.overlay' ).removeClass( 'overlay_active' );
		$( '.popup-form' ).removeClass( 'popup-form_active' );
	}, 7500);

	function openInfoPopup(timeClose) {
		$( '.overlay' ).addClass( 'overlay_active' );
		$( 'html, body' ).toggleClass( 'hide-scroll' );
		$( '.popup-form__info' ).addClass( 'popup-form_active' );
		infoTime;
	}

	openInfoPopup();
	// /open popup info



	// close popup form on click close
	$( '.popup-form__close' ).click(function(event) {
		event.preventDefault();
		$( 'html, body' ).toggleClass( 'hide-scroll' )
		$( '.overlay' ).removeClass( 'overlay_active' );
		$( '.popup-form' ).removeClass( 'popup-form_active' );
		clearTimeout(infoTime);
	});
	// /close popup form on click close

	// close popup form on click outside
	$( '.overlay__content' ).click(function(event) {
		if ( $( '.overlay__content' ).has(event.target).length === 0 ){
			$('.overlay').removeClass('overlay_active');
			$( 'html, body' ).toggleClass( 'hide-scroll' )
			$('.popup-form').removeClass('popup-form_active');
			clearTimeout(infoTime);
		}
	});
	// /close popup form on click outside

	// close popup on press Esc
	$(document).keyup(function(event) {
		if ( event.keyCode == 27 ) {
			$( '.overlay' ).removeClass( 'overlay_active' );
			$( '.popup-form' ).removeClass( 'popup-form_active' );
			$( 'html, body' ).toggleClass( 'hide-scroll' );
			clearTimeout(infoTime);
		}
	});
	// /close popup on press Esc

	// tabs
	if (document.querySelector('.tabs')) {
		var btn_tabs_node = document.querySelectorAll('.tabs-nav__li');
		var btn_tabs = [btn_tabs_node.length];
		var tab_items_node = document.querySelectorAll('.tabs-content__tab');
		var tab_items = [tab_items_node.length];

		for (var i = 0; i < btn_tabs_node.length; i++) {
			btn_tabs[i] = btn_tabs_node.item(i);
			tab_items[i] = tab_items_node.item(i);
		}

		btn_tabs[0].classList.add('tabs-nav__li_active');
		tab_items[0].classList.add('tabs-content__tab_active');

		btn_tabs.forEach(function (btn_tab, i, btn_tabs) {
			btn_tab.addEventListener('click', function (event) {
				if (!this.classList.contains('tabs-nav__li_active')) {
					event.preventDefault();
					for (var y = 0; y < btn_tabs.length; y++) {
						if (btn_tabs[y].classList.contains('tabs-nav__li_active')) {
							btn_tabs[y].classList.remove('tabs-nav__li_active');
							$(tab_items[y]).slideUp(250);
							tab_items[y].classList.remove('tabs-content__tab_active');
						}
					}
					btn_tab.classList.add('tabs-nav__li_active');
					$(tab_items[i]).slideDown(250);
					tab_items[i].classList.add('tabs-content__tab_active');
				}
			})
		})
	}
	// /tabs


});
