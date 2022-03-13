#include <stdio.h>
int main(void)
{
    int x = 0, y = 1, c = 0, m = 10, a, b;

    while (c < m)
    {
        c = c + 1;
        a = x;
        b = y;
        x = b;
        y = a + b;
        printf("%d", a);
    }
}