using System;
using System.Collections.Generic;
using System.Linq;

namespace babylonian
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            List<int> sixPowList = IntPowList(6, 8);
            List<int> tenPowList = IntPowList(10, 8);

            for (int i = 0; i < n; i++)
            {
                string str = Console.ReadLine();
                List<string> list = str.Split(',').ToList();
                List<int> intList = list.Select(Convert).ToList();

                long sum = 0;

                for (int j = 0; j < intList.Count; j++)
                {
                    sum += NumToOtherNumSystem(intList[j], intList.Count - j - 1, sixPowList, tenPowList);
                }

                Console.WriteLine(sum);
            }
        }

        public static int Convert(string x)
        {
            if (x == "")
            {
                return 0;
            }
            else
            {
                return int.Parse(x);
            }
        }

        public static List<int> IntPowList(int num, int size)
        {
            List<int> list = new List<int>(new int[size]);

            int val = 1;

            for (int i = 0; i < size; i++)
            {
                list[i] = val;
                val *= num;
            }

            return list;
        }

        public static long NumToOtherNumSystem(int n, int pos, List<int> num, List<int> otherNum)
        {
            return (long)n * num[pos] * otherNum[pos];
        }
    }
}
