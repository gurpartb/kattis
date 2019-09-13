using System;
using System.Collections.Generic;

namespace engeneeringenglish
{
    class Program
    {
        static void Main(string[] args)
        {
            // create a set 'seenItBefore'
            HashSet<string> seenItBefore = new HashSet<string>();

            string line;

            while( (line = Console.ReadLine()) != null)
            {
                // parse all words in an array
                string[] arr = line.Split(' ');

                // sequentially pick words from the array
                for (int i = 0; i < arr.Length; i++)
                {
                    string wordLowercase = arr[i].ToLower();

                    // if word.lowercase() in 
                    if (seenItBefore.Contains(wordLowercase))
                    {
                        Console.Write('.');
                    }
                    // if word.lowercase() is NOT in the array print the word
                    // add word.lowercase() to the 'seenItBefore' set
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