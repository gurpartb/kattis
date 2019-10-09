using System;
using System.Linq;
using System.Collections.Generic;

namespace sort
{
    class Num
    {
        public int Count { get; set; }

        public int Value { get; set; }

        public int Index { get; set; }

        public Num(int val, int index)
        {
            Value = val;
            Index = index;
            Count = 0;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<int, Num> counter = ReadData();

            Dictionary<int, Num>.ValueCollection vals = counter.Values;

            List<Num> list = vals.Cast<Num>().ToList();

            list = list.OrderBy(num => num.Index).ToList();

            list = list.OrderBy(num => num.Count*-1).ToList();

            foreach (var num in list)
            {
                Print(num);
            }
        }

        static Dictionary<int, Num> ReadData()
        {
            Dictionary<int, Num> counter = new Dictionary<int, Num>();

            string line = Console.ReadLine();

            line = Console.ReadLine();

            string[] strArr = line.Split(' ');

            int[] intArr = Array.ConvertAll(strArr, x => int.Parse(x));

            int index = 0;

            foreach (var val in intArr)
            {

                if (!counter.ContainsKey(val))
                {
                    Num num = new Num(val, index);
                    counter.Add(val, num);
                }

                counter[val].Count++;

                index++;
            }

            return counter;
        }

        static void Print(Num num)
        {
            for (int i = 0; i < num.Count; i++)
            {
                Console.Write($"{num.Value} ");
            }
        }
    }
}