
public class Main {

	public static void main(String[] args) {
		Calcular c = new Calcular();
		System.out.println("Resultado: " + c.somar(10, 15));
		System.out.println("Resultado: " + c.somar(10, 15, 20));
		System.out.println("Resultado: " + c.somar((float)(10.4), (float)(15.8)));
		System.out.println("Resultado: " + c.somar((float)(10.4), (float)(15.8),(float)(23.5)));

	}

}
