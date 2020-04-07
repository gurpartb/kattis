// Kattis : Chanukah

using System;

namespace chanukah
{
    class Program
    {
        public static void Main(string[] args)
        {
            string line = Console.ReadLine();
            while((line = Console.ReadLine()) != null)
            {
                string[] arr = line.Split(' ');
                int num = int.Parse(arr[1]);
                int res = (num + 1) * (num + 2) / 2 - 1;
                System.Console.WriteLine($"{arr[0]} {res}");
            }
        }
    }
}