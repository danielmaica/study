public class Quadrado implements Forma {
	private float lado;

	public float getLado() {
		return lado;
	}

	public void setLado(float lado) {
		this.lado = lado;
	}
	
	public float calculaPerimetro() {
		return 4*getLado();
	}
}