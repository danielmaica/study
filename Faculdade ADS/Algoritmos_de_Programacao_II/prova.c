#include <stdio.h>
int main(void){
int a, b;
int n;

a = 0;
b = 0;

printf("Digite o valor:\n");
scanf("%d", &n);
while (n > 0)
{
    if ((n%2)==0)
        a = a + 1;
    else
        b = b + 1;
        printf("%d\n", n);
        n = n / 2;
    printf("%d %d\n", a, b);
}
