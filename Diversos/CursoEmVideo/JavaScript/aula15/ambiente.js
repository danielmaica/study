let num = [5, 8, 2, 9, 3];
num.push(15);
// console.log(`Nosso vetor é: ${num}.`);
// console.log(`O vetor tem ${num.length} posições.`);
/*
for (let i = 0; i < num.length; i++) {
  console.log(`A posição ${i} tem o valor ${num[i]}.`);
}
*/

for (let i in num) {
  console.log(`A posição ${i} tem o valor ${num[i]}.`);
}

console.log(num.indexOf(8));
