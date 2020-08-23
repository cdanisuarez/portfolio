const menu = document.querySelector('.menu');
const burgerBtn = document.querySelector('.burger-btn');
const ipad = window.matchMedia('screen and (max-width: 767px)');

ipad.addListener(validation);

function validation(event) {
  const EVENT_NAME = 'click';
  if (event.matches) {
    burgerBtn.addEventListener(EVENT_NAME, hideOrShow);
  } else {
    burgerBtn.removeEventListener(EVENT_NAME, hideOrShow);
  }
}

function hideOrShow() {
  const ACTIVE = 'active';
  if (menu.classList.contains(ACTIVE)) {
    menu.classList.remove(ACTIVE);
  } else {
    menu.classList.add(ACTIVE);
  }
}