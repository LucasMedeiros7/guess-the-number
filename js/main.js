const inputPalpite = document.querySelector('input');
const botaoPalpite = document.querySelector('#enviar-palpite');
const palpitesAnteriores = document.querySelector('.palpites-anteriores');
const mensagemErro = document.querySelector('.errado');
const mensagemAcerto = document.querySelector('.acertou');
const range = document.querySelector('.altoOuBaixo');
const botaoNovoJogo = document.querySelector('.reiniciar');

let listaDePalpites = [];
let randomNumber = (Math.random() * 100 + 1).toFixed();

const novoJogo = () => location.reload();

function perdeu() {
  mensagemErro.textContent = 'FIM DE JOGO!';
  range.style.display = 'none';
  botaoNovoJogo.style.display = 'block';
  inputPalpite.setAttribute('disabled', 'disabled');
  inputPalpite.value = '';
}

function acertou() {
  range.style.display = 'none';
  mensagemErro.style.display = 'none';
  mensagemAcerto.style.display = 'block';
  botaoNovoJogo.style.display = 'block';
  inputPalpite.setAttribute('disabled', 'disabled');
  inputPalpite.value = '';
}

function mostraErro(numero) {
  let altoOuBaixo = +numero > randomNumber ? 'Alto' : 'Baixo';
  range.innerHTML = `Seu palpite está muito ${altoOuBaixo}!`;

  let li = '';
  listaDePalpites.push(+numero);
  listaDePalpites.forEach((palpite) => li += `<li>${palpite}</li>`);
  document.querySelector('ul').innerHTML = li;

  inputPalpite.value = '';
}


botaoPalpite.addEventListener('click', e => {
  e.preventDefault()

  const palpite = inputPalpite.value.trim();

  if (palpite) {
    if (listaDePalpites.length > 10) perdeu();

    if (palpite != randomNumber) {
      palpitesAnteriores.style.display = 'flex';
      mensagemErro.style.display = 'flex';

      mostraErro(palpite);
      return;
    }

    acertou();
  }
});