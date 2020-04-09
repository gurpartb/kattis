// Kattis : Aaah!

using System;

namespace aaah
{
    class Program
    {
        public static void Main(string[] args)
        {
            string jon = Console.ReadLine();
            string doc = Console.ReadLine();

            string res = jon.Length >= doc.Length ? "go":"no";

            System.Console.WriteLine(res);
        }
    }
}