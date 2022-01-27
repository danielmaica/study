Algoritmo "seletordepessoas"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 17/05/2021
Var
   C, I, H, M : Inteiro
   S, R, Cor : Caractere

Inicio
      C <- 1
      H <- 0
      M <- 0
      Repita
            EscrevaL ("======================")
            EscrevaL ("| Seletor de Pessoas |")
            EscrevaL ("======================")
            Escreva ("Qual o Sexo? [M/F] ")
            Leia (S)
            Escreva ("Qual a idade? ")
            Leia (I)
            Escreval ("Qual a cor do cabelo? ")
            EscrevaL ("----------------------")
            EscrevaL ("[1] Preto")
            EscrevaL ("[2] Castanho")
            EscrevaL ("[3] Loiro")
            EscrevaL ("[4] Ruivo")
            Leia (C)
            Escolha C
                   Caso 1
                   Cor <- "Preto"
                   Caso 2
                   Cor <- "Castanho"
                   Caso 3
                   Cor <- "Loiro"
                   Caso 4
                   Cor <- "Ruivo"
            FimEscolha
            Se (S = "M") e (I >= 18) e (C = 2) entao
               H <- H + 1
            FimSe
            Se (S = "F") e (I > 25) e (I < 30) e (C = 3) entao
               M <- M + 1
            FimSe
            Escreva ("Quer continuar? [S/N]")
            Leia (R)
            LimpaTela
      Ate (R = "N") OU (R = "n")
      EscrevaL ("Total de homens acima dos 18 anos e cabelos catanhos: ", H)
      EscrevaL ("Total de mulheres entre 25 e 30 anos e cabelos loiros: ", M)


Fimalgoritmo