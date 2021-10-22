const loader = document.querySelector(".loader-container");
const header__hamburguer = document.querySelector(".header__nav-hamburguer");
const menu_full = document.querySelector(".menu-drop");
const form = document.getElementById("myForm");

const YOUR_SERVICE_ID = "service_y5leog6";
const YOUR_TEMPLATE_ID = "template_btrzvpb"
const sendForm = (event) =>{
  event.preventDefault()
  emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, '#myForm')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
    alert("Mensaje enviado");
}


addEventListener("DOMContentLoaded", () => {

  header__hamburguer.addEventListener("click", () => {
    menu_full.classList.toggle("showRight");
  });
  menu_full.addEventListener("click", () => {
    menu_full.classList.toggle("showRight");
  });
  form.addEventListener("submit", sendForm);
});

var slide = document.getElementsByClassName("slide");
        var indicator = document.getElementById("indicator");
        var dots = document.getElementsByClassName("dots");
        var autoplay = document.getElementsByClassName("container")[0].getAttribute("data-autoplay");
        var l = slide.length;
        var interval = 5000;
        var set;

        window.onload = function () {
            initialize();
            slide[0].style.opacity = "1";
            for (var j = 0; j < l; j++) {
                indicator.innerHTML += "<div class='dots' onclick=change(" + j + ")></div>";
            }

            dots[0].style.background = "#696969";

        }

        function initialize() {
            if (autoplay === "true")
                set = setInterval(function () { next(); }, interval);
        }



        function change(index) {
            clearInterval(set);
            count = index;
            for (var j = 0; j < l; j++) {
                slide[j].style.opacity = "0";
                dots[j].style.background = "#bdbdbd";
            }
            slide[count].style.opacity = "1";
            dots[count].style.background = "#696969";


        }

        var count = 0;
        function next() {
            clearInterval(set);
            slide[count].style.opacity = "0";
            count++;
            for (var j = 0; j < l; j++) {
                dots[j].style.background = "#bdbdbd";
            }


            if (count == l) {
                count = 0;
                slide[count].style.opacity = "1";
                dots[count].style.background = "#696969";

            } else {
                slide[count].style.opacity = "1";
                dots[count].style.background = "#696969";
            }
            initialize()
        }


        function prev() {
            clearInterval(set);
            slide[count].style.opacity = "0";
            for (var j = 0; j < l; j++) {
                dots[j].style.background = "#bdbdbd";
            }
            count--;

            if (count == -1) {
                count = l - 1;
                slide[count].style.opacity = "1";
                dots[count].style.background = "#696969";

            } else {
                slide[count].style.opacity = "1";
                dots[count].style.background = "#696969";
            }
            initialize()
        }