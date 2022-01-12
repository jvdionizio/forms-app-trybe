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

function obterDados() {
  dados = {}

  let inputName = document.querySelector('#input-name').value
  let inputLastName = document.querySelector('#input-lastname').value
  let inputEmail = document.querySelector('#input-email').value
  let inputHouse = document.querySelector('#house').value
  let inputFamily = ''
  let inputSkill = document.getElementsByClassName('subject')
  let inputAvaliation = ''
  let observation = document.querySelector('#textarea').value

  let inputFamily1 = document.querySelector('#family1')
  let inputFamily2 = document.querySelector('#family2')
  let inputFamily3 = document.querySelector('#family3')

  if(inputFamily1.checked){
    inputFamily = inputFamily1.value

  } else if (inputFamily2.checked){
    inputFamily = inputFamily2.value

  } else if (inputFamily3.checked){
    inputFamily = inputFamily3.value
  }

  let materias = []
  
  for(let skill of inputSkill){
    if(skill.checked){
      materias.push(skill.value)
    }
  }

  materias.join(',')


  let notas = document.getElementsByClassName('nota')

  for(let nota of notas){
    if(nota.checked){
      inputAvaliation = nota.value
    }
  }

  
  dados.Nome = `${inputName}` + ' ' + `${inputLastName}`
  dados.Email = inputEmail
  dados.Casa = inputHouse
  dados.Família = inputFamily
  dados.Matérias = materias
  dados.Avaliação = inputAvaliation
  dados.Observações = observation
  
  return dados
}
