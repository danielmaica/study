using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Encapsulamento {
    public class FilhoReconhecido : SubCelebridade {
        public new void MeusAcessos() {
            Console.WriteLine("FilhoReconhecido...");

            Console.WriteLine(InfoPublica); // public - TODOS
            Console.WriteLine(CorDoOlho); // protected - HERANCA
            Console.WriteLine(NumeroCelular); // internal - MESMO PROJETO (ASSEMBLY)
            Console.WriteLine(JeitoDeFalar); // protected internal - HERANCA OU MESMO PROJETO
            Console.WriteLine(SegredoFamilia); // private protected - MESMA CLASS OU HERANCA NO MESMO PROJETO
            //Console.WriteLine(UsaMuitoPhotoshop); // private
        }
    }
}
