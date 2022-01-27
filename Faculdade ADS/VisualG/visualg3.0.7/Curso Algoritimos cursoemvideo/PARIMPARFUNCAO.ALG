Algoritmo "PARIMPARFUNCAO"
Var
   N: Inteiro
   R: Caractere
Funcao ParOuImpar(X: Inteiro): Caractere
Inicio
      Se (X%2 = 0) entao
         Retorne "PAR"
      Senao
         Retorne "ÍMPAR"
      FimSe
FimFuncao
Inicio
      Escreva("Digite um número: ")
      Leia(N)
      R <- ParOuImpar(N)
      Escreva("O número ", N, " é ", R)
Fimalgoritmo