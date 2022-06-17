
public class Main {

	public static void main(String[] args) {
		Imovel h = new Imovel();
		h.setPreco(100000);
		System.out.println("Valor Final do Imóvel: " + h.valorVenda());
		System.out.println("");
		NovoImovel n = new NovoImovel();
		n.setPreco(100000);
		n.setValorAdicional(10000);
		System.out.println("Valor Final do Imóvel: " + n.valorVenda());
		System.out.println("");
		ImovelAntigo o = new ImovelAntigo();
		o.setPreco(100000);
		o.setValorDesconto(10000);
		System.out.println("Valor Final do Imóvel: " + o.valorVenda());

	}

}
