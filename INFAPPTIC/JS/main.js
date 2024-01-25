(function ($) {
  "use strict";

  
  /*==================================================================
  [ Validate ]*/
  var input = $('.validate-input .input100');

  $('.validate-form').on('submit',function(){
      var check = true;

      for(var i=0; i<input.length; i++) {
          if(validate(input[i]) == false){
              showValidate(input[i]);
              check=false;
          }
      }

      return check;
  });


  $('.validate-form .input100').each(function(){
      $(this).focus(function(){
         hideValidate(this);
      });
  });

  function validate (input) {
      if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
          if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
              return false;
          }
      }
      else {
          if($(input).val().trim() == ''){
              return false;
          }
      }
  }

  function showValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).addClass('alert-validate');
  }

  function hideValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).removeClass('alert-validate');
  }
  
  

})(jQuery);


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

   const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});
$('ul li').on('click', function() {
	$('li').removeClass('active');
	$(this).addClass('active');
});