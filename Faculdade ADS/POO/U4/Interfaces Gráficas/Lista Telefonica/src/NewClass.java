
import java.util.Scanner;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author danie
 */
public class NewClass {
    public static void main(String[] args) {
           Scanner teclado=new Scanner(System.in);
                float nota1,nota2,nota3,media;
                int continuar=1;
                while (continuar!=0)
                {
                   System.out.println("Digite a nota 1");
                   nota1=teclado.nextFloat();
                   System.out.println("Digite a nota 2");
                   nota2=teclado.nextFloat();
                   System.out.println("Digite a nota 3");
                   nota3=teclado.nextFloat();
                   media=(nota1+nota2+nota3*2)/4;
                   System.out.println("Média: " + media);
                   System.out.println("Deseja continuar? 1- Sim. 0- Não.");
                   continuar=teclado.nextInt();
                }
     }
}
