#include <stdio.h>
int main(void){
    int dia_semana;
    printf("------------------------\n");
    printf("      DIA DA SEMANA     \n");
    printf("------------------------\n");
    printf("OPCOES:\n");
    printf("[1] Domingo\n");
    printf("[2] Segunda-feira\n");
    printf("[3] Terca-feira\n");
    printf("[4] Quarta-feira\n");
    printf("[5] Quinta-feira\n");
    printf("[6] Sexta-feira\n");
    printf("[7] Sabado\n");
    printf("Escolha o dia desejado: \n");
    scanf("%d", &
    dia_semana);
    switch (dia_semana){
    case 1:
        printf("Fim de semana (Domingo)");
        break;
    case 2:
        printf("Dia util (Segunda-feira)");
        break;
    case 3:
        printf("Dia util (Terca-feira)");
        break;
    case 4:
        printf("Dia util (Quarta-feira)");
        break;
    case 5:
        printf("Dia util (Quita-feira)");
        break;
    case 6:
        printf("Dia util (Sexta-feira)");
        break;
    case 7:
        printf("Fim de semana (Sabado)");
        break;
    default:
        printf("O valor digitado nao corresponde a um dia de semana");
    }
}