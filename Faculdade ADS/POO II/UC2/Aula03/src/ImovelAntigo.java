
public class ImovelAntigo extends Imovel {
	private float valorDesconto;

	public float getValorDesconto() {
		return valorDesconto;
	}

	public void setValorDesconto(float valorDesconto) {
		this.valorDesconto = valorDesconto;
	}
	public float valorVenda() {
		return super.valorVenda() - valorDesconto;
	}
}
