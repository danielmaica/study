Algoritmo "imposto horas trabalhadas"
Var
   ht, vh, imp, vimp, vliq: Real
Inicio
   Escreva ("Quantas horas foram trabalhadas? ")
   Leia (ht)
   Escreva ("Qual é o valor por hora trabalhada?" )
   leia (vh)
   Escreva ("Qual o percentual que deve ser pago de imposto? ")
   leia (imp)
   vimp <- ht * vh * (imp / 100)
   vliq <- ht * vh - vimp
   Escreval ("Será descontado R$", vimp, " de imposto desse profissonal.")
   Escreval ("O profissional receberá R$", vliq, " pelas horas trabalhadas.")
Fimalgoritmo