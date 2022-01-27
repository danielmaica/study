Algoritmo "supercontador"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 17/05/2021
Var
   C, R : Inteiro

Inicio

      Repita
            EscrevaL (" ")
            EscrevaL ("=================")
            EscrevaL ("|     MENU      |")
            EscrevaL ("=================")
            EscrevaL ("| [1] De 1 a 10 |")
            EscrevaL ("| [2} De 10 a 1 |")
            EscrevaL ("| [3} Para sair |")
            EscrevaL ("=================")
            Leia (R)
            Se (R = 1) entao
               C <- 1
               Repita
                     Escreva (C, "..")
                     C <- C + 1
               Ate (C > 10)
            senao
                 Se (R = 2) entao
                   C <- 10
                   Repita
                         Escreva (C)
                         C <- C - 1
                   Ate (C < 1)
                 FimSe
            FimSe
      Ate (R = 3)
      Se (R = 3) entao
         Escreva ("SAINDO...")
      FimSe
      

Fimalgoritmo