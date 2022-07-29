function tabuada() {
  var valor = document.getElementById('input#num')
  var res = document.getElementById('table#res')
  var resultado = 0
  for(var n = 1; n <= 10; n++) {
    resultado = valor * n
    res.innerHTML = `${resultado}`
  } 
}