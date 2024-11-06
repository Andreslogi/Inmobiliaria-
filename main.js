// Función para mostrar las propiedades según el botón clicado (venta o arriendo)

/*
function mostrarPropiedades(tipo) {
    const seccionVenta = document.getElementById('propiedadesVenta');
    const seccionArriendo = document.getElementById('arriendo');

    if (tipo === 'venta') {
        seccionVenta.classList.remove('oculto');
        seccionArriendo.classList.add('oculto');
    } else if (tipo === 'arriendo') {
        seccionVenta.classList.add('oculto');
        seccionArriendo.classList.remove('oculto');
    }
}
*/

function mostarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';

    // Ajustar el tamao del modal si es necesario
    const footer = document.querySelector('footer');
    const footerTeact = footer.getBoundingClientRect();
    const modalRect = modal.getBoundingClientRect();

    if (modalRect.bottom > footerRect.top) {
        // Si el modal se sale del footer , se ajusta a su posicion
        modal.style.top = '${footerRect.top - modalRect.height}px';
    }
}
// Función para ventana emergente con la información de la propiedad seleccionada
document.querySelectorAll('.propiedad').forEach(propiedad => {
    propiedad.addEventListener('click', function() {
        // Obtener información de la propiedad
        const title = this.querySelector('h3').innerText;
        const description = this.querySelector('p').innerText;

        // Mostrar el modal y llenar la información
        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-description').innerText = description;
        document.getElementById('modal').style.display = 'block';

        //Establecer la primera imagen del carrusel
        indiceImg = 0;
        document.getElementById('carrusel-img').src = imgs[indiceImg];

        //Mostar el modal
        document.getElementById('modal').style.display = 'block';
    });
});

// Cerrar el modal
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Cerrar el modal si se hace clic fuera del contenido
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

let imgs = [
    './Imagenes/img1.jpeg',
    './Imagenes/img2.jpeg',
    './Imagenes/img3.jpeg',
    './Imagenes/img4.jpeg'
];

let indiceImg = 0;

function cambiarImg(direccion) {
    indiceImg += direccion;
    if (indiceImg < 0) {
        indiceImg = imgs.length -1; // Vuelve a la última imagen
    } else if (indiceImg >= imgs.length) {
        indiceImg = 0; // vuelve a la primera imagen
    }
    document.getElementById('carrusel-img').src = imgs[indiceImg];
}

// Funcion para cambiar la imagen desde la mini galeria
function cambiarImgDesdeMiniatura(indice) {
    indiceImg = indice; // establece el indice a la miniatura seleccionada
    document.getElementById('carrusel-img').src = imgs[indiceImg];
}