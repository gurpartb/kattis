// Kattis : Musical Notation

using System;
using System.Collections.Generic;

namespace musicalnotation
{
    class Program
    {
        public static void Main(string[] args)
        {
            string notes = "GFEDCBAgfedcba";
            char fill = '-';
            string noteFill = "FDBgea";

            Dictionary<char,char[]> dict = new Dictionary<char, char[]>();

            _ = Console.ReadLine();
            string line = Console.ReadLine();
            int length = GetLength(line);

            foreach (char chr in notes)
            {
                dict.Add(chr, CharArr(length, noteFill.Contains(chr)? fill: ' '));
            }

            string[] arr = line.Split(' ');

            int i = 0;
            foreach (string item in arr)
            {
                char note = GetNote(item);
                int beats = BeatCount(item);
                while(beats-- > 0)
                {
                    dict[note][i++] = '*';
                }
                i++;
            }

            foreach (char chr in notes)
            {
                Print(chr, dict[chr]);
            }
        }

        static int GetLength(string line)
        {
            string[] arr = line.Split(' ');

            int i = 0;
            int length = BeatCount(arr[i++]);

            while(i < arr.Length)
            {
                length += 1 + BeatCount(arr[i++]);
            }
            return length;
        }

        static char GetNote(string note)
        {
            return note[0];
        }

        static int BeatCount(string note)
        {
            if(note.Length == 1)
            {
                return note.Length;
            }
            return note[1] - '0';
        }

        static char[] CharArr(int length, char fill)
        {
            char[] arr = new char[length];
            Array.Fill(arr, fill);
            return arr;
        }

        static void Print(char chr, char[] arr)
        {
            string str = new string(arr);
            System.Console.WriteLine($"{chr}: {str}");
        }
    }
}