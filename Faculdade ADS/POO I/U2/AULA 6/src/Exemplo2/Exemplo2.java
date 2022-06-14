package Exemplo2;
import java.util.Scanner;
public class Exemplo2 {
    public static void main(String[] args) {
        int parOuImpar;
        System.out.println("Digite o número que deseja verificar: ");
        Scanner teclado = new Scanner(System.in);
        parOuImpar = teclado.nextInt();
        if(parOuImpar % 2 == 0) {
            System.out.println(parOuImpar + " é um número par.");
        } else {
            System.out.println(parOuImpar + " é um número ímpar.");
        }
    }
}
