Algoritmo "q4_analise_laco"
Var
   x, y, i, j: inteiro
Inicio
   x <- 0
   j <- 2
   para i de 1 ate 4 faca
      para j de 1 ate 2 faca
         se (2 * j = i) entao
            x <- x + j
            y <- i
         fimse
      fimpara
   fimpara
   escreval(x,y)
Fimalgoritmo