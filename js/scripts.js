document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.dato h2');
    let hasCounted = false; // Para asegurar que solo cuente una vez

    const countUp = (element, target) => {
        let count = target > 0 ? 0 : target; // Inicia en 0 o el número negativo
        const speed = Math.abs(Math.round(target / 100)); // Ajusta la velocidad de conteo
        const interval = setInterval(() => {
            count += target > 0 ? speed : -speed; // Aumenta o disminuye según el objetivo
            if ((target > 0 && count >= target) || (target < 0 && count <= target)) {
                count = target; // Asegura que no supere el objetivo
                clearInterval(interval);
            }
            // Formatear el número con comas
            if (element.textContent.includes('%')) {
                element.textContent = count + '%'; // Para el porcentaje
            } else {
                const formattedCount = count > 0 ? `+${count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}` : count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Formato con comas y signo +
                element.textContent = formattedCount;
            }
        }, 20); // Cada cuánto actualizar
    };

    const observerOptions = {
        root: null, // Observa en la ventana
        threshold: 0.1 // Ejecutar cuando al menos el 10% del elemento es visible
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasCounted) {
                hasCounted = true; // Asegúrate de que no cuente más de una vez
                counters.forEach(counter => {
                    const target = +counter.parentElement.dataset.target; // Obtener el objetivo
                    countUp(counter, target);
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(document.getElementById('estadisticas-clientes'));
});
