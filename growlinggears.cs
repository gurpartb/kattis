// Kattis : Growling Gears

using System;

namespace growlinggears
{
    class Program
    {
        public static void Main()
        {
            string line = Console.ReadLine();
            int cases = int.Parse(line);

            while(cases > 0)
            {
                line = Console.ReadLine();
                int n = int.Parse(line);
                int i = 0;
                double greatestTorque = 0;
                int greatestI = i;
                while(i < n)
                {
                    i++;
                    int[] abc = ReadIntArray();
                    double peakTorque = PeakTorque(abc[0], abc[1], abc[2]);
                    if(peakTorque > greatestTorque)
                    {
                        greatestTorque = peakTorque;
                        greatestI = i;
                    }
                }
                System.Console.WriteLine(greatestI);
                cases--;
            }
        }

        static double PeakTorque(int a, int b, int c)
        {
            double peakRpm = PeakRpm(a,b);
            double peakTorque = Torque(peakRpm, a, b, c);
            return peakTorque;
        }

        // 𝑇(𝑅)=−𝑎𝑅^2+𝑏𝑅+𝑐
        static double Torque(double rpm, int a, int b, int c)
        {
            double torque = (double) -a * rpm * rpm + b * rpm + c;
            return torque;
        }

        // 𝑇(𝑅)'=−2𝑎𝑅+𝑏
        // Peak RPM 𝑇(𝑅)' = 0
        static double PeakRpm(int a, int b)
        {
            double peakRpm = (double) b / (double) (2*a);
            return peakRpm;
        }

        static int[] ReadIntArray()
        {
            string line = Console.ReadLine();
            string[] arr = line.Split(' ');
            return Array.ConvertAll(arr, int.Parse);
        }
    }
}