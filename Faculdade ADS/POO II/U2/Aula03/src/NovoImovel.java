
public class NovoImovel extends Imovel {
	private float valorAdicional;

	public float getValorAdicional() {
		return valorAdicional;
	}

	public void setValorAdicional(float valorAdicional) {
		this.valorAdicional = valorAdicional;
	}
	
	public float valorVenda() {
		return super.valorVenda() + valorAdicional;
	}
}
