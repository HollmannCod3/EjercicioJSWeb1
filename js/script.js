


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formulario');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        validar();
    });

    const puntRango = document.getElementById('reseña');
    puntRango.addEventListener('input', mostrarReseña);
    mostrarReseña();
});

function mostrarReseña() {
    const puntuacion = document.getElementById('reseña').value;
    document.getElementById('pun').textContent = puntuacion;
}

function validar() {
    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;
    const reseña = document.getElementById('reseña').value;

    
    const errores = [];

    if (nombre.length < 3) {
        errores.push({ id: 'nombre', mensaje: 'El nombre debe tener al menos 3 caracteres'});
    }

    if (reseña < 1 || reseña > 5) {
        errores.push({ id: 'reseña', mensaje: 'La puntuación debe estar entre 1 y 5.' });
    }

    if(comentario.length > 0){
    if (comentario.length > 200) {
        errores.push({id: 'comentario', mensaje: 'El comentario debe contener menos de 200 caracteres.'});
    }else if (comentario.length < 10){
        errores.push({id: 'comentario', mensaje: 'El comentario tiene que contener más de 10 caracteres.'});
    }
    }

    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('.inputes').forEach(el => el.classList.remove('error'));


    if (errores.length > 0) {
        errores.forEach(error => {
            const errorElement = document.getElementById(`${error.id}-error`);
            const inputElement = document.getElementById(error.id);
            errorElement.textContent = error.mensaje;
            inputElement.classList.add('error');
        });
        document.getElementById('resultado').style.display = 'none';

        return;
    }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; 
    resultadoDiv.style.display = 'block';


    const successMessage = `
        <h4>INFORMACIÓN SOBRE RESEÑA: </h4>
        <p class="success"><strong>NOMBRE DE PELÍCULA:</strong> ${nombre}</p>
        <p class="success"><strong>RESEÑA:</strong> ${reseña} </p>
        <p class="success"><strong>COMENTARIO:</strong> ${comentario}</p>
        
    `;
    resultadoDiv.innerHTML = successMessage;
    resultadoDiv.scrollIntoView({ behavior: 'smooth' });
}

