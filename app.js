const loader = document.querySelector(".loader-container");
const header__hamburguer = document.querySelector(".header__nav-hamburguer");
const menu_full = document.querySelector(".menu-drop");



addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", () => {
    /* loader.classList.toggle("show"); */
    loader.style.opacity = 0;
    loader.style.visibility = "hidden";
  })
  header__hamburguer.addEventListener("click", () => {
    menu_full.classList.toggle("showRight");
  });
  menu_full.addEventListener("click", () => {
    menu_full.classList.toggle("showRight");
  });
});
