Algoritmo "regressivaparescompara"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 31/05/2021
Var
   C, V: Inteiro


Inicio
      Escreva ("Digite um valor: ")
      Leia (V)
      Se (V % 2 = 1) entao
         V <- V - 1
      FimSe
      Para C <- V ate 0 passo -2 faça
           EscrevaL (C)
      FimPara


Fimalgoritmo