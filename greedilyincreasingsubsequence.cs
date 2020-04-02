// Kattis Greedily Increasing Subsequence
using System;
using System.Text;

namespace gis
{
    class Program
    {
        public static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            string line = Console.ReadLine();

            string[] arr = line.Split(' ');

            StringBuilder res = new StringBuilder();

            int last = 0;
            int count = 0;

            foreach (var item in arr)
            {
                int i = int.Parse(item);
                if(i > last)
                {
                    res.Append(item + " ");
                    last = i;
                    count++;
                }

                if(i == n)
                {
                    break;
                }
            }

            System.Console.WriteLine(count);
            System.Console.WriteLine(res);
        }
    }
}