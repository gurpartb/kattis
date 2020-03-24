using System;

namespace kemija
{
    class Program
    {
        public static void Main(string[] args)
        {
            string line = Console.ReadLine();

            string msg = "";

            for (int i = 0; i < line.Length; i++)
            {
                char c = line[i];
                msg += c;

                if(IsVowel(c))
                {
                    i += 2;
                }
            }

            System.Console.WriteLine(msg);
        }

        static bool IsVowel(char c)
        {
            string vowel = "aeiou";
            return vowel.Contains(c);
        }
    }
}