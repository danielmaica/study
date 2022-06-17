import java.util.Scanner;
public class Ex {
	public static void main(String[] args) {
		Scanner teclado = new Scanner(System.in);
		int numero;
		try {
			System.out.println("Digite um valor: ");
			numero = teclado.nextInt();
			if (numero >= 0 && numero <= 50) {
				System.out.println("É um número válido, está no intervalo entre 0 e 50.");
			} else {
				System.out.println("É um número inválido, não está no intervalo entre 0 e 50.");
			}
		} catch(Exception erro) {
			System.out.println("Você não digitou um número.");
		}
	}
}