import * as flsFunctions from "./modules/functions.js";
// import Swiper from 'swiper';
// import {
// 	Navigation,
// 	EffectFade,
// 	Pagination,
// 	Thumbs,
// 	Controller,
// 	FreeMode,
// 	Scrollbar,
// 	A11y,
// 	Mousewheel,
// 	autoplay
// } from 'swiper/modules';
import AOS from 'aos';

flsFunctions.isWebp();

// const headerSwiper = new Swiper('.Header__slider', {
// 	// Optional parameters
// 	loop: false,
// 	autoplay: {
// 		delay: 500
// 	},
// 	pagination: {
// 	  el: '.swiper-pagination',
// 	  clickable: true,
// 	},
// 	breakpoints: {
// 		768: {
// 			effect: "fade",
// 		}
// 	}
//   });

flsFunctions.test();

flsFunctions.fixedNavbar("Navbar");
flsFunctions.curtains();
flsFunctions.openBurger();
