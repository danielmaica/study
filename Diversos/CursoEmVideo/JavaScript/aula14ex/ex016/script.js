function contar() {
  let valorInicio = document.getElementById('txti')
  let valorFim = document.getElementById('txtf')
  let valorPasso = document.getElementById('txtp')
  let res = document.getElementById('res')
  let contador = valorInicio
  
  if (valorInicio.value.length == 0 || valorFim.value.length == 0) {
    res.innerHTML = `Tente novamente!`
    res.style.color = 'red'
    window.alert('[ERRO] Faltam dados!')
  } else {
    res.innerHTML = `Contando:<br>`
    let i = Number(valorInicio.value)
    let f = Number(valorFim.value)
    let p = Number(valorPasso.value)
    
    if(p <= 0) {
      alert('Passo inválido! Considerando PASSO 1')
      p = 1
    }

    if(i < f) {
      // contagem crescente
      for(let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449}`
      }
    } else {
      // contagem decrescente
      for(let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`
      }
    }
    res.innerHTML += `\u{1F3C1}`
  }
}