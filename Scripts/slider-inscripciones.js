//1er slider

const dots = document.querySelectorAll(".dot-st");
const slider = document.querySelector(".slider-st");
const slides = document.querySelectorAll(".slider-st .slide-st");

let seen_index = 0;

dots.forEach( (dot, i) => {

    dot.addEventListener("click", function(){

        dots.forEach(d => {

            d.classList.remove("active");

        });

        this.classList.add("active");

        slides[i].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "nearest"
        });

    });

});

slider.addEventListener("scroll", function(){

    seen_index = Math.round( slider.scrollLeft / slides[0].offsetWidth );

    dots.forEach(dot => {

        dot.classList.remove("active");

    });

    dots[seen_index].classList.add("active");

});

//2do slider

const dots_nd = document.querySelectorAll(".dot-nd");
const slider_nd = document.querySelector(".slider-nd");
const slides_nd = document.querySelectorAll(".slider-nd .slide-nd");

let seen_index_nd = 0;

dots_nd.forEach( (dot, i) => {

    dot.addEventListener("click", function(){

        dots_nd.forEach(d => {

            d.classList.remove("active");

        });

        this.classList.add("active");

        slides_nd[i].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "nearest"
        });

    });

});

slider_nd.addEventListener("scroll", function(){

    seen_index_nd = Math.round( slider_nd.scrollLeft / slides_nd[0].offsetWidth );

    dots_nd.forEach(dot => {

        dot.classList.remove("active");

    });

    dots_nd[seen_index_nd].classList.add("active");

});

//3er slider

const dots_rd = document.querySelectorAll(".dot-rd");
const slider_rd = document.querySelector(".slider-rd");
const slides_rd = document.querySelectorAll(".slider-rd .slide-rd");

let seen_index_rd = 0;

dots_rd.forEach( (dot, i) => {

    dot.addEventListener("click", function(){

        dots_rd.forEach(d => {

            d.classList.remove("active");

        });

        this.classList.add("active");

        slides_rd[i].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "nearest"
        });

    });

});

slider_rd.addEventListener("scroll", function(){

    seen_index_rd = Math.round( slider_rd.scrollLeft / slides_rd[0].offsetWidth );

    dots_rd.forEach(dot => {

        dot.classList.remove("active");

    });

    dots_rd[seen_index_rd].classList.add("active");

});