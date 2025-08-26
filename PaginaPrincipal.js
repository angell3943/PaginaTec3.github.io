const boton = document.getElementById('MenuHamburguesa');
const links = document.getElementById('LinksMenu');

  boton.addEventListener('click', () => {
    if(links.style.display === 'flex') {
      links.style.display = 'none';
    } else {
      links.style.display = 'flex';
    }
  });

