#include <stdio.h>
int main(void)
{
    int a = 0;
    int b = 0;
    int n;
    
    printf("Digite o valor:\n");
    scanf("%d", &n);

    while (n > 0)
    {
        if ((n%2)==0)12
        {
            a = a + 1;
            n = n - 1;
        } else {
            b = b + 1;
            n = n - 3;
        }
    }
    printf("%d %d\n", a, b);
}