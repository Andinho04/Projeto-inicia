

//let titutlo = document.querySelector('h1');
//titutlo.innerHTML = 'jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'escolha um número entre 1 e 10';

  
let listaDeNumeroSorteado = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2}); //esse speak é de diga fale. Dentro do parametro colocamos Texto, que quer dizer 'jogo fo numero secreto' e  'escolha um número entre 1 e 10'   
// o outro parametro do lado do texto é para mostrar qual idioma estamos usando e female quer dizer uma mulher e esse Rate é a velocidade da fala que vai vir!
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'jogo do número secreto');
exibirTextoNaTela('p', 'escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    //se o chute foi igual a numero secreto, significa que a gente acertou!
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativas';
        let mensagemTentativas = `vocês descobriu o número secreto com ${tentativas}  ${palavraTentativa}!`;
        //aqui no h1 vai mostrar que acertou o chute!
        exibirTextoNaTela('p', mensagemTentativas);

        //esse aqui é um document que busca no html na linha 
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela ('p', 'o número secreto é maior');
        } 
        //tentativas = tentativas +1; ou 
        tentativas++;
        limparCampo();
    }

}  

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); 
   let quantidadeDeElementosNaLista = listaDeNumeroSorteado.length; //ter a quantidade de elementos da lista length quantidade

    if (quantidadeDeElementosNaLista == 10 ) { //se o valor que eu tenho for == a quantidade de elementos que eu poço sortear, vai ser limpado a lista ListaDeNumeroSorteado = []
        listaDeNumeroSorteado = [];
    }

   if (listaDeNumeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio(); 
   } else {
    listaDeNumeroSorteado.push(numeroEscolhido);
        console.log(listaDeNumeroSorteado)
        return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';

}
//essa função vai ser de fato clicar no botão, diferente do que tem no JS, que a gente invoca função, chama e exibi na tela. sempre clica no novo jogo e exibe na tela.
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas + 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled');
}
