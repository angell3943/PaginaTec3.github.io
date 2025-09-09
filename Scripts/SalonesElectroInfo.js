
// Función para crear botones de slider
function crearBotonesSlider(sliderId, botonesId, imgs, mostrar) {
  const contBotones = document.getElementById(botonesId);
  imgs.forEach((img, i) => {
    const btn = document.createElement('button');
    btn.innerText = i + 1;
    if (i === 0) btn.classList.add('activo');
    btn.addEventListener('click', () => {
      mostrar(i);
      contBotones.querySelectorAll('button').forEach(b => b.classList.remove('activo'));
      btn.classList.add('activo');
    });
    contBotones.appendChild(btn);
  });
}

function iniciarSlider(imgs, botonesId, mostrar) {
  let index = 0;
  mostrar(index);

  setInterval(() => {
    index = (index + 1) % imgs.length;
    mostrar(index);
    document.querySelectorAll(`#${botonesId} button`).forEach(b => b.classList.remove('activo'));
    document.querySelectorAll(`#${botonesId} button`)[index].classList.add('activo');
  }, 8000);

  return () => index; // opcional si quieres acceder al índice actual
}

// --- Slider Informática ---
const sliderInfoImgs = Array.from(document.querySelectorAll('#slider-info img'));
const showInfo = idx => {
  sliderInfoImgs.forEach(img => img.classList.remove('activo'));
  sliderInfoImgs[idx].classList.add('activo');
};
crearBotonesSlider('slider-info', 'botones-info', sliderInfoImgs, showInfo);
iniciarSlider(sliderInfoImgs, 'botones-info', showInfo);

// --- Slider Electrónica ---
const sliderElectroImgs = Array.from(document.querySelectorAll('#slider-electro img'));
const overlayElectro = document.getElementById('overlay-electro');

const showElectro = idx => {
  sliderElectroImgs.forEach(img => img.classList.remove('activo'));
  sliderElectroImgs[idx].classList.add('activo');
  overlayElectro.querySelector('h4').innerText = sliderElectroImgs[idx].dataset.titulo;
  overlayElectro.querySelector('p').innerText = sliderElectroImgs[idx].dataset.texto;
};

crearBotonesSlider('slider-electro', 'botones-electro', sliderElectroImgs, showElectro);
iniciarSlider(sliderElectroImgs, 'botones-electro', showElectro);

