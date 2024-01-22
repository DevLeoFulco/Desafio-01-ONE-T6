let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do numero secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um numero de 1 a 10';

function verificarChute(){
    let chute = document.querySelector('#chute').value;
    if(chute == numeroSecreto){
        alert('Você acertou!');
    }else{
        alert('Você errou!');
    }
}

