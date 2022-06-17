package avaliacao;

public class Professor extends Funcionario{
	public float calculaSalario() {
		return super.getHorasTrab() * super.getValorHora();
	}
}