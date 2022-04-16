const calc = function(operacao, n1, n2) {
    return operacao(n1, n2);
}

const soma  = function(n1, n2) {
    return n1 + n2;
}

const sub = function(n1, n2) {
    return n1 - n2;
}

const resultSoma = calc(soma, 10, 2);
const resultSub = calc(sub, 10, 2);

console.log(resultSoma);
console.log(resultSub);