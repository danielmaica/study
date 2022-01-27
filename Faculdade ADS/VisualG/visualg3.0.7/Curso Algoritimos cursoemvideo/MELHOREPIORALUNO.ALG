Algoritmo "melhorepioraluno"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 16/05/2021
Var
   Q, C : Inteiro
   maior, menor, N : Real
   A, MA, PA : Caractere
Inicio
      EscrevaL ("************************")
      EscrevaL (" Escola Prof. Julio Grau")
      EscrevaL ("************************")
      Escreva ("Quantos alunos a turma tem? ")
      Leia (Q)
      EscrevaL ("************************")
      C <- 1
      Enquanto (c <= Q) faça
               EscrevaL ("ALUNO", C)
               Escreva ("Nome do aluno: ")
               Leia (A)
               Escreva ("Nota de ", A, ": ")
               Leia (N)
               C <- C + 1
               EscrevaL ("************************")
               Se (N > maior) entao
                  maior <- N
                  MA <- A
               FimSe
               Se (menor = 0) ou (N < menor) entao
                  menor <- N
                  PA <- A
               FimSe
      FimEnquanto
      EscrevaL ("O melhor aluno foi ", MA," : ", maior)
      EscrevaL ("O pior aluno foi ", PA," : ", menor)
Fimalgoritmo