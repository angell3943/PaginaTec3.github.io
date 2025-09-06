// Declaración de variables para mostrar nav lateral
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

// Declaración de variables para mostrar sublistas
const subLists = [
    document.querySelector("#list1"),
    document.querySelector("#list2"),
    document.querySelector("#list3")
];

const subLinks = [
    document.querySelector("#abrir1"),
    document.querySelector("#abrir2"),
    document.querySelector("#abrir3")
];

// Animación de entrada/salida
let animacion = null;

// Abrir menú
abrir.addEventListener("click", () => {
    if (animacion) animacion.cancel();

    nav.style.display = "flex";

    animacion = nav.animate([
        { transform: "translateX(100%)", opacity: 0 },
        { transform: "translateX(0)", opacity: 1 }
    ], {
        duration: 350,
        easing: "ease-in-out",
        fill: "forwards"
    });
});

// Cerrar menú
cerrar.addEventListener("click", () => {
    if (animacion) animacion.cancel();

    animacion = nav.animate([
        { transform: "translateX(0)", opacity: 1 },
        { transform: "translateX(100%)", opacity: 0 }
    ], {
        duration: 350,
        easing: "ease-in-out",
        fill: "forwards"
    });

    animacion.onfinish = () => {
        nav.style.display = "none";
    };
});

// Función para manejar apertura/cierre de sublistas
subLinks.forEach((link, index) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const currentList = subLists[index];
        const isOpen = currentList.classList.contains("activo");

        // Cerramos todas las demás sublistas
        subLists.forEach((list, i) => {
            if (i !== index) list.classList.remove("activo");
        });

        // Si estaba abierta, se cierra; si estaba cerrada, se abre
        if (isOpen) {
            currentList.classList.remove("activo");
        } else {
            currentList.classList.add("activo");
        }
    });
});
