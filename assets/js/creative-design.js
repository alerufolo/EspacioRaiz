/*!
=========================================================
* Creative Design Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ 

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
}); 




 // carrusel 2

 const carrusel = document.querySelector(".carrusel-items");

let intervalo = null;
let step = 1;
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;

 const start = () => {
    intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft === maxScrollLeft) {
        step = step * -1;
    } else if (carrusel.scrollLeft === 0) {
        step = step * -1;
    }
    }, 10)
 }; 

 const stop = () => {
    clearInterval(intervalo);
 };

 carrusel.addEventListener("mouseover", () => (
    stop()
 ));

 carrusel.addEventListener("mouseout", () => (
    start()
 ));


start();
