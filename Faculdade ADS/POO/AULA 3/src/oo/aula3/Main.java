package oo.aula3;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        float salarioBase, salarioLiquido;
        System.out.println("Informe o valor do salário base:");
        salarioBase = teclado.nextFloat();
        salarioLiquido = (float) (salarioBase * 1.20 * 0.93);
        System.out.println("Informe o valor do salário líquido R$" + salarioLiquido);
    }
}
