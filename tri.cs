// Kattis : Tri

using System;
using System.Linq;

namespace tri
{
    class Program
    {
        public static void Main(string[] args)
        {
            string line = Console.ReadLine();
            string[] arr = line.Split(' ');

            int a = int.Parse(arr[0]);
            int b = int.Parse(arr[1]);
            int c = int.Parse(arr[2]);

            if(IsAddition(a, b, c))
            {
                line = ToString(a,b,c,"+");
            }
            else if(IsAddition(b,c,a))
            {
                line = ToStringSwitch(a,b,c,"+");
            }
            else if(IsSubtraction(a, b, c))
            {
                line = ToString(a,b,c,"-");
            }
            else if(IsSubtraction(b,c,a))
            {
                line = ToStringSwitch(a,b,c,"-");
            }
            else if(IsMultiplication(a,b,c))
            {
                line = ToString(a,b,c,"*");
            }
            else if(IsMultiplication(b,c,a))
            {
                line = ToStringSwitch(a,b,c,"*");
            }
            else if(IsDivision(a,b,c))
            {
                line = ToString(a,b,c,"/");
            }
            else if(IsDivision(b,c,a))
            {
                line = ToStringSwitch(a,b,c,"/");
            }
            System.Console.WriteLine(line);
        }

        static string ToStringSwitch(int a, int b, int c, string symb1, string symb2 = "=")
        {
            return ToString(a,b,c,symb2,symb1);
        }

        static string ToString(int a, int b, int c, string symb1, string symb2 = "=")
        {
            return a+symb1+b+symb2+c;
        }

        static bool IsAddition(int a, int b, int c)
        {
            return a + b == c;
        }

        static bool IsSubtraction(int a, int b, int c)
        {   
            // a - b == c;
            // a == c + b;
            return IsAddition(c,b,a);
        }

        static bool IsMultiplication(int a, int b, int c)
        {
            return a * b == c;
        }

        static bool IsDivision(int a, int b, int c)
        {
            // a / b == c;
            // a == c * b
            return IsMultiplication(c,b,a);
        }
    }
}