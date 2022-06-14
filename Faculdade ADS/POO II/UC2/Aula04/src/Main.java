
public class Main {

	public static void main(String[] args) {
		Funcionario f = new Funcionario();
		f.setSalario(1000);
		System.out.println("Imposto: " + f.valorImposto());
		Gerente g = new Gerente();
		g.setSalario(1000);
		System.out.println("Imposto Gerente: " + g.valorImposto());
	}

}
