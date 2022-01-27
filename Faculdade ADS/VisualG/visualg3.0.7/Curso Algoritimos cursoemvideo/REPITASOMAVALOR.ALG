Algoritmo "repitasomavalor"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 17/05/2021
Var
   V, S : Inteiro
   R : Caractere

Inicio
      Repita
            EscrevaL ("Qual valor você quer somar? ")
            Leia (V)
            S <- S + V
            EscrevaL ("Voce deseja continuar? [S/N] ")
            Leia (R)
      Ate (R = "N") ou (R = "n")
      EscrevaL ("A soma de todos os valores é ", S)

Fimalgoritmo