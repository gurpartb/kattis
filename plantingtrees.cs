using System;
using System.Linq;

namespace plantingtrees
{
    class Program
    {
        static void Main(string[] args)
        {
            string line;
            line = Console.ReadLine();
            line = Console.ReadLine();

            // split string into array, parse each element to int, convert array to a list
            // list provides additional functionality that array does not
            var seeds = line.Split(' ').Select(int.Parse).ToList();

            // sort list in deceding order. Its efficient to plant the seed that takes the longest time first
            seeds.Sort((a,b) => b.CompareTo(a));

            // Best case party starts one day after the very last tree is fully grown
            // Therefore, set i = seeds.count - 1, and intial fullyGrownDay = (i + 1) + seeds[i] (seeds is sorted in decending order)
            // We step back to the previous seed by setting i = i - 1, and set fullyGrownDay = max( fullyGrownDay, (i + 1) + seeds[i])
            var fullyGrownDay = 0;

            for (var i = seeds.Count - 1; i >= 0; i--)
            {
                var currentDay = i + 1;
                fullyGrownDay = Math.Max(fullyGrownDay, currentDay + seeds[i]);
            }

            var partyDay = fullyGrownDay + 1;

            Console.WriteLine(partyDay);
        }
    }
}
