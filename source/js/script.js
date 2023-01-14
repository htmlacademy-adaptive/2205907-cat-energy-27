(function () {
  let navToogle = document.querySelector('.header__nav-toogle');
  let navMain = document.querySelector('.main-nav');
  navToogle.addEventListener('click', () => {
    if (navMain.classList.contains('main-nav--closed')) {
      navToogle.classList.toggle('header__nav-toogle--active');
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      navToogle.classList.remove('header__nav-toogle--active');
    }
  })
}());
