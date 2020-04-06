// Kattis : Basic Programming 1

using System;
using System.Linq;
using System.Collections.Generic;

namespace basicprogramming1
{
    class Program
    {
        public static void Main(string[] args)
        {
            string line = Console.ReadLine();

            string[] arr = line.Split(' ');
            int[] nt = Array.ConvertAll(arr, int.Parse);

            line = Console.ReadLine();

            arr = line.Split(' ');
            int[] A = Array.ConvertAll(arr, int.Parse);

            string res = "";
            switch(nt[1])
            {
                case 1:
                res = "7";
                break;
                    
                case 2:
                res = Compare(A[0],A[1]);
                break;

                case 3:
                res = Median(A[0],A[1],A[2]).ToString();
                break;

                case 4:
                res = Sum(A).ToString();
                break;

                case 5:
                res = SumNumMod(A).ToString();
                break;

                case 6:
                res = MapIntMod26ToAlphabetLower(A);
                break;

                case 7:
                res = SpecialProcedure(A);
                break;

            }
            System.Console.WriteLine(res);
        }

        static string Compare(int a, int b)
        {
            string res;
            if(a > b)
            {
                res = "Bigger";
            }
            else if(a == b)
            {
                res = "Equal";
            }
            else
            {
                res = "Smaller";
            }
            return res;
        }
    
        static int Median(params int[] arr)
        {
            Array.Sort(arr);
            return arr[1];
        }

        static long Sum(int[] arr)
        {
            long sum = 0;
            foreach (var item in arr)
            {   
                sum += item;
            }
            return sum;
        }
    
        static long SumNumMod(int[] arr, int num = 2, int mod = 0)
        {
            long sum = Sum(arr.Where( i => i % num == mod).ToArray());
            return sum;
        }
    
        static string MapIntMod26ToAlphabetLower(int[] arr)
        {
            char[] res = new char[arr.Length];
            int j = 0;
            foreach (var item in arr)
            {
                int i = item % 26;
                char c = (char) (i + 'a');
                res[j] = c;
                j++;
            }
            return new string(res);
        }
    
        static string SpecialProcedure(int[] arr)
        {
            int i = 0;
            HashSet<int> set = new HashSet<int>();

            while(true)
            {
                i = arr[i];
                if(i > arr.Length - 1)
                {
                    return "Out";
                }
                else if(i == arr.Length - 1)
                {
                    return "Done";
                }
                else if(set.Contains(i))
                {
                    return "Cyclic";
                }
                set.Add(i);
            }
        }
    }
}