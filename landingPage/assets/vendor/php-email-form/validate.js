/**
* PHP Email Form Validation - Simplificado (Corrigido)
*/
(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      let action = form.getAttribute('action');

      if (!action) {
        displayError(form, 'A propriedade de ação do formulário não está definida!');
        return;
      }

      form.querySelector('.loading').classList.add('d-block');
      form.querySelector('.error-message').classList.remove('d-block');
      form.querySelector('.sent-message').classList.remove('d-block');

      let formData = new FormData(form);

      phpEmailFormSubmit(form, action, formData);
    });
  });

  function phpEmailFormSubmit(form, action, formData) {
    fetch(action, {
      method: 'POST',
      body: formData,
      headers: { 'X-Requested-With': 'XMLHttpRequest' }
    })
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error(`${response.status} ${response.statusText} ${response.url}`);
        }
      })
      .then(data => {
        form.querySelector('.loading').classList.remove('d-block');
        if (data.indexOf('OK') !== -1) {
          form.querySelector('.sent-message').classList.add('d-block');
          form.reset();
        } else {
          throw new Error(data ? data : 'Falha no envio do formulário e nenhuma mensagem de erro retornada de: ' + action);
        }
      })
      .catch(error => {
        displayError(form, error.message); // Ajuste para exibir a mensagem de erro corretamente
      });
  }

  function displayError(form, error) {
    form.querySelector('.loading').classList.remove('d-block');
    form.querySelector('.error-message').innerHTML = error;
    form.querySelector('.error-message').classList.add('d-block');
  }

})();
