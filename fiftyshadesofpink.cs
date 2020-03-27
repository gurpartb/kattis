using System;

namespace fiftyshadesofpink
{
    class Program
    {
        public static void Main(string[] args)
        {
            string pink = "pink", rose = "rose",
                excuse = "I must watch Star Wars with my daughter";
            int pinkCount = 0, roseCount = 0;

            string line = Console.ReadLine();
            
            while((line = Console.ReadLine()) != null)
            {
                line = line.ToLower();
                if(line.Contains(pink)) pinkCount++;
                else if(line.Contains(rose)) roseCount++;
            }

            if(pinkCount == 0)
            {
                System.Console.WriteLine(excuse);
            }
            else
            {
                int totalEvents = pinkCount + roseCount;
                System.Console.WriteLine(totalEvents);
            }
        }
    }
}