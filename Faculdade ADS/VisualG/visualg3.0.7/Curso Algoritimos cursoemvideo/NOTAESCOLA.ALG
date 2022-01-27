Algoritmo "notaescola"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 13/05/2021
Var
   P1, P2, MA: Real

Inicio
      EscrevaL ("---------------------------")
      EscrevaL ("  ESCOLA PROF. JULIO GRAU  ")
      EscrevaL ("---------------------------")
      EscrevaL ("Nota da primeira prova: ")
      Leia (P1)
      EscrevaL ("Nota da segunda prova: ")
      Leia (P2)
      EscrevaL ("---------------------------")
      MA <- (P1 + P2) / 2
      EscrevaL ("MÉDIA: ", MA:1:1)
      Se (MA >= 7.0) entao
         EscrevaL ("ALUNO APROVADO")
      senao
         EscrevaL ("ALUNO REPROVADO")
      FimSe
      EscrevaL ("---------------------------")

Fimalgoritmo