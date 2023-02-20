const burgerBtn = document.querySelector('.nav-mobile__icon');
const navMobile = document.querySelector('.nav-mobile');
const navLinks = document.querySelectorAll('.nav-mobile__link');
const contentPart = document.querySelector('.content');

const handleMobileNav = () => {
	navMobile.style.display = 'block';
	handleLinks();
};

const handleLinks = () => {
	navLinks.forEach(link => {
		link.addEventListener('click', hideMobileNav);
	});
};

const hideMobileNav = () => {
	navMobile.style.display = 'none';
};

burgerBtn.addEventListener('click', handleMobileNav);
contentPart.addEventListener('click', hideMobileNav);
