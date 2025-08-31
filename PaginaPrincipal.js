function setupSlider(sliderId, dotsId, itemClass) {
  const slider = document.getElementById(sliderId);
  const track = slider.querySelector('.slider-track');
  const items = slider.querySelectorAll(itemClass);
  const dotsContainer = document.getElementById(dotsId);
  let current = 0;
  let interval;

  // Limpiar los dots existentes antes de crearlos
  dotsContainer.innerHTML = '';

  items.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if(i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      current = i;
      updateSlider();
      resetInterval();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.dot');

  function updateSlider() {
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function nextSlide() {
    current = (current + 1) % items.length;
    updateSlider();
  }

  function startInterval() {
    interval = setInterval(nextSlide, 5000);
  }

  function resetInterval() {
    clearInterval(interval);
    startInterval();
  }

  updateSlider();
  startInterval();
}


// Inicializar sliders
setupSlider('slider2', 'dots2', '.Orientacion');
setupSlider('slider-orientaciones4', 'dots4', '.Orientacion');
setupSlider('slider-eventos', 'dots-eventos', '.Evento');






