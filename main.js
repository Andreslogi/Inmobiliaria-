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