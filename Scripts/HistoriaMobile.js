     function initSlider(sliderId, dotsId) {
      const galeria = document.getElementById(sliderId);
      const dotsContainer = document.getElementById(dotsId);
      const slides = galeria.querySelectorAll('img');
      let index = 0;
      let interval;

      // Crear dots dinámicamente
      slides.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);

        dot.addEventListener("click", () => {
          index = i;
          updateSlider();
          clearInterval(interval);
          startAutoPlay();
        });
      });

      const dots = dotsContainer.querySelectorAll(".dot");

      function updateSlider() {
        galeria.scrollTo({
          left: slides[index].offsetLeft,
          behavior: "smooth"
        });
        dots.forEach((dot, i) => {
          dot.classList.toggle("active", i === index);
        });
      }

      function startAutoPlay() {
        interval = setInterval(() => {
          index = (index + 1) % slides.length;
          updateSlider();
        }, 5000);
      }

      galeria.addEventListener("scroll", () => {
        let slideWidth = slides[0].offsetWidth;
        index = Math.round(galeria.scrollLeft / slideWidth);
        dots.forEach((dot, i) => {
          dot.classList.toggle("active", i === index);
        });
      });

      startAutoPlay();
    }

    // Iniciar sliders de cada bloque
    initSlider("slider1", "dots1");
    initSlider("slider2", "dots2");
    initSlider("slider3", "dots3");
    initSlider("slider4", "dots4");
