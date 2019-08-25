using System;
using System.Text;
using System.Numerics;
//using System.Collections.Generic;

namespace threepowers
{
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                string line = Console.ReadLine();

                if (line == "0")
                {
                    break;
                }

                ulong val = ulong.Parse(line) - 1;

                char[] valToBinary = DecimalToBinaryReverse(val).ToCharArray();

                StringBuilder outStr = new StringBuilder();

                int three = 3;
                //List<int> list = new List<int> { 1 };
                BigInteger mult = 1;
                //long mult = 1;

                foreach (char chr in valToBinary)
                {
                    if (chr == '1')
                    {
                        //outStr = outStr.Append(ListReverseToStringBuilder(list).Append(", "));
                        outStr = outStr.Append(mult.ToString()+ ", ");
                    }

                    //list = ListMultiply(list, three);
                    mult *= three;
                }

                if (outStr.Length > 2)
                {
                    outStr.Remove(outStr.Length - 2, 2);
                    outStr.Append(" ");

                }
                Console.WriteLine($"{{ {outStr.ToString()}}}");
            }
        }

        public static string DecimalToBinaryReverse(ulong num)
        {
            StringBuilder str = new StringBuilder();

            while (num > 0)
            {
                str = str.Append((num % 2 == 1) ? "1" : "0");
                num /= 2;
            }

            return str.ToString();
        }

        //public static List<int> ListMultiply(List<int> list, int n, int baseNum = 10)
        //{
        //    int listSize = list.Count;
        //    int carry = 0;

        //    for (int i = 0; i < listSize; i++)
        //    {
        //        int currNum = list[i];

        //        int calcNum = currNum * n + carry;

        //        carry = calcNum / baseNum;

        //        list[i] = calcNum % baseNum;
        //    }

        //    if(carry > 0)
        //    {
        //        list.Add(carry);
        //    }

        //    return list;
        //}

        //public static StringBuilder ListReverseToStringBuilder(List<int> list)
        //{
        //    StringBuilder str = new StringBuilder();

        //    for (int i = list.Count - 1 ; i >= 0; i--)
        //    {
        //        str.Append(list[i]);
        //    }

        //    return str;
        //}
    }
}
