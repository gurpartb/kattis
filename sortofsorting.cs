using System;
using System.Collections.Generic;
using System.Linq;

namespace sortofsorting
{
    class Program
    {
        public static void Main(string[] args)
        {
            string line = Console.ReadLine();

            while(true)
            {
                int i = 0, count = int.Parse(line);

                List<string> list = new List<string>(count);

                while(i < count)
                {
                    line = Console.ReadLine();
                    list.Add(line);
                    i++;
                }

                list = list.OrderBy(a => a[0]).ThenBy(a => a[1]).ToList();

                foreach (var item in list)
                {
                    System.Console.WriteLine(item);
                }

                line = Console.ReadLine();

                if(line == "0") return;

                System.Console.WriteLine();
            }
        }
    }
}