using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CursoCSharp.Fundamentos {
    class OperadoresAtribuicao {
        public static void Executar() {
            var num1 = 3;
            num1 = 7; // substitui 3 por 7 (7)
            num1 += 10; // num1 = num1 + 10 (17)
            num1 -= 3; // num1 = num1 - 3 (14)
            num1 *= 5; // num1 = num1 * 5 (70)
            num1 /= 2; // num1 = num1 / 2 (35)
            Console.WriteLine(num1);

            int a = 1;
            int b = a;
            a++; // a = a + 1
            b--; // b = b - 1
            Console.WriteLine($"{a} {b}");

            // Não se preocupe com o código, mas com o conceito aplicado
            dynamic c = new SystemDynamic.ExpandoObject();
            c.nome = "João";
            dynamic d = c; // c e d apontam para o mesmo local na memória
            d.nome = "Maria";
            Console.WriteLine(c.nome); // = Maria
        }
    }
}
