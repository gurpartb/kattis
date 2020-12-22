using System;
using System.Collections.Generic;

namespace greetings2
{
    class greetings2
    {
        static void Main(string[] args)
        {
            string line =  Console.ReadLine();
            if(line=="what's up")
            {
                Console.WriteLine("what's uhat's up");
            }
            if(line=="Later!")
            {
                Console.WriteLine("Alligator");
            }
            else
            {
                var ees = line.Substring(1,line.Length - 2);
                var res = "h" + ees + ees + "y";
                Console.WriteLine(res);
            }
        }
    }
}