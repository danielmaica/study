
public class Funcionario {
	private float salario;

	public float getSalario() {
		return salario;
	}

	public void setSalario(float salario) {
		this.salario = salario;
	}
	
	public float valorImposto() {
		return (float) (getSalario()*0.03);
	}
}
