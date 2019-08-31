using System;

namespace completingthesquare
{
    class Coordinates
    {
        public int X { get; set; }
        public int Y { get; set; }

        public Coordinates(int x, int y)
        {
            X = x;
            Y = y;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            int size = 3;
            Coordinates[] arr = new Coordinates[size];

            for (int i = 0; i < size; i++)
            {
                string line = Console.ReadLine();
                Coordinates pt = StringToCoordinates(line);
                arr[i] = pt;
            }

            Coordinates fourthPoint = FourthPoint(arr);

            Console.WriteLine($"{fourthPoint.X} {fourthPoint.Y}");
        }

        static Coordinates FourthPoint(Coordinates[] arr)
        {
            Coordinates[] possibleCoordinates0 = PossibleCoordinates(arr[0], arr[1]);
            Coordinates[] possibleCoordinates1 = PossibleCoordinates(arr[1], arr[0]);
            Coordinates[] possibleCoordinates2 = PossibleCoordinates(arr[0], arr[2]);
            Coordinates[] possibleCoordinates3 = PossibleCoordinates(arr[2], arr[0]);

            if(ArrayContainsCoordinates(possibleCoordinates0, arr[2]))
            {
                return OtherCoordinates(possibleCoordinates0, arr[2]);
            }

            if (ArrayContainsCoordinates(possibleCoordinates1, arr[2]))
            {
                return OtherCoordinates(possibleCoordinates1, arr[2]);
            }

            if (ArrayContainsCoordinates(possibleCoordinates2, arr[1]))
            {
                return OtherCoordinates(possibleCoordinates2, arr[1]);
            }

            return OtherCoordinates(possibleCoordinates3, arr[2]);
        }

        static bool ArrayContainsCoordinates(Coordinates[] possibleCoordinates, Coordinates coord)
        {
            return EqualCoordinates(possibleCoordinates[0], coord) || EqualCoordinates(possibleCoordinates[1], coord);
        }

        static Coordinates OtherCoordinates(Coordinates[] arr, Coordinates coord)
        {
            return EqualCoordinates(arr[0], coord) ? arr[1] : arr[0];
        }

        static bool EqualCoordinates(Coordinates coord0, Coordinates coord1)
        {
            return coord0.X == coord1.X && coord0.Y == coord1.Y;
        }

        static Coordinates[] PossibleCoordinates(Coordinates point0, Coordinates point1)
        {
            Coordinates deltaVector0to1 = SubtractCoordinates(point1, point0);
            Coordinates deltaVector1to2 = RotateCounterClockwise(deltaVector0to1);
            Coordinates deltaVector2to3 = RotateCounterClockwise(deltaVector1to2);

            Coordinates point2 = AddCoordinates(point1, deltaVector1to2);
            Coordinates point3 = AddCoordinates(point2, deltaVector2to3);

            return new Coordinates[] { point2, point3 };
        }

        static Coordinates StringToCoordinates(string str)
        {
            string[] arr = str.Split(' ');

            return new Coordinates(Int32.Parse(arr[0]), Int32.Parse(arr[1]));
        }

        static Coordinates SubtractCoordinates(Coordinates point1, Coordinates point0)
        {
            Coordinates coord =  new Coordinates(point1.X - point0.X, point1.Y - point0.Y);
            return coord;
        }

        static Coordinates AddCoordinates(Coordinates point1, Coordinates point0)
        {
            Coordinates coord = new Coordinates(point1.X + point0.X, point1.Y + point0.Y);
            return coord;
        }

        static Coordinates RotateCounterClockwise(Coordinates deltaVector)
        {
            Coordinates coord = new Coordinates(deltaVector.Y, deltaVector.X * (-1));
            return coord;
        }

        static Coordinates RotateClockwise(Coordinates deltaVector)
        {
            Coordinates coord = new Coordinates(deltaVector.Y * (-1), deltaVector.X);
            return coord;
        }

    }
}
