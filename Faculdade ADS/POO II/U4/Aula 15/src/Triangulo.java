public class Triangulo implements Forma {
	private float base, altura;

	public float getBase() {
		return base;
	}

	public void setBase(float base) {
		this.base = base;
	}

	public float getAltura() {
		return altura;
	}

	public void setAltura(float altura) {
		this.altura = altura;
	}
	public float calculaPerimetro() {
		return getBase()*2+getAltura()*2;
	}
}