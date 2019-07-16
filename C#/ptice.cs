using System;

namespace ptice
{
    class Program
    {
        static void Main(string[] args)
        {
            var adrian = "ABC";
            var bruno = "BABC";
            var goran = "CCAABB";
            var scoreAdrian = 0;
            var scoreBruno = 0;
            var scoreGoran = 0;

            string line = Console.ReadLine();
            line = Console.ReadLine();

            for (int i = 0; i < line.Length; i++)
            {
                var adriannI = i % adrian.Length;
                var brunoI = i % bruno.Length;
                var goranI = i % goran.Length;

                if(line[i] == adrian[adriannI])
                {
                    scoreAdrian++;
                }
                if (line[i] == bruno[brunoI])
                {
                    scoreBruno++;
                }
                if (line[i] == goran[goranI])
                {
                    scoreGoran++;
                }

            }
            var max = Math.Max(Math.Max(scoreAdrian, scoreBruno), scoreGoran);
            Console.WriteLine(max);
            if(max == scoreAdrian)
            {
                Console.WriteLine("Adrian");
            }
            if(max == scoreBruno)
            {
                Console.WriteLine("Bruno");
            }
            if(max == scoreGoran)
            {
                Console.WriteLine("Goran");
            }
        }
    }
}