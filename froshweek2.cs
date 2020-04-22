// Kattis : Frosh Week

using System;

namespace froshweek
{
    class Program
    {
        public static void Main()
        {
            _  = Console.ReadLine();

            int[] t = ReadIntArray();
            int[] l = ReadIntArray();

            Array.Sort(t);
            Array.Sort(l);

            Array.Reverse(t);
            Array.Reverse(l);

            int count = FroshWeek(t, l);
            System.Console.WriteLine(count);
        }

        // parms Int[] t,l in decending order
        static int FroshWeek(int[] t, int[] l)
        {
            int ti = 0;
            int li = 0;
            int count = 0;

            while(ti < t.Length && li < l.Length)
            {
                if(t[ti] <= l[li])
                {
                    li++;
                    count++;
                }
                ti++;
            }
            return count;
        }

        static int[] ReadIntArray()
        {
            string line = Console.ReadLine();
            string[] arr = line.Split(' ');
            return Array.ConvertAll(arr, int.Parse);
        }
    }
}