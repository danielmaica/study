Algoritmo "futebol"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 14/05/2021
Var
   M, B: Inteiro
   D: Real
Inicio
      EscrevaL ("       BANGU X MADUREIRA      ")
      EscrevaL ("------------------------------")
      EscrevaL ("Quantos gols do BANGU?")
      Leia (B)
      EscrevaL ("Quantos gols do MADUREIRA?")
      Leia (M)
      EscrevaL ("------------------------------")
      D <- ((B - M) * -1) e ((M - B) * -1)
      EscrevaL ("DIFERENÇA: ", D)
      Se (D = 0) entao
         EscrevaL ("STATUS: EMPATE")
      senao
           Se (D = 1) entao
              EscrevaL ("STATUS: VITÓRIA APERTADA")
           senao
                Se (D = 2) entao
                   EscrevaL ("STATUS: VITÓRIA POR DOIS GOLS")
                senao
                   EscrevaL ("STATUS: GOLEADA")
                FimSe
           FimSe
      FimSe
      EscrevaL ("------------------------------")
              
Fimalgoritmo