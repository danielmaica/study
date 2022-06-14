public class Carro {
	private String marca, modelo, cor, tipoCombustivel;
	private boolean carroLigado = false;
	
	public String getMarca() {
		return marca;
	}
	public void setMarca(String marca) {
		this.marca = marca;
	}
	public String getModelo() {
		return modelo;
	}
	public void setModelo(String modelo) {
		this.modelo = modelo;
	}
	public String getCor() {
		return cor;
	}
	public void setCor(String cor) {
		this.cor = cor;
	}
	public String getTipoCombustivel() {
		return tipoCombustivel;
	}
	public void setTipoCombustivel(String tipoCombustivel) {
		this.tipoCombustivel = tipoCombustivel;
	}
	public void ligar() {
		carroLigado = true;
		System.out.println("Carro ligado.");
	}
	public void desligar() {
		carroLigado = false;
		System.out.println("Carro desligado.");
	}
}