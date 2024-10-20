document.addEventListener("DOMContentLoaded", function () {
    const barraUno = document.getElementById("barra-uno");
    const abrirBarra = document.getElementById("abrir-barra");

    // Ocultar la barra lateral
    document.getElementById("click-cerrar").addEventListener("click", function () {
        barraUno.style.display = "none"; // Oculta la barra
        abrirBarra.style.display = "block"; // Muestra el botón para abrir la barra
    });

    // Mostrar la barra lateral
    abrirBarra.addEventListener("click", function () {
        barraUno.style.display = "block"; // Muestra la barra de nuevo
        abrirBarra.style.display = "none"; // Oculta el botón de abrir
    });

    // Ocultar la barra lateral al hacer clic fuera de ella en pantallas menores de 768px
    document.addEventListener("click", function (event) {
        if (window.innerWidth < 768 && barraUno.style.display === "block") {
            // Verifica si el clic fue fuera de la barra y del botón de abrir
            if (!barraUno.contains(event.target) && event.target !== abrirBarra) {
                barraUno.style.display = "none"; // Oculta la barra
                abrirBarra.style.display = "block"; // Muestra el botón para abrir la barra
            }
        }
    });
});
