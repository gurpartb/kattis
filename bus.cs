// f(n) = f(n-1)*2 + 0.5 (n = 1, f(n) = 1.5)
// p(n) = _f(n) (round down)
using System;

namespace bus
{
    class bus
    {
        static void Main(string[] args)
        {
            string line = Console.ReadLine();
            while((line=Console.ReadLine())!=null)
            {
                int n = int.Parse(line);
                int p = (int) Math.Floor(f(n));
                Console.WriteLine(p);
            }
        }

        static double f(int n)
        {
            if(n == 1) return 1.5;
            return f(n-1)*2 + 0.5;
        }
    }
}