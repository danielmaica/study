
public class Gerente extends Funcionario {
	public float valorImposto() {
		return (float) (super.getSalario()*0.05);
	}
}
