using System;
using System.Linq;

namespace santaklas
{
    class Program
    {
        static void Main(string[] args)
        {
            string line = Console.ReadLine();
            var arr = line.Split(' ').Select(int.Parse).ToArray();

            var height = arr[0];
            var angle = arr[1];

            if(0 <= angle && angle <= 180)
            {
                Console.WriteLine("safe");
            }
            else
            {
                var time = GetTime(height, angle);
                Console.WriteLine(time);
            }
        }

        private static int GetTime(int height ,int angle)
        {
            var theta = Math.Abs(angle - 270);
            var radian = theta * Math.PI / 180;
            var time = height / Math.Cos(radian);

            return (int) Math.Floor(time);
        }
    }
}