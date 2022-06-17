
public class Main {

	public static void main(String[] args) {
		TV t= new TV();
		t.setConsumo(14);
		t.setVoltagem(220);
		t.setCanal(10);
		t.setVolume(20);
		t.setTamanho(65);
		System.out.println("-----TV-----");
		System.out.println("Consumo: " + t.getConsumo());
		System.out.println("Voltagem: " + t.getVoltagem());
		System.out.println("Canal: " + t.getCanal());
		System.out.println("Volume: " + t.getVolume());
		System.out.println("Tamanho: " + t.getTamanho() + " polegadas.");
	}
}