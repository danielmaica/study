Algoritmo "conversor"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 16/05/2021
Var
   r, d : Real
   c, vezes : Inteiro
Inicio
      Escreva ("Quantos valores deseja converter? ")
      Leia (vezes)
      c <- 1
      Enquanto (c <= vezes) faça
               Escreva ("Qual valor deseja converter: R$")
               Leia (r)
               d <- r / 5.27
               EscrevaL ("O valor em dólares é: R$", d:5:2)
               c <- c+1
      FimEnquanto

Fimalgoritmo