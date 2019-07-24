using System;
using System.Linq;
using System.Collections.Generic;

namespace throwns
{
    class Program
    {
        static void Main(string[] args)
        {
            string line = Console.ReadLine();

            var arr = line.Split(' ');

            int count = int.Parse(arr[0]);

            line = Console.ReadLine();

            arr = line.Split(' ');

            var undo = false;

            Stack<int> myStack = new Stack<int>();

            foreach (var el in arr)
            {
                if(Int32.TryParse(el, out int num))
                {
                    if (undo)
                    {
                        while(myStack.Count > 0 && num > 0)
                        {
                            myStack.Pop();
                            num--;
                        }

                        undo = false;
                    }
                    else
                    {
                        myStack.Push(num);
                    }

                }
                else
                {
                    undo = true;
                }
            }

            int sum = myStack.Sum();
            int child = ((sum % count) + count) % count;

            Console.WriteLine(child);
        }
    }
}