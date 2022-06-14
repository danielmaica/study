package matrizAvaliacao;
import java.util.Scanner;
public class avaliacaoUnidade3 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        int [][] mat = new int[3][3];
        int resA, resB, resC;
        for (int l = 0; l <= 2; l++) {
                for (int c = 0; c <= 2; c++) {
                    System.out.println("Digite um valor: ");
                    mat[l][c] = teclado.nextInt();
                }
        }
        resA = mat[1][0] + mat[1][1] + mat[1][2];
        resB = mat[0][0] * mat[1][0] * mat[2][0];
        resC = mat[2][0] + mat[2][1] + mat[2][2];
        System.out.println("O resultado para a o problema a) foi: " + resA + ".");
        System.out.println("O resultado para a o problema b) foi: " + resB + ".");
        System.out.println("O resultado para a o problema c) foi: " + resC + ".");
    }
}