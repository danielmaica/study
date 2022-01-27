// Calculando média do aluno

function calculoMedia() {
    
    alert('Calculadora de Média de Notas');

    var aluno = prompt('Digite o nome do aluno: ');
    var n1  = Number(prompt('Digite a nota 1: '));
    var n2  = Number(prompt('Digite a nota 2: '));
    var n3  = Number(prompt('Digite a nota 3: '));
    var media = (n1 + n2 + n3) / 3;

    

    if (media > 7) {
        alert(`Sua média é: ${media} \n Parabéns ${aluno}, você foi aprovado!`);
    } else {
        alert(`Sua média é: ${media} \n Desculpe ${aluno}, infelizmente você foi reprovado.!`);
    }
    
}

calculoMedia()