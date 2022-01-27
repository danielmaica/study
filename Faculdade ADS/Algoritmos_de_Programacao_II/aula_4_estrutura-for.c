#include<stdio.h>
int main(void){
    int numero, fatorial;
    printf("Digite o numero que deseja calcular o fatorial: \n");
    scanf("%d", &numero);

    fatorial = 1;
    if (numero > 0)
    {
        for (int i = 1; i <= numero; i++)
        {
            fatorial = fatorial * i;
        }
        printf("O fatorial de %d e %d", numero, fatorial);
    }
    else
    {
        printf("Nao e possivel calcular o fatorial de valores menores que zero");
    }
    
}