/*
  OBJETIVO - quando clicarmos no botão temos que
  mostrar a imagem de fundo correspndente

  - passo 1 - dar um jeito de pegar o elemento HTML
    dos botões

  - passo 2 - dar um jeito de identificar o clique
  do usuario no botão

  - passo 3 - desmarcar o botão selecionado anterior

  - passo 4 - marcar o botão clicando como se 
    estivesse selecionado

  - passo 5 - esconder  a imagem de fundo anterior

  - passo  6 - fazer aparecer a imagem
  orrespondente ao botão clicado
*/

//passo 1 - dar um jeito de pegar o elemento HTML dos botoes
const botoesCcarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')
//- passo 2 - dar um jeito de identificar o clique do usuario no botão
botoesCcarrossel.forEach((botao, indice)=> {
  botao.addEventListener('click', () => {

    //- passo 3 - desmarcar o botão selecionado anterior
    desativarBotaoSelecionado();

    //- passo 4 - marcar o botão clicando como se estivesse selecionado
    selecionarBotaoCarrossel(botao);

    //- passo 5 - esconder  a imagem de fundo anterior
    esconderImagenAtiva();

    //- passo  6 - fazer aparecer a imagem orrespondente ao botão clicado
    mostrarImagemDeFundo(indice);
  })
})

function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
  botao.classList.add('selecionado');
}

function esconderImagenAtiva() {
  const imagemAtiva = document.querySelector('.ativa');
  imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector('.selecionado');
  botaoSelecionado.classList.remove('selecionado');
}

