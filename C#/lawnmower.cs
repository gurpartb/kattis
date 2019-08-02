using System;
using System.Collections.Generic;
using System.Linq;

namespace lawnmower
{
    class Program
    {
        static void Main(string[] args)
        {
            string line;
            string lastLine = "0 0 0.0";
            char delimeter = ' ';

            while ((line = Console.ReadLine()) != lastLine)
            {
                var nxnyw = StringToDoubleArray(line, delimeter);
                var width = nxnyw[2];

                var x = StringToDoubleArray(Console.ReadLine(), delimeter);
                var y = StringToDoubleArray(Console.ReadLine(), delimeter);

                var xIsEqualDiff = IsEqualDistance(x, width, 75.0);
                var yIsEqualDiff = IsEqualDistance(y, width, 100.0);

                if (xIsEqualDiff && yIsEqualDiff)
                {
                    Console.WriteLine("YES");
                }
                else
                {
                    Console.WriteLine("NO");
                }
            }
        }

        public static List<double> StringToDoubleArray(string str, char delimeter = ' ')
        {
            return str.Split(delimeter).Select(double.Parse).ToList<double>();
        }

        public static bool IsEqualDistance(List<double> list, double widthCut, double fieldLength)
        {
            list.Sort();
            if(list[0] > widthCut / 2)
            {
                return false;
            }

            if (fieldLength - list[list.Count - 1] > widthCut / 2)
            {
                return false;
            }

            for (int i = 1; i < list.Count; i++)
            {
                if (list[i] - list[i - 1] > widthCut)
                {
                    return false;
                }
            }

            return true;
        }
    }
}
