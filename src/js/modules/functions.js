export function isWebp() {
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {
		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});
}

export function fixedNavbar(navbar) {
	const nav = document.querySelector(`.${navbar}`);
	const navYfixed = "82";

	window.addEventListener('scroll', () => {

		const navbarLogoMob = document.querySelector(".Navbar__logo-mob");
		const buttonAccent = document.querySelector(".button-accent");
		const navbarCalendar = document.querySelector(".Navbar__calendar");
		const navbarTitleMob = document.querySelector(".Navbar__title-mob");
		const Navbar = document.querySelector(".Navbar");

		let currentScrollPosition = window.scrollY || window.pageYOffset;

		if (navYfixed < currentScrollPosition) {
			nav.style.cssText = `
				position: fixed;
				top: 0;
				left: 0;
				z-index: 14;
				background-color: #022238;
			`;

			if (window.innerWidth < 768) {
				navbarLogoMob.style.display = "none";
				buttonAccent.style.display = "none";
				navbarCalendar.style.display = "block";
				navbarTitleMob.style.display = "block";
				Navbar.style.paddingTop = "0px";
			}
		} else {
			nav.style.cssText = `
				position: absolute;
			`;
			if (window.innerWidth < 768) {
				navbarLogoMob.style.display = "block";
				buttonAccent.style.display = "block";
				navbarCalendar.style.display = "none";
				navbarTitleMob.style.display = "none";
				// Navbar.style.cssText = "padding-top: 15px";

			} else {
				navbarCalendar.style.display = "none";
				navbarLogoMob.style.display = "none";
			}

		}
		// console.log(currentScrollPosition)
	});
}

export function openBurger() {
	const openBtn = document.querySelector(".burger-menu")
	const closeBtn = document.querySelector(".Burger__close svg");
	const burger = document.querySelector(".Burger");
	const blur = document.querySelector(".Burger-blur");

	openBtn.addEventListener("click", () => {
		burger.style.transform = "translate(0px)";
		blur.style.display = "block";
	})

	closeBtn.addEventListener("click", () => {
		burger.style.transform = "translate(391px)";
		blur.style.display = "none";
	})

	blur.addEventListener("click", () => {
		burger.style.transform = "translate(391px)";
		blur.style.display = "none";
	})

	console.log(openBtn)
	console.log(closeBtn)
}

export function curtains(navbar) {
	const curtainLeft = document.querySelector("#curtainLeft");
	const curtainRight = document.querySelector("#curtainRight");
	const curtainInvisible = document.querySelector("#curtainInvisble");

	const animationStart = 3750;
	const animationEnd = 4050;
	const space = animationEnd - animationStart;

	const opacityAnimationStart = 3975;
	const opacitySpace = animationEnd - opacityAnimationStart;

	window.addEventListener('scroll', () => {

		let currentScrollPosition = window.scrollY || window.pageYOffset;
		let raznica = animationEnd - currentScrollPosition;

		let opacityRaznica = opacityAnimationStart - currentScrollPosition;

		if (animationEnd > currentScrollPosition && currentScrollPosition > animationStart) {
			curtainLeft.style.cssText = `left: ${raznica / 0.750}px`
			curtainRight.style.cssText = `right: ${raznica / 0.750}px`

			let opacity = Math.floor(100 - (opacityRaznica / opacitySpace) * 100);
			curtainInvisible.style.cssText = `opacity: ${opacity}%`;
		}

		if (currentScrollPosition > animationEnd) {
			console.log("end")
		}


		// console.log(currentScrollPosition)
	});
}


export function test() {
	console.log("test")
}