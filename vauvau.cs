using System;
using System.Linq;

namespace vauvau
{
    class Program
    {
        static void Main(string[] args)
        {
            string abcd = Console.ReadLine();
            string pmg = Console.ReadLine();
            char delimeter = ' ';

            int[] abcdArr = StringToIntArray(abcd, delimeter);
            int[] pmgArr = StringToIntArray(pmg, delimeter);


            bool pIsAttackedD1 = IsAttacked(pmgArr[0], abcdArr[0], abcdArr[1]);
            bool pIsAttackedD2 = IsAttacked(pmgArr[0], abcdArr[2], abcdArr[3]);

            bool mIsAttackedD1 = IsAttacked(pmgArr[1], abcdArr[0], abcdArr[1]);
            bool mIsAttackedD2 = IsAttacked(pmgArr[1], abcdArr[2], abcdArr[3]);

            bool gIsAttackedD1 = IsAttacked(pmgArr[2], abcdArr[0], abcdArr[1]);
            bool gIsAttackedD2 = IsAttacked(pmgArr[2], abcdArr[2], abcdArr[3]);

            Console.WriteLine(HowManyAreTrue(pIsAttackedD1, pIsAttackedD2));
            Console.WriteLine(HowManyAreTrue(mIsAttackedD1, mIsAttackedD2));
            Console.WriteLine(HowManyAreTrue(gIsAttackedD1, gIsAttackedD2));
        }

        public static int[] StringToIntArray(string s, char delimeter)
        {
            return s.Split(delimeter).Select(int.Parse).ToArray();
        }

        public static int TimeModCycle(int time, int active, int inactive)
        {
            return (time - 1) % (active + inactive);
        }

        public static bool IsAttacked(int time, int active, int inactive)
        {
            int timeModCycle = TimeModCycle(time, active, inactive);
            return timeModCycle < active;
        }

        public static string HowManyAreTrue(bool b1, bool b2)
        {
            if (b1)
            {
                if (b2)
                {
                    return "both";
                }

                return "one";
            }

            if (b2)
            {
                return "one";
            }

            return "none";
        }
    }
}