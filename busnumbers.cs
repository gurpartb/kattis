using System;
using System.Linq;
using System.Text;
using System.Collections.Generic;

namespace busnumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            var _ = Console.ReadLine();

            var line = Console.ReadLine();

            var list = line.Split(' ').Select(int.Parse).ToList();

            var str = BusNumbers(list);

            Console.WriteLine(str);
        }

        public static String BusNumbers(List<int> list)
        {
            list.Sort();

            int prevInt = list[0], sequenceCount = 1;

            StringBuilder str = new StringBuilder();
            _ = str.Append(prevInt);

            for (int i = 1; i < list.Count; i++)
            {
                int currInt = list[i];

                bool currIntNotInSequence = currInt != prevInt + 1;

                if(currIntNotInSequence)
                {
                    // starSequence is already in the string...
                    if (sequenceCount >= 3)
                    {
                        // close out the last sequence and start a new sequence
                        str.Append("-" + prevInt + " " + currInt);
                    }
                    else if(sequenceCount == 2)
                    {
                        // simply append the prevInt and start a new sequence
                        str.Append(" " + prevInt + " " + currInt);
                    }
                    else if(sequenceCount == 1)
                    {
                        // start a new sequence
                        str.Append(" " + currInt);
                    }

                    // since we appended a new sequence to the str tail
                    sequenceCount = 1;
                }
                else
                {
                    sequenceCount++;
                }

                prevInt = currInt;
            }

            // starSequence is already in the string...
            if (sequenceCount >= 3)
            {
                // close out the last sequence
                str.Append("-" + prevInt);
            }
            else if (sequenceCount == 2)
            {
                // simply append the prevInt
                _ = str.Append(" " + prevInt);
            }

            return str.ToString();
        }
    }
}
