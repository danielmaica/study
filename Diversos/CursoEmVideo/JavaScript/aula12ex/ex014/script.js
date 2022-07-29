function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var cump = window.document.getElementById('cumprimentar')
  var agora = new Date()
  var hora = agora.getHours()
  var minutos = agora.getMinutes()
  msg.innerHTML = `Agora são ${hora}h:${minutos}m.`
  if (hora < 12) {
    img.src = './img/manha.jpg'
    document.body.style.background = '#e2cd9f'
    cump.innerHTML = `Bom dia!`
  } else if (hora < 16) {
    img.src = './img/tarde.jpg'
    document.body.style.background = '#F5BA82'
    cump.innerHTML = `Boa tarde!`
  } else {
    img.src = './img/noite.jpg'
    document.body.style.background = '#515154'
    cump.innerHTML = `Boa noite!`
  }
}