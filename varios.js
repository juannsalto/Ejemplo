function enviarDatos(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener los valores del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Crear un objeto con los datos
    const data = { email, password };
    console.log(data);

    // Enviar los datos al servidor
    fetch('/logueo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json();
    })
    .then(data => {
        console.log('Éxito:', data);
        alert(data.message); // Mostrar mensaje de éxito
    })
    .catch(() => {
        alert('Error al iniciar sesión.');
    });
}

// Agregar el evento de escucha para el formulario una vez que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registro');
    if (form) {
        form.addEventListener('submit', enviarDatos);
    }
});