/*// estruturas condicionais

var jogador1 = 0;
var jogador2 = 0;
var placar;

// if ternario
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores sao validos') : console.log('Jogadores Invalidos');

// usando if
if (jogador1 > 0 && jogador2 == 0) {
    console.log('Jogador 1 marcou ponto');
    placar = jogador1 > jogador2;

// usando else if
} else if (jogador2 > 0 && jogador1 ==0) {
    console.log('Jogador 2 marcou ponto');
    placar = jogador2 > jogador1;

// usando else
} else {
    console.log('Nenhum jogador marcou ponto');
}

// switch case
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou');
        break;
    default:
        console.log("O jogo terminou empatado");        
}*/

// laços de repeticao: for; for/in; for/of; while; do/while;

/*let array = ['valor 1', 'valor 2', 'valor 3', 'valor 4', 'valor 5'];

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'};

// for
for (let i = 0; i < array.length; i++) {
    console.log(i);
}*/

/*// for/in - executa repeticao a partir de uma propriedade
for (let i in array) {
    console.log(i);
}

// com object
for (let i in object) {
    console.log(i);
}*/

/*// for/of - executa repeticao a partir de um valor
for (let i of array) {
    console.log(i);
}

// com object
for (let i of object.propriedade1) {
    console.log(i);
}*/


// While e Do/While
/*var a = 0;

while (a < 10) {
    a++;
    console.log(a);
}

do {
    a++;
    console.log(a);
} while (a < 10);*/