using System;

namespace quiteaproblem
{
    class Program
    {
        static void Main(string[] args)
        {
            string word = "problem";
            string word2 = "PROBLEM";

            string line;

            while( (line = Console.ReadLine()) != null)
            {
                string res = "no";

                for (int i = 0; i < line.Length; i++)
                {
                    if(line[i] == word[0] || line[i] == word2[0])
                    {
                        if(IsWord(line, word, word2, i)) res = "yes";

                        if (res == "yes") break;
                    }
                }
                Console.WriteLine(res);
            }
        }

        static bool IsWord(string line, string word, string word2, int index)
        {
            if(line.Length - index < word.Length)
            {
                return false;
            }

            for (int i = 0; i < word.Length; i++)
            {
                if(line[index+i] != word[i] && line[index+i] != word2[i])
                {
                    return false;
                }
            }

            return true;
        }
    }
}
