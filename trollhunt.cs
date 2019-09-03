using System;
using System.Collections.Generic;
using System.Linq;

namespace trollhunt
{
    class Program
    {
        static void Main(string[] args)
        {
            string line = Console.ReadLine();
            List<int> list = line.Split(' ').Select(int.Parse).ToList();
            int bridges = list[0];
            int soldiers = list[1];
            int groups = soldiers / list[2];
            int days = (bridges - 1)/ groups;

            if ((bridges - 1) % groups != 0)
            {
                days++;
            }
            Console.WriteLine(days);
        }
    }
}
