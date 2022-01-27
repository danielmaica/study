Algoritmo "fatorial"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 17/05/2021
Var
   C, R, F, menor, N : Real
   Resp : Caractere
Inicio
      Repita
            Escreva ("Realizar fatorial do número: ")
            Leia (N)
            C <- N
            F <- 1
            Repita
            F <- F * C
            C <- C - 1
            Até (C < 1)
            EscrevaL ("O valor fatorial de ", N, " é ", F, ".")
            EscrevaL ("Quer continuar? [S/N]")
            Leia (Resp)
            LimpaTela
       Ate (Resp = "N") OU (Resp = "n")


Fimalgoritmo