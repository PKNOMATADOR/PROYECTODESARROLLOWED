// Esperar a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencias a los elementos
    const formulario = document.getElementById("formulario");
    const mensajeConfirmacion = document.getElementById("mensaje-confirmacion");

    // Manejar el envío del formulario
    formulario.addEventListener("submit", function (event) {
        // Evitar el comportamiento por defecto del formulario
        event.preventDefault();

        // Validar los campos
        const nombre = document.getElementById("nombre");
        const apellido = document.getElementById("apellido");
        const celular = document.getElementById("celular");
        const check = document.getElementById("confirmacion");

        if (!nombre.value.trim().match(/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/)) {
            alert("El nombre solo puede contener letras y espacios.");
            return;
        }

        if (!apellido.value.trim().match(/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/)) {
            alert("El apellido solo puede contener letras y espacios.");
            return;
        }

        if (!celular.value.trim().match(/^\d+$/)) {
            alert("El celular solo puede contener números.");
            return;
        }

        if (!check.checked) {
            alert("Debe confirmar que los datos proporcionados son correctos.");
            return;
        }

        // Mostrar el mensaje de confirmación
        mensajeConfirmacion.style.display = "block";

        // Limpiar el formulario
        formulario.reset();

        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
            mensajeConfirmacion.style.display = "none";
        }, 3000);
    });
});
