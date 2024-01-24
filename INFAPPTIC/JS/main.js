document.getElementById('agregarCampo').addEventListener('click', function() {
    const pregunta = document.createElement('div');
    pregunta.classList.add('pregunta');
   
    const label = document.createElement('label');
    label.textContent = 'Pregunta:';
   
    const inputPregunta = document.createElement('input');
    inputPregunta.type = 'text';
    inputPregunta.placeholder = 'Ingrese pregunta';
   
    pregunta.appendChild(label);
    pregunta.appendChild(inputPregunta);
   
    document.getElementById('formulario').appendChild(pregunta);
   });
   
   document.getElementById('guardarEncuesta').addEventListener('click', function() {
    // Aquí puedes implementar la lógica para guardar la encuesta, como enviarla a un servidor o almacenarla en el navegador.
   });