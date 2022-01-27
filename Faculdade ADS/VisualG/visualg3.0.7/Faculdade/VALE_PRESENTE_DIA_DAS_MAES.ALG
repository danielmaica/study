algoritmo "vale_presente_dia_das_maes"
var
   n, idade_func, qtd_filhos, idade_filho, menores, valorm: inteiro
   cont, total_idades, total_func: inteiro
   sal, media, vale, valor_total: real
   nome: caractere
inicio
   escreval ("--------------------------------------------")
   escreval ("|        VALE PRESENTE DIA DAS MÃES        |")
   escreval ("--------------------------------------------")
   escreva ("Quantidade de funcionárias na empresa: ")
   leia (n)
   repita
      valor_total <- 0
      escreva ("Nome funcionária: ")
      leia (nome)
      escreva ("Idade funcionária: ")
      leia (idade_func)
      total_idades <- total_idades + idade_func
      escreva ("Salário: R$")
      leia (sal)
      escreva ("Quantidade de filhos: ")
      leia (qtd_filhos)
      se (qtd_filhos > 0) entao
         escreva ("Quantidade de filhos menores de idade: ")
         leia (menores)
      senao
         escreval ("A funcionária ", nome, " não receberá nada, pois não tem filhos.")
      fimse
      se (sal <= 1000) e (qtd_filhos > 0) entao
         vale <- sal * (7 / 100)
         escreval ("Valor do vale presente: R$", vale)
      senao
         se ((sal > 1000) e (sal <= 3000)) e (qtd_filhos > 0) entao
            vale <- sal * (6 / 100)
            escreval ("Valor do vale presente: R$", vale)
         senao
            se (sal > 3000) e (qtd_filhos > 0) entao
               vale <- sal * (5 / 100)
               escreval ("Valor do vale presente: R$", vale)
            fimse
         fimse
      fimse
      se (qtd_filhos > 0) entao
         escolha (menores)
         caso 0
            valorm <- 0
            escreval ("A funcionária ", nome, " não tem filhos menores de idade.")
         caso 1
            valorm <- 30
            escreval ("Valor recebido por cada filho menor: R$", valorm)
         caso 2
            valorm <- 25
            escreval ("Valor recebido por cada filho menor: R$", valorm)
         caso 3
            valorm <- 20
            escreval ("Valor recebido por cada filho menor: R$", valorm)
         caso 4
            valorm <- 18
            escreval ("Valor recebido por cada filho menor: R$", valorm)
         outrocaso
            valorm <- 0
         fimescolha
      fimse
      valor_total <- vale + valorm
      se (qtd_filhos > 0) entao
         escreval (nome, " receberá R$", valor_total, " de vale presente pelo Dia das Mães.")
      fimse
      escreval ("----------------------------------------------------------------")
      cont <- cont + 1
   ate ( cont = n)
   media <- total_idades / n
   escreval (" A média de idade de funcionárias na empresa é ", media, " anos.")
fimalgoritmo