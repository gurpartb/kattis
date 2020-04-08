// Kattis : Transit Woes

using System;
using System.Linq;

namespace transitwoes
{
    class Program
    {
        public static void Main(string[] args)
        {
            int[] stn = ReadIntArray();
            int[] d = ReadIntArray();
            int[] b = ReadIntArray();
            int[] c = ReadIntArray();

            for (int i = 0; i < stn[2]; i++)
            {
                stn[0] += d[i];
                stn[0] += c[i] - stn[0];
                stn[0] += b[i];
            }
            stn[0] += d[stn[2]];
            System.Console.WriteLine(stn[1] - stn[0] >= 0? "yes":"no");
        }

        static int[] ReadIntArray()
        {
            string line = Console.ReadLine();
            string[] arr = line.Split(' ');
            return arr.Select(int.Parse).ToArray();
        }
    }
}