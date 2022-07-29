var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var horario = document.querySelector('p#hour')
horario.innerHTML = `Agora são ${hora}h:${minutos}m.`
if (hora < 12) {
  horario.innerHTML += ` Bom dia!`
} else if (hora < 16) {
  horario.innerHTML += ` Boa tarde!`
} else {
  ` Boa noite!`
}