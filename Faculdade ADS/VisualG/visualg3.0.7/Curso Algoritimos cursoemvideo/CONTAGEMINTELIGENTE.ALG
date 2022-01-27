Algoritmo "ContagemInteligente"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 16/05/2021
Var

   i, f, cont : Real

Inicio
      EscrevaL ("----------------------")
      EscrevaL (" CONTAGEM INTELIGENTE ")
      EscrevaL ("----------------------")
      Escreva ("Início: ")
      Leia (i)
      Escreva ("Fim: ")
      Leia (f)
      EscrevaL ("----------------------")
      EscrevaL ("       CONTANDO       ")
      EscrevaL ("----------------------")
      cont <- i
      Enquanto (cont < f) faça
               Escreva (cont, "..")
               cont <- cont + 1
      FimEnquanto
      Enquanto (cont >= f) faça
               Escreva (cont, "..")
               cont <- cont - 1
      FimEnquanto

Fimalgoritmo