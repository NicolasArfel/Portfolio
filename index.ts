let isActive: boolean = false;
const burgerIcon = document.querySelector(
  '.material-symbols-outlined'
) as HTMLSpanElement | null;
const navLinks = document.querySelector('.nav__links') as HTMLUListElement;
function activeBurgerMenu() {
  if (burgerIcon != null) {
    burgerIcon.addEventListener('click', () => {
      navLinks.classList.toggle('isActive');
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

activeBurgerMenu();
closeBurgerOnClick();
