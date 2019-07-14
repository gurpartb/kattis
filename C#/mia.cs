using System;
using System.Collections.Generic;
using System.Linq;

namespace mia
{
    class Program
    {
        public static Dictionary<int, int> scoreG;

        static void Main(string[] args)
        {
            scoreG = BuildDictionary();
            string line;

            while(true)
            {
                line = Console.ReadLine();
                int[] arr = line.Split(' ').Select(int.Parse).ToArray();

                if(arr[0] == 0)
                {
                    return;
                }

                int playerOneKey = LargerInt(arr[0], arr[1]);
                int playerTwoKey = LargerInt(arr[2], arr[3]);

                int playerOneScore = Evaluate(playerOneKey);
                int playerTwoScore = Evaluate(playerTwoKey);

                if(playerOneScore > playerTwoScore)
                {
                    Console.WriteLine("Player 1 wins.");
                }
                else if(playerTwoScore > playerOneScore)
                {
                    Console.WriteLine("Player 2 wins.");
                }
                else
                {
                    Console.WriteLine("Tie.");
                }
            }
        }


        public static int Evaluate(int key)
        {
            if (scoreG.ContainsKey(key))
            {
                return scoreG[key];
            }
            return key;
        }

        public static Dictionary<int,int> BuildDictionary()
        {
            var score = new Dictionary<int, int>();
            // build dictionary
            var val = 66;
            for (int i = 1; i <= 6; i++)
            {
                var key = i * 10 + i;
                score.Add(key, val);
                val++;
            }

            score.Add(21, val);

            return score;
        }

        public static int LargerInt(int n1, int n2)
        {
            int tenth, ones;

            if(n1 > n2)
            {
                tenth = n1;
                ones = n2;
            }
            else
            {
                tenth = n2;
                ones = n1;
            }

            int larger = tenth * 10 + ones;

            return larger;
        }
    }
}