using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CursoCSharp.ClassesEMetodos
{

    public class Cliente
    {
        public string Nome;
        public readonly DateTime Nascimento;

        public Cliente(string nome, DateTime nascimento) {
            Nome = nome;
            Nascimento = nascimento;

            Nascimento = new DateTime(2020, 10, 10);
        }

        public Cliente() {

        }

        public string GetDataDeNascimento() {
            return String.Format("{0}/{1}/{2}", Nascimento.Day, Nascimento.Month, Nascimento.Year);
        }
    }

    class Readonly
    {
        public static void Executar() {
            var cliente1 = new Cliente("Ana Silva", new DateTime(1987, 5, 22));
            Console.WriteLine(cliente1.Nome + " " + cliente1.GetDataDeNascimento());

            var cliente2 = new Cliente("Daniel", new DateTime(1999, 4, 1));
            Console.WriteLine(cliente2.Nome+ " " + cliente2.GetDataDeNascimento());
        }
    }
}
