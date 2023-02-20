const burgerBtn = document.querySelectorAll('.nav-mobile__icon');
const navMobile = document.querySelector('.nav-mobile');
const navLinks = document.querySelectorAll('.nav-mobile__link');
const contentPart = document.querySelector('.content');

const handleMobileNav = () => {
	navMobile.style.display = 'block';
    handleLinks()
};

const handleLinks = () => {
	navLinks.forEach(link => {
		link.addEventListener('click', hideMobileNav);
	});
};

const hideMobileNav = () => {
	navMobile.style.display = 'none';
};

const handleBtns = () => {
	burgerBtn.forEach(btn => {
		btn.addEventListener('click', handleMobileNav);
	});
};

handleBtns()
contentPart.addEventListener('click', hideMobileNav);
