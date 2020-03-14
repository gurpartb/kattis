using System;
using System.Collections.Generic;

namespace dicegame
{
    class Program
    {
        static void Main(string[] args)
        {
            double gunnarSum = SumAvg();
            double emmaSum = SumAvg();

            if(gunnarSum == emmaSum)
            {
                System.Console.WriteLine("Tie");
            } 
            else if(gunnarSum > emmaSum)
            {
                System.Console.WriteLine("Gunnar");
            }
            else
            {
                System.Console.WriteLine("Emma");
            }
        }

        static double SumAvg()
        {
            string line = Console.ReadLine();
            string[] arr = line.Split(' ');

            double sum = 0;

            for(int i = 0; i < arr.Length; i += 2)
            {
                sum += Median(int.Parse(arr[i]), int.Parse(arr[i+1]));
            }

            return sum;
        }

        static double Median(int low, int high)
        {
            return (double) (low+high)/2;
        }
    }
}