// Kattis : Math Homework

using System;

namespace mathhomework
{
    class Program
    {
        public static void Main(string[] args)
        {
            int[] arr = ReadIntArray();
            int b = arr[0];
            int d = arr[1];
            int c = arr[2];
            int l = arr[3];
            bool impossible = true;
            
            int bi = 0;
            while(bi*b <= l)
            {
                int di = 0;
                while(bi*b + di*d <= l)
                {
                    if((l - bi*b - di*d) % c == 0)
                    {
                        int ci = (l - bi*b - di*d)/c;
                        System.Console.WriteLine($"{bi} {di} {ci}");
                        impossible = false;
                    }
                    di++;
                }
                bi++;
            }
            if(impossible) System.Console.WriteLine("impossible");
        }

        static int[] ReadIntArray()
        {
            string line = Console.ReadLine();
            string[] arr = line.Split(' ');
            return Array.ConvertAll(arr, int.Parse);
        }
    }
}