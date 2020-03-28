using System;

namespace okviri
{
    class Program
    {
        public static void Main(string[] args)
        {
            string line1a = ".#..";
            string line1b = ".*..";

            string line2a = "#.#.";
            string line2b = "*.*.";

            string line1 = ".";
            string line2 = ".";
            string line3 = "#";


            string line = Console.ReadLine();
            
            int i = 0;
            while(i < line.Length)
            {
                if(i % 3 == 2)
                {
                    line1 += line1b;
                    line2 += line2b;
                    line3 += Line3b(line[i]);
                }
                else
                {
                    line1 += line1a;
                    line2 += line2a;

                    if(i < line.Length - 1 && i % 3 == 1)
                    {
                        line3 += Line3b(line[i]);
                    }
                    else
                    {
                        line3 += Line3a(line[i]);
                    }
                }
                i++;
            }

            System.Console.WriteLine(line1);
            System.Console.WriteLine(line2);
            System.Console.WriteLine(line3);
            System.Console.WriteLine(line2);
            System.Console.WriteLine(line1);
        }

        static string Line3a(char c)
        {
            return "."+c+".#";
        }

        static string Line3b(char c)
        {
            return "."+c+".*";
        }
    }
}