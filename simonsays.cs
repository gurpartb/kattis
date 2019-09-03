using System;

namespace simonsays
{
    class Program
    {
        static void Main(string[] args)
        {
            string pattern = "simon says ";
            int size = pattern.Length;

            int countDown = int.Parse(Console.ReadLine());

            while (countDown > 0)
            {
                string line = Console.ReadLine();
                countDown--;

                if (line.Length <= size)
                {
                    Console.WriteLine();
                    continue;
                }

                string head = line.Substring(0, size);

                if(head != pattern)
                {
                    Console.WriteLine();
                    continue;
                }

                string tail = line.Substring(size);
                Console.WriteLine($"{tail}");
            }
        }
    }
}