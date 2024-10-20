document.addEventListener("DOMContentLoaded", function() {
    const texto = "AMVATT-Asesorías y Vuelos";
    const elemento = document.getElementById("animacion-h1");
    let i = 0;

    function escribirLetra() {
        if (i < texto.length) {
            elemento.textContent += texto.charAt(i);
            i++;
            setTimeout(escribirLetra, 200); // ajusta la velocidad aquí (100ms)
        }
    }

    // Iniciar la animación después de que la página cargue completamente
    setTimeout(escribirLetra, 500); // tiempo de retraso antes de iniciar (500ms)
});



// Selecciona todas las tarjetas con la clase "card"
const cards = document.querySelectorAll('.card');

// Configuración del IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Añade la clase visible cuando entra en vista
        } else {
            entry.target.classList.remove('visible'); // Elimina la clase visible cuando sale de vista
        }
    });
}, {
    threshold: 0.25 // Cuando el 25% del elemento es visible
});

// Observa cada tarjeta
cards.forEach(card => observer.observe(card));



