#include <stdio.h>
int soma(int valor1, int valor2)
{
    int resultado;
    resultado = valor1 + valor2;
    return resultado;
}

int dobro(int valor)
{
    return valor * 2;
}

int main(void)
{
    int a, b, somaAB;
    printf("Digite o valor A: ");
    scanf("%d", &a);
   
    printf("Digite o valor B: ");
    scanf("%d", &b);

    somaAB = soma(a, b);
    // Soma A + B
    printf("A soma dos valores e: %d\n", somaAB);
    // Dobro A
    printf("O dobro %d e: %d\n", a, dobro(a));
    // Dobro B
    printf("O dobro %d e: %d\n", b, dobro(b));
}