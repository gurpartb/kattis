using System;

namespace avion
{
    class Program
    {
        static void Main(string[] args)
        {
            string res = "HE GOT AWAY!";
            string res2 = "";
            string code = "FBI";

            int row = 1;
            string line;

            while ( (line = Console.ReadLine()) != null)
            {
                if (line.Contains(code))
                {

                    res2 += row.ToString() + ' ';
                }

                row++;
            }

            Console.WriteLine(res2.Length > 0? res2: res);
        }
    }
}