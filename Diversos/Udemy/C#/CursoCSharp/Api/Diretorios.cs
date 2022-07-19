using System;
using System.IO;

namespace CursoCSharp.Api
{
    internal class Diretorios
    {
        public static void Executar() {
            var novoDir = @"~/PastaCSharp".ParseHome();
            var novoDirDestino = @"~/PastaCSharpDestino".ParseHome();
            var dirProjeto = @"~/Estudos/Diversos/Udemy/C#/CursoCSharp".ParseHome();
        
            if (Directory.Exists(novoDir)) {
                Directory.Delete(novoDir, true);
            }

            if (Directory.Exists(novoDirDestino)) {
                Directory.Delete(novoDirDestino, true);
            }

            Directory.CreateDirectory(novoDir);
            Console.WriteLine(Directory.GetCreationTime(novoDir));

            Console.WriteLine("====== Pastas ======");
            var folders = Directory.GetDirectories(dirProjeto);
            foreach (var folder in folders) {
                Console.WriteLine(folder);
            }

            Console.WriteLine("\n\n====== Arquivos ======");
            var files = Directory.GetFiles(dirProjeto);
            foreach (var file in files) {
                Console.WriteLine(file);
            }

            Console.WriteLine("\n\n====== Raiz ======");
            Console.WriteLine(Directory.GetDirectoryRoot(dirProjeto));

            Directory.Move(novoDir, novoDirDestino);
        }
    }
}
