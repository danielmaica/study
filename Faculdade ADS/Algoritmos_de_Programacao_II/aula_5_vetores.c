#include <stdio.h>
int main(void){
    int quantidade = 3;
    int vetor_a[quantidade], vetor_b[quantidade], vetor_s[quantidade];

    for (int i = 0; i < quantidade; i++)
    {
        printf("Digite o valor da posicao %d do vetor A: ", i + 1);
        scanf("%d", &vetor_a[i]);
    }
    for (int i = 0; i < quantidade; i++)
    {
        printf("Digite o valor da posicao %d do vetor B: ", i + 1);
        scanf("%d", &vetor_b[i]);
    }
    for (int i = 0; i < quantidade; i++)
    {
        vetor_s[i] = vetor_a[i] + vetor_b[i];
    }
    for (int i = 0; i < quantidade; i++)
    {
        printf("O valor da posicao %d do vetor S e: %d\n", i + 1, vetor_s[i]);
 }
}