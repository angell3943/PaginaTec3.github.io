const dots = document.querySelectorAll(".dot");
const slides = document.querySelectorAll(".slider .slide");
const slider = document.querySelector(".slider");

let indiceCavernicola = 0;

for (let i = 0; i<dots.length; i++){

    dots[i].addEventListener("click", function(){

        for(let j = 0; j<dots.length; j++){

            dots[j].classList.remove("active");

        }

        this.classList.add("active");

    });

}

for (let i = 0; i<dots.length; i++){

    dots[i].addEventListener("click", function(){

        slides[i].scrollIntoView({ 
            behavior: "smooth",
            block: "nearest",
            inline: "nearest"
        });

    });

}

    slider.addEventListener("scroll", function(){

        indiceCavernicola = 1 - indiceCavernicola;
        dots[indiceCavernicola].classList.add("active");

        if(indiceCavernicola == 1){

            dots[0].classList.remove("active");

        }else{

            dots[1].classList.remove("active");

        }


    });