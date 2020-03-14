using System;
using System.Collections.Generic;

namespace cudoviste
{
    class Program
    {
        static void Main(string[] args)
        {
            string line = Console.ReadLine();
            string[] rowColStr = line.Split(' ');
            int rows = int.Parse(rowColStr[0]);
            int cols = int.Parse(rowColStr[1]);

            string[] map = ReadMap(rows);

            int[] squashCounter = SquashCounter(map, rows, cols);

            foreach(int cars in squashCounter)
            {
                System.Console.WriteLine(cars);
            }
        }

        public static string[] ReadMap(int rows)
        {
            string[] map = new string[rows];

            int i = 0;
            while (i < rows)
            {
                map[i] = Console.ReadLine();
                i++;
            }

            return map;
        }

        public static int[] SquashCounter(string[] map, int rows, int cols)
        {
            int[] squashCounter = new int[5];
            for(int i = 0; i < rows - 1; i++)
            {
                for(int j = 0; j < cols - 1; j++)
                {
                    bool noBldg = NoBuilding(map, i, j);

                    if(noBldg)
                    {
                        int count = CarsSquashed(map, i, j);
                        squashCounter[count]++;
                    }
                }
            }
            return squashCounter;
        }

        public static bool NoBuilding(string[] map, int i, int j)
        {
            char bldg = '#';
            if(map[i][j] == bldg)
            {
                return false;
            }
            if(map[i][j + 1] == bldg)
            {
                return false;
            }
            if(map[i + 1][j] == bldg)
            {
                return false;
            }
            if(map[i + 1][j + 1] == bldg)
            {
                return false;
            }
            return true;
        }

        public static int CarsSquashed(string[] map, int i, int j)
        {
            char car = 'X';
            int count = 0;
            if(map[i][j] == car)
            {
                count++;
            }
            if(map[i][j + 1] == car)
            {
                count++;
            }
            if(map[i + 1][j] == car)
            {
                count++;
            }
            if(map[i + 1][j + 1] == car)
            {
                count++;
            }
            return count;
        }
    }
}