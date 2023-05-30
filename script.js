// script.js

// Crea el botón "Volver al inicio"
var volverBtn = document.createElement('button');
volverBtn.innerText = 'Volver al inicio';
volverBtn.id = 'volver-btn';
document.body.appendChild(volverBtn);

// Agrega un evento de clic al botón
volverBtn.addEventListener('click', function() {
    // Desplázate al inicio de la página
    window.scrollTo(0, 0);
});
