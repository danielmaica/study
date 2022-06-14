public class Main {
	public static void main(String[] args) {
		Televisor tv = new Televisor();
		tv.setVolume(0);
		System.out.println("O volume atual é: " + tv.retornaVolume());
		System.out.println("Aumentando o volume para o máximo...");
		for (int i=0; i <= 40; i++) {
			tv.aumentaVolume();
			System.out.println("O volume atual é: " + tv.retornaVolume());
		}
		System.out.println("Dimunido o volume para o mínimo...");
		for (int i=40; i >= 0; i--) {
			tv.diminuiVolume();
			System.out.println("O volume atual é: " + tv.retornaVolume());
		}
		System.out.println("Aumentando o volume em 1x...");
		tv.aumentaVolume();
		System.out.println("O volume atual é: " + tv.retornaVolume());
		System.out.println("Diminuido o volume em 1x...");
		tv.diminuiVolume();
		System.out.println("O volume atual é: " + tv.retornaVolume());
	}
}