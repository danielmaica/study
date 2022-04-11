//solucao 1
function substituiPares(array) {
    if (!array) return "Valores inválidos.";
    if (!array.length) return "Valores inválidos.";


    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log(`${array[i]} já é zero...`);
        } else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`)
            array[i] = 0;
        }
    }

    return array;
}

let jogadoresAprovados = [1, 5, 6, 2, 4, 3, 8, 0];
console.log(substituiPares(jogadoresAprovados))