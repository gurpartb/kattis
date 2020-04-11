// Kattis : Loo Rolls

using System;

namespace loorolls
{
    class Program
    {
        public static void Main(string[] args)
        {
            string line = Console.ReadLine();
            long[] ln = StringToIntArray(line);

            long count = 0;

            long r = ln[0] % ln[1];
            count++;

            while(r != 0)
            {
                ln[1] += -r;
                r = ln[0] % ln[1];
                count++;
            }

            System.Console.WriteLine(count);
        }

        static long[] StringToIntArray(string line)
        {
            long[] arr = Array.ConvertAll(line.Split(' '), long.Parse);
            return arr;
        }
    }
}