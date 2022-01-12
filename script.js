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

function Submit() {
  const btnSubmit = document.getElementById('submit-btn');
  const agreement = document.getElementById('agreement');

  if (agreement.checked === false) {
    btnSubmit.disabled = true;
  }
  function acceptAgreement() {
    if (agreement.checked === true) {
      btnSubmit.disabled = false;
    } else {
      btnSubmit.disabled = true;
    }
  }
  agreement.addEventListener('click', acceptAgreement);
}

Submit();

const textArea = document.querySelector('#textarea');

function contar() {
  const contador = document.getElementById('counter');
  const tamanho = document.querySelector('#textarea').value.length;
  const counterValue = 500 - tamanho;

  contador.innerText = counterValue;
}

textArea.addEventListener('keyup', contar);
