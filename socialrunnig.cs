// Kattis : Social Running

using System;

namespace socialrunning
{
    class Program
    {
        public static void Main()
        {
            string line = Console.ReadLine();
            int size = int.Parse(line);

            int[] arr = new int[size];

            int i = 0;
            
            while(i < size)
            {
                line = Console.ReadLine();
                int n = int.Parse(line);
                arr[i] = n;
                i++;
            }

            int dist = int.MaxValue;

            i = 0;
            while(i < size)
            {
                //System.Console.WriteLine(i);
                dist = Math.Min(dist, arr[i] + arr[ (i + 2) % size]);
                i++;
            }
            System.Console.WriteLine(dist);
        }
    }

}