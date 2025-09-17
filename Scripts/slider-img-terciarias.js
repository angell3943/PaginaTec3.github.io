const dots = document.querySelectorAll(".dot");

    dots.forEach(dot => {

        dot.addEventListener("click", function (){

            dots.forEach(d => {
                d.classList.remove("active");
            })

            this.classList.add("active");

        });

    })      
