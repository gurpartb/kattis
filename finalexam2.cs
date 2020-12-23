using System;
using System.Collections.Generic;

namespace finalexam2
{
    class finalexam2
    {
        static void Main(string[] args)
        {
            string line =  Console.ReadLine();
            int n = int.Parse(line);
            int score = 0;
            int i = 1;
            string ith = Console.ReadLine();
            while(i < n)
            {
                string next = Console.ReadLine();
                if(ith==next) score++;
                ith = next;
                i++;
            }
            Console.WriteLine(score);
        }
    }
}