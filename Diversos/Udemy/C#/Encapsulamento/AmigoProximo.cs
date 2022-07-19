using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Encapsulamento
{
    public class AmigoProximo
    {
        public readonly SubCelebridade amiga = new SubCelebridade();

        public void MeusAcessos() {
            Console.WriteLine("Amigo Proximo...");

            Console.WriteLine(amiga.InfoPublica); // public - TODOS
            //Console.WriteLine(amiga.CorDoOlho); // protected - HERANCA
            Console.WriteLine(amiga.NumeroCelular); // internal - MESMO PROJETO (ASSEMBLY)
            Console.WriteLine(amiga.JeitoDeFalar); // protected internal - HERANCA OU MESMO PROJETO
            //Console.WriteLine(amiga.SegredoFamilia); // private protected - MESMA CLASS OU HERANCA NO MESMO PROJETO
            //Console.WriteLine(UsaMuitoPhotoshop); // private
        }
    }
}
