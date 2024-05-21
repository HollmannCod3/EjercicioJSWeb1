document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formulario');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío del formulario
        validar();
    });

    const tempRange = document.getElementById('temperatura');
    tempRange.addEventListener('input', mostrarTemp);
    mostrarTemp(); // Inicializar el valor en el span al cargar la página
});

function mostrarTemp() {
    const temp = document.getElementById('temperatura').value;
    document.getElementById('tempOutput').textContent = temp;
}

function validar() {
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const temperatura = document.getElementById('temperatura').value;

    // Validaciones básicas
    const errores = [];

    if (nombre.length < 3) {
        errores.push('El nombre debe tener al menos 3 caracteres');
    }

    const telefonoRegex = /^[0-9]{10}$/;
    if (!telefonoRegex.test(telefono)) {
        errores.push('El teléfono debe tener 10 dígitos numéricos');
    }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; // Limpiar el contenido anterior
    resultadoDiv.style.display = 'block';

    if (errores.length > 0) {
        const errorTitle = document.createElement('h3');
        errorTitle.textContent = 'Errores: ';
        resultadoDiv.appendChild(errorTitle);

        errores.forEach(error => {
            const errorP = document.createElement('p');
            errorP.className = 'error';
            errorP.textContent = error;
            resultadoDiv.appendChild(errorP);
        });
        return;
    }

    // Si todas las validaciones son correctas, mostrar los datos
    const successMessage = `
        <h4>Datos Enviados: </h4>
        <p class="success"><strong>Nombre:</strong> ${nombre}</p>
        <p class="success"><strong>Teléfono:</strong> ${telefono}</p>
        <p class="success"><strong>Temperatura:</strong> ${temperatura}°C</p>
    `;
    resultadoDiv.innerHTML = successMessage;
    resultadoDiv.scrollIntoView({ behavior: 'smooth' });
}

