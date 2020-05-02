// Kattis : Paul Eigon
using System;

namespace pauleigon
{
    class Program
    {
        public static void Main(string[] args)
        {
            long[] arr = ReadlongArray();
            bool isEven = ((arr[1] + arr[2]) / arr[0]) % 2 == 0;

            if(isEven)
            {
                System.Console.WriteLine("paul");
            }
            else
            {
                System.Console.WriteLine("opponent");
            }
        }

        static long[] ReadlongArray()
        {
            string line = Console.ReadLine();
            string[] arr = line.Split(' ');
            return Array.ConvertAll(arr, long.Parse);
        }
    }
}