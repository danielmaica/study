public class Main {
	public static void main(String[] args) {
		Cliente c= new Cliente();
		c.setNome("Daniel");
		c.setEndereco("Rua Dr. Ricardo Gavenski");
		c.setCpf("860.000.390-34");
		System.out.println("----CLIENTE----");
		System.out.println("Nome: " + c.getNome());
		System.out.println("Endereço: " + c.getEndereco());
		System.out.println("Cpf: " + c.getCpf());
		System.out.println("");
		Fornecedor f= new Fornecedor();
		c.setNome("Taynara");
		c.setEndereco("Rua Navegantes");
		c.setCpf("802.083.758-50");
		System.out.println("---FORNECEDOR---");
		System.out.println("Nome: " + c.getNome());
		System.out.println("Endereço: " + c.getEndereco());
		System.out.println("Cpf: " + c.getCpf());
	}
}