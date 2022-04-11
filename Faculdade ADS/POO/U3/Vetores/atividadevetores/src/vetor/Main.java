package vetor;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        float resultado;
        float [] vetor = new float[4];
        for (int i = 0; i <= 3; i++) {
            System.out.println("Digite o valor " + (i+1) + ":");
            vetor[i] = teclado.nextFloat();
        }
        resultado = (vetor[0] + vetor[1]) * vetor[2] / vetor[3];
        System.out.println("O valor final é: " + resultado);
    }
}
