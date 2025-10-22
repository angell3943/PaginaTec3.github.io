//slider general 

        /* dots */

const dotsg = document.querySelectorAll(".dot-g");
const sliderg = document.querySelector (".sld-g");
const slidesg = document.querySelectorAll(".sld-g .slide-g");

let seen_indexg = 0;

dotsg.forEach( (dot, i) => {

    dot.addEventListener("click", function(){

        dotsg.forEach(d => {

            d.classList.remove("active");

        });

        this.classList.add("active");

        slidesg[i].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "nearest"
        });

    });

});

        /* flechas */

const flechadg = document.querySelector(".flecha-derecha");
const flechaig = document.querySelector(".flecha-izquierda");

flechaig.addEventListener("click", function(){

    seen_indexg = Math.round( sliderg.scrollLeft / slidesg[0].offsetWidth);

    slidesg[seen_indexg-1].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest"
    });

    dotsg.forEach(dot => {dot.classList.remove("active")});

    dotsg[seen_indexg-1].classList.add("active");

});

flechadg.addEventListener("click", function(){

    seen_indexg = Math.round( sliderg.scrollLeft / slidesg[0].offsetWidth);

    slidesg[seen_indexg+1].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest"
    });

    dotsg.forEach(dot => {dot.classList.remove("active")});

    dotsg[seen_indexg+1].classList.add("active");

});

        /* scrolleable */

sliderg.addEventListener("scroll", function(){

    seen_indexg = Math.round( sliderg.scrollLeft / slidesg[0].offsetWidth);
    
    dotsg.forEach(dot => {dot.classList.remove("active")});

    dotsg[seen_indexg].classList.add("active");

});

// slider actividades

// slider expos anteriores



const slides_inside_pexp = document.querySelectorAll(".slide-pexp .sld-inside-pexp");
let actual_inside_pexp = 0;

    setInterval (() =>{

        slides_inside_pexp[actual_inside_pexp].classList.remove("activo");
        actual_inside_pexp = (actual_inside_pexp+1) % slides_inside_pexp.length;
        slides_inside_pexp[actual_inside_pexp].classList.add("activo");

    }, 4000);

// sliders mejores proyectos

const rightSlides_out_p = document.querySelectorAll (".sldp .slide-p.derecho");
const leftSlides_out_p = document.querySelectorAll(".sldp .slide-p.izquierdo")
let rightActual_out_p = 0;
let leftActual_out_p = 0;

setInterval (() => {

    rightSlides_out_p[rightActual_out_p].classList.remove("activo");
    rightActual_out_p = (rightActual_out_p+1)%rightSlides_out_p.length;
    rightSlides_out_p[rightActual_out_p].classList.add("activo");

}, 4000);



setInterval (() => {

    leftSlides_out_p[leftActual_out_p].classList.remove("activo");
    leftActual_out_p = (leftActual_out_p+1)%leftSlides_out_p.length;
    leftSlides_out_p[leftActual_out_p].classList.add("activo");

}, 5000);
