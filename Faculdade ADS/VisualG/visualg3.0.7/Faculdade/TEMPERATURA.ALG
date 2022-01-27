Algoritmo "temperatura"
Var
   temperatura: Inteiro
Inicio
      escreval("Digite a temperatura: ")
      leia(temperatura)
      se (temperatura > 30) entao
         escreval("quente")
      senao
           se (temperatura < 30) e (temperatura > 20) entao
              escreval("normal")
           senao
                escreval("frio")
           fimse
      fimse
Fimalgoritmo
