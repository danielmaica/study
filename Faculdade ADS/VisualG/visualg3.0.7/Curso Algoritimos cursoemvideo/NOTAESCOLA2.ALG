Algoritmo "notaescola"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 13/05/2021
Var
   P1, P2, M, RP: Real

Inicio
      EscrevaL ("-----------------------------------------")
      EscrevaL ("         ESCOLA PROF. JULIO GRAU         ")
      EscrevaL ("-----------------------------------------")
      Escreva ("Nota da primeira prova: ")
      Leia (P1)
      Escreva ("Nota da segunda prova: ")
      Leia (P2)
      EscrevaL ("-----------------------------------------")
      M <- (P1 + P2) / 2
      EscrevaL ("MÉDIA: ", M:1:1)
      Se (M >= 7.0) entao
         EscrevaL ("ALUNO APROVADO")
      senao
           Se (M <7.0) entao
              EscrevaL ("ALUNO EM RECUPERAÇÃO")
              EscrevaL ("-----------------------------------------")
              Escreva ("NOTA RP: ")
              Leia (RP)
              M <- RP
              Se (M >= 7.0) entao
                 EscrevaL ("ALUNO APROVADO")
              senao
                 EscrevaL ("ALUNO REPROVADO")
              FimSe
           FimSe
      FimSe
      EscrevaL ("-----------------------------------------")
      Se (M >= 10.0) entao
         EscrevaL("APROVEITAMENTO FINAL: A+")
      senao
           Se (M <= 9.9) e (M >=9.0 ) entao
              EscrevaL ("APROVEITAMENTO FINAL: A")
           senao
                Se (M < 9.0) e (M >=8.0 ) entao
                   EscrevaL ("APROVEITAMENTO FINAL: B")
                senao
                     Se (M <8.0) e (M >=7.0 ) entao
                        EscrevaL ("APROVEITAMENTO FINAL: C")
                     senao
                          Se (M <7.0) e (M >=6.0 ) entao
                             EscrevaL ("APROVEITAMENTO FINAL: D")
                          senao
                               Se (M <6.0) e (M >=5.0 ) entao
                                  EscrevaL ("APROVEITAMENTO FINAL: E")
                               senao
                                    EscrevaL ("APROVEITAMENTO FINAL: F")
                               FimSe
                          FimSe
                     FimSe
                FimSe
           FimSe
      FimSe
      EscrevaL ("-----------------------------------------")
      EscrevaL ("APROVEITAMENTO FINAL A+: 10")
      EscrevaL ("APROVEITAMENTO FINAL A: Entre 9.9 e 9.0")
      EscrevaL ("APROVEITAMENTO FINAL B: Entre 8.9 e 8.0")
      EscrevaL ("APROVEITAMENTO FINAL C: Entre 7.9 e 7.0")
      EscrevaL ("APROVEITAMENTO FINAL D: Entre 6.9 e 6.0")
      EscrevaL ("APROVEITAMENTO FINAL E: Entre 5.9 e 5.0")
      EscrevaL ("APROVEITAMENTO FINAL F: Menor que 5.0")
      EscrevaL ("-----------------------------------------")

Fimalgoritmo


