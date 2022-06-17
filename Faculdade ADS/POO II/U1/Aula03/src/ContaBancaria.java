
public class ContaBancaria {
	private String nomeProprietario;
	private int numeroAgencia, numeroConta;
	private float saldo;
	
	public String getNomeProprietario() {
		return nomeProprietario;
	}
	public void setNomeProprietario(String nomeProprietario) {
		this.nomeProprietario = nomeProprietario;
	}
	public int getNumeroAgencia() {
		return numeroAgencia;
	}
	public void setNumeroAgencia(int numeroAgencia) {
		this.numeroAgencia = numeroAgencia;
	}
	public int getNumeroConta() {
		return numeroConta;
	}
	public void setNumeroConta(int numeroConta) {
		this.numeroConta = numeroConta;
	}
	public float getSaldo() {
		return saldo;
	}
	public void setSaldo(float saldo) {
		this.saldo = saldo;
	}
	public void depositarValor(float valor) {
		saldo = saldo + valor;
	}
	public boolean sacarValor(float valor) {
		if (saldo >=valor) {
			saldo = saldo - valor;
			return true;
		} else
			return false;
	}
	public float consultarSaldo() {
		return getSaldo();
	}
	public ContaBancaria(String nomeProprietario, int numeroAgencia, int numeroConta, float saldo) {
		setNomeProprietario(nomeProprietario);
		setNumeroAgencia(numeroAgencia);
		setNumeroConta(numeroConta);
		setSaldo(saldo);
	}
}