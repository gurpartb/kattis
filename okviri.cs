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
                if(i % 3 == 0)
                {
                    lineOut[0] += Line0a();
                    lineOut[1] += Line1a();
                    lineOut[2] += Line2a(line[i]);
                }
                else if(i % 3 == 1)
                {

                    lineOut[0] += Line0a();
                    lineOut[1] += Line1a();

                    // if its the last letter close line, with "#" else with "*"
                    lineOut[2] += (i == line.Length - 1)? Line2a(line[i]) : Line2b(line[i]);
                }
                else
                {
                    lineOut[0] += Line0b();
                    lineOut[1] += Line1b();
                    lineOut[2] += Line2b(line[i]);
                }
                i++;
            }

            // print 0 to 1 then 2 back to 0;
            int j = 0;
            while(j < lineOut.Length - 1)
            {
                System.Console.WriteLine(lineOut[j]);
                j++;
            }
            while(j >= 0)
            {
                System.Console.WriteLine(lineOut[j]);
                j--;
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