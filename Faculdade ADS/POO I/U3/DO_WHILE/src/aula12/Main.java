package aula12;

public class Main {

    public static void main(String[] args) {
        float chico, ze;
        int anos = 0;
        chico = (float) 1.50;
        ze = (float) 1.10;
        do {
            chico = (float)(chico + 0.02);
            ze = (float)(ze + 0.03);
            anos++;
        } while (ze <= chico);
        System.out.println("Zé levará " + anos + " anos para se tornar maior que Chico.");
    }
}
