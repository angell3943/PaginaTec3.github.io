document.addEventListener('DOMContentLoaded', () => {

const boton = document.getElementById('MenuHamburguesa');
const links = document.getElementById('LinksMenu');

  boton.addEventListener('click', () => {
    links.classList.toggle('activo');
    });

});
