using System;

namespace alldifferentdirections
{
    class Movable
    {
        public double x, y, o;

        public Movable(double x, double y, double o)
        {
            this.x = x;
            this.y = y;
            this.o = 0;

            Turn(o);
        }

        public void Walk(double d)
        {
            var rad = o * Math.PI / 180;

            var dx = d * Math.Cos(rad);
            var dy = d * Math.Sin(rad);

            x += dx;
            y += dy;
        }

        public void Turn(double o)
        {
            this.o = ((this.o + o) % 360 + 360) % 360;
        }

        public void Print()
        {
            Console.WriteLine($"x: {x}, y: {y}, o: {o}");
        }
    }

    class Program
    {
        public static void Main(string[] args)
        {
            string line;
            while((line = Console.ReadLine()) != null)
            {
                int i = int.Parse(line);
                if(i == 0)
                {
                    return;
                }

                var moveables = new Movable[i];

                for (i = 0; i < moveables.Length; i++)
                {
                    line = Console.ReadLine();
                    moveables[i] = GetMovable(line);
                }

                var averages = GetAverages(moveables);
                var largestDistance = GetLargestDistance(averages, moveables);

                Console.WriteLine($"{averages.Item1} {averages.Item2} {largestDistance}");
            }
        }

        public static Movable GetMovable(string line)
        {
            var arr = line.Split(' ');
            var x = Double.Parse(arr[0]);
            var y = Double.Parse(arr[1]);
            var o = Double.Parse(arr[3]);

            Movable m = new Movable(x, y, o);

            for (int i = 4; i < arr.Length; i += 2)
            {
                var command = arr[i];
                var num = Double.Parse(arr[i + 1]);

                if (command == "turn")
                {
                    m.Turn(num);

                }
                else
                {
                    m.Walk(num);
                }
            }
            return m;
        }

        public static (double, double) GetAverages(Movable[] movables)
        {
            double xAvg = 0;
            double yAvg = 0;

            foreach (var m in movables)
            {
                xAvg += m.x;
                yAvg += m.y;
            }

            xAvg /= movables.Length;
            yAvg /= movables.Length;

            return (xAvg, yAvg);
        }

        public static double GetLargestDistance( (double, double) coord, Movable[] movables)
        {
            double largestDistance = Double.MinValue;

            foreach (var moveable in movables)
            {
                largestDistance = Math.Max(largestDistance, GetDistance(coord.Item1, coord.Item2, moveable.x, moveable.y));
            }
            return largestDistance;
        }

        public static double GetDistance(double x1, double y1, double x2, double y2)
        {
            double dx = x1 - x2;
            double dy = y1 - y2;

            return Math.Sqrt(dx * dx + dy * dy);
        }

    }
}