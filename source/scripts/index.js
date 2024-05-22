const navToggle = document.querySelector('.header__toggle');
const navBottonMenu = document.querySelector('.header__toggle--closed');
const navMain = document.querySelector('.navigation');

document.querySelector('.header--no-js').classList.remove('header--no-js');
document.querySelector('.contact__map--no-js').classList.remove('contact__map--no-js');

navToggle.addEventListener('click', () => {
  if (navBottonMenu.classList.contains('header__toggle--closed')) {
    navBottonMenu.classList.remove('header__toggle--closed');
    navMain.classList.add('navigation--active');
  } else {
    navBottonMenu.classList.add('header__toggle--closed');
    navMain.classList.remove('navigation--active');
  }
});
