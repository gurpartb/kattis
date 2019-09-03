using System;
using System.Collections.Generic;

namespace princesspeach
{
    class Program
    {
        static void Main(string[] args)
        {
            var (n, k) = NandK(Console.ReadLine());

            var set = Kset(k);

            k = set.Count;

            for (int i = 0; i < n; i++)
            {
                if(!set.Remove(i))
                {
                    Console.WriteLine(i);
                }
            }

            Console.WriteLine($"Mario got {k} of the dangerous obstacles.");
        }

        public static (int, int) NandK(string line)
        {
            string[] arr = line.Split(' ');
            int n = int.Parse(arr[0]);
            int k = int.Parse(arr[1]);
            return (n,k);
        }

        public static HashSet<int> Kset(int k)
        {
            var set = new HashSet<int>();

            for (int i = 0; i < k; i++)
            {
                int j = int.Parse(Console.ReadLine());
                set.Add(j);
            }

            return set;
        }
    }
}