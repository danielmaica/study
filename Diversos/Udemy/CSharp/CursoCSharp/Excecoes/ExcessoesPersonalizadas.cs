using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CursoCSharp.Excecoes
{
    public class NegativoException : Exception
    {
        public NegativoException() { }
        public NegativoException(string message) : base(message) { }
        public NegativoException(string message, Exception inner) : base(message, inner) { }
    }

    public class ImparException : Exception
    {
        public ImparException(string message) : base(message) { }
    }

    internal class ExcessoesPersonalizadas
    {
        public static int PostivoPar() {
            Random random = new Random();
            int valor = random.Next(-30, 30);

            if (valor < 0) {
                throw new NegativoException("Numero negativo... :(");
            }

            if (valor % 2 == 1) {
                throw new ImparException("Valor impar... :(");
            }
            return valor;
        }

        public static void Executar() {
            try {
                Console.WriteLine(PostivoPar());
            } catch (NegativoException erro) {
                Console.WriteLine(erro.Message);
            } catch (ImparException erro) {
                Console.WriteLine(erro.Message);
            }
        }
    }
}
