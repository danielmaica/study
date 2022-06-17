package avaliacao;

public class Principal {

	public static void main(String[] args) {
		Vendedor v = new Vendedor();
		v.setNome("Daniel");
		v.setCargo("Vendedor");
		v.setHorasTrab(8);
		v.setValorHora(50);
		v.setComissao(500);
		System.out.println("Nome: " + v.getNome());
		System.out.println("Cargo: " + v.getCargo());
		System.out.println("Horas trabalhadas: " + v.getHorasTrab());
		System.out.println("Valor por hora: R$" + v.getValorHora());
		System.out.println("Comissão: R$" + v.getComissao());
		System.out.println("Salário: R$" + v.calculaSalario());
		System.out.println("");
		Professor p = new Professor();
		p.setNome("Jason");
		p.setCargo("Professor");
		p.setHorasTrab(12);
		p.setValorHora(65);
		System.out.println("Nome: " + p.getNome());
		System.out.println("Cargo: " + p.getCargo());
		System.out.println("Horas trabalhadas: " + p.getHorasTrab());
		System.out.println("Valor por hora: R$" + p.getValorHora());
		System.out.println("Salário: R$" + p.calculaSalario());
	}
}