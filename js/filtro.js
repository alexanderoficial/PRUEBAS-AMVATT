// Función para normalizar el texto (elimina tildes y pasa todo a minúsculas)
function normalizeText(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Esperar a que se cargue el contenido de la página
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("busqueda");
    const mainContent = document.getElementById("main-body"); // Selecciona el body
    const itemsToFilter = mainContent.querySelectorAll("p, h1, h2, h3,h4,li,h5,h6"); // Selecciona los elementos a filtrar

    searchInput.addEventListener("input", function () {
        const filterValue = normalizeText(searchInput.value.trim()); // Normaliza el valor de búsqueda

        itemsToFilter.forEach(item => {
            // Normaliza el contenido del item y verifica si incluye el valor de búsqueda
            if (normalizeText(item.textContent).includes(filterValue)) {
                item.style.display = ""; // Muestra el elemento si coincide
            } else {
                item.style.display = "none"; // Oculta el elemento si no coincide
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
  const chatVivo = document.getElementById("chat-vivo");
  const chatIcon = document.querySelector(".chat-img");
  const closeButton = document.getElementById("close-chat");
  const sendMessageButton = document.getElementById("sendMessage");
  const chatMessages = document.getElementById("chat-messages");
  const userMessageInput = document.getElementById("userMessage");

  // Mostrar el chat cuando se hace clic en el icono
  chatIcon.addEventListener("click", function () {
    chatVivo.style.display = "flex";
  });

  // Cerrar el chat cuando se hace clic en la "x"
  closeButton.addEventListener("click", function () {
    chatVivo.style.display = "none";
  });

  // Función para enviar un mensaje
  function sendMessage() {
    const messageText = userMessageInput.value.trim();
    
    if (messageText !== "") {
      // Crear un nuevo mensaje del usuario
      const newUserMessage = document.createElement("div");
      newUserMessage.classList.add("user-message");
      newUserMessage.innerHTML = `<p><strong>Tú:</strong> ${messageText}</p>`;
      
      // Agregar el mensaje del usuario al chat
      chatMessages.appendChild(newUserMessage);
      
      // Limpiar el input
      userMessageInput.value = "";

      // Auto-scroll hacia abajo
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }

  // Enviar mensaje cuando el usuario haga clic en el botón "Enviar"
  sendMessageButton.addEventListener("click", sendMessage);

  // Enviar mensaje cuando el usuario presione la tecla "Enter"
  userMessageInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
});
