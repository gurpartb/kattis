using System;
using System.Linq;

namespace beatspread
{
    class Program
    {
        static void Main(string[] args)
        {
            string line = Console.ReadLine();
            var n = int.Parse(line);

            int i = 0;

            while(i < n)
            {
                line = Console.ReadLine();
                var arr = line.Split(' ').Select(int.Parse).ToArray<int>();
                var a = arr[0] + arr[1];
                if(a % 2 == 0)
                {
                    a /= 2;

                    var b = a - arr[1];

                    if(b >= 0)
                    {
                        Console.WriteLine($"{a} {b}");
                    }
                    else
                    {
                        Console.WriteLine("impossible");
                    }
                }
                else
                {
                    Console.WriteLine("impossible");
                }
                i++;
            }
        }
    }
}
