const burgerBtn = document.querySelector(".header__burger");
const menu = document.querySelector(".header__navigation");
const body = document.querySelector('body');

burgerBtn.addEventListener("click", onClickBurger);

function onClickBurger() {
   burgerBtn.classList.toggle("active");
   menu.classList.toggle("active");
   body.classList.toggle('lock');
}

