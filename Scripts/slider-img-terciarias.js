const dots = document.querySelectorAll(".dot");
const slider = document.querySelector(".img-slider-hijo");

    dots.forEach((dot, indice) => {

        dot.addEventListener("click", function (){

            dots.forEach(d => {
                d.classList.remove("active");
            })

            this.classList.add("active");

            slider.scrollTo({
                left: indice * slider.clientWidth,
                behavior: "smooth"
            })

        });

    })
    
