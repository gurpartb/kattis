// Kattis : H to O

using System;
using System.Collections.Generic;

namespace htoo
{
    class Program
    {
        public static void Main(string[] args)
        {
            Dictionary<char, int> typeA = ReadTypeA();

            string line = Console.ReadLine();
            Dictionary<char, int> typeB = BuildMoleculeDictionary(line);

            int possibleCount = PossibleBfromA(typeA, typeB);
            
            System.Console.WriteLine(possibleCount);
        }

        static int PossibleBfromA(Dictionary<char, int> typeA, Dictionary<char, int> typeB)
        {
            var keys = typeB.Keys;
            int possibleCount = int.MaxValue;
            foreach (char key in keys)
            {
                if(!typeA.ContainsKey(key))
                {
                    possibleCount = 0;
                }
                else
                {
                    possibleCount = Math.Min(possibleCount, typeA[key]/typeB[key]);
                }
            }
            return possibleCount;
        }

        static Dictionary<char,int> ReadTypeA()
        {
            string line = Console.ReadLine();
            string[] arr = line.Split(' ');
            int scalar = int.Parse(arr[1]);

            Dictionary<char,int> molCount = BuildMoleculeDictionary(arr[0]);
            ScaleDictionary(molCount, scalar);
            return molCount;
        }

        // BuildMoleculeCoutnDictionary
        static Dictionary<char,int> BuildMoleculeDictionary(string line)
        {
            Dictionary<char,int> molCount = new Dictionary<char, int>();
            int i = 0;
            while(i < line.Length)
            {
                int j = IndexNextNonInt(line, i);
                int count = MoleculeCount(line, i + 1, j);
                if(!molCount.ContainsKey(line[i]))
                {
                    molCount.Add(line[i], 0);
                }
                molCount[line[i]] += count;
                i = j;
            }
            return molCount;
        }

        // extract mol count
        static int MoleculeCount(string line, int beginIndex, int endIndex)
        {
            if(beginIndex == endIndex)
            {
                return 1;
            }
            char[] arr = new char[endIndex - beginIndex];

            int i = 0;
            while(i < arr.Length)
            {
                arr[i] = line[beginIndex + i];
                i++;
            }
            return int.Parse(new string(arr));
        }

        // find next index of non-int
        static int IndexNextNonInt(string line, int currIndex)
        {
            int i = currIndex + 1;
            while(i < line.Length && '0'<= line[i] && line[i] <= '9')
            {
                i++;
            }
            return i;
        }

        // scale dictionary
        static void ScaleDictionary(Dictionary<char, int> molCount, int scalar)
        {
            var keyCollection = molCount.Keys;
            char[] keys = new char[keyCollection.Count];

            int i = 0;
            foreach (var item in keyCollection)
            {
                keys[i] = item;
                i++;
            }

            foreach (char key in keys)
            {
                molCount[key] *= scalar;
            }
        }


    }
}