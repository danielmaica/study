package oo.aula1;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        float base, altura, area;
        System.out.println("Informe o valor da base:");
        base = teclado.nextFloat();
        System.out.println("Informe o valor da altura:");
        altura = teclado.nextFloat();
        area = (base * altura) / 2;
        System.out.println("O valor da área é: " + area);
    }
}
