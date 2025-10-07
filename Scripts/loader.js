  // Cuando la página termina de cargar
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const contenido = document.querySelector(".contenido");

    // Esperar más tiempo antes de ocultar el loader (por ejemplo 3 segundos)
    setTimeout(() => {
      loader.classList.add("hidden");
      contenido.style.display = "block";
    }, 500); 
  });