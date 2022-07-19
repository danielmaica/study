using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Encapsulamento;

namespace CursoCSharp.OO
{
    public class FilhoNaoReconhecido : SubCelebridade {
        public new void MeusAcessos() {
            Console.WriteLine("Filho Nao Reconhecido...");

            Console.WriteLine(InfoPublica); // public - TODOS
            Console.WriteLine(CorDoOlho); // protected - HERANCA
            //Console.WriteLine(NumeroCelular); // internal - MESMO PROJETO (ASSEMBLY)
            Console.WriteLine(JeitoDeFalar); // protected internal - HERANCA OU MESMO PROJETO
            //Console.WriteLine(SegredoFamilia); // private protected - MESMA CLASS OU HERANCA NO MESMO PROJETO
            //Console.WriteLine(UsaMuitoPhotoshop); // private
        }

    }

    public class AmigoDistante {
        public readonly SubCelebridade amiga = new SubCelebridade();
        
        public void MeusAcessos() {
            Console.WriteLine("Amigo Distante...");

            Console.WriteLine(amiga.InfoPublica); // public - TODOS
            //Console.WriteLine(amiga.CorDoOlho); // protected - HERANCA
            //Console.WriteLine(amiga.NumeroCelular); // internal - MESMO PROJETO (ASSEMBLY)
            //Console.WriteLine(amiga.JeitoDeFalar); // protected internal - HERANCA OU MESMO PROJETO
            //Console.WriteLine(amiga.SegredoFamilia); // private protected - MESMA CLASS OU HERANCA NO MESMO PROJETO
            //Console.WriteLine(amiga.UsaMuitoPhotoshop); // private
        }
    }

    internal class Encapsulamento
    {
        public static void Executar() {
            SubCelebridade sub = new SubCelebridade();
            sub.MeusAcessos();

            // Mesmo projeto
            new FilhoReconhecido().MeusAcessos(); // Com Heranca
            new AmigoProximo().MeusAcessos(); // Sem Heranca

            // Outro projeto
            new FilhoNaoReconhecido().MeusAcessos(); // Com Heranca
            new AmigoDistante().MeusAcessos(); // Sem Heranca
        }
    }
}
