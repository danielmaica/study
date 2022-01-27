//Meu primeiro programa em C

#include <stdio.h>
int main(void)
{
	int salario;
	double ferias, total;
	printf("Digite o salario do funcionario: ");
	scanf("%d", &salario);
	ferias = salario / 3.0;
	total = salario + ferias;
	printf("O salario bruto e: %d\n", salario);
	printf("O adicional de ferias e: %lf\n", ferias);
	printf("O total bruto e: %lf\n", total);
}
