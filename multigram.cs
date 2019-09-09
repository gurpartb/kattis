using System;
using System.Linq;
using System.Collections.Generic;

namespace multigram
{
    class Program
    {
        static void Main(string[] args)
        {
            string line = Console.ReadLine();

            for (int length = 1; length <= line.Length/2 ; length++)
            {
                if (line.Length % length == 0)
                {
                    int i = 0;
                    string substr1 = line.Substring(i, length);

                    int[] arr1 = CharCounter(substr1);
                    i += length;

                    while (i < line.Length)
                    {
                        string substr2 = line.Substring(i, length);
                        int[] arr2 = CharCounter(substr2);

                        if (!IsAnagram(arr1, arr2))
                        {
                            break;
                        }
                        
                        i += length;
                    }
                    if(i >= line.Length)
                    {
                        Console.WriteLine(substr1);
                        return;
                    }
                }
            }

            Console.WriteLine("-1");
        }

        static bool IsAnagram(int[] arr1, int[] arr2)
        {
            for (int i = 0; i < arr1.Length; i++)
            {
                if(arr1[i] != arr2[i])
                {
                    return false;
                }
            }
            return true;
        }

        static int[] CharCounter(string str)
        {
            Dictionary<char, int> counter = BuildDictionary();

            foreach (char c in str)
            {
                counter[c]++;
            }

            return counter.Values.ToArray();
        }

        static Dictionary<char, int> BuildDictionary()
        {
            Dictionary<char, int> counter = new Dictionary<char, int>()
            {
                { 'a', 0 },
                { 'b', 0 },
                { 'c', 0 },
                { 'd', 0 },
                { 'e', 0 },
                { 'f', 0 },
                { 'g', 0 },
                { 'h', 0 },
                { 'i', 0 },
                { 'j', 0 },
                { 'k', 0 },
                { 'l', 0 },
                { 'm', 0 },
                { 'n', 0 },
                { 'o', 0 },
                { 'p', 0 },
                { 'q', 0 },
                { 'r', 0 },
                { 's', 0 },
                { 't', 0 },
                { 'u', 0 },
                { 'v', 0 },
                { 'w', 0 },
                { 'x', 0 },
                { 'y', 0 },
                { 'z', 0 },
            };

            return counter;
        }
    }
}
