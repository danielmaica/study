#include <stdio.h> 
int main(void){ 
    int quest = 10;
    int gabarito[quest];
    int resp[5][10];
    int raluno, rquestao;

    for (int i = 0; i < quest; i++)
    {
        printf("Digite a alternativa correta da questao %d: ", i);
        scanf("%d", &gabarito[quest]);
    }
    for (int raluno = 0; raluno < 5; raluno++)
    {
        for (int rquestao = 0; rquestao < 10; rquestao++)
        {
            printf("Digite o numero do aluno e da questao %dX%d: ", raluno + 1, rquestao + 1);
            scanf("%d", &resp[raluno][rquestao]);
        }
    }
}