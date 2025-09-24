function setupSliderNovedades() {
const track = document.querySelector(".slider-track-novedades");
const slides = document.querySelectorAll(".NovedadesRecuadro");
const dotsContainer = document.querySelector(".dots-novedades");

let index = 0;

  // Crear dots
slides.forEach((_, i) => {
    const dot = document.createElement("div");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      index = i;
      updateSlider();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll("div");

  function updateSlider() {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
  }

  // Slider automático
  setInterval(() => {
    index = (index + 1) % slides.length;
    updateSlider();
  }, 10000);
}

document.addEventListener("DOMContentLoaded", setupSliderNovedades);
