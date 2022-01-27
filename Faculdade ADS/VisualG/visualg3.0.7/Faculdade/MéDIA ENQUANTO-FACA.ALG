Algoritmo "média enquanto-faca"
Var
   quant, nota, soma : inteiro
   media : real
Inicio
   soma <- 0
   quant <- -1
   nota <- 0
   enquanto (nota <> -1) faca
      soma <- soma + nota
      quant <- quant + 1
      escreval ("Digite a nota")
      leia (nota)
   fimenquanto
   se (quant > 0) entao
      media <- soma / quant
      escreval ("A média da turma é: ", media)
   fimse
Fimalgoritmo