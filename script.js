window.onload = function pgCarregada() {
  const btnLogin = document.querySelector('#btn-login');

  function login() {
    const validEmail = 'tryber@teste.com';
    const validSenha = '123456';
    const inputEmail = document.querySelector('#email').value;
    const inputSenha = document.querySelector('#senha').value;
    if (inputEmail === validEmail && inputSenha === validSenha) {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  }

  btnLogin.addEventListener('click', login);

  function btnSubmit () {
    const btnSubmit = document.getElementById('submit-btn')
    const agreement = document.getElementById('agreement')

    if (agreement.checked == false) {
      btnSubmit.disabled = true;
    } 
    
    agreement.addEventListener('click', acceptAgreement)

    function acceptAgreement() {
      if(agreement.checked == true){
        btnSubmit.disabled = false;
      } else {
        btnSubmit.disabled = true;
      }
    }

  }

  
  btnSubmit()

};
