using System;

namespace compromise
{
    class Program
    {
        static void Main(string[] args)
        {
            string line = Console.ReadLine();

            int testCases = int.Parse(line);

            for (int count = 0; count < testCases; count++)
                RunTestCase();
        }

        static void RunTestCase()
        {
            string line = Console.ReadLine();

            string[] arr = line.Split(' ');

            int totalVotes = int.Parse(arr[0]);

            int totalissues = int.Parse(arr[1]);

            int[] issuesYesCount = CountAllYesVotes(totalVotes, totalissues);

            string res = FinalResult(issuesYesCount, totalVotes);

            Console.WriteLine(res);
        }

        static int[] CountAllYesVotes(int totalVotes, int totalissues)
        {
            int[] issuesYesCount = new int[totalissues];

            for(int voteCount = 0;voteCount < totalVotes; voteCount++)
            {
                string line = Console.ReadLine();

                for (int i = 0; i < line.Length; i++)

                    if (line[i] == '1')
                        issuesYesCount[i]++;
            }

            return issuesYesCount;
        }

        static string FinalResult(int[] issuesYesCount, int totalVotes)
        {
            string res = "";

            for (int i = 0; i < issuesYesCount.Length; i++)
                res +=(((double)issuesYesCount[i] / totalVotes) > 0.5 ) ?'1':'0';

            return res;
        }
    }
}