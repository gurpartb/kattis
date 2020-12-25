using System;
using System.Text;

namespace heimavinna
{
    class heimavinna
    {
        static void Main(string[] args)
        {
            string line =  Console.ReadLine();
            string[] arr = line.Split(';');
            int total = 0;
            foreach (var item in arr)
            {
                string[] range = item.Split('-');
                if(range.Length == 1)
                {
                    total++;
                }
                else
                {
                    total += int.Parse(range[1]) - (int.Parse(range[0]) - 1);
                }
            }
            Console.WriteLine(total);
        }
    }
}