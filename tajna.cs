// Kattis : Tajna

using System;

namespace tajna
{
    class Program
    {
        public static void Main(string[] args)
        {
            string line = Console.ReadLine();
            int n = line.Length;
            char[] arr = new char[n];
            int r = 1;
            int c = n;

            int ri = r;

            while(ri < Math.Sqrt(n))
            {
                ri++;
                if(n%ri==0)
                {
                    int ci = n/ri;
                    if(ri <= ci)
                    {
                        r = ri;
                        c = ci;
                    }
                    else
                    {
                        break;
                    }
                }
            }

            int k = 0;
            for (int j = 0; j < r; j++)
            {
                for (int i = 0; i < c; i++)
                {
                    arr[k++] = line[i*r+j];
                }
            } 
            string res = new string(arr);
            System.Console.WriteLine(res);
        }
    }
}
