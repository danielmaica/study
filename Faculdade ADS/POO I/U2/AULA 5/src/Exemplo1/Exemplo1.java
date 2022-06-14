import java.util.Scanner;
public class Exemplo1 {
    public static void main(String[] args) {
        int valor;
        System.out.println("Digite um valor inteiro: ");
        Scanner teclado = new Scanner(System.in);
        valor = teclado.nextInt();
        if (valor < 0)
            System.out.println("O valor digitado é negativo.");
        else if (valor > 0)
            System.out.println("O valor digitado é positivo.");
        else
            System.out.println("O valor digitado é igual a zero.");
    }
}
