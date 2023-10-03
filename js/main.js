document.addEventListener("DOMContentLoaded", function () {
    // ... Código existente ...

    // Evento clic para el formulario de solicitud de presupuesto
    const presupuestoForm = document.querySelector(".presupuesto-form");
    presupuestoForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario

        const producto = document.querySelector("#producto").value;
        const cantidad = parseInt(document.querySelector("#cantidad").value);
        const opciones = document.querySelectorAll(".opcion");
        let costoUnitario = 0;

        // Determinar el costo unitario según la opción seleccionada
        opciones.forEach((opcion) => {
            if (opcion.checked) {
                costoUnitario = parseFloat(opcion.value);
            }
        });

        // Calcular el costo total
        const costoTotal = costoUnitario * cantidad;

        // Solicitar el nombre del cliente adicionalmente
        const nombreCliente = prompt("Ingrese su nombre completo (solo letras en mayúsculas):");

        if (producto && cantidad && nombreCliente && validarNombre(nombreCliente) && costoUnitario > 0) {
            // Crear objeto de datos
            const datosPresupuesto = {
                "Nombre del Cliente": nombreCliente,
                Producto: producto,
                Cantidad: cantidad,
                "Costo Unitario": `$${costoUnitario.toFixed(2)}`,
                "Costo Total": `$${costoTotal.toFixed(2)}`,
            };

            // Mostrar datos al usuario en alert y console.log
            mostrarMensaje(`Gracias, ${nombreCliente}. El costo total a pagar es de $${costoTotal.toFixed(2)}.`);
            mostrarMensaje("Mensaje de despedida.");
            mostrarMensaje("Datos registrados:");
            console.table(datosPresupuesto);
        } else {
            alert("Por favor, complete todos los campos correctamente y seleccione una opción válida.");
        }
    });
});
