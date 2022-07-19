using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Encapsulamento {
    public class SubCelebridade {
        // Todos
        public string InfoPublica = "Tenho um instragram!";

        // Heranca
        protected string CorDoOlho = "Verde";

        // mesmo projeto (assembly)
        internal ulong NumeroCelular = 5511999999999;

        // heranca ou mesmo projeto
        protected internal string JeitoDeFalar = "Uso muitas girias";

        // mesma class ou heranca no mesmo projeto (c# >= 7.2)
        private protected string SegredoFamilia = "Bla bla";

        // private é o padrao
        bool UsaMuitoPhotoshop = true;

        public void MeusAcessos() {
            Console.WriteLine("SubCelebridade...");

            Console.WriteLine(InfoPublica);
            Console.WriteLine(CorDoOlho);
            Console.WriteLine(NumeroCelular);
            Console.WriteLine(JeitoDeFalar);
            Console.WriteLine(SegredoFamilia);
            Console.WriteLine(UsaMuitoPhotoshop);
        }
    }
}
