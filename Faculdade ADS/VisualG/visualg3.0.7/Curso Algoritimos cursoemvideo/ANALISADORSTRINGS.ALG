Algoritmo "AnalisadorStrings"
Var
   N: Caractere
   C: Inteiro
Inicio
      Escreva("Digite seu nome: ")
      Leia(N)
      EscrevaL("Total de letras do seu nome: ", Compr(N))
      EscrevaL("Seu nome em maiusculas: ", Maiusc(N))
      EscrevaL("Seu nome em minusculas: ", Minusc(N))
      EscrevaL("A primeira letra do seu nome: ", Copia(N,1,1))
      EscrevaL("A ultima letra do seu nome e: ", Copia(Maiusc(N),Compr(N),1))
      EscrevaL("Seu nome tem a letra A na posição: ", Pos("D", Maiusc(N)))
      EscrevaL("O código da letra A é: ", Asc("D"))
      EscrevaL("A letra de código 65 é: ", Carac(65))
      Para C <- Compr(N) ate 1 passo -1 faça
           Escreva(Copia(Maiusc(N), C, 1))
      FimPara
Fimalgoritmo