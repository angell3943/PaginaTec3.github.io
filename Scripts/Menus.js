//Declaración de variables para mostrar nav lateral
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

// Click de cada boton abre y cierra nav lateral
abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

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
