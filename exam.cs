using System;

namespace exam
{
    class Program
    {
        public static void Main(string[] args)
        {
            int friend = int.Parse(Console.ReadLine());

            string ansFriend = Console.ReadLine();
            string ansMine = Console.ReadLine();

            int same = 0, maxPossible  = 0, total = ansMine.Length;

            for (int i = 0; i < total; i++)
            {
                if(ansFriend[i] == ansMine[i]) same++;
            }

            if(same == friend)
            {
                maxPossible = total;
            }
            else if(same < friend)
            {
                maxPossible = total - (friend - same);
            }
            else // same > friend
            {
                maxPossible = total - (same - friend);
            }

            System.Console.WriteLine(maxPossible);
        }
    }
}