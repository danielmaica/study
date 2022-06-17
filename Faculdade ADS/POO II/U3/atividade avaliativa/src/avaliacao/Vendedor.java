package avaliacao;

public class Vendedor extends Funcionario {
	public float comissao;

	public float getComissao() {
		return comissao;
	}

	public void setComissao(float comissao) {
		this.comissao = comissao;
	}
	public float calculaSalario(){
		return super.getHorasTrab() * super.getValorHora() + comissao;
	}
}