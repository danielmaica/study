let amigo = {
  nome: 'Daniel',
  sexo: 'M',
  peso: 82.5,
  engordar(p){
    this.peso += p
    console.log(`Engordou ${p}kg`);
  }
}

amigo.engordar(4)
console.log(`Nome: ${amigo.nome}\n Peso:${amigo.peso}kg`);