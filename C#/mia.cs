using System;
using System.Linq;

namespace driversdilemma
{
    class Program
    {
        static void Main(string[] args)
        {
            int totalLines = 7;

            string[] arr = ReadData(totalLines);

            double[] arr1 = StringToDoubleArray(arr[0]);

            double capacity = arr1[0];
            double leakSpeed = arr1[1];
            double distance = arr1[2];
            double initialFuel = capacity / 2;

            string fastestSpeed = "NO";

            for (int i = 1; i < arr.Length; i++)
            {
                double[] arr2 = StringToDoubleArray(arr[i]);

                double vehicleSpeed = arr2[0];
                double mpg = arr2[1];

                bool possible = CanTravelTheDistance(initialFuel, leakSpeed, distance, vehicleSpeed, mpg);

                if (possible)
                {
                    fastestSpeed = "YES " + vehicleSpeed;
                }
            }

            Console.WriteLine(fastestSpeed);
        }

        static bool CanTravelTheDistance(double initialFuel, double leakSpeed, double distance, double vehicleSpeed, double milesPerGallon)
        {
            double time = distance / vehicleSpeed;
            double fuel = initialFuel - leakSpeed * time;
            double actualDistance = fuel * milesPerGallon;

            return actualDistance > distance;
        }

        static double[] StringToDoubleArray(string str)
        {
            return str.Split(' ').Select(x => double.Parse(x)).ToArray();
        }

        static string[] ReadData(int totalLines)
        {
            String[] arr = new string[totalLines];

            for (int i = 0; i < arr.Length; i++)
            {
                arr[i] = Console.ReadLine();
            }

            return arr;
        }
    }
}
