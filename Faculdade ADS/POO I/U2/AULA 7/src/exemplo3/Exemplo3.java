package exemplo3;
import java.util.Scanner;
public class Exemplo3 {
    public static void main(String[] args) {
	    int n1;
        System.out.println("Selecione o dia da semana:");
        System.out.println("(1) Domingo;");
        System.out.println("(2) Segunda-feira;");
        System.out.println("(3) Terça-feira;");
        System.out.println("(4) Quarta-feira;");
        System.out.println("(5) Quinta-feira;");
        System.out.println("(6) Sexta-feira;");
        System.out.println("(7) Sábado.");
        Scanner teclado = new Scanner(System.in);
        n1 = teclado.nextInt();
        switch (n1) {
            case 1:
                System.out.println("Dia da semana escolhido: Domingo.");
                break;
            case 2:
                System.out.println("Dia da semana escolhido: Segunda-feira.");
                break;
            case 3:
                System.out.println("Dia da semana escolhido: Terça-feira.");
                break;
            case 4:
                System.out.println("Dia da semana escolhido: Quarta-feira.");
                break;
            case 5:
                System.out.println("Dia da semana escolhido: Quinta-feira.");
                break;
            case 6:
                System.out.println("Dia da semana escolhido: Sexta-feira.");
                break;
            case 7:
                System.out.println("Dia da semana escolhido: Sábado.");
                break;
            default:
                System.out.println("Erro - Digite uma opção válida.");
                break;
        }
    }
}
