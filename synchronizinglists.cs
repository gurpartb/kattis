using System;
using System.Collections.Generic;

namespace synchronizinglists
{
    class Program
    {
        // read in values from stdin
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            while (true)
            {
                List<int> listOneOriginal = ListBuilder(n);
                List<int> listTwoOriginal = ListBuilder(n);

                List<int> listOneSorted = ListIntSort(listOneOriginal);
                List<int> listTwoSorted = ListIntSort(listTwoOriginal);

                Dictionary<int, int> map = DictionaryCreate(listOneSorted, listTwoSorted);

                PrintMap(listOneOriginal, map);

                n = int.Parse(Console.ReadLine());

                if(n == 0)
                {
                    break;
                }

                Console.WriteLine();
            }
        }

        // given n, read n next lines parse them int add to list and reaturn a list
        public static List<int> ListBuilder(int n)
        {
            List<int> list = new List<int>();

            while(n > 0)
            {
                list.Add(int.Parse(Console.ReadLine()));
                n--;
            }

            return list;
        }


        // given a list of int, return sorted list
        public static List<int> ListIntSort(List<int> list)
        {
            List<int> localList = new List<int>(list);
            localList.Sort();
            return localList;
        }

        // given a keys list and vals list, return a map
        public static Dictionary<int, int> DictionaryCreate(List<int> keys, List<int> vals)
        {
            Dictionary<int, int> dictionary = new Dictionary<int, int>();

            for (int i = 0; i < keys.Count; i++)
            {
                dictionary.Add(keys[i], vals[i]);
            }

            return dictionary;
        }

        // given a keys list and map, print values
        public static void PrintMap(List<int> keys, Dictionary<int, int> dict)
        {
            foreach (var key in keys)
            {
                Console.WriteLine(dict[key]);
            }
        }
    }
}
