using System;

namespace okviri
{
    class Program
    {
        public static void Main(string[] args)
        {
            string[] lineOut = new string[3]{".",".","#"};
            
            string line = Console.ReadLine();

            int i = 0;
            while(i < line.Length)
            {
                if(i % 3 == 2)
                {
                    lineOut[0] += Line0b();
                    lineOut[1] += Line1b();
                    lineOut[2] += Line2b(line[i]);
                }
                else
                {
                    lineOut[0] += Line0a();
                    lineOut[1] += Line1a();

                    if(i < line.Length - 1 && i % 3 == 1)
                    {
                        lineOut[2] += Line2b(line[i]);
                    }
                    else
                    {
                        lineOut[2] += Line2a(line[i]);
                    }
                }
                i++;
            }

            foreach(string str in lineOut)
            {
                System.Console.WriteLine(str);
            }

            for (int j = lineOut.Length - 2; j >= 0; j--)
            {
                System.Console.WriteLine(lineOut[j]);
            }
        }

        static string Line0a()
        {
         string line= ".#..";
         return line;
        }

        static string Line0b()
        {
            string line = ".*..";
            return line;
        }

        static string Line1a()
        {
            string line = "#.#.";
            return line;
        } 
        static string Line1b()
        {
            string line = "*.*.";
            return line;
        }

        static string Line2a(char c)
        {
            string line = "."+c+".#";
            return line;
        }

        static string Line2b(char c)
        {
            string line = "."+c+".*";
            return line;
        }
    }
}