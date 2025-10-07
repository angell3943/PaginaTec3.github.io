const botones = document.querySelectorAll(".btn");

botones.forEach(btn => {

    btn.addEventListener("click", function(){

        if(this.classList.contains("active")){

            this.classList.remove("active");

            botones.forEach(b => {

                b.classList.remove("nonactive");

            });

            return;

        }

        botones.forEach(b => {

            if(b != this){

                b.classList.add("nonactive");

            } else {

                b.classList.remove("nonactive");

            }

        });

        this.classList.add("active");

    });

});