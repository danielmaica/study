package matriz;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        int [][] mat = new int[2][2];
        int resultado;
        for (int l = 0; l <= 1; l++) {
            for (int c = 0; c <= 1; c++) {
                System.out.println("Digite um valor: ");
                mat[l][c] = teclado.nextInt();
                resultado = mat[l][c] * 2;
                System.out.println(resultado);
            }
        }
        for (int l = 0; l <= 1; l++) {
            for (int c = 0; c <= 1; c++) {
                resultado = mat[l][c] * 2;
                System.out.println(resultado);
            }
        }
    }
}
