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