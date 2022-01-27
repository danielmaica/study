Algoritmo "média repeteição"
Var
   quantidade, numero, soma, incremento : inteiro
   media : real
Inicio
   escreval ("Digite a quantidade de numeros que deseja realizar a media")
   leia(quantidade)
   soma <- 0
   para incremento de 1 ate quantidade faca
        escreval("Digite o numero ", incremento)
        leia(numero)
        soma <- soma + numero
   fimpara
   media <- soma / quantidade
   escreval("A media dos numeros digitados e: ", media)
Fimalgoritmo