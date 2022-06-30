
public class Main {

	public static void main(String[] args) {
		System.out.println(Soma.somar(30, 20, 10));
		System.out.println(Soma.somar(10, 20, 30, 40));
		System.out.println("Número de execuções: " + Soma.numero);
		System.out.println(Soma.somar(10, 20, 30, 50));
		System.out.println("Número de execuções: " + Soma.numero);
	}

}
