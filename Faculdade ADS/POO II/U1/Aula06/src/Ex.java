import java.util.Scanner;
public class Ex {
	public static void main(String[] args) {
		Scanner teclado = new Scanner(System.in);
		int valor;
		boolean excecao = true;
		while (excecao == true) {
			try {
				System.out.println("Informe um valor: ");
				valor = teclado.nextInt();
				System.out.println("Valor válido");
				excecao = false;
			} catch (Exception erro) {
				System.out.println("Valor inválido.");
				teclado.next().charAt(0);
			}
		}
	}
}