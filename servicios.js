// Array para almacenar los servicios agregados al pedido
let pedido = [];

// Función para mostrar y ocultar detalles
function mostrarDetalles(servicio) {
    const detalles = document.getElementById(servicio + '-detalles');
    if (detalles.style.display === "none" || detalles.style.display === "") {
        detalles.style.display = "block";  // Mostrar detalles
    } else {
        detalles.style.display = "none";  // Ocultar detalles
    }
}

// Función para agregar un servicio al pedido
function agregarAlPedido(servicio) {
    if (!pedido.includes(servicio)) {
        pedido.push(servicio);  // Agregar servicio al pedido
        actualizarPedido();  // Actualizar la lista del pedido
        document.getElementById('servicio').value = servicio;  // Rellenar el campo de servicio en el formulario
    } else {
        alert("Este servicio ya ha sido agregado al pedido.");  // Avisar si el servicio ya fue agregado
    }
}

// Función para actualizar la lista del pedido
function actualizarPedido() {
    const pedidoElement = document.getElementById('pedido-lista');
    pedidoElement.innerHTML = '';  // Limpiar la lista de servicios
    pedido.forEach(servicio => {
        const item = document.createElement('li');
        item.textContent = servicio;  // Crear un nuevo elemento de lista para cada servicio
        pedidoElement.appendChild(item);
    });
    document.getElementById('total-pedido').textContent = pedido.length;  // Actualizar el total de servicios en el pedido
}

// Función para eliminar todos los servicios del pedido
function eliminarPedido() {
    pedido = [];  // Vaciar el array del pedido
    actualizarPedido();  // Actualizar la lista del pedido
    alert("El pedido ha sido eliminado.");  // Avisar al usuario
}

// Función para validar el formulario
function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const cedula = document.getElementById('cedula').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const servicio = document.getElementById('servicio').value;
    const fecha = document.getElementById('fecha').value;
    const aceptar = document.getElementById('aceptar').checked;

    // Validar que todos los campos estén llenos
    if (nombre === '' || cedula === '' || email === '' || telefono === '' || servicio === '' || fecha === '' || !aceptar) {
        alert("Por favor, completa todos los campos y acepta los términos y condiciones.");
        return false;  // No enviar el formulario
    }
    return true;  // Enviar el formulario si todo está correcto
}

// Función para agregar música al pedido
function agregarMusicaAlPedido() {
    var estiloMusica = document.getElementById("estilo-musica").value;
    if (estiloMusica) {
        // Agregar música al campo de servicio seleccionado
        document.getElementById("servicio").value = "Música - " + estiloMusica;

        // Agregar música al listado del pedido
        var listaPedido = document.getElementById("pedido-lista");
        var item = document.createElement("li");
        item.textContent = "Música: " + estiloMusica;
        listaPedido.appendChild(item);

        // Actualizar el total de servicios en el pedido
        var totalPedido = document.getElementById("total-pedido");
        totalPedido.textContent = listaPedido.children.length;
    } else {
        alert("Por favor selecciona un estilo de música.");  // Avisar si no se seleccionó un estilo de música
    }
}
function validarFormulario() {
    // Evitar que el formulario se envíe de manera tradicional
    event.preventDefault();  // Si usas "onsubmit", esto es necesario para evitar el refresco de la página.

    // Aquí puedes agregar cualquier validación adicional si es necesario.
    
    // Muestra el mensaje de "Pedido Exitoso"
    alert("¡Pedido exitoso! Gracias por tu reserva.");
    
    // Opcional: Puedes limpiar el formulario después de mostrar el mensaje de éxito
    document.querySelector("form").reset();
    
    // Si lo deseas, podrías redirigir a otra página o realizar alguna acción después de mostrar el mensaje
    // window.location.href = "pagina_de_confirmacion.html";  // Si quieres redirigir a otra página.

    return false;  // Evita el envío del formulario de forma predeterminada
}
