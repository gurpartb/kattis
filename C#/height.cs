using System;
using System.Collections.Generic;
using System.Linq;

namespace height
{
    class Node
    {
        public int Data { get; set; }
        public Node Next { get; set; }
    }

    class LinkedList
    {
        public Node Root { get; set; }

        public LinkedList()
        {
            Root = null;
        }

        public int Add(int data)
        {
            if(Root == null)
            {
                Root = new Node
                {
                    Data = data,
                    Next = null
                };
                return 0;
            }

            int count = 0;

            if(Root.Data <= data)
            {
                Node node = new Node
                {
                    Data = data,
                    Next = Root
                };
                Root = node;
                return count;
            }

            count++;

            Node prev = Root;
            Node curr = Root.Next;

            while(curr != null && curr.Data > data)
            {
                prev = curr;
                curr = curr.Next;
                count++;
            }

            prev.Next = new Node
            {
                Data = data,
                Next = curr
            };

            return count;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            int i = 1;

            while (n > 0)
            {
                List<int> heights = GetList();
                LinkedList order = new LinkedList();

                int steps = 0;
                foreach (var height in heights)
                {
                   steps += order.Add(height);
                }

                Print(i, steps);

                i++;
                n--;
            }
        }

        public static List<int> GetList()
        {
            var arr = Console.ReadLine().Split(' ');
            var list = arr.Select(int.Parse).ToList();
            list.RemoveAt(0);
            return list;
        }

        public static void Print(int i, int steps)
        {
            Console.WriteLine($"{i} {steps}");
        }
    }
}