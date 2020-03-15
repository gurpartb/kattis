using System;
using System.Collections.Generic;

namespace arealchallenge
{
    class Program
    {
        static void Main(string[] args)
        {
            string line = Console.ReadLine();
            double area = double.Parse(line);
            double side = Math.Sqrt(area);
            double parm = side * 4;
            System.Console.WriteLine(parm);
        }
    }
}