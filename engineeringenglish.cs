using System;
using System.Collections.Generic;

namespace engeneeringenglish
{
    class Program
    {
        static void Main(string[] args)
        {
            HashSet<string> seenItBefore = new HashSet<string>();

            string line;

            while( (line = Console.ReadLine()) != null)
            {
                string[] arr = line.Split(' ');

                for (int i = 0; i < arr.Length; i++)
                {
                    string wordLowercase = arr[i].ToLower();
 
                    if (seenItBefore.Contains(wordLowercase))
                    {
                        Console.Write('.');
                    }
                    else
                    {
                        Console.Write(arr[i]);
                        seenItBefore.Add(wordLowercase);
                    }

                    if(i < arr.Length - 1)
                    {
                        Console.Write(' ');
                    }
                }
                Console.WriteLine();
            }
        }
    }
}