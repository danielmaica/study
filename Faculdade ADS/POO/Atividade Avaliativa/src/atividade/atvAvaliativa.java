package atividade;
import java.util.Scanner;
public class atvAvaliativa {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        float n1, n2, n3, n4, resultado;
        System.out.println("Digite o primeiro valor:");
        n1 = teclado.nextFloat();
        System.out.println("Digite o segundo valor:");
        n2 = teclado.nextFloat();
        System.out.println("Digite o terceiro valor:");
        n3 = teclado.nextFloat();
        System.out.println("Digite o quarto valor:");
        n4 = teclado.nextFloat();
        resultado = ((n1 + n2) / n3) * n4;
        System.out.println("O resultado desta operação é: " + resultado);
    }
}
