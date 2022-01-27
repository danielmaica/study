#include <stdio.h>
int main(){
    int a, b, c;

    scanf("%d", &a);
    scanf("%d", &b);
    scanf("%d", &c);   

    while (b != a && c < 20){

        if(a > c){

            c = c - 2;

        }
            else
            {
                c = c + 2;

                if(a + b < c){

                    a = b - a;

                    b = b + 2;
                }
            }
    }
   printf("%d, %d, %d \n", a, b, c);

}