
public class Principal {

	public static void main(String[] args) {
		ContaBancaria conta = new ContaBancaria("Daniel", 47778, 876543, 0);
		conta.depositarValor(3000);
		System.out.println("Saldo atual: R$" + conta.getSaldo());
		conta.sacarValor(1000);
		System.out.println("Saldo atual: R$" + conta.getSaldo());
	}

}
