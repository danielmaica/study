using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CursoCSharp.Colecoes {
    internal class ColecoesDictionary {
        public static void Executar() {
            var filmes = new Dictionary<int, string>();

            filmes.Add(2000, "Gladiador");
            filmes.Add(2002, "Homem-Aranha");
            filmes.Add(2004, "Os Incriveis");
            filmes.Add(2006, "O Grande Truque");

            if (filmes.ContainsKey(2004)) {
                Console.WriteLine($"2004: {filmes[2004]}");
                Console.WriteLine($"2004: {filmes.GetValueOrDefault(2004)}");
            }

            Console.WriteLine(filmes.ContainsValue("Amnesia"));

            Console.WriteLine($"Removeu? {filmes.Remove(2004)}");

            filmes.TryGetValue(2006, out string filme2006);
            Console.WriteLine($"Filme: {filme2006}!");

            foreach (var chave in filmes) {
                Console.WriteLine(chave);
            }

            foreach (var valor in filmes) {
                Console.WriteLine(valor);
            }

            foreach (KeyValuePair<int, string> filme in filmes) {
                Console.WriteLine($"{filme.Value} e de {filme.Key}");
            }

            foreach (var filme in filmes) {
                Console.WriteLine($"{filme.Value} e de {filme.Key}");
            }
        }
    }
}
