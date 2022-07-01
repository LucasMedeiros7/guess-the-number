const $palpite = document.querySelector('input');
const $botao = document.querySelector('#enviar-palpite');
const palpitesAnteriores = document.querySelector('.palpites-anteriores');
const mensagemErro = document.querySelector('.errado');
const range = document.querySelector('.altoOuBaixo');
const listaDePalpites = [];

let randomNumber = (Math.random() * 100).toFixed();
console.log(randomNumber);

const botaoReiniciar = () => location.reload();

function perdeu() {
  console.log('perdeu');
  // DISABLE() NO INPUT
  // Display none no errado
  // Display block no perdeu
  // Remove() no range ou display none
  // Display Block no botao reiniciar
  // VALUE ''

}

function acertou() {
  console.log('acertou');
  // DISABLE() NO INPUT
  // Display none no errado
  // Display block no acertou
  // Remove() no range ou display none
  // Display Block no botao reiniciar
  // VALUE ''
}

function mostraErro(numero) {
  let altoOuBaixo = +numero > randomNumber ? 'Alto' : 'Baixo';
  range.innerHTML = `Seu palpite está muito ${altoOuBaixo}!`;

  let li = '';
  listaDePalpites.push(+numero);
  listaDePalpites.forEach((palpite) => li += `<li>${palpite}</li>`);
  document.querySelector('ul').innerHTML = li;
}


$botao.addEventListener('click', e => {
  e.preventDefault()

  const palpite = $palpite.value

  if (listaDePalpites.length > 10) perdeu();

  if (palpite != randomNumber) {
    palpitesAnteriores.style.display = 'flex';
    mensagemErro.style.display = 'flex';

    mostraErro(palpite);
    return;
  }

  acertou();
});