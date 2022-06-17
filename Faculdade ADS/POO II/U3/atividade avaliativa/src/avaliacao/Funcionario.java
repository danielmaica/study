package avaliacao;

public abstract class Funcionario {
	public String nome, cargo;
	public float horasTrab, valorHora;

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public String getCargo() {
		return cargo;
	}

	public void setCargo(String cargo) {
		this.cargo = cargo;
	}

	public float getHorasTrab() {
		return horasTrab;
	}

	public void setHorasTrab(float horasTrab) {
		this.horasTrab = horasTrab;
	}

	public float getValorHora() {
		return valorHora;
	}

	public void setValorHora(float valorHora) {
		this.valorHora = valorHora;
	}
	public abstract float calculaSalario();
}