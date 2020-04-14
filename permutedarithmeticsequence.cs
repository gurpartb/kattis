// Kattis : Permuted Arithmehtic Sequence

using System;

namespace permutedaritmeticsequence
{
    class Program
    {
        public static void Main(string[] args)
        {
            string line = Console.ReadLine();

            while( (line = Console.ReadLine()) != null)
            {
                int[] arr = Array.ConvertAll(line.Split(' '), int.Parse);
                int[] arr1 = new int[arr.Length - 1];

                int i = 1;
                while(i < arr.Length)
                {
                    arr1[i-1] = arr[i];
                    i++;
                }

                if(IsArithmetic(arr1))
                {
                    System.Console.WriteLine("arithmetic");
                    continue;
                }
                if(IsPermutedArithmetic(arr1))
                {
                    System.Console.WriteLine("permuted arithmetic");
                    continue;
                }
                System.Console.WriteLine("non-arithmetic");
            }
        }

        static bool IsArithmetic(int[] arr)
        {
            int i = 2;
            while(i < arr.Length)
            {
                int diff1 = arr[i - 1] - arr[i - 2];
                int diff2 = arr[i] - arr[i - 1];
                
                if(diff1 != diff2)
                {
                    return false;
                }
                i++;
            }
            return true;
        }

        static bool IsPermutedArithmetic(int[] arr)
        {
            Array.Sort(arr);
            return IsArithmetic(arr);
        }
    }
}