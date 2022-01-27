Algoritmo "desafio_salario"
Var
   cont, func: inteiro
   sal, sal_menos_cinco, sal_mais_cinco, total_sal, media_sal: real
   nome: caractere
Inicio
   sal_menos_cinco <- 0
   sal_mais_cinco <- 0
   total_sal <- 0
   escreva("Digite quantos funcionários deseja realizar a média: ")
   leia(func)
   escreval("-----------------------------------------------------")
   para cont de 1 até func faca
        escreva("Funcionário:")
        leia(nome)
        escreva("Salário: R$")
        leia(sal)
        escreval("---------------")
        se (sal >= 5000) entao
           sal_mais_cinco <- sal_mais_cinco + 1
        senao
           sal_menos_cinco <- sal_menos_cinco + 1
        fimse
        total_sal <- total_sal + sal
        cont <- cont + 1
   fimpara
   media_sal <- total_sal / func
   escreval("A média dos sálarios é: R$", media_sal)
   escreval(sal_mais_cinco, " funcionário(s) recebem salário acima de R$5000,00.")
   escreval(sal_menos_cinco, " funcionário(s) recebem salário abaixo de R$5000,00.")
Fimalgoritmo