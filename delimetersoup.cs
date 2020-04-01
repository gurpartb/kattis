using System;
using System.Collections.Generic;

namespace delimetersoup
{
    class Program
    {
        public static void Main(string[] args)
        {
            _ = Console.ReadLine();

            string line = Console.ReadLine();

            char space = ' ';

            string open = "[{(";

            Stack<char> stack = new Stack<char>();

            int count = 0;
            foreach(char chr in line)
            {
                if(open.Contains(chr))
                {
                    stack.Push(chr);
                }
                else if(chr == space)
                {
                    // do nothing
                }
                // chr in "]})"
                else if(stack.Count > 0)
                {
                    if(stack.Peek() - 0 != chr - 2 && stack.Peek() - 0 != chr - 1)
                    {
                        System.Console.WriteLine($"{chr} {count}");
                        return;
                    }
                    else
                    {
                        stack.Pop();
                    }
                }
                else
                {
                    System.Console.WriteLine($"{chr} {count}");
                    return;
                }
            
                count++;
            }

            System.Console.WriteLine("ok so far");
        }


    }
}