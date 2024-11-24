document.getElementById('form-reserva').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto

    console.log("Formulario enviado"); // Verifica si el formulario se está enviando

    // Prevenir el envío del formulario si hay errores
    let hasErrors = false;

    // Validar nombre
    const nombre = document.getElementById('nombre');
    if (!nombre.value.trim().match(/^[A-Za-z\s]+$/)) {
        mostrarError(nombre, 'Por favor, ingresa un nombre válido (solo letras y espacios).');
        hasErrors = true;
    } else {
        limpiarError(nombre);
    }

    // Validar correo
    const email = document.getElementById('email');
    if (!email.value.trim().match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
        mostrarError(email, 'Por favor, ingresa un correo electrónico válido.');
        hasErrors = true;
    } else {
        limpiarError(email);
    }

    // Validar teléfono
    const telefono = document.getElementById('telefono');
    if (!telefono.value.trim().match(/^\d{10}$/)) {
        mostrarError(telefono, 'Por favor, ingresa un número de teléfono válido (10 dígitos).');
        hasErrors = true;
    } else {
        limpiarError(telefono);
    }

    // Validar tipo de evento
    const tipoEvento = document.getElementById('tipo-evento');
    if (!tipoEvento.value) {
        mostrarError(tipoEvento, 'Por favor, selecciona un tipo de evento.');
        hasErrors = true;
    } else {
        limpiarError(tipoEvento);
    }

    // Si hay errores, no continuar
    if (hasErrors) {
        return; // Detiene el proceso si hay errores
    }

    // Si no hay errores, mostrar el mensaje de confirmación
    const mensaje = document.getElementById('mensaje-confirmacion');
    mensaje.style.display = 'block'; // Muestra el mensaje
    console.log("Mensaje de confirmación mostrado"); // Verifica si se muestra el mensaje

    // Opcional: limpiar los campos del formulario
    this.reset();

    // Ocultar el mensaje después de unos segundos
    setTimeout(() => {
        mensaje.style.display = 'none';
    }, 3000); // Oculta el mensaje después de 3 segundos
});
