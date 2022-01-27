Algoritmo "contando"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 16/05/2021
Var
   Contador, Max, Salto : Inteiro

Inicio
      EscrevaL ("Digite até qual que número deseja contar: ")
      Leia (Max)
      EscrevaL ("De quanto em quanto deseja contar? ")
      Leia (Salto)
      Contador <- 0
      Enquanto (Contador <= Max) faça
               EscrevaL (Contador)
               Contador <- Contador + Salto
      FimEnquanto
      Escreva ("Terminei de contar")

Fimalgoritmo