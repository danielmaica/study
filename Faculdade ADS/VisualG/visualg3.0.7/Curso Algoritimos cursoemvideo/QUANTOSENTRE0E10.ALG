Algoritmo "quantosentre0e10"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 31/05/2021
Var
   C, V, TOT010, S : Inteiro


Inicio
      TOT010 <- 0
      S <- 0
      Para C <- 1 ate 6 faça
           Escreva ("Digite um valor: ")
           Leia (V)
           Se (V >= 0) e (V <= 10) entao
              TOT010 <- TOT010 + 1
           FimSe
           Se (V%2=1) entao
              S <- S + V
           FimSe
      FimPara
      EscrevaL ("Ao todo foram", TOT010, " valores entre 0 e 10")
      EscrevaL ("A soma dos impares foi: ", S)

Fimalgoritmo