using System;
using System.Globalization;

namespace CursoCSharp.Fundamentos {
    class FormatandoNumero {
        public static void Executar() {
            double valor = 15.175;
            Console.WriteLine(valor.ToString("F1")); // Uma casa decimal
            Console.WriteLine(valor.ToString("C")); // Currency = valor moeda
            Console.WriteLine(valor.ToString("P")); // Percentual %
            Console.WriteLine(valor.ToString("#.##")); // Formatação personalizada

            CultureInfo cultura = new CultureInfo("en-US"); // Setar cultura desejada
            Console.WriteLine(valor.ToString("C0", cultura));

            int inteiro = 256;
            Console.WriteLine(inteiro.ToString("D10")); // Formatar tamanho da string
        }
    }
}
