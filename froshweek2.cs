// Kattis : Frosh Week

using System;

namespace froshweek
{
    class Program
    {
        public static void Main()
        {
            string line = Console.ReadLine();
            int[] t = ReadIntArray();
            int[] l = ReadIntArray();
            Array.Sort(t);
            Array.Reverse(t);
            Array.Sort(l);
            Array.Reverse(l);

            int count = 0;
            int j = 0;

            for (int i = 0; i < l.Length; i++)
            {
                while(j < t.Length && t[j] > l[i])
                {
                    //System.Console.WriteLine($"{j} {t[j]} {l[i]} ");
                    j++;
                }
                

                if(j < t.Length && t[j] <= l[i])
                {
                    //System.Console.WriteLine($"{j} {t[j]} {l[i]}");
                    j++;
                    count++;
                }
            }
            System.Console.WriteLine(count);
            
        }

        static int[] ReadIntArray()
        {
            string line = Console.ReadLine();
            string[] arr = line.Split(' ');
            return Array.ConvertAll(arr, int.Parse);
        }
    }
}