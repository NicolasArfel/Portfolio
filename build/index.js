"use strict";
let isActive = false;
const burgerIcon = document.querySelector('.material-symbols-outlined');
const phoneLink = document.querySelector('.phone');
const navLinks = document.querySelector('.nav__links');
const nav = document.querySelector('.nav');
function activeBurgerMenu() {
    if (burgerIcon != null) {
        burgerIcon.addEventListener('click', () => {
            navLinks.classList.toggle('isActive');
            nav.classList.toggle('isActive');
            isActive = !isActive;
            if (isActive) {
                burgerIcon.textContent = 'close';
            }
            else {
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
    }
    else {
        nav.classList.remove('scrolled');
    }
}
window.addEventListener('scroll', changeNavBarBackground);
function showPhoneNumber() {
    phoneLink.addEventListener('mouseover', mOver, false);
    phoneLink.addEventListener('mouseout', mOut, false);
}
function mOver() {
    phoneLink.textContent = '06 99 73 74 27';
}
function mOut() {
    phoneLink.textContent = 'Voir le numéro';
}
activeBurgerMenu();
closeBurgerOnClick();
showPhoneNumber();
