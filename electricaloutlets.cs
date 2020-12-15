using System;

namespace electricaloutlets
{
    class Program
    {
        static void Main(string[] args)
        {
            var _ = Console.ReadLine();

            string line;
            while ((line = Console.ReadLine()) != null) {
                var arr = line.Split(' ');
                var intArr = Parse(arr);
                var availableOutlets = ElectricalOutlets(intArr);
                Console.WriteLine(availableOutlets);
            }
        }

        public static int[] Parse(string[] arr)
        {
            var shortArr = Array.ConvertAll(arr, int.Parse);
            return shortArr;
        }

        public static int ElectricalOutlets(int[] arr)
        {
            var availableOutlets = 1;
            for (int i = 1; i < arr.Length; i++)
            {
                availableOutlets += arr[i] - 1;
            }
            return availableOutlets;
        }
    }
}
