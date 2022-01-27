Algoritmo "IDADE"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 13/05/2021
Var
   ano, nasc, idade: Inteiro

Inicio
      Escreva ("Em que ano estamos? ")
      Leia (ano)
      Escreva ("Em que ano você nasceu? ")
      Leia(nasc)
      idade <- ano - nasc
      Escreva ("Você tem ", idade," anos")
      Se (idade >= 18) entao
         Escreva (" e já é maior de idade.")
      Senao
           Escreva (" e ainda é menor de idade.")
      FimSe

Fimalgoritmo