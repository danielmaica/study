package avaliacao;
import java.util.Scanner;
public class Avaliacao {
    public static void main(String[] args) {
	    int clima;
        System.out.println("Digite a temperatura atual:");
        Scanner teclado = new Scanner(System.in);
        clima = teclado.nextInt();

        if (clima <= 15) {
            System.out.println("A temperatura atual está em " + clima + "ºC, o clima está frio.");
        } else if(clima >= 16 && clima <= 25) {
            System.out.println("A temperatura atual está em " + clima + "ºC, o clima está agradável.");
        } else if(clima >= 26 && clima <=32) {
            System.out.println("A temperatura atual está em " + clima + "ºC, o clima está quente.");
        } else if(clima > 32) {
            System.out.println("A temperatura atual está em " + clima + "ºC, o clima está muito quente.");
        } else {
            System.out.println("Erro - Digite uma opção válida.");
        }
    }
}
