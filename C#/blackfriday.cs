using System;
using System.Linq;
using System.Collections.Generic;

namespace blackfriday
{
    class Program
    {
        static void Main(string[] args)
        {
            string line;
            line = Console.ReadLine();
            line = Console.ReadLine();

            var list = line.Split(' ').Select(int.Parse).ToList();
            var occurenceOne = 0;
            var key = Int32.MinValue;

            foreach (KeyValuePair<int, int> entry in Counter(list))
            {
                //Console.WriteLine($"{entry.Key} {entry.Value}");
                if(entry.Value == 1)
                {
                    occurenceOne = 1;
                    key = Math.Max(key, entry.Key);
                }
            }

            if (occurenceOne == 1)
            {
                Console.WriteLine(list.IndexOf(key) + 1);
            } else
            {
                Console.WriteLine("none");
            }

        }

        private static Dictionary< int, int> Counter(List<int> list)
        {
            var dictionary = new Dictionary<int, int>();

            foreach (var li in list)
            {
                if(!dictionary.ContainsKey(li))
                {
                    dictionary.Add(li,0);
                }
                dictionary[li]++;
            }

            return dictionary;
        }
    }
}
