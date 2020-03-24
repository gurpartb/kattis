using System;

namespace kemija
{
    class Program
    {
        public static void Main(string[] args)
        {
            string line = Console.ReadLine();

            string res = "";

            for (int i = 0; i < line.Length; i++)
            {
                char c = line[i];
                res += c;

                if(IsVowel(c))
                {
                    i += 2;
                }
            }

            System.Console.WriteLine(res);
        }

        static bool IsVowel(char c)
        {
            string vowelSet = "aeiou";
            return vowelSet.Contains(c);
        }
    }
}