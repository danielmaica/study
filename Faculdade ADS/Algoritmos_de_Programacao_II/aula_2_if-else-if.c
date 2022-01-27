#include <stdio.h>
int main(void){
    int numero;
    printf("Digite um numero inteiro: ");
    scanf("%d", &numero);
    if (numero == 10){
        printf("Correto");
    } else if (numero > 0){
        printf("Positivo");
    } else if (numero < 0){
        printf("Negativo");
    } else {
        printf("Neutro");
    }
}