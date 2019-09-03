using System;
using System.Collections.Generic;
using System.Linq;

namespace parking
{
    class Program
    {
        static void Main(string[] args)
        {
            string line = Console.ReadLine();
            var truckFare = line.Split(' ').Select(Int32.Parse).ToList();

            var allTimes = new List<int>();
            var inTimes = new List<int>();
            var outTimes = new List<int>();

            var i = 0;

            while (i < truckFare.Count)
            {
                line = Console.ReadLine();
                var times = line.Split(' ').Select(Int32.Parse).ToList();

                var inTime = times[0];
                var outTime = times[1];

                allTimes.Add(inTime);
                allTimes.Add(outTime);

                inTimes.Add(inTime);
                outTimes.Add(outTime);

                i++;
            }

            truckFare.Insert(0, 0);

            allTimes.Sort((a, b) => a.CompareTo(b));

            var prevTime = 0;
            var truckCount = 0;
            var totalFare = 0;

            foreach (var time in allTimes)
            {
                var dt = time - prevTime;
                totalFare += dt * truckFare[truckCount]*truckCount;

                if (inTimes.Contains(time))
                {
                    truckCount++;
                }

                if (outTimes.Contains(time))
                {
                    truckCount--;
                }
                prevTime = time;
            }

            Console.WriteLine(totalFare);
        }
    }
}