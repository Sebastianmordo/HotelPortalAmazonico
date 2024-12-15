document.addEventListener("DOMContentLoaded", async () => {
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("form-feedback");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            feedback.textContent = "Todos los campos son obligatorios.";
            feedback.className = "error-message";
        } else if (!validateEmail(email)) {
            feedback.textContent = "Por favor, introduce un correo electrónico válido.";
            feedback.className = "error-message";
        } else {
            feedback.textContent = "Mensaje enviado con éxito. ¡Gracias por contactarnos!";
            feedback.className = "success-message";
            form.reset();
        }
        setTimeout(() => {
            feedback.textContent = "";
            feedback.className = "";
        }, 3000);
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const heroSection = document.querySelector(".hero-section");
    const welcomeMessage = document.createElement("p");

    welcomeMessage.textContent = "Reserva ahora y obtén un descuento especial del 10% en tu primera estadía.";
    welcomeMessage.className = "promotion-message";
    heroSection.appendChild(welcomeMessage);

    const menu = document.querySelector(".nav-menu ul");
    menu.addEventListener("mouseover", (e) => {
        if (e.target.tagName === "A") {
            e.target.classList.add("menu-hover");
        }
    });

    menu.addEventListener("mouseout", (e) => {
        if (e.target.tagName === "A") {
            e.target.classList.remove("menu-hover");
        }
    });

    // Consumir la API y mostrar dinámicamente las habitaciones
    const habitacionesContainer = document.querySelector('.room-cards');

    try {
        const response = await fetch('/api/habitaciones');
        const habitaciones = await response.json();

        habitacionesContainer.innerHTML = ''; // Limpiar el contenido existente

        habitaciones.forEach(habitacion => {
            const habitacionCard = document.createElement('div');
            habitacionCard.className = 'room-card';

            habitacionCard.innerHTML = `
                <img src="imagenes/habitacion${habitacion.id}.jpg" alt="${habitacion.nombre}">
                <h3>${habitacion.nombre}</h3>
                <p>${habitacion.descripcion}</p>
            `;

            habitacionesContainer.appendChild(habitacionCard);
        });
    } catch (error) {
        console.error('Error al cargar las habitaciones:', error);
        habitacionesContainer.innerHTML = '<p>Error al cargar las habitaciones. Por favor, inténtelo más tarde.</p>';
    }
});
