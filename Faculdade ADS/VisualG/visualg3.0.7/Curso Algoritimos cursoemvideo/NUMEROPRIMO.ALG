Algoritmo "numeroprimo"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 17/05/2021
Var
   C, N, ND : Inteiro
   
Inicio
      C <- 1
      ND <- 0
      Escreva ("Até que número deseja contar? ")
      Leia (N)
      Repita
            EscrevaL (C)
            Se (N % C = 0) entao
               ND <- ND + 1
            FimSe
            C <- C + 1
      Ate (C > N)
      EscrevaL (" ")
      Se (ND > 2) entao
         EscrevaL (N, " é primo.")
      senao
         EscrevaL (N, " não é primo.")
      FimSe

Fimalgoritmo