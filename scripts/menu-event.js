const menu = document.querySelector('.menu');
const burgerBtn = document.querySelector('.burger-btn');

burgerBtn.addEventListener('click', hideOrShow);

function hideOrShow() {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
  } else {
    menu.classList.add('active');
  }
}