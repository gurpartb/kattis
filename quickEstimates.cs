using System;

namespace quickEstimates
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.ReadLine();

            string line;
            while ((line = Console.ReadLine()) != null)
            {
                Console.WriteLine(line.Length);
            }
        }
    }
}