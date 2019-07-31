using System;

namespace temperatureconfusion
{
    class Program
    {
        static void Main(string[] args)
        {
            string line;
            while((line = Console.ReadLine()) != null)
            {
                string str = ToFahrenheit(line);
                Console.WriteLine(str);
            }
        }

        public static string ToFahrenheit(string line)
        {
            string[] arr = line.Split('/');
            int a = int.Parse(arr[0]);
            int b = int.Parse(arr[1]);
            a -= 32 * b;
            a *= 5;
            b *= 9;

            int gcd = GCD(Math.Abs(a), Math.Abs(b));
            a /= gcd;
            b /= gcd;
            string str = $"{a}/{b}";

            return str;
        }

        public static int GCD(int a, int b)
        {
            while(b != 0)
            {
                int t = b;
                b = a % b;
                a = t;
            }

            return a;
        }
    }
}