using System;

namespace mirrorimages
{
    class Program
    {
        static void Main(string[] args)
        {
            string line = Console.ReadLine();

            int count = 0;

            while( (line = Console.ReadLine()) != null)
            {
                string[] arr = line.Split(' ');
                count++;

                int rows = int.Parse(arr[0]);
                int cols = int.Parse(arr[1]);

                MainHelper(count, rows, cols);
            }
        }

        static void MainHelper(int count, int height, int width = 0)
        {
            string[] canvas = ReadImage(height, width);

            string[] revCanvas = Reverse(canvas);

            Console.WriteLine($"Test {count}");

            Print(revCanvas);
        }

        static string[] ReadImage(int height, int width = 0)
        {
            string line;

            string[] canvas = new string[height];

            for (int i = 0; i < height; i++)
            {
                line = Console.ReadLine();

                canvas[i] = line;
            }

            return canvas;
        }

        static string[] Reverse(string[] arr)
        {
            string[] rev = new string[arr.Length];

            for (int i = 0; i < arr.Length; i++)
            {
                char[] charArr = arr[i].ToCharArray();

                Array.Reverse(charArr);

                string str = new string(charArr);

                rev[arr.Length - 1 - i] = str;
            }

            return rev;
        }

        static void Print(string[] arr)
        {
            foreach(string str in arr)
            {
                Console.WriteLine(str);
            }
        }
    }
}