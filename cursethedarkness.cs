using System;

namespace cursethedarkness
{
    class Program
    {
        static void Main(string[] args)
        {
            string line = Console.ReadLine();

            int testCases = int.Parse(line);

            while(testCases > 0)
            {
                Console.WriteLine(TestCase() > 0 ? "light a candle" : "curse the darkness");
                testCases--;
            }
        }

        static int TestCase()
        {
            double threshold = 8.0;
            int candleCount = 0;

            string line = Console.ReadLine();
            string[] arr = line.Split(' ');

            double bookX = double.Parse(arr[0]);
            double bookY = double.Parse(arr[1]);

            line = Console.ReadLine();

            int candles = int.Parse(line);

            while (candles > 0)
            {
                line = Console.ReadLine();
                arr = line.Split(' ');

                double candleX = double.Parse(arr[0]);
                double candleY = double.Parse(arr[1]);

                if (WithinThreshold(threshold, bookX, bookY, candleX, candleY))
                {
                    candleCount++;
                }
                candles--;
            }
            return candleCount;
        }

        static bool WithinThreshold(double threshold, double bookX, double bookY, double candleX, double candleY)
        {
            double deltaX = bookX - candleX;
            double deltaY = bookY - candleY;

            return Math.Sqrt(deltaX * deltaX + deltaY * deltaY) < threshold;
        }
    }
}