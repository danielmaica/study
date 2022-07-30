function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    alert('Digite um ano de nascimento válido!')
  } else {
    var rad = document.getElementsByName(`radsex`)
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (rad[0].checked) {
      genero = 'Homem'
      document.body.style.background = '#2D3980'
      if(idade < 10){
        // Criança
        img.setAttribute('src', './img/bebe-m.jpg')
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', './img/jovem-m.jpg')
      } else if (idade < 55) {
        // Adulto
        img.setAttribute('src', './img/adulto-m.jpg')
      } else {
        // Idoso
        img.setAttribute('src', './img/idoso-m.jpg')
      }
    } else if (rad[1].checked) {
      genero = 'Mulher'
      document.body.style.background = '#FAC6D4'
      if(idade < 10){
        // Criança
        img.setAttribute('src', './img/bebe-f.jpg')
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', './img/jovem-f.jpg')
      } else if (idade < 55) {
        // Adulto
        img.setAttribute('src', './img/adulto-f.jpg')
      } else {
        // Idoso
        img.setAttribute('src', './img/idoso-f.jpg')
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}