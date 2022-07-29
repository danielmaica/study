function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById(`txtano`)
  var res = document.querySelector(`div#res`)
  if (fano.value <= 0 || Number(fano.value > ano)) {
    window.alert(`[ERRO] Verifique os dados e tente novamente!`)
  } else {
    var fsex = document.getElementsByName(`radsex`)
    var idade = ano - Number(fano.value)
    var genero = ``
    var img = document.createElement(`img`)
    img.setAttribute(`id`, `foto`)
    if (fsex[0].checked) {
      genero = `Homem`
      document.body.style.background = '#6c6cd4'
      if (idade < 0 || idade != Number(idade)) {
        alert(`[ERRO] Dados inválidos, tente novamente!`)
      } else {
        if (idade < 10) {
          // Bebe
          img.setAttribute('src', './img/bebe-m.jpg')
        } else if (idade < 21){
          // Jovem
          img.setAttribute('src', './img/jovem-m.jpg')
        } else if (idade < 55){
          // Adulto
          img.setAttribute('src', './img/adulto-m.jpg')
        } else {
          // Idoso
          img.setAttribute('src', './img/idoso-m.jpg')
        }
      } 
    } else if (fsex[1].checked) {
      genero = `Mulher`
      document.body.style.background = '#e96ae9'
      if (idade < 0 || idade != Number(idade)) {
        alert(`[ERRO] Dados inválidos, tente novamente!`)
      } else {
        if (idade < 10) {
          // Bebe
          img.setAttribute('src', './img/bebe-f.jpg')
        } else if (idade < 21){
          // Jovem
          img.setAttribute('src', './img/jovem-f.jpg')
        } else if (idade < 55){
          // Adulta
          img.setAttribute('src', './img/adulto-f.jpg')
        } else {
          // Idosa
          img.setAttribute('src', './img/idoso-f.jpg')
        }
      } 
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)   
  }
}