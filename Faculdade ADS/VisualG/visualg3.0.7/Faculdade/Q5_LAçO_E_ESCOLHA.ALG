Algoritmo "q5_laço_e_escolha"
Var
   B, C: inteiro
Inicio
   C <- 2
   para B de 1 ate 4 faca
      escolha (B)
      caso 1
           C <- C * 2
      caso 2
           C <- C * 3
      outrocaso
           C <- 0
      fimescolha
      escreval(C)
   fimpara
Fimalgoritmo