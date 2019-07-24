using System;
using System.Collections.Generic;

namespace recount
{
    class Program
    {
        static void Main(string[] args)
        {
            var dict = new Dictionary<string, int>();
            var maxVal = 0;
            var maxCandidates = 0;
            string maxCandidate = "";
            string line;
            while ((line = Console.ReadLine()) != "***")
            {
                if(!dict.ContainsKey(line))
                {
                    dict.Add(line, 0);
                }
                dict[line]++;
                if(maxVal < dict[line])
                {
                    maxVal = dict[line];
                    maxCandidates = 1;
                    maxCandidate = line;
                }
                else if(maxVal == dict[line])
                {
                    maxCandidates++;
                }
            }

            if(maxCandidates == 1)
            {
                Console.WriteLine(maxCandidate);
            }
            else
            {
                Console.WriteLine("Runoff!");
            }
        }
    }
}