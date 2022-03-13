package media;
import java.util.Scanner;
public class Media {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        float n1, n2, n3, n4, n5, media;
        System.out.println("Digite o primeiro valor:");
        n1 = teclado.nextFloat();
        System.out.println("Digite o segundo valor:");
        n2 = teclado.nextFloat();
        System.out.println("Digite o terceiro valor:");
        n3 = teclado.nextFloat();
        System.out.println("Digite o quarto valor:");
        n4 = teclado.nextFloat();
        System.out.println("Digite o quinto valor:");
        n5 = teclado.nextFloat();
        media = (n1 + n2 + n3 + n4 + n5) / 5;
        System.out.println("A media dos valores é: " + media);
    }
}
