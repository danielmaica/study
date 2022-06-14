package atividade1;

import java.util.Scanner;

public class atv1 {

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        float n1, n2, soma, subtracao, multiplicacao, divisao;
        System.out.println("Digite o primeiro valor:");
        n1 = teclado.nextFloat();
        System.out.println("Digite o segundo valor:");
        n2 = teclado.nextFloat();
        soma = n1 + n2;
        subtracao = n1 - n2;
        multiplicacao = n1 * n2;
        divisao = n1 / n2;
        System.out.println("A soma é: " + soma);
        System.out.println("A subtração é: " + subtracao);
        System.out.println("A multiplicação é: " + multiplicacao);
        System.out.println("A divisão é: " + divisao);
    }
}
