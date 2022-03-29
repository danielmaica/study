function comparaNum(n1, n2) {
    const NUMEROSIGUAIS = funcaoIguais(n1, n2);
    const MAIORMENOR = funcaomm(n1, n2); // mm = maior e menor

    return `${NUMEROSIGUAIS} ${MAIORMENOR}`;

}

function funcaoIguais(n1, n2) {
    let saoIguais = '';

    if (n1 !== n2) {
        saoIguais = 'não';
    }

    return `Os números ${n1} e ${n2} ${saoIguais} são iguais.`
}

function funcaomm(n1, n2) {
    const SOMA = n1 + n2;
    const COMPARA10 = SOMA > 10;
    const COMPARA20 = SOMA > 20;
    let m10 = 'menor'; 
    let m20 = 'menor'; 

    if (COMPARA10) {
        m10 = 'maior';
    }
    if (COMPARA20) {
        m20 = 'maior';
    }

    return `Sua soma é ${SOMA}, que é ${m10} que 10 e ${m20} que 20.`;
}

console.log(comparaNum(10, 5));