#include <stdio.h>
int main(void){
    int n1, n2, n3;
    printf("Digite os tres numeros: ");
    scanf("%d", &n1);
    scanf("%d", &n2);
    scanf("%d", &n3);
    if(n1 == n2 && n2 == n3){
        printf("Os tres numeros são iguais");
    } else {
        printf("Ao menos um dos valores digitados nao e igual aos demais");
    };
}