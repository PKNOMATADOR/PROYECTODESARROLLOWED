// Esperamos que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos el formulario
    const formulario = document.getElementById("contacto-form");

    // Agregamos un evento de "submit" al formulario
    formulario.addEventListener("submit", function(event) {
        // Evitamos el envío del formulario para hacer la validación
        event.preventDefault();

        // Obtenemos los valores de los campos
        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const provincia = document.getElementById("provincia").value;
        const genero = document.querySelector('input[name="genero"]:checked');
        const mensaje = document.getElementById("mensaje").value.trim();
        const politicas = document.getElementById("politicas").checked;

        // Variable para almacenar los errores
        let errores = [];

        // Validamos los campos
        if (nombre === "") {
            errores.push("El nombre es obligatorio.");
        }

        if (apellido === "") {
            errores.push("El apellido es obligatorio.");
        }

        if (provincia === "") {
            errores.push("Debes seleccionar una provincia.");
        }

        if (!genero) {
            errores.push("Debes seleccionar tu género.");
        }

        if (mensaje === "") {
            errores.push("El mensaje no puede estar vacío.");
        }

        if (!politicas) {
            errores.push("Debes aceptar las políticas de uso.");
        }

        // Si hay errores, mostramos los mensajes y evitamos el envío del formulario
        if (errores.length > 0) {
            alert("Por favor, corrige los siguientes errores:\n\n" + errores.join("\n"));
        } else {
            // Si no hay errores, mostramos un mensaje de éxito
            alert("Formulario enviado correctamente.");
            formulario.submit(); // Ahora enviamos el formulario
        }
    });
});
// Obtén los elementos del DOM
var modal = document.getElementById("modal-politicas"); // Modal
var btn = document.getElementById("btn-politicas"); // Botón de políticas
var span = document.getElementsByClassName("close")[0]; // Botón de cierre (la cruz)

// Cuando el usuario haga clic en el botón, se abrirá el modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Cuando el usuario haga clic en la cruz, se cerrará el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario haga clic fuera del modal, se cerrará
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
