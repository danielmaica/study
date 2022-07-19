using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CursoCSharp.ClassesEMetodos {
    public class CalculadoraEstatica {
        public int Somar(int a, int b) {
            return a + b;
        }

        public static int Multiplicar(int a, int b) {
            return a * b;
        }

    }

    internal class MetodosEstaticos {
        public static void Executar() {
            // Static
            var resultado = CalculadoraEstatica.Multiplicar(2, 2);           
            Console.WriteLine($"Resultado: {resultado}");
            
            // Sem static
            CalculadoraEstatica calc = new CalculadoraEstatica();
            Console.WriteLine("Resultado: " + calc.Somar(2, 2));
        }
    }
}
