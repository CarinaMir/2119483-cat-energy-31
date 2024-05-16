/*const navToggle = document.querySelector('.header__toggle');
const navBottonMenu = document.querySelector('.header__toggle--closed');
const navMain = document.querySelector('.navigation');

navToggle.addEventListener('click', () => {
  if (navBottonMenu.classList.contains('header__toggle--closed')) {
    navBottonMenu.classList.remove('header__toggle--closed');
    navMain.style.display = 'none';
  } else {
    navBottonMenu.classList.add('header__toggle--closed');
    navMain.style.display = 'flex';
  }
});
*/


/*function imageComparison(sliderSelector) {

  const slider = document.querySelector(sliderSelector);
  const imgABefore = document.querySelector('.example__slider-before');


  slider.onmousedown = function(e) {

    const shiftX = e.clientX - slider.getBoundingClientRect().left;

    moveAt(e.pageX);

    function moveAt(pageX) {
      slider.style.left = `${pageX - shiftX }px`;
    }

    function onMouseMove(e) {
      moveAt(e.pageX);
    }

    document.addEventListener('mousemove', onMouseMove);


    slider.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      slider.onmouseup = null;
    };

  };

  slider.ondragstart = function() {
    return false;
  };

}*/

//imageComparison('.example__slider-button');
