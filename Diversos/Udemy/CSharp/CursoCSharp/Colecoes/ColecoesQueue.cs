using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CursoCSharp.Colecoes {
    internal class ColecoesQueue {
        public static void Executar() {
            var fila = new Queue<string>();

            fila.Enqueue("Fulano");
            fila.Enqueue("Sicrano");
            fila.Enqueue("Beltrano");

            Console.WriteLine(fila.Peek()); 
            // Peek não remove da QUEUE, apenas verifica o pico/topo
            Console.WriteLine(fila.Count);

            Console.WriteLine(fila.Dequeue()); // Dequeue elimina da QUEUE
            Console.WriteLine(fila.Count);

            foreach(var pessoa in fila) {
                Console.WriteLine(pessoa);
            }

            var salada = new Queue();
            salada.Enqueue(3); // Enqueue adiciona item a QUEUE
            salada.Enqueue("Item");
            salada.Enqueue(true);
            salada.Enqueue(3.14);

            Console.WriteLine(salada.Contains("item")); 
            // Contains verifica se a fila contém tal item
            Console.WriteLine(salada.Contains("Item")); 
            

        }
    }
}
