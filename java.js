// Agregar un nuevo usuario
document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const carrera = document.getElementById("carrera").value;
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    
    // Crear una nueva fila en la tabla
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${carrera}</td>
        <td>${sexo}</td>
        <td><button class="btn btn-danger btn-sm deleteBtn">Eliminar</button></td>
    `;
    
    // Agregar la nueva fila a la tabla
    document.getElementById("userTable").appendChild(newRow);
    
    // Asignar funcionalidad de eliminar a los botones de eliminación
    newRow.querySelector(".deleteBtn").addEventListener("click", function () {
        this.parentElement.parentElement.remove();
    });
    
    // Reiniciar el formulario después de agregar el usuario
    document.getElementById("userForm").reset();
});

// Reiniciar el formulario manualmente al hacer clic en "Cancelar"
document.getElementById("resetBtn").addEventListener("click", function () {
    document.getElementById("userForm").reset();
});
