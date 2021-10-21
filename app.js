const loader = document.querySelector(".loader-container");
const header__hamburguer = document.querySelector(".header__nav-hamburguer");
const menu_full = document.querySelector(".menu-drop");

const YOUR_SERVICE_ID = "service_y5leog6";
const YOUR_TEMPLATE_ID = "template_btrzvpb"
const sendForm = () =>{
  emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, '#myForm')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}


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
