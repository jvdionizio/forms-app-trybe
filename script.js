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

const btnSubmit = document.getElementById('submit-btn');

function Submit() {
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

let inputFamily = '';
const inputSkill = document.getElementsByClassName('subject');
let inputAvaliation = '';
const inputFamily1 = document.querySelector('#family1');
const inputFamily2 = document.querySelector('#family2');
const inputFamily3 = document.querySelector('#family3');
const materias = [];
let materiasString = '';
let dados = {};

function obterFamilia() {
  if (inputFamily1.checked) {
    inputFamily = inputFamily1.value;
  } else if (inputFamily2.checked) {
    inputFamily = inputFamily2.value;
  } else if (inputFamily3.checked) {
    inputFamily = inputFamily3.value;
  }
}

function obterMateria() {
  for (let skill = 0; skill < inputSkill.length; skill += 1) {
    if (inputSkill[skill].checked) {
      materias.push(` ${inputSkill[skill].value}`);
    }
  }
  materiasString = materias.join(',');
}

function obterNota() {
  const notas = document.getElementsByClassName('nota');
  for (let nota = 0; nota < notas.length; nota += 1) {
    if (notas[nota].checked) {
      inputAvaliation = notas[nota].value;
    }
  }
}

function obterDados() {
  const inputName = document.querySelector('#input-name').value;
  const inputLastName = document.querySelector('#input-lastname').value;
  const inputEmail = document.querySelector('#input-email').value;
  const inputHouse = document.querySelector('#house').value;
  const observation = document.querySelector('#textarea').value;
  obterFamilia();
  obterMateria();
  obterNota();
  dados = {
    Nome: `${inputName} ${inputLastName}`,
    Email: inputEmail,
    Casa: inputHouse,
    Família: inputFamily,
    Matérias: materiasString,
    Avaliação: inputAvaliation,
    Observações: observation,
  };
}

const form = document.getElementById('evaluation-form');

function createParagragh(className, texto) {
  const paragraph = document.createElement('p');
  paragraph.className = className;
  paragraph.innerText = texto;
  return paragraph;
}

function imprimeDados(event) {
  obterDados();
  const dadosKeys = Object.keys(dados);
  for (let i = 0; i < dadosKeys.length; i += 1) {
    form.appendChild(createParagragh('dados-obtidos', ` ${dadosKeys[i]}: ${dados[dadosKeys[i]]}`));
  }
  event.preventDefault();
}

btnSubmit.addEventListener('click', imprimeDados);
