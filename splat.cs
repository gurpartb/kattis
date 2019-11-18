using System;

namespace splat
{
    class Drop
    {
        private double X { get; set; }

        private double Y { get; set; }

        private double Volume { get; set; }

        private double RadiusSquared { get; set; }

        public string Color { get; private set; }

        public Drop(string x, string y, string volume, string color)
        {
            X = double.Parse(x);
            Y = double.Parse(y);
            Volume = double.Parse(volume);

            Color = color;
            RadiusSquared = (Volume / Math.PI);
        }

        public bool IsColor(double x, double y)
        {
            double deltaX = X - x;
            double deltaY = Y - y;

            double distanceSquared = deltaX * deltaX + deltaY * deltaY;

            return distanceSquared < RadiusSquared;
        }
    }


    class Program
    {
        static void Main(string[] args)
        {
            int c = int.Parse(Console.ReadLine());

            while(c > 0)
            {
                int n = int.Parse(Console.ReadLine());

                Drop[] drops = new Drop[n];

                for (int i = 0; i < drops.Length; i++)
                {
                    string line = Console.ReadLine();
                    string[] arr = line.Split(' ');

                    drops[i] = new Drop(arr[0], arr[1], arr[2], arr[3]);
                }

                int m = int.Parse(Console.ReadLine());

                for (int i = 0; i < m; i++)
                {
                    string line = Console.ReadLine();
                    string[] arr = line.Split(' ');
                    double x = double.Parse(arr[0]);
                    double y = double.Parse(arr[1]);

                    string color = "white";

                    for (int j = drops.Length - 1; j >= 0; j--)
                    {
                        if(drops[j].IsColor(x, y))
                        {
                            color = drops[j].Color;
                            break;
                        }
                    }

                    Console.WriteLine(color);
                }

                c--;
            }
        }
    }
}
