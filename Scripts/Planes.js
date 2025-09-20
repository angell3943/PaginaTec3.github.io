const overlay = document.getElementById("overlay");
const tarjetas = document.querySelectorAll(".tarjeta");
let tarjetaActiva = null;

function cerrarTarjeta(tarjeta) {
  tarjeta.classList.remove("activo");
  tarjeta.querySelector(".toggle-btn").textContent = "+";
  overlay.classList.remove("activo");
  tarjetaActiva = null;
}

tarjetas.forEach(tarjeta => {
  const btn = tarjeta.querySelector(".toggle-btn");

  btn.addEventListener("click", e => {
    e.stopPropagation();

    // Cerrar otra tarjeta activa
    if (tarjetaActiva && tarjetaActiva !== tarjeta) {
      cerrarTarjeta(tarjetaActiva);
    }

    // Alternar tarjeta clickeada
    if (!tarjeta.classList.contains("activo")) {
      tarjeta.classList.add("activo");
      btn.textContent = "−";
      overlay.classList.add("activo");
      tarjetaActiva = tarjeta;
    } else {
      cerrarTarjeta(tarjeta);
    }
  });
});

// Cerrar al hacer click en overlay
overlay.addEventListener("click", () => {
  if (tarjetaActiva) cerrarTarjeta(tarjetaActiva);
});
