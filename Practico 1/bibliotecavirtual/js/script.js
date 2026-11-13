function verDetalle(titulo, autor, descripcion) {
    document.getElementById('modalTitulo').textContent = titulo;
    document.getElementById('modalAutor').textContent = 'Autor: ' + autor;
    document.getElementById('modalDescripcion').textContent = descripcion;

    const modal = new bootstrap.Modal(document.getElementById('modalDetalle'));
    modal.show();
}

function filtrarCatalogo(tipo, botonClickeado) {
    // Cambiar el botón activo
    const botones = document.querySelectorAll('#catalogo .btn-outline-dark');
    botones.forEach(btn => btn.classList.remove('active'));
    botonClickeado.classList.add('active');

    const tarjetas = document.querySelectorAll('.item-catalogo');
    tarjetas.forEach(tarjeta => {
        if (tipo === 'todos' || tarjeta.getAttribute('data-tipo') === tipo) {
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    });
}