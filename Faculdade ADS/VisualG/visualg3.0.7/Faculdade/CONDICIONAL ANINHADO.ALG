Algoritmo "condicional aninhado"

Var
   n1: inteiro
Inicio
   escreval("Digite um numero: ")
   leia(n1)
   se (n1 = 10) entao
      escreval("correto")
   senao
      se (n1 >0) entao
         escreval("positivo")
      senao
         se (n1 < 0) entao
            escreval("negativo")
         senao
            escreval("neutro")
         fimse
      fimse
   fimse
Fimalgoritmo