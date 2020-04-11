using System;

namespace brokenswords
{
    class Program
    {
        static void Main(string[] args)
        {
            string line = Console.ReadLine();
            int count = int.Parse(line);

            int top = 0;
            int bottom = 0;
            int left = 0;
            int right = 0;


            while (count > 0)
            {
                line = Console.ReadLine();

                if (StickNotBroken(line[0])) top++;
                if (StickNotBroken(line[1])) bottom++;
                if (StickNotBroken(line[2])) left++;
                if (StickNotBroken(line[3])) right++;

                count--;
            }

            int sticksPossible = Math.Min(top + bottom, left + right)/2;
            int topBottomExtra = (top + bottom) - sticksPossible * 2;
            int leftRightExtra = (left + right) - sticksPossible * 2;

            Print(sticksPossible, topBottomExtra, leftRightExtra);
        }

        static bool StickNotBroken(char chr)
        {
            return chr == '0';
        }

        static void Print(int sowrdsPossible, int topBottomExra, int leftRightExtra)
        {
            Console.WriteLine($"{sowrdsPossible} {topBottomExra} {leftRightExtra}");
        }
    }
}