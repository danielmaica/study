#include <stdio.h>
int main(void)
{
    int a = 18;
    int b = 12;
    int c = 0;

    while (a>0 && b>0)
    {
        if (a > b)
        {
            a = a - b;
        }
        else
        {
            b = b - a;
        }
    }
    c = a + b;
    printf("%d", a+b);      
}