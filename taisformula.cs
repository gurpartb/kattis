using System;

namespace taisformula
{
    class Program
    {
        static void Main(string[] args)
        {
            string line = Console.ReadLine();
            int count = int.Parse(line);

            line = Console.ReadLine();
            string[] arr = line.Split(' ');

            double t0 = double.Parse(arr[0]);
            double h0 = double.Parse(arr[1]);
            count--;
            
            double area = 0;
            while(count > 0)
            {
                line = Console.ReadLine();
                arr = line.Split(' ');

                double t1 = double.Parse(arr[0]);
                double h1 = double.Parse(arr[1]);

                area += (h1 + h0)/2 * (t1 - t0);

                t0 = t1;
                h0 = h1;

                count--;
            }
            
            area /= 1000;

            System.Console.WriteLine(area);
        }
    }
}