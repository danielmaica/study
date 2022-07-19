using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CursoCSharp.Api
{
    internal class ExemploDirectoryInfo
    {
        public static void Executar() {
            var dirProject = @"~/Estudos/Diversos/Udemy/C#/CursoCSharp".ParseHome();

            var dirInfo = new DirectoryInfo(dirProject);

            if (!dirInfo.Exists) { 
                dirInfo.Create();
            }

            Console.WriteLine("====== Files ======");
            var files = dirInfo.GetFiles();
            foreach (var file in files) {
                Console.WriteLine(file);
            }

            Console.WriteLine("\n====== Directories ======");
            var directories = dirInfo.GetDirectories();
            foreach (var directory in directories) {
                Console.WriteLine(directory);
            }

            Console.WriteLine(dirInfo.CreationTime);
            Console.WriteLine(dirInfo.FullName);
            Console.WriteLine(dirInfo.Root);
            Console.WriteLine(dirInfo.Parent.Parent);
        }
    }
}
