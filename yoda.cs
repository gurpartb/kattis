// Kattis : Yoda

using System;

namespace yoda
{
    class Program
    {
        public static void Main(string[] args)
        {
            string line1 = Console.ReadLine();
            string line2 = Console.ReadLine();

            string res1 = "";
            string res2 = "";

            int i = 0;
            while(i < Math.Min(line1.Length, line2.Length))
            {
                int l1 = line1[line1.Length - i - 1] - '0';
                int l2 = line2[line2.Length - i - 1] - '0';

                if(l1 >= l2)
                {
                    res1 = l1 + res1;
                }
                
                if(l2 >= l1)
                {
                    res2 = l2 + res2;
                }

                i++;
            }

            if(i < line1.Length)
            {
                res1 = line1.Substring(0, line1.Length - i) + res1;
            }

            if(i < line2.Length)
            {
                res2 = line2.Substring(0, line2.Length - i) + res2;
            }

            res1 = Result(res1);
            res2 = Result(res2);

            System.Console.WriteLine(res1);
            System.Console.WriteLine(res2);
        }

        static string Result(string res)
        {
            if(res.Length > 0)
            {
                return int.Parse(res).ToString();
            }
            return "YODA";
        }
    }
}