function mostrarBloque(c, b) {
  const bloques = document.querySelectorAll(`#c${c}b1,#c${c}b2`);
  bloques.forEach(bl => {
    bl.classList.remove('activo');
    bl.querySelectorAll('button').forEach(btn => btn.classList.remove('activo'));
  });
  const target = document.getElementById(`c${c}b${b}`);
  target.classList.add('activo');
  target.querySelectorAll('button')[b - 1].classList.add('activo');
  resetFotos(target);
  updateSliders();
}

document.addEventListener('DOMContentLoaded', () => {
  const estados = new Map();

  document.querySelectorAll('.foto').forEach(foto => {
    const imgs = Array.from(foto.querySelectorAll('img'));
    imgs.forEach((img, i) => {
      img.classList.toggle('activo', i === 0);
    });
    estados.set(foto, { imgs, index: 0, interval: null });
  });

  const start = (foto, state) => {
    if (state.interval || state.imgs.length < 2) return;
    state.interval = setInterval(() => {
      state.imgs[state.index].classList.remove('activo'); 
      state.index = (state.index + 1) % state.imgs.length;
      state.imgs[state.index].classList.add('activo');
    }, 3000);
  };

  const stop = state => { 
    if (state.interval) { clearInterval(state.interval); state.interval = null; } 
  };

  window.updateSliders = () => {
    estados.forEach((state, foto) => {
      const bloque = foto.closest('.bloque');
      bloque.classList.contains('activo') ? start(foto, state) : stop(state);
    });
  };

  window.resetFotos = bloque => {
    const foto = bloque.querySelector('.foto');
    const state = estados.get(foto);
    if (!state) return;
    state.index = 0;
    state.imgs.forEach((img, i) => {
      img.classList.toggle('activo', i === 0);
    });
  };

  updateSliders();

  document.addEventListener('visibilitychange', () => {
    document.hidden 
      ? estados.forEach(stop)
      : updateSliders();
  });
});