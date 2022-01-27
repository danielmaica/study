Algoritmo "IMC"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 13/05/2021
Var
   M, A, IMC: Real

Inicio
      EscrevaL ("Digite seu peso (Kg): ")
      Leia (M)
      EscrevaL ("Digite sua altura (m): ")
      Leia (A)
      IMC <- M / (A ^ 2)
      EscrevaL ("IMC: ", IMC:5:2)
      Se (IMC < 18.5) entao
         EscrevaL ("MAGREZA")
      senao
           Se (IMC >= 18.5) e (IMC <= 24.9) entao
             EscrevaL ("IDEAL")
           senao
                Se (IMC >= 25.0) e (IMC <=29.9) entao
                  EscrevaL ("SOBREPESO")
                senao
                     Se (IMC >= 30.0) e (IMC <= 39.9) entao
                        EscrevaL ("OBESIDADE")
                     senao
                        EscrevaL ("OBESIDADE GRAVE")
                     FimSe
                FimSe
           FimSe
      FimSe
      EscrevaL ("--------------------------------")
      EscrevaL ("MAGREZA: MENOR QUE 18.5")
      EscrevaL ("IDEAL: ENTRE 18.5 E 25.0")
      EscrevaL ("SOBREPESO: ENTRE 25.0 E 29.9")
      EscrevaL ("OBESIDADE: ENTRE 30.0 E 39.9")
      EscrevaL ("OBESIDADE GRAVE: MAIOR QUE 40.0")
      EscrevaL ("--------------------------------")
      
Fimalgoritmo