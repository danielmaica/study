var num = document.getElementById("txtn");
var tab = document.getElementById("tab");
var res = document.getElementById("res");
var list = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function add() {
  if (isNumero(num.value) && !inLista(num.value, list)) {
    list.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado.`;
    tab.appendChild(item);
    res.innerHTML = "";
  } else {
    alert("Número inválido ou já encontrado na lista.");
  }
  num.value = "";
  num.focus();
}

function finalizar() {
  if (list.length == 0) {
    alert("Adicione valores antes de finalizar.");
  } else {
    let maior = list[0];
    let menor = list[0];
    let soma = 0;
    let media = 0;

    for (let pos in list) {
      soma += list[pos]
      media = soma / list.length
      if (list[pos] > maior) {
        maior = list[pos];
      }
      if (list[pos] < menor) {
        menor = list[pos];
      }
    }

    res.innerHTML = "";
    res.innerHTML += `<p>Ao todo, temos ${list.length} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    res.innerHTML += `<p>A soma dos valores informados é ${soma}.</p>`;
    res.innerHTML += `<p>A média dos valores informados é ${media.toFixed(2).replace('.', ',')}.</p>`;
  }
}
