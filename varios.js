// escuchar evento
document.addEventListener('DOMContentLoaded', () => { //toma el documento, escucha despues de la carga del DOM
    const form = document.getElementById('registro'); // toma el formulario, todo se hace por id, no pueden faltar en el html
    if (form) {
        form.addEventListener('submit', enviarDatos);
    }
});

function enviarDatos(event) {
    event.preventDefault(); // Evita el envío del formulario

    // valores del formulario
    const email = document.getElementById('email').value; //importante naturalizar sintaxis, se usa asi siempre para tomar elementos
    const password = document.getElementById('password').value;

    // objeto con los datos
    const data = { email, password };
    console.log(data);  // Mostrar los datos en la consola

    // respuesta exitosa
    console.log('Datos enviados correctamente'); // imprime en consola, se ve apretando f12 en el navegador y yendo a consola
    alert('Datos enviados correctamente para el email: ' + email); // Muestra msj en navegador 

}
    function enviarDatos2(event) {
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
        alert('Error al instanciar los datos');
    });
}