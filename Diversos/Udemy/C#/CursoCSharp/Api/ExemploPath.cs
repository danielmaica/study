using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CursoCSharp.Api
{
    internal class ExemploPath
    {
        public static void Executar() {
            var directory = @"~/exemplo_path_directory".ParseHome();
            var file = @"~/exemplo_path_directory/exemplo_path_file.txt".ParseHome();

            if (!Directory.Exists(directory)) {
                Directory.CreateDirectory(directory);
            }

            if (!File.Exists(file)) {
                using (StreamWriter sw = File.CreateText(file)) {
                    sw.WriteLine("Um novo arquivo criado!");
                }
            }

            Console.WriteLine(Path.GetExtension(file));
            Console.WriteLine(Path.GetFileName(file));
            Console.WriteLine(Path.GetFileNameWithoutExtension(file));
            Console.WriteLine(Path.GetDirectoryName(file));
            Console.WriteLine(Path.HasExtension(file));

            Console.WriteLine(Path.HasExtension(directory));
            Console.WriteLine(Path.GetFullPath(directory));
            Console.WriteLine(Path.GetPathRoot(directory));
        }
    }
}
