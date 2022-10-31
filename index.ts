let isActive: boolean = false;
let scrolled: boolean = false;
const burgerIcon = document.querySelector(
  '.material-symbols-outlined'
) as HTMLSpanElement | null;
const navLinks = document.querySelector('.nav__links') as HTMLUListElement;
const nav = document.querySelector('.nav') as HTMLDivElement;
function activeBurgerMenu() {
  if (burgerIcon != null) {
    burgerIcon.addEventListener('click', () => {
      navLinks.classList.toggle('isActive');
      nav.classList.toggle('isActive');
      isActive = !isActive;
      if (isActive) {
        burgerIcon.textContent = 'close';
      } else {
        burgerIcon.textContent = 'menu';
      }
    });
  }
}

function closeBurgerOnClick() {
  const navLink = document.querySelectorAll('.nav__link');
  navLink.forEach((link) => {
    link.addEventListener('click', () => {
      if (isActive && burgerIcon != null) {
        isActive = !isActive;
        navLinks.classList.remove('isActive');
        burgerIcon.textContent = 'menu';
      }
    });
  });
}

function changeNavBarBackground() {
  if (window.scrollY >= 90) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', changeNavBarBackground);

activeBurgerMenu();
closeBurgerOnClick();
