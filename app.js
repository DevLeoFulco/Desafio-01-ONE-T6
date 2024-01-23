let listaNumeroSorteados = [];
let limiteDeNumeros=10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do numero secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um numero de 1 a 10';

function escreverTextoNaTela(tag, texto){
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

escreverTextoNaTela('h1', 'Jogo do numero secreto');
escreverTextoNaTela('p', 'Escolha um numero de 1 a 10');



function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        escreverTextoNaTela('h1', 'Parabens! Voce acertou!');
        let palavraTentativa = tentativas >1 ? 'tentativas': 'tentativa';
        let mensagemTentativa = `Você acertou em ${tentativas} ${palavraTentativa}`;
        escreverTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(chute < numeroSecreto){
        escreverTextoNaTela('p', 'O numero secreto é MAIOR');
        
    }else{
        escreverTextoNaTela('p', 'O numero secreto é MENOR');
    } 
    tentativas++;
    limparOCampo();
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * limiteDeNumeros) + 1;
    let totalDeElementosNaLista = listaNumeroSorteados.length;

    if(totalDeElementosNaLista == limiteDeNumeros ){
        listaNumeroSorteados = [];
    }
    if (listaNumeroSorteados.includes(numeroEscolhido)){
       return gerarNumeroAleatorio();
    } else {
        listaNumeroSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparOCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    document.location.reload(true);
    
}