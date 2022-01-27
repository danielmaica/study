Algoritmo "criançaesperança"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 13/05/2021
Var
   D, Valor: Real
   
Inicio
      EscrevaL ("-----------------------------------")
      EscrevaL ("         CRIANÇA ESPERANÇA         ")
      EscrevaL ("-----------------------------------")
      EscrevaL ("Para realizar uma doação digite:")
      EscrevaL ("[1] para doar R$5,00")
      EscrevaL ("[2] para doar R$15,00")
      EscrevaL ("[3] para doar R$30,00")
      EscrevaL ("[4] para doar R$50,00")
      EscrevaL ("[5] para CANCELAR doação")
      Leia (D)
      Escolha D
              Caso 1
                   Valor <- 5.00
              Caso 2
                   Valor <- 15.00
              Caso 3
                   Valor <- 30.00
              Caso 4
                   Valor <- 50.00
              Caso 5
                   Valor <- 0.00
      FimEscolha
      EscrevaL ("-----------------------------------")
      EscrevaL ("VOCÊ REALIZOU UMA DOAÇÃO DE R$", Valor:2:2)
      EscrevaL ("   PARABÉNS POR SUA GENEROSIDADE")
      EscrevaL ("      OBRIGADO PELA DOAÇÃO!")
      EscrevaL ("-----------------------------------")

Fimalgoritmo