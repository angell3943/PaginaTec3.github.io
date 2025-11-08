/* Funciones globales */

//eliminar dot.active
const remove_dots = dots => (dots.forEach(dot => dot.classList.remove("active")));

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
    dots_selector = null,
    slider_selector = null,
    slides_selector = null,
    flecha_derecha_selector = null,
    flecha_izquierda_selector = null
    ){

        const dots = document.querySelectorAll(dots_selector);
        const slider = document.querySelector(slider_selector);
        const slide = document.querySelectorAll(slides_selector);

        let seen_index = 0;

        if(dots.length != 0 && slider != null && slide.length != 0){

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

            if (flecha_derecha_selector != null && flecha_izquierda_selector != null){
                arrows(
                    flecha_derecha_selector,
                    flecha_izquierda_selector,
                    dots,
                    slider,
                    slide 
                );
            }

            /* scroll */

            slider.addEventListener("scroll", function(){

                seen_index = Math.round(slider.scrollLeft / slide[0].offsetWidth);
            
                remove_dots(dots);

                dots[seen_index].classList.add("active");

            });

        } else {
            return;
        }

}

//flechas
function arrows (
    flecha_derecha_selector,
    flecha_izquierda_selector,
    dots,
    slider,
    slide
){

    const flecha_derecha = document.querySelector(flecha_derecha_selector);
    const flecha_izquierda = document.querySelector(flecha_izquierda_selector);
    let seen_index = 0;

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

}

//overlay dinamico
function overlay_dinamico (overlay_selector, slider_selector) {

    const overlay = document.querySelectorAll(overlay_selector);
    const slides = document.querySelectorAll(slider_selector);

    slides.forEach( (slide, i) => {

        slide.addEventListener("click", function(){

            overlay[i].classList.toggle("active-overlay");

        });

        const link = overlay[i].querySelector("a");

        if(link) {
            link.addEventListener("click", function(e){

                e.stopPropagation();

            });
        }

    });

}

/* llamar funciones */

/* Index */
common_slider(
    ".dot-presentacion",
    ".sld-presentacion-container",
    ".slide-presentacion",
    ".flecha-derecha-presentacion",
    ".flecha-izquierda-presentacion" 
);

/* Aulas y talleres */

//slider A
common_slider(
    ".dot-ayt-A",
    ".sld-ayt-A",
    ".slide-ayt-A",
    ".flecha-derecha-ayt-A",
    ".flecha-izquierda-ayt-A" 
);

slider_inside(".slide-i-ayt-A-A");
slider_inside(".slide-i-ayt-A-B");

//slider B
common_slider(
    ".dot-ayt-B",
    ".sld-ayt-B",
    ".slide-ayt-B",
    ".flecha-derecha-ayt-B",
    ".flecha-izquierda-ayt-B" 
);

slider_inside(".slide-i-ayt-B-A");
slider_inside(".slide-i-ayt-B-B");

//slider c
common_slider(
    ".dot-ayt-C",
    ".sld-ayt-C",
    ".slide-ayt-C",
    ".flecha-derecha-ayt-C",
    ".flecha-izquierda-ayt-C" 
);

slider_inside(".slide-i-ayt-C-A");
slider_inside(".slide-i-ayt-C-B");

//info
common_slider(
    ".dot-info-ayt",
    ".sld-info-ayt",
    ".slide-info-ayt",
    ".flecha-derecha-info-ayt",
    ".flecha-izquierda-info-ayt" 
);

slider_inside(".sld-i-info-ayt-1");
slider_inside(".sld-i-info-ayt-2");
slider_inside(".sld-i-info-ayt-3");

overlay_dinamico(
    ".overlay-info-ayt",
    ".slide-info-ayt"
);

//electro
common_slider(
    ".dot-elec-ayt",
    ".sld-elec-ayt",
    ".slide-elec-ayt",
    ".flecha-derecha-elec-ayt",
    ".flecha-izquierda-elec-ayt" 
);

slider_inside(".sld-i-elec-ayt-1");
slider_inside(".sld-i-elec-ayt-2");
slider_inside(".sld-i-elec-ayt-3");
slider_inside(".sld-i-elec-ayt-4");
slider_inside(".sld-i-elec-ayt-5");
slider_inside(".sld-i-elec-ayt-6");
slider_inside(".sld-i-elec-ayt-7");
slider_inside(".sld-i-elec-ayt-8");

overlay_dinamico(
    ".overlay-elec-ayt",
    ".slide-elec-ayt"
);

/* página historia */
common_slider(
    ".dot-historia-1",
    ".sld-historia-container-1",
    ".slide-historia-1",
    null,
    null
);

slider_inside (".sld-inside-historia-1");

common_slider(
    ".dot-historia-2",
    ".sld-historia-container-2",
    ".slide-historia-2",
    null,
    null
);

common_slider(
    ".dot-historia-3",
    ".sld-historia-container-3",
    ".slide-historia-3",
    null,
    null
);

/* página Expo Tecnica */

//slider general
common_slider(
    ".dot-g",
    ".sld-g",
    ".slide-g",
    ".flecha-derecha-g",
    ".flecha-izquierda-g"
);

//slider actividades
common_slider(
    ".dot-a",
    ".slda",
    ".slide-a",
    ".flecha-derecha-a",
    ".flecha-izquierda-a"
);

//slider proyectos
common_slider(
    ".dot-pr",
    ".sld-pr",
    ".slide-pr",
    ".flecha-derecha-pr",
    ".flecha-izquierda-pr"
);

slider_inside(".sld-i-pr-1");
slider_inside(".sld-i-pr-2");
slider_inside(".sld-i-pr-3");

//slider pexp
common_slider(
    ".dot-pexp",
    ".sld-pexp",
    ".slide-pexp",
    ".flecha-derecha-pexp",
    ".flecha-izquierda-pexp"
);

slider_inside(".sld-i-pexp-1");
slider_inside(".sld-i-pexp-2");
slider_inside(".sld-i-pexp-3");

//slider mejores proyectos
slider_inside(".sldp-1");
slider_inside(".sldp-2");

//overlayg
overlay_dinamico(
    ".overlayg",
    ".slide-g"
);

overlay_dinamico(
    ".overlay-pr",
    ".slide-pr"
);

overlay_dinamico(
    ".overlay-pexp",
    ".slide-pexp"
);

//slider imágenes mejores proyectos mobile
slider_inside(".sldp-mobile-1");
slider_inside(".sldp-mobile-2");

/* pagina talleres terciaria */

//info
slider_inside(".slide-i-A");
slider_inside(".slide-i-B");
slider_inside(".slide-i-C");
slider_inside(".slide-i-D");
slider_inside(".slide-i-E");

//electro
slider_inside(".slide-i-F");
slider_inside(".slide-i-G");
slider_inside(".slide-i-H");
slider_inside(".slide-i-I");
slider_inside(".slide-i-J");
slider_inside(".slide-i-K");
slider_inside(".slide-i-L");
slider_inside(".slide-i-M");
slider_inside(".slide-i-N");