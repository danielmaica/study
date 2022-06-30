public class Main {
	public static void main(String[] args) {
		Quadrado q = new Quadrado();
		q.setLado(4);
		System.out.println("Perímetro do Quadrado: " + 
		q.calculaPerimetro());
		
		Triangulo t = new Triangulo();
		t.setBase(4);
		t.setAltura(4);
		System.out.println("Perímetro do Triangulo: " + 
		t.calculaPerimetro());
	}
}