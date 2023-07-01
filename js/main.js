const bar = document.querySelector('#bar');
const menu = document.querySelector('#menu');

bar.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(bar.classList.contains('bx-menu')){
    bar.classList.remove('bx-menu');
    bar.classList.add('bx-x');
  } else {
    bar.classList.add('bx-menu');
    bar.classList.remove('bx-x');
  }
  
    menu.classList.toggle('nav__menu-visible');
}
