public class Main {
	public static void main(String[] args) {
		Carro c = new Carro();
		c.setMarca("Ford");
		c.setModelo("Fiesta");
		c.setCor("Preto");
		c.setTipoCombustivel("Gasolina");
		System.out.println("Marca: " + c.getMarca());
		System.out.println("Modelo: " + c.getModelo());
		System.out.println("Cor: " + c.getCor());
		System.out.println("Tipo de combustível: " + c.getTipoCombustivel());
		c.ligar();
		c.desligar();

	}
}