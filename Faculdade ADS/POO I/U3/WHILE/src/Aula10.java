import java.util.Scanner;
public class Aula10 {
    public static void main (String[] args){
        Scanner teclado = new Scanner(System.in);
        int valor = 0;
        while (valor != 50) {
            System.out.println("Digite um valor: ");
            valor = teclado.nextInt();;
        }
        System.out.println("Obrigado por utilizar nossos serviços, até logo!");
    }

}
