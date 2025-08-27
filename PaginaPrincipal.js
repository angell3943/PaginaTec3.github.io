document.addEventListener('DOMContentLoaded', () => {

  const boton = document.getElementById('MenuHamburguesa');
  const links = document.getElementById('LinksMenu');

    boton.addEventListener('click', () => {
      links.classList.toggle('activo');
      });
const presentacion = document.getElementById('Presentacion');
const imagenes = [
  "hero.jpg",
  "hero.jpg",
  "hero2.jpg"
];
let indice = 0;

setInterval(() => {
  indice = (indice + 1) % imagenes.length;
  presentacion.style.backgroundImage = `url('${imagenes[indice]}')`;
}, 3000);

});
