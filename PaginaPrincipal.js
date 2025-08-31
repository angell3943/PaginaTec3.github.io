function setupSlider(sliderId, navId, intervalTime = 5000) {
  const slider = document.getElementById(sliderId);
  const slides = slider.querySelectorAll('.slide');
  const navLinks = document.getElementById(navId).querySelectorAll('a');
  let currentIndex = 0;
  let sliderWidth = slider.offsetWidth;

  function goToSlide(index) {
    slider.scrollTo({ left: sliderWidth * index, behavior: "smooth" });
    navLinks.forEach(l => l.classList.remove("active"));
    navLinks[index].classList.add("active");
    currentIndex = parseInt(index);
  }

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      goToSlide(link.dataset.index);
    });
  });

  window.addEventListener("resize", () => {
    sliderWidth = slider.offsetWidth;
    goToSlide(currentIndex);
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
  }, intervalTime);
}

// Inicializar sliders
setupSlider("slider1", "slider1-nav");
setupSlider("slider2", "slider2-nav");
