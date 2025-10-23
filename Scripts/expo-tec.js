/* Funciones globales */

//eliminar dot.active
function remove_dots(dots){

    dots.forEach(dot => {dot.classList.remove("active")});

}

//slider inside
function slider_inside (slides_inside_slector){

    const slides_inside = document.querySelectorAll(slides_inside_slector);

    let actual_inside = 0;
    
    setInterval( () => {

        slides_inside[actual_inside].classList.remove("activo");
        actual_inside = (actual_inside+1) % slides_inside.length;
        slides_inside[actual_inside].classList.add("activo");

    }, 5000);

}

/* slider básico 100% funcional */

function common_slider (
    dots_selector,
    flecha_derecha_selector,
    flecha_izquierda_selector,
    slider_selector,
    slides_selector
    ){

        const dots = document.querySelectorAll(dots_selector);
        const flecha_derecha = document.querySelector(flecha_derecha_selector);
        const flecha_izquierda = document.querySelector(flecha_izquierda_selector);
        const slider = document.querySelector(slider_selector);
        const slide = document.querySelectorAll(slides_selector);

        let seen_index = 0;

        /* dots */

        dots.forEach( (dot, i) => {

            dot.addEventListener("click", function(){

                remove_dots(dots);

                this.classList.add("active");

                slide[i].scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "nearest"
                });

            });

        });

        /* flechas */

        flecha_derecha.addEventListener("click", function(){

            seen_index = Math.round(slider.scrollLeft / slide[0].offsetWidth);

            slide[seen_index+1].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "nearest"
            });

            remove_dots(dots);

            dots[seen_index+1].classList.add("active");

        });

        flecha_izquierda.addEventListener("click", function(){

            seen_index = Math.round(slider.scrollLeft / slide[0].offsetWidth);
            
            slide[seen_index-1].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "nearest"
            });

            remove_dots(dots);

            dots[seen_index-1].classList.add("active");

        });

        /* scroll */

        slider.addEventListener("scroll", function(){

            seen_index = Math.round(slider.scrollLeft / slide[0].offsetWidth);
            
            remove_dots(dots);

            dots[seen_index].classList.add("active");

        });

}

//slider-slider inside

// slider expos anteriores

/*

const slides_inside_pexp = document.querySelectorAll(".slide-pexp .sld-inside-pexp");
let actual_inside_pexp = 0;

    setInterval (() =>{

        slides_inside_pexp[actual_inside_pexp].classList.remove("activo");
        actual_inside_pexp = (actual_inside_pexp+1) % slides_inside_pexp.length;
        slides_inside_pexp[actual_inside_pexp].classList.add("activo");

    }, 4000);

*/

// sliders mejores proyectos

/*
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
*/


/* llamar funciones */

//slider general
common_slider(
    ".dot-g",
    ".flecha-derecha-g",
    ".flecha-izquierda-g",
    ".sld-g",
    ".slide-g"
);

//slider actividades
common_slider(
    ".dot-a",
    ".flecha-derecha-a",
    ".flecha-izquierda-a",
    ".slda",
    ".slide-a"
);

/*slider proyectos
common_slider();

slider_inside();
*/

//slider pexp
common_slider(
    ".dot-pexp",
    ".flecha-derecha-pexp",
    ".flecha-izquierda-pexp",
    ".sld-pexp",
    ".slide-pexp"
);

slider_inside(".sld-inside-pexp-1");
slider_inside(".sld-inside-pexp-2");
slider_inside(".sld-inside-pexp-3");
