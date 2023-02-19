const burgerBtn = document.querySelector('.nav-mobile__icon');
const navMobile = document.querySelector('.nav-mobile');
const navLinks = document.querySelectorAll('.nav-mobile__link');
const navDesktop = document.querySelector('.nav-desktop');

const handleMobileNav = () => {
	navMobile.style.display = 'block';
   
	// handleLinks()   
    };

const handleLinks = () => {
    navLinks.forEach(link => {
        link.addEventListener('click', hideMobileNav);
               	});
};

const hideMobileNav = () => { 
	navMobile.style.display = 'none';
};

const clickedElement = (e) => {
if (!navMobile.contains(e.target) || !burgerBtn.contains(e.target)) {
    navMobile.style.display = 'none';
}
}

burgerBtn.addEventListener('click', handleMobileNav);
// burgerBtn.addEventListener('click', handleLinks);
handleLinks()
document.addEventListener('click', clickedElement)
