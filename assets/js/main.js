/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Mobile Menu Js
03. Common Js
04. Menu Controls JS
05. Offcanvas Js
06. Search Js
07. cartmini Js
08. filter
09. Body overlay Js
10. Sticky Header Js
11. Theme Settings Js
12. Nice Select Js
13. Smooth Scroll Js
14. Slider Activation Area Start
15. Masonary Js
16. Wow Js
17. Counter Js
18. InHover Active Js
19. Line Animation Js
20. Video Play Js
21. Password Toggle Js
****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);


	// 08. Nice Select Js
	$('select').niceSelect();


	function back_to_top() {
		var btn = $('#back_to_top');
		var btn_wrapper = $('.back-to-top-wrapper');

		windowOn.scroll(function () {
			if (windowOn.scrollTop() > 300) {
				btn_wrapper.addClass('back-to-top-btn-show');
			} else {
				btn_wrapper.removeClass('back-to-top-btn-show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});
	}
	back_to_top();

	////////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load', function () {
		$("#loading").fadeOut(500);
	});


	///////////////////////////////////////////////////
	// 07. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 20) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});


	$("#slider-range").slider({
		range: true,
		min: 0,
		max: 1200,
		values: [80, 700],
		slide: function (event, ui) {
			$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
		}
	});
	$("#amount").val("$" + $("#slider-range").slider("values", 0) +
		" - $" + $("#slider-range").slider("values", 1));


	////////////////////////////////////////////////////
	// 03. Search Js
	$(".search-open-btn").on("click", function () {
		$(".search__popup").addClass("search-opened");
	});

	$(".search-close-btn").on("click", function () {
		$(".search__popup").removeClass("search-opened");
	});


	$('.tp-hero-2__feature-item').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.tp-hero-2__feature-item').removeClass('active');
	});

	$('.tp-custom-accordion .accordion-items').on("click", function () {
		$(this).addClass('tp-faq-active').siblings().removeClass('tp-faq-active');
	});


	// for header
	if ($("#tp-header-top__value-toogle").length > 0) {
		window.addEventListener('click', function (e) {

			if (document.getElementById('tp-header-top__value-toogle').contains(e.target)) {
				$(".tp-header-top__value-submenu").toggleClass("open");
			}
			else {
				$(".tp-header-top__value-submenu").removeClass("open");
			}
		});
	}

	// for header
	if ($("#tp-header-top__lang-toogle").length > 0) {
		window.addEventListener('click', function (e) {

			if (document.getElementById('tp-header-top__lang-toogle').contains(e.target)) {
				$(".tp-header-top__lang-submenu").toggleClass("open");
			}
			else {
				$(".tp-header-top__lang-submenu").removeClass("open");
			}
		});
	}


	///////////////////////////////////////////////////
	// 02. SubMenu Dropdown Toggle
	var header_icon =
		`<span class="header-icon">
		<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M6.04088 0L0.535156 4.125V11H4.26484V8.59381C4.26484 7.64165 5.05698 6.87506 6.04088 6.87506C7.02477 6.87506 7.81692 7.64165 7.81692 8.59381V11H11.5466V4.125L6.04088 0Z" fill="#FFB302"/></svg>                                
	</span>`;
	$(header_icon).insertBefore('.menu-icon nav ul .menu-icon-2');


	////////////////////////////////////////////////////
	// 03. Common Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$("[data-text-color]").each(function () {
		$(this).css("color", $(this).attr("data-text-color"));
	});

	$(".has-img").each(function () {
		var imgSrc = $(this).attr("data-menu-img");
		var img = `<img class="mega-menu-img" src="${imgSrc}" alt="img">`;
		$(this).append(img);

	});

	////////////////////////////////////////////////////
	// 12. Nice Select Js
	$('.tp-header-search-category select').niceSelect();

	////////////////////////////////////////////////////
	// 13. Smooth Scroll Js
	function smoothSctoll() {
		$('.smooth a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 120
				}, 1500);
			}
		});
	}
	smoothSctoll();

	function back_to_top() {
		var btn = $('#back_to_top');
		var btn_wrapper = $('.back-to-top-wrapper');

		windowOn.scroll(function () {
			if (windowOn.scrollTop() > 300) {
				btn_wrapper.addClass('back-to-top-btn-show');
			} else {
				btn_wrapper.removeClass('back-to-top-btn-show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});
	}
	back_to_top();


	$('.tp-hero__slider-active').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		dots: false,
		fade: true,
		autoplay: true,
		prevArrow: `<button type="button" class="slick-prev">
		<svg width="71" height="36" viewBox="0 0 71 36" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M1.00451 19.3396L16.8581 35.1769C17.4276 35.8412 18.4284 35.9186 19.0934 35.3496C19.7584 34.7807 19.8359 33.7809 19.2663 33.1166C19.2132 33.0546 19.1554 32.9968 19.0934 32.9439L5.95079 19.799H68.7155C69.591 19.799 70.3008 19.0899 70.3008 18.2152C70.3008 17.3405 69.591 16.6315 68.7155 16.6315H5.95079L19.0934 3.50255C19.7584 2.93365 19.8359 1.93385 19.2663 1.26954C18.6967 0.605236 17.696 0.527798 17.031 1.09683C16.969 1.14991 16.9111 1.20762 16.8581 1.26954L1.00437 17.1068C0.389786 17.7243 0.389786 18.7219 1.00451 19.3396Z" fill="currentcolor"/>
		</svg></button>`,
		nextArrow: `<button type="button" class="slick-next">
		<svg width="71" height="36" viewBox="0 0 71 36" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M70.1547 16.3908L54.3011 0.553609C53.7316 -0.110699 52.7308 -0.18814 52.0658 0.380897C51.4008 0.949798 51.3233 1.94959 51.8929 2.6139C51.946 2.67583 52.0038 2.73367 52.0658 2.78661L65.2084 15.9315H2.44371C1.56822 15.9315 0.858398 16.6406 0.858398 17.5153C0.858398 18.39 1.56822 19.099 2.44371 19.099H65.2084L52.0658 32.2279C51.4008 32.7968 51.3233 33.7966 51.8929 34.4609C52.4625 35.1252 53.4632 35.2027 54.1282 34.6336C54.1902 34.5806 54.2481 34.5229 54.3011 34.4609L70.1548 18.6237C70.7694 18.0062 70.7694 17.0086 70.1547 16.3908Z" fill="currentcolor"/>
		</svg>
		</button>`,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			}

		]
	});

	////team-slider
	var team = new Swiper('.tp-team-slider-active', {
		slidesPerView: 6,
		loop: true,
		autoplay: false,
		arrow: false,
		spaceBetween: 30,
		breakpoints: {
			'1400': {
				slidesPerView: 6,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		a11y: false,
	});

	////brand-slider
	var brand = new Swiper('.tp-brand-slider-active', {
		loop: true,
		freemode: true,
		slidesPerView: 1,
		spaceBetween: 0,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 2000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
		breakpoints: {
			'1400': {
				slidesPerView: 7,
			},
			'1200': {
				slidesPerView: 6,
			},
			'992': {
				slidesPerView: 5,
			},
			'768': {
				slidesPerView: 5,
			},
			'576': {
				slidesPerView: 4,
			},
			'0': {
				slidesPerView: 2,
			},
		},
		a11y: false,
	});


	////brand-slider
	var brand = new Swiper('.ab-brand-slide-active', {
		loop: true,
		freemode: true,
		slidesPerView: 1,
		spaceBetween: 220,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 2000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 3,
				spaceBetween: 100,
			},
			'576': {
				slidesPerView: 3,
				spaceBetween: 100,
			},
			'0': {
				slidesPerView: 2,
				spaceBetween: 100,
			},
		},
		a11y: false,
	});

	////brand-slider
	var brand = new Swiper('.tp-brand-3-slider-active', {
		loop: true,
		freemode: true,
		slidesPerView: 1,
		spaceBetween: 0,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 2000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
		breakpoints: {
			'1400': {
				slidesPerView: 7,
			},
			'1200': {
				slidesPerView: 6,
			},
			'992': {
				slidesPerView: 5,
			},
			'768': {
				slidesPerView: 5,
			},
			'576': {
				slidesPerView: 4,
			},
			'0': {
				slidesPerView: 2,
			},
		},
		a11y: false,
	});


	////testimonial-slider
	var testimonial = new Swiper('.tp-testimonial-slider-active', {
		slidesPerView: 1,
		loop: true,
		autoplay: true,
		arrow: false,
		speed: 1000,
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		a11y: false,
		// Navigation arrows
		navigation: {
			prevEl: '.tp-testimonial-prev',
			nextEl: '.tp-testimonial-next',
		},
	});

	////testimonial-slider
	var testimonial = new Swiper('.tp-studio-testimonial-active', {
		slidesPerView: 1,
		loop: true,
		autoplay: true,
		arrow: false,
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		a11y: false,
		// Navigation arrows
		navigation: {
			prevEl: '.tp-studio-prev',
			nextEl: '.tp-studio-next',
		},
	});

	////testimonial-slider
	var testimonial = new Swiper('.showcase-details-2-slider-active', {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		autoplay: false,
		arrow: false,
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 4,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		a11y: false,
		// Navigation arrows
		navigation: {
			prevEl: '.tp-studio-prev',
			nextEl: '.tp-studio-next',
		},
	});


	////testimonial-slider
	var testimonial = new Swiper('.tp-portfolio-12-slider-active', {
		slidesPerView: 4,
		loop: false,
		autoplay: false,
		arrow: false,
		centeredSlides: true,
		spaceBetween: 55,
		mousewheel: true,
		speed: 1000,
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 5,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 3,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		a11y: false,
		// Navigation arrows
		navigation: {
			prevEl: '.tp-studio-prev',
			nextEl: '.tp-studio-next',
		},
	});


	////testimonial-slider
	var testimonial = new Swiper('.tp-service-4-slider-active', {
		slidesPerView: 4,
		loop: true,
		autoplay: false,
		arrow: false,
		spaceBetween: 60,
		speed: 1000,
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			'576': {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			'0': {
				slidesPerView: 1,
				spaceBetween: 20,
			},
		},
		a11y: false,
	});

	////testimonial-slider
	var testimonial = new Swiper('.pd-visual-slider-active', {
		slidesPerView: 3,
		loop: true,
		autoplay: true,
		arrow: false,
		spaceBetween: 20,
		speed: 1000,
		breakpoints: {
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		a11y: false,
	});

	////testimonial-slider
	var testimonial = new Swiper('.blog-sidebar-slider-active', {
		slidesPerView: 1,
		loop: true,
		autoplay: false,
		arrow: false,
		spaceBetween: 0,
		speed: 1000,
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		a11y: false,

		pagination: {
			el: ".blog-sidebar-dot",
			clickable: true,
		},

		// Navigation arrows
		navigation: {
			nextEl: '.blog-sidebar-prev',
			prevEl: '.blog-sidebar-next',
		},

	});


	////testimonial-slider
	var testimonial = new Swiper('.postbox__thumb-slider-active', {
		slidesPerView: 1,
		loop: true,
		autoplay: false,
		arrow: false,
		spaceBetween: 0,
		speed: 1000,
		effect: 'fade',
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		a11y: false,

		pagination: {
			el: ".blog-sidebar-dot",
			clickable: true,
		},

		// Navigation arrows
		navigation: {
			prevEl: '.postbox-arrow-prev',
			nextEl: '.postbox-arrow-next',
		},

	});


	////testimonial-slider
	var testimonial = new Swiper('.project-details-2-slider', {
		slidesPerView: 1,
		loop: true,
		autoplay: false,
		arrow: false,
		spaceBetween: 0,
		speed: 1000,
		effect: 'fade',
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		a11y: false,

		navigation: {
			prevEl: '.project-details-2-prev',
			nextEl: '.project-details-2-next',
		},

	});

	// before-after
	if ($(".beforeAfter").length > 0) {
		$('.beforeAfter').beforeAfter({
			movable: true,
			clickMove: true,
			position: 50,
			separatorColor: '#fafafa',
			bulletColor: '#fafafa',
			onMoveStart: function (e) {
				
			},
			onMoving: function () {
				
			},
			onMoveEnd: function () {
				
			},
		});
	}



	////testimonial-slider
	var testimonial = new Swiper('.tp-portfolio-9-slider-active', {
		freemode: true,
		slidesPerView: 1,
		loop: true,
		autoplay: false,
		arrow: false,
		mousewheel: true,
		a11y: false,
		effect: 'fade',
		autoplay: true,
	});

	// var portfolios = new Swiper('.tp-portfolio-9-slider-active', {
	// 	slideToClickedSlide: true,
	// 	slidePerView: "auto",
	// 	freeMode: {
	// 	  enabled: true,
	// 	  sticky: false,
	// 	  momentumBounce: false,
	// 	},
	// 	mousewheel: {
	// 	  enabled: true,
	// 	  sensitivity: 4,
	// 	},
	//   });

	////gallery-slider
	var gallery = new Swiper('.tp-gallery-slider-active', {
		loop: true,
		freemode: true,
		slidesPerView: 1,
		spaceBetween: 30,
		centeredSlides: false,
		allowTouchMove: false,
		speed: 5000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
		breakpoints: {
			'1400': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 5,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		a11y: false,
		// Navigation arrows
		navigation: {
			prevEl: '.tp-testimonial-prev',
			nextEl: '.tp-testimonial-next',
		},
	});


	////shop-slider
	const progressBar = $(".shop-slider-progress-bar span");

	var gallery = new Swiper('.tp-shop-slider-active', {
		slidesPerView: 1,
		loop: true,
		autoplay: true,
		arrow: false,
		spaceBetween: 0,
		speed: 1000,
		effect: 'fade',
		a11y: false,

		navigation: {
			prevEl: '.tp-shop-prev',
			nextEl: '.tp-shop-next',
		},
		pagination: {
			el: '#paginations',
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				let zero = total > 9 ? '' : '0';
				let index = zero + current
				let all = zero + total
				let html = `<div class="shop-slider-pagination">
								<span>${index}</span>
								<span>${all}</span>
							</div>`;
				return html;
			}
		},

		autoplay: {
			delay: 2500,
			disableOnInteraction: false
		},
		on: {
			autoplayTimeLeft(s, time, progress) {
				progressBar.css({
					"transform": `scaleX(calc(1 - ${progress}))`
				})
			}
		}

	});



	////brand-slider
	var brand = new Swiper('.tp-shop-brand-active', {
		slidesPerView: 5,
		loop: true,
		autoplay: false,
		arrow: false,
		spaceBetween: 0,
		speed: 1000,
		breakpoints: {
			'1400': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		a11y: false,

		navigation: {
			prevEl: '.tp-shop-brand-prev',
			nextEl: '.tp-shop-brand-next',
		},

	});


	if ($('#port-showcase-slider-main').length > 0) {

		const showcaseSwiper = new Swiper('#showcase-slider', {
			direction: "horizontal",
			loop: true,
			slidesPerView: 'auto',
			touchStartPreventDefault: false,
			speed: 1000,
			autoplay: {
				delay: 5000
			},
			mousewheel: true,
			simulateTouch: true,
			navigation: {
				clickable: true,
				nextEl: '.swiper-next',
				prevEl: '.swiper-prev',
			},
			pagination: {
				el: '.tp-slider-dot',
				clickable: true,
				renderBullet: function (index, className) {
					return '<div class="' + className + '"></div>';
				},
			},
			on: {
				slidePrevTransitionStart: function () {

					$('.tp-slider-dot').find('.swiper-pagination-bullet').each(function () {
						if (!$(this).hasClass("swiper-pagination-bullet-active")) {
							$('#trigger-slides .swiper-slide-active').find('div').first().each(function () {
								if (!$(this).hasClass("active")) {
									$(this).trigger('click');
								}
							});

							$('#trigger-slides .swiper-slide-duplicate-active').find('div').first().each(function () {
								if (!$(this).hasClass("active")) {
									$(this).trigger('click');
								}
							});
						}
					});

				},
				slideNextTransitionStart: function () {

					$('.tp-slider-dot').find('.swiper-pagination-bullet').each(function () {
						if (!$(this).hasClass("swiper-pagination-bullet-active")) {
							$('#trigger-slides .swiper-slide-active').find('div').first().each(function () {
								if (!$(this).hasClass("active")) {
									$(this).trigger('click');
								}
							});

							$('#trigger-slides .swiper-slide-duplicate-active').find('div').first().each(function () {
								if (!$(this).hasClass("active")) {
									$(this).trigger('click');
								}
							});
						}
					});

				}
			},
		});

		var vertex = 'varying vec2 vUv; void main() {  vUv = uv;  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );	}';
		var fragment = `
		varying vec2 vUv;
	
		uniform sampler2D currentImage;
		uniform sampler2D nextImage;
		uniform sampler2D disp;
		uniform float dispFactor;
		uniform float effectFactor;
		uniform vec4 resolution;
	
		void main() {
	
			vec2 uv = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
	
			vec4 disp = texture2D(disp, uv);
			vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
			vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
			vec4 _currentImage = texture2D(currentImage, distortedPosition);
			vec4 _nextImage = texture2D(nextImage, distortedPosition2);
			vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
	
			gl_FragColor = finalTexture; }
	
		`;

		var gl_canvas = new WebGL({
			vertex: vertex,
			fragment: fragment,
		});

		var addEvents = function () {

			var triggerSlide = Array.from(document.getElementById('trigger-slides').querySelectorAll('.slide-wrap'));
			gl_canvas.isRunning = false;

			triggerSlide.forEach((el) => {

				el.addEventListener('click', function () {

					if (!gl_canvas.isRunning) {

						gl_canvas.isRunning = true;

						document.getElementById('trigger-slides').querySelectorAll('.active')[0].className = '';
						this.className = 'active';

						var slideId = parseInt(this.dataset.slide, 10);

						gl_canvas.material.uniforms.nextImage.value = gl_canvas.textures[slideId];
						gl_canvas.material.uniforms.nextImage.needsUpdate = true;

						gsap.to(gl_canvas.material.uniforms.dispFactor, {
							duration: 1,
							value: 1,
							ease: 'Sine.easeInOut',
							onComplete: function () {
								gl_canvas.material.uniforms.currentImage.value = gl_canvas.textures[slideId];
								gl_canvas.material.uniforms.currentImage.needsUpdate = true;
								gl_canvas.material.uniforms.dispFactor.value = 0.0;
								gl_canvas.isRunning = false;
							}
						});

					}

				});

			});

		};

		addEvents();
	}

	////portfolio-slider
	$('.portfolio-slider-active').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		asNavFor: '.portfolio-nav-slider-active',
		fade: true,
		mousewheel: true,
	});

	$('.portfolio-nav-slider-active').slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		asNavFor: '.portfolio-slider-active',
		dots: false,
		arrows: false,
		vertical: true,
		focusOnSelect: true,
		centerPadding: '0',
		mousewheel: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					slidesToShow: 4,
				}
			}
		]
	});


	/////////////////////////////////////////////////////
	// Home 11
	let mainSliderSelector11 = '.main-slider11',
		thumbSliderSelector11 = '.thumb-slider11';

	// Main Slider
	let mainSliderOptions11 = {
		loop: true,
		speed: 1500,
		parallax: true,
		mousewheel: true,
		loopAdditionalSlides: 6,
		grabCursor: true,
		effect: "fade",
		watchSlidesProgress: true,
		direction: 'vertical',
	};
	let mainSlider11 = new Swiper(mainSliderSelector11, mainSliderOptions11);

	// thumb Slider
	let thumbSliderOptions11 = {
		loop: true,
		loopAdditionalSlides: 4,
		speed: 1500,
		centeredSlides: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		direction: 'vertical',
		breakpoints: {
			200: {
				slidesPerView: 6,
			},
			768: {
				slidesPerView: 6,
			},
			1200: {
				slidesPerView: 5,
			},
		},
	};
	let thumbSlider11 = new Swiper(thumbSliderSelector11, thumbSliderOptions11);

	mainSlider11.controller.control = thumbSlider11;
	thumbSlider11.controller.control = mainSlider11;
	/////////////////////////////////////////////////////

	////portfolio-slider
	$('.tp-portfolio-11-slider-active').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa-light fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa-light fa-angle-right"></i></button>',
		arrows: true,
		fade: false,
		asNavFor: '.tp-portfolio-11-slider-nav-active',
		fade: true,
		speed: 1000,
	});

	var helpers = {
		addZeros: function (n) {
			return (n < 10) ? '0' + n : '' + n;
		}
	};

	function sliderInit() {
		var $slider = $('.tp-portfolio-11-slider-nav-active');
		$slider.each(function () {
			var $sliderParent = $(this).parent();
			$(this).slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				asNavFor: '.tp-portfolio-11-slider-active',
				arrows: true,
				prevArrow: '<button type="button" class="slick-prev"><i class="fa-light fa-angle-left"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="fa-light fa-angle-right"></i></button>',
				dots: false,
				focusOnSelect: true,
				centerPadding: '0',
				speed: 600,
				responsive: [
					{
						breakpoint: 1600,
						settings: {
							slidesToShow: 3,
						}
					},
					{
						breakpoint: 1400,
						settings: {
							slidesToShow: 2,
						}
					},
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 2,
						}
					},
					{
						breakpoint: 992,
						settings: {
							arrows: false,
							slidesToShow: 4,
						}
					},
					{
						breakpoint: 768,
						settings: {
							arrows: false,
							slidesToShow: 4,
						}
					},
					{
						breakpoint: 768,
						settings: {
							arrows: false,
							slidesToShow: 4,
						}
					},
					{
						breakpoint: 480,
						settings: {
							arrows: false,
							slidesToShow: 4,
						}
					},
				]
			});

			if ($(this).find('.tp-portfolio-11-slider-nav-item').length > 1) {
				$(this).siblings('.slides-numbers').show();
			}
			$(this).on('afterChange', function (event, slick, currentSlide) {
				$sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
			});

		});
	};
	sliderInit();






	var text_slider_option = document.querySelector(".tp-line-text-slide");

	if (text_slider_option) {

		var text_slider_speed = 9000
		var text_slider_autoplay = true
		var loop_value = true
		var data_itemshow = "auto"

		if (text_slider_option.getAttribute("data-sliderSpeed")) {
			text_slider_speed = parseInt(text_slider_option.getAttribute("data-sliderSpeed"));
		}
		if (text_slider_option.getAttribute("data-autoPlay")) {
			text_slider_autoplay = text_slider_option.getAttribute("data-autoPlay")
		}

		if (text_slider_option.getAttribute("data-loop")) {
			loop_value = text_slider_option.getAttribute("data-loop")
		}
		if (text_slider_option.getAttribute("data-itemShow")) {
			data_itemshow = text_slider_option.getAttribute("data-itemShow")
		}

		if (text_slider_autoplay == 'true') {
			var text_slider = new Swiper(".tp-line-text-slide", {
				loop: loop_value,
				speed: 9000,
				allowTouchMove: false,
				slidesPerView: data_itemshow,
				spaceBetween: 0,
				autoplay: {
					delay: 0,
					disableOnInteraction: true,
				}
			});
		}
		else {
			var text_slider = new Swiper(".tp-line-text-slide", {
				loop: loop_value,
				speed: 9000,
				allowTouchMove: false,
				slidesPerView: data_itemshow,
				spaceBetween: 0,
				autoplay: false,
			});
		}
	};


	var text_slider_option = document.querySelector(".tp-img-slide");
	if (text_slider_option) {

		var text_slider_speed = 5000
		var text_slider_autoplay = false
		var loop_value = true
		var data_itemshow = "auto"


		if (text_slider_autoplay) {
			var swiper = new Swiper(".tp-img-slide", {
				spaceBetween: 40,
				centeredSlides: false,
				allowTouchMove: false,
				speed: 5000,
				slidesPerView: 'auto',
				loop: true,
				autoplay: {
					delay: 0,
					disableOnInteraction: false,
				}
			});
		}
		else {

			var swiper = new Swiper(".tp-img-slide", {
				spaceBetween: 40,
				centeredSlides: false,
				allowTouchMove: false,
				speed: 5000,
				slidesPerView: 'auto',
				loop: true,
				autoplay: {
					delay: 0,
					disableOnInteraction: false,
				}
			});

		}
	};

	////////////////////////////////////////////////////
	// 15. Masonary Js
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			layoutMode: 'fitRows',
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.grid-item',
			}
		});


		// filter items on button click
		$('.masonary-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$('.masonary-menu button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});

	////////////////////////////////////////////////////
	// 15. Masonary Js
	$('.grid-2').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid-2').isotope({
			itemSelector: '.grid-item-2',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.grid-item-2',
			}
		});


		// filter items on button click
		$('.masonary-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$('.masonary-menu button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});

	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});


	if ($('.scene').length > 0) {
		$('.scene').parallax({
			scalarX: 5.0,
			scalarY: 5.0,
		});
	};

	function tp_ecommerce() {
		$('.tp-cart-minus').on('click', function () {
			var $input = $(this).parent().find('input');
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});

		$('.tp-cart-plus').on('click', function () {
			var $input = $(this).parent().find('input');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
		});

		$('.tp-checkout-payment-item label').on('click', function () {
			$(this).siblings('.tp-checkout-payment-desc').slideToggle(400);

		});


		$('.tp-color-variation-btn').on('click', function () {
			$(this).addClass('active').siblings().removeClass('active');
		});


		$('.tp-size-variation-btn').on('click', function () {
			$(this).addClass('active').siblings().removeClass('active');
		});

		////////////////////////////////////////////////////
		// 17. Show Login Toggle Js
		$('.tp-checkout-login-form-reveal-btn').on('click', function () {
			$('#tpReturnCustomerLoginForm').slideToggle(400);
		});

		////////////////////////////////////////////////////
		// 18. Show Coupon Toggle Js
		$('.tp-checkout-coupon-form-reveal-btn').on('click', function () {
			$('#tpCheckoutCouponForm').slideToggle(400);
		});

		////////////////////////////////////////////////////
		// 19. Create An Account Toggle Js
		$('#cbox').on('click', function () {
			$('#cbox_info').slideToggle(900);
		});

		////////////////////////////////////////////////////
		// 20. Shipping Box Toggle Js
		$('#ship-box').on('click', function () {
			$('#ship-box-info').slideToggle(1000);
		});
	}
	tp_ecommerce();

	////////////////////////////////////////////////////
	// 17. Counter Js
	new PureCounter();
	new PureCounter({
		filesizing: true,
		selector: ".filesizecount",
		pulse: 2,
	});

	////////////////////////////////////////////////////
	// 18. InHover Active Js
	$('.hover__active').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.hover__active').removeClass('active');
	});

	$('.activebsba').on("click", function () {
		$('#services-item-thumb').removeClass().addClass($(this).attr('rel'));
		$(this).addClass('active').siblings().removeClass('active');
	});


	////////////////////////////////////////////////////
	// 19. Line Animation Js
	if ($('#marker').length > 0) {
		function tp_tab_line() {
			var marker = document.querySelector('#marker');
			var item = document.querySelectorAll('.menu-style-3  > nav > ul > li');
			var itemActive = document.querySelector('.menu-style-3  > nav > ul > li.active');

			function indicator(e) {
				marker.style.left = e.offsetLeft + "px";
				marker.style.width = e.offsetWidth + "px";
			}


			item.forEach(link => {
				link.addEventListener('mouseenter', (e) => {
					indicator(e.target);
				});

			});


			var activeNav = $('.menu-style-3 > nav > ul > li.active');
			var activewidth = $(activeNav).width();
			var activePadLeft = parseFloat($(activeNav).css('padding-left'));
			var activePadRight = parseFloat($(activeNav).css('padding-right'));
			var totalWidth = activewidth + activePadLeft + activePadRight;

			var precedingAnchorWidth = anchorWidthCounter();


			$(marker).css('display', 'block');

			$(marker).css('width', totalWidth);

			function anchorWidthCounter() {
				var anchorWidths = 0;
				var a;
				var aWidth;
				var aPadLeft;
				var aPadRight;
				var aTotalWidth;
				$('.menu-style-3 > nav > ul > li').each(function (index, elem) {
					var activeTest = $(elem).hasClass('active');
					marker.style.left = elem.offsetLeft + "px";
					if (activeTest) {
						// Break out of the each function.
						return false;
					}

					a = $(elem).find('li');
					aWidth = a.width();
					aPadLeft = parseFloat(a.css('padding-left'));
					aPadRight = parseFloat(a.css('padding-right'));
					aTotalWidth = aWidth + aPadLeft + aPadRight;

					anchorWidths = anchorWidths + aTotalWidth;

				});

				return anchorWidths;
			}
		}
		tp_tab_line();
	}


	if ($('#productTabMarker').length > 0) {
		function tp_tab_line_2() {
			var marker = document.querySelector('#productTabMarker');
			var item = document.querySelectorAll('.tp-product-tab button');
			var itemActive = document.querySelector('.tp-product-tab .nav-link.active');

			// rtl settings
			var tp_rtl = localStorage.getItem('tp_dir');
			let rtl_setting = tp_rtl == 'rtl' ? 'right' : 'left';

			function indicator(e) {
				marker.style.left = e.offsetLeft + "px";
				marker.style.width = e.offsetWidth + "px";
			}


			item.forEach(link => {
				link.addEventListener('click', (e) => {
					indicator(e.target);
				});
			});

			var activeNav = $('.nav-link.active');
			var activewidth = $(activeNav).width();
			var activePadLeft = parseFloat($(activeNav).css('padding-left'));
			var activePadRight = parseFloat($(activeNav).css('padding-right'));
			var totalWidth = activewidth + activePadLeft + activePadRight;

			var precedingAnchorWidth = anchorWidthCounter();


			$(marker).css('display', 'block');

			$(marker).css('width', totalWidth);

			function anchorWidthCounter() {
				var anchorWidths = 0;
				var a;
				var aWidth;
				var aPadLeft;
				var aPadRight;
				var aTotalWidth;
				$('.tp-product-tab button').each(function (index, elem) {
					var activeTest = $(elem).hasClass('active');
					marker.style.left = elem.offsetLeft + "px";
					if (activeTest) {
						// Break out of the each function.
						return false;
					}

					a = $(elem).find('button');
					aWidth = a.width();
					aPadLeft = parseFloat(a.css('padding-left'));
					aPadRight = parseFloat(a.css('padding-right'));
					aTotalWidth = aWidth + aPadLeft + aPadRight;

					anchorWidths = anchorWidths + aTotalWidth;

				});

				return anchorWidths;
			}
		}
		tp_tab_line_2();
	}

	////////////////////////////////////////////////////
	// 20. Video Play Js
	var play = false;
	$('.tp-video-toggle-btn').on('click', function () {

		if (play === false) {
			$('.tp-slider-video').addClass('full-width');
			$(this).addClass('hide');
			play = true;

			$('.tp-slider-video').find('video').each(function () {
				$(this).get(0).play();
			});
		} else {
			$('.tp-slider-video').removeClass('full-width');
			$(this).removeClass('hide');
			play = false;
			$('.tp-slider-video').find('video').each(function () {
				$(this).get(0).pause();
			});
		}

	});

	////////////////////////////////////////////////////
	// 21. Password Toggle Js
	if ($('#password-show-toggle').length > 0) {
		var btn = document.getElementById('password-show-toggle');

		btn.addEventListener('click', function (e) {

			var inputType = document.getElementById('tp_password');
			var openEye = document.getElementById('open-eye');
			var closeEye = document.getElementById('close-eye');

			if (inputType.type === "password") {
				inputType.type = "text";
				openEye.style.display = 'block';
				closeEye.style.display = 'none';
			} else {
				inputType.type = "password";
				openEye.style.display = 'none';
				closeEye.style.display = 'block';
			}
		});
	}

	if ($('.tp-header-height').length > 0) {
		var headerHeight = document.querySelector(".tp-header-height");
		var setHeaderHeight = headerHeight.offsetHeight;

		$(".tp-header-height").each(function () {
			$(this).css({
				'height': setHeaderHeight + 'px'
			});
		});
	}
	// Jquery Appear raidal
	if (typeof ($.fn.knob) != 'undefined') {
		$('.knob').each(function () {
			var $this = $(this),
				knobVal = $this.attr('data-rel');

			$this.knob({
				'draw': function () {
					$(this.i).val(this.cv + '%')
				}
			});

			$this.appear(function () {
				$({
					value: 0
				}).animate({
					value: knobVal
				}, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.val(Math.ceil(this.value)).trigger('change');
					}
				});
			}, {
				accX: 0,
				accY: -150,
			});
		});
	}

	$('.tp-award-list-wrap .tp-award-list-item').on("mouseenter", function () {
		$('#tp-award-thumb').removeClass().addClass($(this).attr('rel'));
		$(this).addClass('active').siblings().removeClass('active');
	});

	$('.tp-porfolio-10-title-wrap > ul > li').on('mouseenter', function(){
		$(this).siblings().removeClass('active');
		const rel = $(this).attr('rel');
		$(this).addClass('active');
		$('#tp-porfolio-10-bg-box').removeClass().addClass(rel);
	})


	
	if($('#smooth-wrapper').length && $('#smooth-content').length){
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin);
	
		gsap.config({
			nullTargetWarn: false,
		});
	
		let smoother = ScrollSmoother.create({
			smooth: 2,
			effects: true,
			smoothTouch: 0.1,
			normalizeScroll: false,
			ignoreMobileResize: true,
		});

	}

	/////////////////////////////////////////////////////
	// 32. Menu Text Animation
	document.querySelectorAll('.tp-text-anim > li > a').forEach(button => button.innerHTML = '<div class="tp-menu-text"><span>' + button.textContent.split('').join('</span><span>') + '</span></div>');

	setTimeout(() => {
		var menu_text = document.querySelectorAll(".tp-menu-text span")
		menu_text.forEach((item) => {
			var font_sizes = window.getComputedStyle(item, null);
			let font_size = font_sizes.getPropertyValue("font-size");
			let size_in_number = parseInt(font_size.replace("px", ""));
			let new_size = parseInt(size_in_number / 3)
			new_size = new_size + "px"
			if (item.innerHTML == " ") {
				item.style.width = new_size
			}
		})

	}, 1000)


	$('.accordion-button').on('click', function () {
		ScrollTrigger.refresh();
	});


	let zm = gsap.matchMedia();
	zm.add("(min-width: 1200px)", () => {
		if ($('.tp-hero-area').length > 0) {
			// Testimonial 3 Image Animation
			gsap.set(".tp-zoom-img", { scale: 0, opacity: 0 });

			gsap.to(".tp-zoom-img", {
				scrollTrigger: {
					trigger: ".tp-hero-area",
					start: "center center",
					markers: false
				},
				duration: 1.5,
				ease: "none",
				scale: 1,
				opacity: 1,
			})

		}
	});




	if ($('.tp-btn-trigger').length > 0) {

		gsap.set(".tp-btn-bounce", { y: -100, opacity: 0 });
		var mybtn = gsap.utils.toArray(".tp-btn-bounce");
		mybtn.forEach((btn) => {
			var $this = $(btn);
			gsap.to(btn, {
				scrollTrigger: {
					trigger: $this.closest('.tp-btn-trigger'),
					start: "top center",
					markers: false
				},
				duration: 1,
				ease: "bounce.out",
				y: 0,
				opacity: 1,
			})
		});

	}

	if ($('.tp-hero-2-area').length > 0) {

		gsap.set(".tp-hero-2-title.text-1", { x: 300, });
		gsap.to(".tp-hero-2-title.text-1", {
			scrollTrigger: {
				trigger: ('.tp-hero-2-area'),
				start: "top center",
				markers: false
			},
			duration: 1.7,
			x: 0,
		});

		gsap.set(".tp-hero-2-title.text-2", { x: -300, });
		gsap.to(".tp-hero-2-title.text-2", {
			scrollTrigger: {
				trigger: ('.tp-hero-2-area'),
				start: "top center",
				markers: false
			},
			duration: 1.7,
			x: 0,
		});

		gsap.set(".tp-hero-2-content", { x: -500, });
		gsap.to(".tp-hero-2-content", {
			scrollTrigger: {
				trigger: ('.tp-hero-2-area'),
				start: "top center",
				markers: false
			},
			duration: 2,
			x: 0,
		});
	}

	let ab = gsap.matchMedia();
	ab.add("(min-width: 768px)", () => {

		if ($('.tp-about-2-area').length > 0) {

			gsap.set(".tp-about-2-thumb-main", { rotation: 0, });
			gsap.to(".tp-about-2-thumb-main", {
				scrollTrigger: {
					trigger: ('.tp-about-2-area'),
					start: "top top",
					markers: false
				},
				duration: 1,
				rotation: -10,
			});

			gsap.set(".tp-about-2-thumb-inner", { rotation: 0, });
			gsap.to(".tp-about-2-thumb-inner", {
				scrollTrigger: {
					trigger: ('.tp-about-2-area'),
					start: "top top",
					markers: false
				},
				duration: 1,
				rotation: 12,
			});
		}

	});


	if ($('.tp-hero-bottom-img-wrap').length > 0) {
		let ms = gsap.matchMedia();
		ms.add("(min-width: 768px)", () => {
			// Home 8
			let tp_hero = gsap.timeline({
				scrollTrigger: {
					trigger: ".tp-hero-bottom-img-wrap",
					start: "top 70",
					pin: true,
					markers: false,
					scrub: 1,
					pinSpacing: false,
					end: "bottom 50%",
				}
			});
			tp_hero.to(".tp-hero-bottom-img", {
				width: "100%",
			});
		});
	}




	// Home 8


	if ($('.tp-video-area').length > 0) {

		let mm = gsap.matchMedia();
		mm.add("(min-width: 1400px)", () => {
			let tp_hero_2 = gsap.timeline({
				scrollTrigger: {
					trigger: ".tp-video-area",
					start: "top 170",
					pin: true,
					markers: false,
					scrub: 1,
					pinSpacing: false,
					end: "bottom 70%",
				}
			});
			tp_hero_2.to(".tp-video-wrap", {
				width: "1110px",
				height: "560px",
	
			});
		});
	}


	if ($('.tp-instagram-area').length > 0) {
		let ins = gsap.matchMedia();
		ins.add("(min-width: 1200px)", () => {

			// Home 8
			let tp_instagram_3 = gsap.timeline({
				scrollTrigger: {
					trigger: ".tp-instagram-area",
					start: "top 30%",
					pin: true,
					markers: false,
					scrub: 1,
					pinSpacing: false,
					end: "bottom 100%",
					duration: 3,
					
				}
			});
			tp_instagram_3.to(".tp-instagram-thumb img", {
				width: "580px",
				height: "580px",
				borderRadius: "10px",
			});
	
		});
	}




	if ($('.tp-project-full-img-wrap').length > 0) {
		ScrollTrigger.create({
			trigger: ".tp-project-full-img-wrap",
			start: "top 65",
			end: "bottom 0%",
			pin: ".tp-project-full-img",
			pinSpacing: false,
		});
	}


	// portfolio scroll effect start
	var controller = new ScrollMagic.Controller();

	var $elheight = window.innerHeight;
	$('.tp-project-effect, .tp-team-area, .tp-award-2-area, .tp-service-4-area, .showcase-details-2-slider-wrap ').each(function () {
		var $this = $(this);
		var $thisHeight = $(this).height();

		var scene = new ScrollMagic.Scene({
			triggerElement: $this[0], duration: $thisHeight
		}).addTo(controller);

		scene.triggerHook(0.9)

		scene.on('enter', function () {
			$this.addClass('active');
		});

		if ($("body").hasClass("smooth-scroll")) {
			scrollbar.addListener(() => {
				scene.refresh()
			});
		}
	})

	let mv = gsap.matchMedia();
	mv.add("(min-width: 768px)", () => {
		// Moving Gallery		
		gsap.utils.toArray('.moving-gallery').forEach((section, index) => {
			const w = section.querySelector('.wrapper-gallery');
			const [x, xEnd] = (index % 2) ? [(section.offsetWidth - w.scrollWidth), 0] : [0, section.offsetWidth - w.scrollWidth];
			gsap.fromTo(w, { x }, {
				x: xEnd,
				scrollTrigger: {
					trigger: section,
					scrub: 0.5,
				}
			});
		});
	});




	/* portfolio animation start */
	if ($('.tp-team-item').length > 0) {
		gsap.set('.tp-project-textline', {
			x: '25%'
		});

		gsap.timeline({
			scrollTrigger: {
				trigger: '.tp-project-textline ',
				start: '-1500 10%',
				end: 'bottom 20%',
				scrub: true,
				invalidateOnRefresh: true
			}
		})
			.to('.tp-project-textline ', {
				x: '-80%'
			});
	}

	/* portfolio animation start */
	if ($('.tp-award-2-area').length > 0) {

		gsap.timeline({
			scrollTrigger: {
				trigger: '.tp-award-2-area ',
				start: 'top 100%',
				end: 'bottom 20%',
				scrub: true,
				invalidateOnRefresh: true
			}
		})
			.to('.tp-award-title-1 ', {
				x: '-15%'
			});
		gsap.set('.tp-award-title-1', {
			x: '10%'
		});

	}

	/* portfolio animation start */
	if ($('.tp-award-2-area').length > 0) {
		gsap.timeline({
			scrollTrigger: {
				trigger: '.tp-award-2-area ',
				start: 'top 100%',
				end: 'bottom 20%',
				scrub: true,
				invalidateOnRefresh: true
			}
		})
			.to('.tp-award-title-2 ', {
				x: '15%'
			});
		gsap.set('.tp-award-title-2', {
			x: '-10%'
		});
	}


	/* portfolio animation start */
	if ($('.tp-team-item').length > 0) {
		gsap.set('.tp-team-item.marque', {
			x: '25%'
		});

		gsap.timeline({
			scrollTrigger: {
				trigger: '.tp-team-area ',
				start: '-1000 10%',
				end: 'bottom 20%',
				scrub: true,
				invalidateOnRefresh: true
			}
		})
			.to('.tp-team-item.marque ', {
				x: '-100%'
			});
	}

	/* portfolio animation start */
	if ($('.tp-service-4-item').length > 0) {
		gsap.set('.tp-team-item', {
			x: '25%'
		});

		gsap.timeline({
			scrollTrigger: {
				trigger: '.tp-service-4-area',
				start: '-1000 10%',
				end: '1000 30%',
				scrub: true,
				invalidateOnRefresh: true
			}
		})
			.to('.tp-service-4-item ', {
				x: '-200%'
			});
	}


	if ($('.tp-gsap-bg').length > 0) {
		gsap.set(".tp-gsap-bg", { scale: 1 });
		let mm = gsap.matchMedia();
		mm.add("(min-width:1400px)", () => {
			gsap.to(".tp-gsap-bg", {
				scrollTrigger: {
					trigger: ".tp-gsap-bg",
					scrub: 0.05,
					start: "top bottom",
					end: "bottom bottom",
				},
				scale: 1,
				transformOrigin: "center center",
				ease: "none",
			});
		})
	}

	if ($('.tp-hero-bg-single').length > 0) {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from(".tp-hero-bg-single", {
			scale: 1.3,
			duration: 1.5,
		});
	}

	let pp = gsap.matchMedia();
	pp.add("(min-width: 1200px)", () => {
		const panelsSections = gsap.utils.toArray(".panels");
		for (var i = 0; i < panelsSections.length; i++) {

			var thePanelsSection = panelsSections[i];
			const panels = gsap.utils.toArray(".panels-container .panel", thePanelsSection);
			const panelsContainer = thePanelsSection.querySelector(".panels-container");

			gsap.set(panelsContainer, { height: window.innerHeight });
			gsap.set(panels, { height: window.innerHeight });

			var totalPanelsWidth = 0;
			panels.forEach(function (panel) {
				totalPanelsWidth += $(panel).width();
			});

			gsap.set(panelsContainer, { width: totalPanelsWidth });
			gsap.to(panels, {
				x: - totalPanelsWidth + innerWidth,
				ease: "none",
				scrollTrigger: {
					trigger: panelsContainer,
					pin: true,
					start: "top 140",
					scrub: 1,
					end: (st) => "+=" + (st.vars.trigger.offsetWidth - innerWidth),
				}
			});

		}
	});

	let pp_2 = gsap.matchMedia();
	pp_2.add("(min-width: 1200px)", () => {

		const panelsSectionss = gsap.utils.toArray(".panels-2");
		for (var i = 0; i < panelsSectionss.length; i++) {

			var thePanelsSection = panelsSectionss[i];
			const panels = gsap.utils.toArray(".panels-container-2 .panel-2", thePanelsSection);
			const panelsContainer = thePanelsSection.querySelector(".panels-container-2");

			gsap.set(panelsContainer, { height: window.innerHeight });
			gsap.set(panels, { height: window.innerHeight });

			var totalPanelsWidth = 0;
			panels.forEach(function (panel) {
				totalPanelsWidth += $(panel).width();
			});


			gsap.set(panelsContainer, { width: totalPanelsWidth });
			let scrollTween = gsap.to(panels, {
				x: - totalPanelsWidth + innerWidth,
				ease: "none",
				scrollTrigger: {
					trigger: panelsContainer,
					pin: true,
					pinSpacing: true,
					start: "top 0",
					scrub: 1,
					end: (st) => "+=" + totalPanelsWidth,
				}
			});

			const services_items = gsap.utils.toArray(".tp-studio-service-item");

			services_items.forEach(function (item) {
				gsap.to(item, {
					marginLeft: '0',
					scrollTrigger: {
						trigger: '.tp-studio-service-area',
						containerAnimation: scrollTween,
						start: "left center",
						end: "400px 200px",
						scrub: .5,
					}
				})
			});
		}

	});

	let pp_3 = gsap.matchMedia();
	pp_3.add("(min-width: 1200px)", () => {

		const panelsSectionss = gsap.utils.toArray(".panels-3");
		for (var i = 0; i < panelsSectionss.length; i++) {

			var thePanelsSection = panelsSectionss[i];
			const panels = gsap.utils.toArray(".panels-container-3 .panel-3", thePanelsSection);
			const panelsContainer = thePanelsSection.querySelector(".panels-container-3");

			gsap.set(panelsContainer, { height: window.innerHeight });
			gsap.set(panels, { height: window.innerHeight });

			var totalPanelsWidth = 0;
			panels.forEach(function (panel) {
				totalPanelsWidth += $(panel).width();
			});

			gsap.set(panelsContainer, { width: totalPanelsWidth });
			let scrollTween = gsap.to(panels, {
				x: - totalPanelsWidth + innerWidth,
				ease: "none",
				scrollTrigger: {
					trigger: panelsContainer,
					pin: true,
					pinSpacing: true,
					start: "top 100px",
					scrub: 1,
					end: (st) => "+=" + totalPanelsWidth,
				}
			});

			const services_items = gsap.utils.toArray(".tp-portfolio-12-slider-item");

			services_items.forEach(function (item) {
				gsap.to(item, {
					marginLeft: '0',
					scrollTrigger: {
						trigger: '.tp-portfolio-12-main-wrap',
						containerAnimation: scrollTween,
						start: "left 100%",
						end: "left -200px",
						scrub: 1,
					}
				})
			});
		}

	});




	if ($('.tp-award-2-area').length > 0) {
		let sections_2 = gsap.utils.toArray(".tp-award-2-area");
		let listItem_2 = gsap.utils.toArray(".tpaward");
		sections_2.forEach((section, index) => {
			ScrollTrigger.create({
				trigger: section,
				markers: false,
				start: 'top 98%',
				end: 'bottom -100%',
				toggleClass: { targets: listItem_2[index], className: "addclass" }
			});
		})
	}

	let pj = gsap.matchMedia();
	pj.add("(min-width: 992px)", () => {
		if ($('.tp-project-2-area').length > 0) {

			let sections = gsap.utils.toArray(".tp-project-2-area");
			let listItem = gsap.utils.toArray(".tpproject");
			sections.forEach((section, index) => {
				ScrollTrigger.create({
					trigger: section,
					markers: false,
					start: 'bottom 115%',
					end: 'bottom -100%',
					toggleClass: { targets: listItem[index], className: "addclass" }
				});
			});

		}
	});

	// Text Invert With Scroll 
	const split = new SplitText(".tp_text_invert", { type: "lines" });

	split.lines.forEach((target) => {
		gsap.to(target, {
			backgroundPositionX: 0,
			ease: "none",
			scrollTrigger: {
				trigger: target,
				scrub: 1,
				start: 'top 85%',
				end: "bottom center"
			}
		});
	});


	if ($('.tp-project-3-wrap').length > 0) {

		let pw = gsap.matchMedia();
		pw.add("(min-width: 1200px)", () => {
	
			gsap.set('.tp-project-3-wrap .pro-img-1 img', {
				x: '500',
			})
			gsap.set('.tp-project-3-wrap .pro-img-2 img', {
				x: '-500',
			})
	
			let projects = gsap.utils.toArray(".tp-project-3-wrap");
	
			projects.forEach((item) => {
				var $this = $(item);
	
				gsap.to($this.find('.pro-img-1 img'), {
					x: '0',
					scrollTrigger: {
						trigger: $this,
						start: 'top 18%',
						end: 'bottom 10%',
						scrub: 1,
						pin: true,
						transformOrigin: "50% 50%"
					},
				})
	
				gsap.to($this.find('.pro-img-2 img'), {
					x: '0',
					scrollTrigger: {
						trigger: $this,
						start: 'top 18%',
						end: 'bottom 10%',
						scrub: 1,
						pin: false,
						transformOrigin: "50% 50%"
					},
				})
			});
	
		});
	}


	if ($('.tp-header-3-area').length > 0) {
		let menuBox = $('.tp-header-3-menu-box')
		let menuBoxWidth = menuBox.width()
		let menuBoxHeight = menuBox.height()
		$('.menu-bg').css({
			'width': menuBoxWidth + 46,
			'height': menuBoxHeight,
			'left': menuBox.offset().left
		})
	}



	//Reveal Animation 
	const anim_reveal = document.querySelectorAll(".tp_reveal_anim");
	anim_reveal.forEach(areveal => {

		var duration_value = 1.5;
		var onscroll_value = 1;
		var stagger_value = 0.02;
		var data_delay = 0.05;

		if (areveal.getAttribute("data-duration")) {
			duration_value = areveal.getAttribute("data-duration");
		}
		if (areveal.getAttribute("data-on-scroll")) {
			onscroll_value = areveal.getAttribute("data-on-scroll");
		}
		if (areveal.getAttribute("data-stagger")) {
			stagger_value = areveal.getAttribute("data-stagger");
		}
		if (areveal.getAttribute("data-delay")) {
			data_delay = areveal.getAttribute("data-delay");
		}

		areveal.split = new SplitText(areveal, {
			type: "lines,words,chars",
			linesClass: "tp-reveal-line"
		});

		if (onscroll_value == 1) {
			areveal.anim = gsap.from(areveal.split.chars, {
				scrollTrigger: {
					trigger: areveal,
					start: 'top 85%',
					end: 'bottom 15%',
					toggleActions: 'play reverse play reverse'
				},
				duration: duration_value,
				delay: data_delay,
				ease: "circ.out",
				y: 200,
				stagger: stagger_value,
				opacity: 0,
			});
		} else {
			areveal.anim = gsap.from(areveal.split.chars, {
				duration: duration_value,
				delay: data_delay,
				ease: "circ.out",
				y: 200,
				stagger: stagger_value,
				opacity: 0,
			});
		}

	});


	//Reveal Animation 
	const anim_reveal2 = document.querySelectorAll(".tp_reveal_anim-2");
	anim_reveal2.forEach(areveal => {

		var duration_value = 2
		var onscroll_value = 1
		var stagger_value = 0.05
		var data_delay = 0.1

		if (areveal.getAttribute("data-duration")) {
			duration_value = areveal.getAttribute("data-duration");
		}
		if (areveal.getAttribute("data-on-scroll")) {
			onscroll_value = areveal.getAttribute("data-on-scroll");
		}
		if (areveal.getAttribute("data-stagger")) {
			stagger_value = areveal.getAttribute("data-stagger");
		}
		if (areveal.getAttribute("data-delay")) {
			data_delay = areveal.getAttribute("data-delay");
		}

		areveal.split = new SplitText(areveal, {
			type: "lines,words,chars",
			linesClass: "tp-reveal-line-2"
		});

		if (onscroll_value == 1) {
			areveal.anim = gsap.from(areveal.split.chars, {
				scrollTrigger: {
					trigger: areveal,
					start: 'top 85%',
				},
				duration: duration_value,
				delay: data_delay,
				ease: "circ.out",
				y: 200,
				stagger: stagger_value,
				opacity: 0,
			});
		} else {
			areveal.anim = gsap.from(areveal.split.chars, {
				duration: duration_value,
				delay: data_delay,
				ease: "circ.out",
				y: 200,
				stagger: stagger_value,
				opacity: 0,
			});
		}

	});


	/////////////////////////////////////////////////////
	// animation

	if ($('.footer-big-text').length > 0) {

		let cta = gsap.timeline({
			repeat: -1,
			delay: 0.5,
			scrollTrigger: {
				trigger: '.footer-big-text',
				start: 'bottom 100%-=50px'
			}
		});
		gsap.set('.footer-big-text', {
			opacity: 0
		});
		gsap.to('.footer-big-text', {
			opacity: 1,
			duration: 1,
			ease: 'power1.out',
			scrollTrigger: {
				trigger: '.footer-big-text',
				start: 'bottom 100%-=50px',
				once: true
			}
		});
	
		let mySplitText = new SplitText(".footer-big-text", { type: "words,chars" });
		let chars = mySplitText.chars;
		let endGradient = chroma.scale(['#FFF', '#FFF', '#FFF', '#FFF', '#FFF']);
		cta.to(chars, {
			duration: 0.5,
			scaleY: 0.6,
			ease: "power1.out",
			stagger: 0.04,
			transformOrigin: 'center bottom'
		});
		cta.to(chars, {
			yPercent: -20,
			ease: "elastic",
			stagger: 0.03,
			duration: 0.8
		}, 0.5);
		cta.to(chars, {
			scaleY: 1,
			ease: "elastic.out",
			stagger: 0.03,
			duration: 1.5
		}, 0.5);
		cta.to(chars, {
			color: (i, el, arr) => {
				return endGradient(i / arr.length).hex();
			},
			ease: "power1.out",
			stagger: 0.03,
			duration: 0.3
		}, 0.5);
		cta.to(chars, {
			yPercent: 0,
			ease: "back",
			stagger: 0.03,
			duration: 0.8
		}, 0.7);
		cta.to(chars, {
			color: '#fff',
			duration: 1.4,
			stagger: 0.05
		});
	}

	if ($('.cta-text').length > 0) {

		let cta = gsap.timeline({
			repeat: -1,
			delay: 0.5,
			scrollTrigger: {
				trigger: '.cta-text',
				start: 'bottom 100%-=50px'
			}
		});
		gsap.set('.cta-text', {
			opacity: 0
		});
		gsap.to('.cta-text', {
			opacity: 1,
			duration: 1,
			ease: 'power1.out',
			scrollTrigger: {
				trigger: '.cta-text',
				start: 'bottom 100%-=50px',
				once: true
			}
		});
	
		let mySplitText = new SplitText(".cta-text", { type: "words,chars" });
		let chars = mySplitText.chars;
		let endGradient = chroma.scale(['#FFB55E', '#F25164', '#7F00D7', '#EC38BC', '#F25164']);
		cta.to(chars, {
			duration: 0.5,
			scaleY: 0.6,
			ease: "power1.out",
			stagger: 0.04,
			transformOrigin: 'center bottom'
		});
		cta.to(chars, {
			yPercent: -20,
			ease: "elastic",
			stagger: 0.03,
			duration: 0.8
		}, 0.5);
		cta.to(chars, {
			scaleY: 1,
			ease: "elastic.out",
			stagger: 0.03,
			duration: 1.5
		}, 0.5);
		cta.to(chars, {
			color: (i, el, arr) => {
				return endGradient(i / arr.length).hex();
			},
			ease: "power1.out",
			stagger: 0.03,
			duration: 0.3
		}, 0.5);
		cta.to(chars, {
			yPercent: 0,
			ease: "back",
			stagger: 0.03,
			duration: 0.8
		}, 0.7);
		cta.to(chars, {
			color: '#fff',
			duration: 1.4,
			stagger: 0.05
		});
	}


	if ($('.tp-char-animation').length > 0) {
		// 25. Title Animation
		let char_come = gsap.utils.toArray(".tp-char-animation");
		char_come.forEach(splitTextLine => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: splitTextLine,
					start: 'top 90%',
					end: 'bottom 60%',
					scrub: false,
					markers: false,
					toggleActions: 'play none none none'
				}
			});

			const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
			gsap.set(splitTextLine, { perspective: 300 });
			itemSplitted.split({ type: "chars, words" })
			tl.from(itemSplitted.chars,
				{
					duration: 1,
					delay: 0.5,
					x: 100,
					autoAlpha: 0,
					stagger: 0.05
				});
		});
	}

	if ($('.tp-btn-trigger').length > 0) {

		gsap.set(".tp-btn-bounce", { y: -100, opacity: 0 });
		var mybtn = gsap.utils.toArray(".tp-btn-bounce");
		mybtn.forEach((btn) => {
			var $this = $(btn);
			gsap.to(btn, {
				scrollTrigger: {
					trigger: $this.closest('.tp-btn-trigger'),
					start: "bottom bottom",
					markers: false
				},
				duration: .9,
				delay: 4,
				ease: "bounce.out",
				y: 0,
				opacity: 1,
			})
		});

	}

	let pr = gsap.matchMedia();
	pr.add("(min-width: 768px)", () => {

		let tl = gsap.timeline();
		let projectpanels = document.querySelectorAll('.project-panel')
		projectpanels.forEach((section, index) => {
			tl.to(section, {
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: 'top top',
					end: "bottom 100%",
					endTrigger: '.project-panel-area',
					pinSpacing: false,
					markers: false,
				},
			})
		})

	});


	let sv = gsap.matchMedia();
	const tl = gsap.timeline();
	sv.add("(min-width: 991px)", () => {
		let projectpanelss = document.querySelectorAll('.project-panel-2')
		projectpanelss.forEach((section, index) => {
			tl.to(section, {
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: 'top top',
					end: "bottom 100%",
					endTrigger: '.project-panel-area-2',
					pinSpacing: false,
					markers: false,
				},
			})
		})

	});

	if ($('.tp_fade_bottom').length > 0) {
		gsap.set(".tp_fade_bottom", { y: 100, opacity: 0 });
		const fadeArray = gsap.utils.toArray(".tp_fade_bottom")
		fadeArray.forEach((item, i) => {
			let fadeTl = gsap.timeline({
				scrollTrigger: {
					trigger: item,
					start: "top center+=400",
				}
			})
			fadeTl.to(item, {
				y: 0,
				opacity: 1,
				ease: "power2.out",
				duration: 1.5,
			})
		})
	}

	if ($('.tp_fade_top').length > 0) {
		gsap.set(".tp_fade_top", { y: -100, opacity: 0 });
		const fadetopArray = gsap.utils.toArray(".tp_fade_top")
		fadetopArray.forEach((item, i) => {
			let fadeTl = gsap.timeline({
				scrollTrigger: {
					trigger: item,
					start: "top center+=100",
				}
			})
			fadeTl.to(item, {
				y: 0,
				opacity: 1,
				ease: "power2.out",
				duration: 2.5,
			})
		})
	}


	if ($('.tp_fade_left').length > 0) {
		gsap.set(".tp_fade_left", { x: -100, opacity: 0 });
		const fadeleftArray = gsap.utils.toArray(".tp_fade_left")
		fadeleftArray.forEach((item, i) => {
			let fadeTl = gsap.timeline({
				scrollTrigger: {
					trigger: item,
					start: "top center+=100",
				}
			})
			fadeTl.to(item, {
				x: 0,
				opacity: 1,
				ease: "power2.out",
				duration: 2.5,
			})
		})
	}

	if ($('.tp_fade_right').length > 0) {
		gsap.set(".tp_fade_right", { x: 100, opacity: 0 });
		const faderightArray = gsap.utils.toArray(".tp_fade_right")
		faderightArray.forEach((item, i) => {
			let fadeTl = gsap.timeline({
				scrollTrigger: {
					trigger: item,
					start: "top center+=100",
				}
			})
			fadeTl.to(item, {
				x: 0,
				opacity: 1,
				ease: "power2.out",
				duration: 2.5,
			})
		})
	}



	// button hover animation
	$('.tp-hover-btn').on('mouseenter', function (e) {
		var x = e.pageX - $(this).offset().left;
		var y = e.pageY - $(this).offset().top;

		$(this).find('.tp-btn-circle-dot').css({
			top: y,
			left: x
		});
	});

	$('.tp-hover-btn').on('mouseout', function (e) {
		var x = e.pageX - $(this).offset().left;
		var y = e.pageY - $(this).offset().top;

		$(this).find('.tp-btn-circle-dot').css({
			top: y,
			left: x
		});
	});


	var hoverBtns = gsap.utils.toArray(".tp-hover-btn-wrapper");

	const hoverBtnItem = gsap.utils.toArray(".tp-hover-btn-item");
	hoverBtns.forEach((btn, i) => {
		$(btn).mousemove(function (e) {
			callParallax(e);
		});
		function callParallax(e) {
			parallaxIt(e, hoverBtnItem[i], 60);
		}

		function parallaxIt(e, target, movement) {
			var $this = $(btn);
			var relX = e.pageX - $this.offset().left;
			var relY = e.pageY - $this.offset().top;

			gsap.to(target, 1, {
				x: ((relX - $this.width() / 2) / $this.width()) * movement,
				y: ((relY - $this.height() / 2) / $this.height()) * movement,
				ease: Power2.easeOut,
			});
		}
		$(btn).mouseleave(function (e) {
			gsap.to(hoverBtnItem[i], 1, {
				x: 0,
				y: 0,
				ease: Power2.easeOut,
			});
		});
	});


	// button hover end

	/////////////////////////////////////////////////////
	// Image Reveal Animation
	let tp_img_reveal = document.querySelectorAll(".tp_img_reveal");

	tp_img_reveal.forEach((img_reveal) => {
		let image = img_reveal.querySelector("img");
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: img_reveal,
				start: "top 70%",
			}
		});

		tl.set(img_reveal, { autoAlpha: 1 });
		tl.from(img_reveal, 1.5, {
			xPercent: -100,
			ease: Power2.out
		});
		tl.from(image, 1.5, {
			xPercent: 100,
			scale: 1.5,
			delay: -1.5,
			ease: Power2.out
		});
	});

	/////////////////////////////////////////////////////
	const fadeArrayup = gsap.utils.toArray(".tp_fade_anim");
	fadeArrayup.forEach((t, e) => {
		var r = "bottom",
			a = 1,
			o = 1,
			i = 50,
			s = .5,
			l = "power2.out";
		t.getAttribute("data-fade-offset") && (i = t.getAttribute("data-fade-offset")), t.getAttribute("data-duration") && (o = t.getAttribute("data-duration")), t.getAttribute("data-fade-from") && (r = t.getAttribute("data-fade-from")), t.getAttribute("data-on-scroll") && (a = t.getAttribute("data-on-scroll")), t.getAttribute("data-delay") && (s = t.getAttribute("data-delay")), t.getAttribute("data-ease") && (l = t.getAttribute("data-ease")), 1 == a ? ("top" == r && gsap.from(t, {
			y: -i,
			opacity: 0,
			ease: l,
			duration: o,
			delay: s,
			scrollTrigger: {
				trigger: t,
				start: "top 110%"
			}
		}), "left" == r && gsap.from(t, {
			x: -i,
			opacity: 0,
			ease: l,
			duration: o,
			delay: s,
			scrollTrigger: {
				trigger: t,
				start: "top 110%"
			}
		}), "bottom" == r && gsap.from(t, {
			y: i,
			opacity: 0,
			ease: l,
			duration: o,
			delay: s,
			scrollTrigger: {
				trigger: t,
				start: "top 110%"
			}
		}), "right" == r && gsap.from(t, {
			x: i,
			opacity: 0,
			ease: l,
			duration: o,
			delay: s,
			scrollTrigger: {
				trigger: t,
				start: "top 110%"
			}
		}), "in" == r && gsap.from(t, {
			opacity: 0,
			ease: l,
			duration: o,
			delay: s,
			scrollTrigger: {
				trigger: t,
				start: "top 110%"
			}
		})) : ("top" == r && gsap.from(t, {
			y: -i,
			opacity: 0,
			ease: l,
			duration: o,
			delay: s
		}), "left" == r && gsap.from(t, {
			x: -i,
			opacity: 0,
			ease: l,
			duration: o,
			delay: s
		}), "bottom" == r && gsap.from(t, {
			y: i,
			opacity: 0,
			ease: l,
			duration: o,
			delay: s
		}), "right" == r && gsap.from(t, {
			x: i,
			opacity: 0,
			ease: l,
			duration: o,
			delay: s
		}), "in" == r && gsap.from(t, {
			opacity: 0,
			ease: l,
			duration: o,
			delay: s
		}))
	});

	if ($('.dddd').length > 0) {

		gsap.set('.dddd .tp-project-5-2-img-1', {
			x: '-500',
			scale: 2,
			opacity: 0,
			rotation: -15,
		})
		gsap.set('.dddd .tp-project-5-2-img-2', {
			x: '500',
			scale: 2,
			opacity: 0,
			rotation: 15,
		})

	}

	let projectsss = gsap.utils.toArray(".tp-project-5-2-areas");

	projectsss.forEach((item) => {
		var $this = $(item);

		gsap.to($this.find('.tp-project-5-2-img-1'), {
			x: '0',
			scale: 1,
			opacity: 1,
			rotation: 0,
			scrollTrigger: {
				trigger: $this,
				start: 'top 0%',
				end: 'bottom 20%',
				scrub: 1,
				pin: true,
				transformOrigin: "50% 50%"
			},
		})

		gsap.to($this.find('.tp-project-5-2-img-2'), {
			x: '0',
			scale: 1,
			opacity: 1,
			rotation: 0,
			scrollTrigger: {
				trigger: $this,
				start: 'top 0%',
				end: 'bottom 20%',
				scrub: 1,
				pin: false,
				transformOrigin: "50% 50%"
			},
		})
	});


	let ht = gsap.matchMedia();
	ht.add("(min-width: 576px)", () => {

		/* portfolio animation start */
		if ($('.tp-hero-5-area').length > 0) {

			gsap.timeline({
				scrollTrigger: {
					trigger: '.tp-hero-5-area ',
					start: 'top 30%',
					end: 'bottom 20%',
					scrub: true,
					invalidateOnRefresh: true
				}
			})
				.to('.tp-hero-5-title ', {
					x: '-25%'
				});
			gsap.set('.tp-hero-5-title', {
				x: '18%'
			});

		}

	});


	$('.tp-port-slider-title').on("mouseenter", function () {
		$('#tp-port-slider-wrap').removeClass().addClass($(this).attr('rel'));
		$(this).addClass('active').siblings().removeClass('active');
	});

	// skills tab
	if ($('#lineMarker').length > 0) {

		function tp_tab_line() {
			var marker = document.querySelector('#lineMarker');
			var item = document.querySelectorAll('.tp-studio-portfolio-wrap .tp-studio-portfolio-item');
			var itemActive = document.querySelector('.tp-marker-tab .tp-studio-portfolio-item');

			function indicator(e) {
				marker.style.left = e.offsetLeft + "px";
				marker.style.width = e.offsetWidth + "px";
			}


			item.forEach(link => {
				link.addEventListener('mouseenter', (e) => {
					indicator(e.target);
				});
			});

			var activeNav = $('.tp-studio-portfolio-item');
			var activewidth = $(activeNav).width();
			var activePadLeft = parseFloat($(activeNav).css('padding-left'));
			var activePadRight = parseFloat($(activeNav).css('padding-right'));
			var totalWidth = activewidth + activePadLeft + activePadRight;

			var precedingAnchorWidth = anchorWidthCounter();


			$(marker).css('display', 'block');

			$(marker).css('width', totalWidth);

			function anchorWidthCounter() {
				var anchorWidths = 0;
				var a;
				var aWidth;
				var aPadLeft;
				var aPadRight;
				var aTotalWidth;
				$('.tp-marker-tab .tp-studio-portfolio-item').each(function (index, elem) {
					var activeTest = $(elem).hasClass('active');
					marker.style.left = elem.offsetLeft + "px";
					if (activeTest) {
						// Break out of the each function.
						return false;
					}

					a = $(elem).find('.tp-studio-portfolio-item');
					aWidth = a.width();
					aPadLeft = parseFloat(a.css('padding-left'));
					aPadRight = parseFloat(a.css('padding-right'));
					aTotalWidth = aWidth + aPadLeft + aPadRight;

					anchorWidths = anchorWidths + aTotalWidth;

				});

				return anchorWidths;
			}
		}
		tp_tab_line();
	}

	if ($('#myline').length > 0) {
		var marker = $('#myline');
		var current_1 = $('.current');
		current_1.addClass('active');

		$('.tp-studio-portfolio-item').on("mouseenter", function () {
			var self = $(this),
				offsetLeft = self.position().left,
				left = offsetLeft == 0 ? 0 : offsetLeft || current_1.position().left;

			$('.active').removeClass('active');
			self.addClass('active');
			marker.stop().animate({
				left: left,
				width: $(this).outerHeight(true)
			}, 400);
		});
	}


	function ue() {
		e(".grid_12").each(function () {
			var t = e(this).find(".portfolio-grid-holder"),
				i = t.width(),
				o = e(this).find(".portfolio-grid"),
				a = o.width(),
				s = e(this).find(".grid-item"),
				n = e(this).find(".portfolio-filter"),
				l = t.find(".portfolio-grid-holder-underline"),
				r = e(window).width(),
				d = e(window).height();
			! function (t) {
				var i = t.find(".grid-item"),
					o = e(".portfolio-grid-images");
				o.empty(), i.each(function () {
					var t = e(this).find(".portfolio-item-image");
					o.append(t.clone())
				})
			}(e(this));
			var c = e(".portfolio-grid-images .portfolio-item-image");
			n.length && o.css("top", n.outerHeight() + "px"), Clb.isMobile ? setTimeout(function () {
				l.height(s.eq(0).height()), l.width(1)
			}, 300) : (t.height(a), o.css("min-height", i), o.css("max-height", i), setTimeout(function () {
				o.find("[data-aos-once]").addClass("aos-animate")
			}, 800), setTimeout(function () {
				l.width(s.eq(0).height()), l.height(1)
			}, 300)), s.each(function () {
				var o, a = e(this),
					s = a.offset().left,
					n = c.eq(a.index()),
					h = n.find(".card"),
					u = n.width(),
					f = n.height(),
					p = 0,
					m = 0;
				a.find(".portfolio-item").on("mouseover mousemove", function (a) {
					clearTimeout(o), o = setTimeout(function () {
						h[0].style.transform = "rotate(0deg)"
					}, 200);
					var c = a.clientY,
						g = a.clientX,
						b = a.clientY;
					if (Clb.isRtl) var v = e(this).offset().left + e(this).height() - t.offset().left - i;
					else v = e(this).offset().left - t.offset().left;
					var w = (c - m + (g - p)) / -1;
					Clb.isRtl && (g -= u / 2), s > r / 2 && (g -= u / 2), b > d / 1.5 && (c -= f), Clb.isMobile ? (v = e(this).offset().top - t.offset().top, l[0].style.transform = "translateY(" + v + "px)") : l[0].style.transform = "translateX(" + v + "px)", n.addClass("visible"), n[0].style.transform = "translate(" + g + "px, " + c + "px)", h[0].style.transform = "rotate(" + w + "deg)", h[0].style.filter = "brightnes(" + w + ")", setTimeout(function () {
						n.addClass("animate")
					}, 1), p = a.clientX, m = a.clientY
				}), a.find(".portfolio-item").on("mouseleave", function (e) {
					n.removeClass("visible"), n[0].style.transform = "translate(0px, 0px)", h[0].style.transform = "rotate(0deg)", setTimeout(function () {
						n.removeClass("animate")
					}, 1)
				}), a.on("mouseout", function () {
					clearTimeout(o)
				})
			})
		})
	}

	// hover reveal start
	const hoverItem = document.querySelectorAll(".tp-hover-reveal-item");

	function moveImage(e, hoverItem) {
		const item = hoverItem.getBoundingClientRect();
		const y = e.clientY - item.y;
		if (hoverItem.children[1]) {
			hoverItem.children[1].style.transform = `translate(${y}px)`;
		}
	}

	hoverItem.forEach((item, i) => {
		item.addEventListener("mousemove", (e) => {
			setInterval(moveImage(e, item), 100);
		});
	});
	// hover reveal end


	$(document).ready(function () {
		$(".project-details-1-social-main").on("click", function () {
			$(".project-details-1-social-inner").slideToggle("slow");
		});
	});

	let pd = gsap.matchMedia();
	pd.add("(min-width: 1400px)", () => {

		if ($('.project-details-1-area').length > 0) {
			ScrollTrigger.create({
				trigger: ".project-details-1-area",
				start: "top top",
				end: "bottom 100%",
				pin: ".project-details-1-right-wrap",
				pinSpacing: false,
			});
		}

	});


	let vd = gsap.matchMedia();
	vd.add("(min-width: 1200px)", () => {

		if ($('.project-details-2-area').length > 0) {
			ScrollTrigger.create({
				trigger: ".project-details-2-area",
				start: "top top",
				end: "bottom -100%",
				pin: ".project-details-video",
				pinSpacing: false,
			});
		}

	});


	const progress = document.getElementById("progress");
	const timer = document.getElementById("timer");
	const video_progress_btn = document.getElementById("play");

	function progressLoop() {
		setInterval(function () {
			progress.value = Math.round((video.currentTime / video.duration) * 100);
			timer.innerHTML = Math.round(video.currentTime) + " seconds";
		});
	}

	function playPause() {
		if (video.paused) {
			video.play();
			video_progress_btn.innerHTML = "&#10073;&#10073;";
		} else {
			video.pause();
			video_progress_btn.innerHTML = "►";
		}
	}
	if (video_progress_btn) {
		video_progress_btn.addEventListener("click", playPause);
		video.addEventListener("play", progressLoop);
	}



	if ($('.tp-main-menu-content').length && $('.tp-main-menu-mobile').length) {
		let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
		let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
		mobileNavContainer.innerHTML = navContent;


		let arrow = $(".tp-main-menu-mobile .has-dropdown > a");

		arrow.each(function () {
			let self = $(this);
			let arrowBtn = document.createElement("BUTTON");
			arrowBtn.classList.add("dropdown-toggle-btn");
			arrowBtn.innerHTML = "<i class='fa-light fa-plus'></i>";

			self.append(function () {
				return arrowBtn;
			});

			self.find("button").on("click", function (e) {
				e.preventDefault();
				let self = $(this);
				self.toggleClass("dropdown-opened");
				self.parent().toggleClass("expanded");
				self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
				self.parent().parent().children(".tp-submenu").slideToggle();
			});

		});
	}


	if ($('.tp-menu-fullwidth').length > 0) {

		var currentElement = $('.tp-menu-fullwidth');
		var previousDiv = currentElement.parent().parent();
		previousDiv.addClass('has-homemenu');

	}


	// style 1
	$(".tp-offcanvas-open-btn").on("click", function () {
		$(".tp-offcanvas-area").addClass("opened");
		$(".body-overlay").addClass("opened");
	});


	$(".tp-offcanvas-close-btn").on("click", function () {
		$(".tp-offcanvas-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});

	////////////////////////////////////////////////////
	// 07. cartmini Js
	$(".cartmini-open-btn").on("click", function () {
		$(".cartmini__area").addClass("cartmini-opened");
		$(".body-overlay").addClass("opened");
	});

	$(".cartmini-close-btn").on("click", function () {
		$(".cartmini__area").removeClass("cartmini-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 09. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".offcanvas__area").removeClass("opened");
		$(".tp-offcanvas-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
		$(".cartmini__area").removeClass("cartmini-opened");
	});


	// style 2
	$(".tp-offcanvas-open-btn").on("click", function () {
		$(".tp-offcanvas-2-area").addClass("opened");

		setTimeout(() => {
			$('.tp-text-hover-effect-word').addClass('animated-text');
		}, 900);
	});

	$(".tp-offcanvas-2-close-btn").on("click", function () {

		setTimeout(() => {
			$('.tp-text-hover-effect-word').removeClass('animated-text');
		}, 1200);

		$(".tp-offcanvas-2-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");

	});




	/////////////////////////////////////////////////////
	let tp_text_3d = gsap.utils.toArray(".tp-text-3d");

	tp_text_3d.forEach(splitTextLine => {
		var delay_value = 0.5
		if (splitTextLine.getAttribute("data-delay")) {
			delay_value = splitTextLine.getAttribute("data-delay");
		}
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: splitTextLine,
				start: 'top 85%',
				duration: 1.5,
				scrub: false,
				markers: false,
				toggleActions: 'play none none none'
			}
		});

		const itemSplitted = new SplitText(splitTextLine, {
			type: "lines"
		});
		gsap.set(splitTextLine, {
			perspective: 400
		});
		itemSplitted.split({
			type: "lines"
		})
		tl.from(itemSplitted.lines, {
			duration: 1,
			delay: delay_value,
			opacity: 0,
			rotationX: -80,
			force3D: true,
			transformOrigin: "top center -50",
			stagger: 0.1
		});
	});


	$('.tp-footer-menu ul li').on("mouseenter", function () {
		$(this).addClass('active').siblings().removeClass('active');
	});

	$('.tp-footer-menu ul li').on("mouseleave", function () {
		$('.tp-footer-menu ul li').removeClass('active').addClass('active');
	});

	if ($('.tp_title_anim').length > 0) {
		let splitTitleLines = gsap.utils.toArray(".tp_title_anim");
		splitTitleLines.forEach(splitTextLine => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: splitTextLine,
					start: 'top 90%',
					end: 'bottom 60%',
					scrub: false,
					markers: false,
					toggleActions: 'play none none none'
				}
			});

			const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
			gsap.set(splitTextLine, { perspective: 400 });
			itemSplitted.split({ type: "lines" })
			tl.from(itemSplitted.lines, {
				duration: 1,
				delay: 0.3,
				opacity: 0,
				rotationX: -80,
				force3D: true,
				transformOrigin: "top center -50",
				stagger: 0.1
			});
		});
	}

	if ($('.bd-brand-area').length) {
		gsap.set(".bd-brand-item img", { scale: 1.3, opacity: 0 });
		gsap.to(".bd-brand-item img", {
			scale: 1,
			opacity: 1,
			duration: 1.5,
			ease: "bounce.out",
			stagger: {
				each: 0.1
			},
			scrollTrigger: {
				trigger: '.bd-brand-area',
				start: "top 100%"
			}
		})
	}



	function perspective() {

		if ($('.tp-perspective-slider').length) {

			gsap.set('.tp-perspective-slider .tp-slide .tp-slide-inner', { perspective: 60 });

			$('.tp-perspective-slider .tp-slide .tp-slide-inner .tp-image').each(function () {
				var slide = $(this);

				gsap.fromTo(this, {
					rotationX: 1.8,
					scaleX: 1,
					z: '0vh'
				}, {
					rotationX: -.5,
					scaleX: 1,
					z: '-2vh',
					scrollTrigger: {
						trigger: slide,
						start: "top+=150px bottom",
						end: "bottom top",
						immediateRender: false,
						scrub: 0.1,
					}
				});
			});

		}
	}
	perspective()


	let sp = gsap.matchMedia();
	sp.add("(min-width: 1200px)", () => {
		if ($('.tp-shop-area').length > 0) {
			ScrollTrigger.create({
				trigger: ".tp-shop-area",
				start: "top -3%",
				end: "bottom 110.5%",
				pin: ".tp-shop-left-thumb",
				pinSpacing: true,
			});
		}
	});

	let sp_2 = gsap.matchMedia();
	sp_2.add("(min-width: 1200px)", () => {
		if ($('.tp-shop-details-area').length > 0) {
			ScrollTrigger.create({
				trigger: ".tp-shop-details-area",
				start: "top -18%",
				end: "bottom 110.5%",
				pin: ".tp-shop-details-right-wrap",
				pinSpacing: true,
			});
		}
	});



	// settings append in body
function tp_settings_append($x){
    var settings = $('body');
    let dark;
	let isDark = is_dark_mode_active()? 'active' : '';
	let isLight = !is_dark_mode_active()? 'active' : '';
	let isChecked = is_dark_mode_active()? 'checked="true"' : '';
    $x == true ? dark = 'd-block' : dark = 'd-none';
    var settings_html = `<div class="tp-theme-settings-area transition-3">
    <div class="tp-theme-wrapper">
       <div class="tp-theme-header text-center">
          <h4 class="tp-theme-header-title">Liko Mode Settings</h4>
       </div>

       <!--  MODE SETTINGS -->
       <div class="tp-theme-dir mb-20">
          <label class="tp-theme-dir-main" for="tp-dir-toggler">
             <span class="tp-theme-dir-rtl ${isDark}">Dark</span>
                <input type="checkbox" id="tp-dir-toggler" ${isChecked}>
                <i class="tp-theme-dir-slide"></i>
             <span class="tp-theme-dir-ltr ${isLight}">Light</span>
          </label>
       </div>

       <!--SETTINGS -->
       <div class="tp-theme-settings">
          <div class="tp-theme-settings-wrapper">
             <div class="tp-theme-settings-open">
                <button class="tp-theme-settings-open-btn">
                   <span class="tp-theme-settings-gear">
                      <i class="fa-light fa-gear"></i>
                   </span>
                   <span class="tp-theme-settings-close">
                      <i class="fa-regular fa-xmark"></i>
                   </span>
                </button>
             </div>
          </div>
       </div>
    </div>
 </div>`;

 settings.append(settings_html);
}
tp_settings_append(false); // if want to enable dark light mode then send "true";

// settings open btn
$(".tp-theme-settings-open-btn").on("click", function () {
    $(".tp-theme-settings-area").toggleClass("settings-opened");
});

function is_dark_mode_active(){
	if($('html').hasClass('liko-dark-active')){
		return true;
	}
	return false;
}

$(document).on('click', '#tp-dir-toggler', function(){
	if($('html').hasClass('liko-dark-active')){
        $('html').removeClass('liko-dark-active')
    }else{
        $('html').addClass('liko-dark-active')
    }
})



if ($('.subscribe-popup').length) {
	const loginPopup = document.querySelector(".subscribe-popup");
	const close = document.querySelector(".close");
	
	window.addEventListener("load",function(){
	
	 showPopup();
	
	})
	
	function showPopup(){
		  const timeLimit = 5
		  let i=0;
		  const timer = setInterval(function(){
		   i++;
		   if(i == timeLimit){
			clearInterval(timer);
			loginPopup.classList.add("show");
		   } 
		   console.log(i)
		  },500);
	}
	
	
	close.addEventListener("click",function(){
	  loginPopup.classList.remove("show");
	})
}

// zoom in
$(".anim-zoomin").each(function() {

	// Add wrap <div>.
	$(this).wrap('<div class="anim-zoomin-wrap"></div>');

	// Add overflow hidden.
	$(".anim-zoomin-wrap").css({ "overflow": "hidden" })

	var $this = $(this);
	var $asiWrap = $this.parents(".anim-zoomin-wrap");

	let tp_ZoomIn = gsap.timeline({
		scrollTrigger: {
			trigger: $asiWrap,
			start: "top 90%",
			markers: false,
		}
	});
	tp_ZoomIn.from($this, { duration: 1.5, autoAlpha: 0, scale: 1.4, ease: Power2.easeOut, clearProps:"all" });

});




})(jQuery);

