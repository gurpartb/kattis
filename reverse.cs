using System;
using System.Text;

namespace reverse
{
    class reverse
    {
        static void Main(string[] args)
        {
            string line =  Console.ReadLine();
            int n = int.Parse(line);
            var arr = new string[n];

            int i = 0;
            while(i < n)
            {
                arr[i] = Console.ReadLine();
                i++;
            }
            
            int j = arr.Length - 1;
            while(j>=0)
            {
                Console.WriteLine(arr[j]);
                j--;
            }
        }
    }
}