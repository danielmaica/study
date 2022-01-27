Algoritmo "sequenciafibonaccifuncao"
Var
   S1, S2, C, S3: Inteiro
Funcao SequenciaFibonacci(var A1, A2: Inteiro): Inteiro
Var
   A3: Inteiro
Inicio
      A3 <- A1 + A2
      A1 <- A2
      A2 <- A3
      Retorne A3
FimFuncao
Inicio
      S1 <- 0
      Escreva(S1)
      S2 <- 1
      Escreva(S2)
      Para C <- 3 ate 15 faça
           S3 <- SequenciaFibonacci(S1, S2)
           Escreva(S3)
      FimPara
Fimalgoritmo