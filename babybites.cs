// Kattis : Baby Bites

using System;

namespace babybites
{
    class Program
    {
        public static void Main(string[] args)
        {
            string line = Console.ReadLine();
            line = Console.ReadLine();

            string[] arr = line.Split(' ');
            int count = 1;
            string res = "makes sense";

            foreach (var item in arr)
            {
                if(item != "mumble" && int.Parse(item) != count)
                {
                    res = "something is fishy";
                    break;
                }
                count++;
            }

            System.Console.WriteLine(res);
        }
    }
}