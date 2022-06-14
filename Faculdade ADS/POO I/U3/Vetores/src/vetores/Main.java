package vetores;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        int [] valores = new int[3];
        for (int i = 0; i <= 2; i++) {
            System.out.println("Digite o valor " + (i+1) + ": ");
            valores[i] = teclado.nextInt();
        }
        System.out.println("Os valores informados foram: ");
        for (int i = 0; i <=2; i++) {
            System.out.println(valores[i]);
        }
    }
}
