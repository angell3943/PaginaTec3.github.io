const btnArriba = document.querySelector("#tgl-btn-arriba");
const btnAbajo = document.querySelector("#tgl-btn-abajo");
const tarjetas = document.querySelector(".tarjetas-container");

function toggleTarjetas() {
  tarjetas.classList.toggle("show");
  btnArriba.classList.toggle("active");
  btnAbajo.classList.toggle("active");
}

btnArriba.addEventListener("click", toggleTarjetas);
btnAbajo.addEventListener("click", toggleTarjetas);