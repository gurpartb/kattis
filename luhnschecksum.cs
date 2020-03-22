//Luhn's Checksum Algorithm
using System;

namespace luhnschecksum
{
    class Program
    {
        static void Main(string[] args)
        {
            string line = Console.ReadLine();

            while((line = Console.ReadLine()) != null)
            {
                int sum = LuhnsSum(line);
                System.Console.WriteLine(sum % 10 == 0 ? "pass" : "fail");
            }
        }

        static int LuhnsSum(string line)
        {
            int sum = 0;
            bool everyOther = false;

            for (int i = line.Length - 1; i >= 0; i--)
            {
                char c = line[i];
                int other = ToInt(c);

                if(everyOther)
                {
                    other *= 2;
                    other = DigSum(other);
                }

                sum += other;

                everyOther = !everyOther;
            }

            return sum;
        }

        static int ToInt(char c)
        {
            return c - '0';
        }

        static int DigSum(int num)
        {
            int mod = 0;

            while(num > 9)
            {
                mod = num % 10;
                num /= 10;
                num += mod;
            }

            return num;
        }

    }
}