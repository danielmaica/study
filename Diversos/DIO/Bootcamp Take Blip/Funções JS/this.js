/* this

const pessoa = {
    firstName: "Daniel",
    lastName: "Maicá",
    id: 1,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    getId: function() {
        return this.id;
    }
}
pessoa.fullName();
pessoa.getId();
console.log(`${pessoa.id}. ${pessoa.firstName} ${pessoa.lastName}`);*/

/* call

const pessoa = {
    nome: 'Júlia',
};

const animal = {
    nome: 'Luna',
};

const carro = {
    nome: 'Ford Fiesta',
};

function getSomething() {
    console.log(this.nome);
};

getSomething.call(carro);

const myObj = {
    n1: 2,
    n2: 4,
};

function soma(x, y) {
    console.log(this.n1 + this.n2 + x + y);
}

soma.call(myObj, 1, 5);*/

/* apply

const myObj = {
    n1: 2,
    n2: 4,
};

function soma(x, y) {
    console.log(this.n1 + this.n2 + x + y);
}

soma.apply(myObj, [1, 5]);*/

/* bind

const retornaNomes = function() {
    return this.nome;
}

let daniel = retornaNomes.bind({nome: 'Daniel'});

daniel();
console.log(daniel());*/