using System;

namespace somesum
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            Console.WriteLine( n % 2 == 0 ? (n % 4) == 0 ? "even" : "Odd" : "Either");
        }
    }
}