using System;
using System.Linq;

namespace missingnumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            int[] arr = new int[n];

            for( int i = 0; i < n; i++)
            {
                arr[i] = int.Parse(Console.ReadLine());
            }

            int maxVal = arr.Max();

            if(maxVal == n)
            {
                Console.WriteLine("good job");
                return;
            }

            bool[] arr2 = new bool[maxVal];

            foreach(int i in arr)
            {
                arr2[i-1] = true;
            }

            for (int i = 0; i < arr2.Length; i++)
            {
                if (!arr2[i]) Console.WriteLine(i + 1);
            }

        }
    }
}
