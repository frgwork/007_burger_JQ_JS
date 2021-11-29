// ====================== jquery ======================

// function burgerMenu(selector) {
//   let menu = $(selector);
//   let button = menu.find('.bureger-menu__button');
//   let links = menu.find('.bureger-menu__link');
//   let overlay = menu.find('.bureger-menu__overlay');

//   button.on('click', (e) => {
//     e.preventDefault();
//     toggleMenu();
//   });

//   links.on('click', () => toggleMenu());
//   overlay.on('click', () => toggleMenu());

//   function toggleMenu() {
//     menu.toggleClass('bureger-menu__active');

//     if (menu.hasClass('bureger-menu__active')) {
//       $('body').css('overflow', 'hidden');
//     } else {
//       $('body').css('overflow', 'visible');
//     }
//   }
// }

// burgerMenu('.bureger-menu');


// ====================== JS ======================

function burgerMenu2(selector) {
  const menu = document.querySelector(selector);
  const button = menu.querySelector('.bureger-menu__button');
  const links = menu.querySelectorAll('.bureger-menu__link');

  button.addEventListener('click', toggleMenu2);
  links.forEach(link => {
    link.addEventListener('click', toggleMenu2);
  });

  function toggleMenu2() {
    menu.classList.toggle('bureger-menu__active');
    const buregerMenuActive = menu.classList.contains('bureger-menu__active');

    if (buregerMenuActive) {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }
}

burgerMenu2('.bureger-menu');