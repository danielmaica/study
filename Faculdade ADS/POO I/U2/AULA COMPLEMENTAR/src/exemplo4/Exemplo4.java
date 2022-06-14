package exemplo4;
import java.util.Scanner;
public class Exemplo4 {
    public static void main(String[] args) {
        float n1, n2, resultado;
        Scanner teclado = new Scanner(System.in);
        System.out.println("Digite o primeiro valor:");
        n1 = teclado.nextFloat();
        System.out.println("Digite o segundo valor:");
        n2 = teclado.nextFloat();
        resultado = n1 * 2 + n2;
        if(resultado > 50) {
            System.out.println("O resultado é " + resultado + "," + "que é maior que 50.");
        } else if(resultado < 50) {
            System.out.println("O resultado é " + resultado + "," + "que é menor que 50.");
        } else {
            System.out.println("O resultado é " + resultado + "," + "que é igual a 50.");
        }
    }
}
