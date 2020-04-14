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
                arr = SliceArray(arr, 1, arr.Length);

                if(IsArithmetic(arr))
                {
                    System.Console.WriteLine("arithmetic");
                    continue;
                }

                if(IsPermutedArithmetic(arr))
                {
                    System.Console.WriteLine("permuted arithmetic");
                    continue;
                }
                
                System.Console.WriteLine("non-arithmetic");
            }
        }

        static int[] SliceArray(int[] arr, int start, int end)
        {
            int i = 1;
            int[] arr1 = new int[end-start];
            while(i < end)
            {
                arr1[i-1] = arr[i];
                i++;
            }
            return arr1;
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