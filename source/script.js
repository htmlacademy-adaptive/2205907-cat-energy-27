// let showMenu = document.querySelector(".header__nav-toogle");
// let mobMenu = document.querySelector(".main-nav");
// showMenu.addEventListener('click', function () {
//   if (mobMenu.style.display = 'none') {
//     mobMenu.style.display = 'block';
//   } else {
//     mobMenu.style.display = 'none';
//   }
// });





let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.header__nav-toogle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.style.backgroundImage = "url('../img/close-menu--mob.svg')";

  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.style.backgroundImage = "url('../img/burger-menu-mob.svg')";
  }
});
