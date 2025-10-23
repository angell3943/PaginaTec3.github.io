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

/* Fnciones principales */

//slider básico 100% funcional 

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

//slider proyectos
common_slider(
    ".dot-pr",
    ".flecha-derecha-pr",
    ".flecha-izquierda-pr",
    ".sld-pr",
    ".slide-pr"
);

slider_inside(".sld-i-pr-1");
slider_inside(".sld-i-pr-2");
slider_inside(".sld-i-pr-3");

//slider pexp
common_slider(
    ".dot-pexp",
    ".flecha-derecha-pexp",
    ".flecha-izquierda-pexp",
    ".sld-pexp",
    ".slide-pexp"
);

slider_inside(".sld-i-pexp-1");
slider_inside(".sld-i-pexp-2");
slider_inside(".sld-i-pexp-3");

//slider mejores proyectos

slider_inside(".sldp-1");
slider_inside(".sldp-2");