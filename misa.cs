// Kattis : Misa
using System;

namespace misa
{
    class Program
    {
        public static void Main()
        {
            int[] rowCol = ReadIntArray();
            string[] map = ReadStringArray(rowCol[0]);
            int n = HandShakesTotal(map);
            System.Console.WriteLine(n);
        }

        static int HandShakesTotal(string[] map)
        {
            int n = 0;
            int m = 0;

            char individual = 'o';
            char neighbor = 'o';

            for (int i = 0; i < map.Length; i++)
            {
                for (int j = 0; j < map[i].Length; j++)
                {
                    if(map[i][j] == individual)
                    {
                        n += HandShakesIndividualSE(map, i, j, neighbor);
                    }
                    else
                    {
                        m = Math.Max(
                                m,
                                HandShakesIndividualSE(map, i, j, neighbor) +
                                HandShakesIndividualNW(map, i, j, neighbor)
                            );
                    }
                }
            }

            return n + m;
        }

        static int HandShakesIndividualSE(string[] map, int i, int j, char neighbor)
        {
            int n = 0;

            bool south = map.Length > i + 1;
            bool east = map[i].Length > j + 1;
            bool west = j > 0;

            int wj = j - 1;
            int si = i + 1;
            int ej = j + 1;

            Func<int,int,bool> isNeighbor = (_i,_j) => map[_i][_j] == neighbor;

            // s
            if(south)
            {
                if(isNeighbor(si, j))
                {
                    n++;
                }

                // se
                if(east)
                {
                    if(isNeighbor(si, ej))
                    {
                        n++;
                    }
                }

                // sw
                if(west)
                {
                    if(isNeighbor(si, wj))
                    {
                        n++;
                    }
                }
            }

            // e
            if(east)
            {
                if(isNeighbor(i, ej))
                {
                    n++;
                }
            }

            return n;
        }

        static int HandShakesIndividualNW(string[] map, int i, int j, char neighbor)
        {
            int n = 0;

            bool north = i > 0;
            bool west = j > 0;
            bool east = map[i].Length > j + 1;

            int ej = j + 1;
            int ni = i - 1;
            int wj = j - 1;

            Func<int,int,bool> isNeighbor = (_i,_j) => map[_i][_j] == neighbor;

            // n
            if(north)
            {
                if(isNeighbor(ni, j))
                {
                    n++;
                }

                // ne
                if(east)
                {
                    if(isNeighbor(ni, ej))
                    {
                        n++;
                    }
                }

                // nw
                if(west)
                {
                    if(isNeighbor(ni, wj))
                    {
                        n++;
                    }
                }
            }

            // w
            if(west)
            {
                if(isNeighbor(i, wj))
                {
                    n++;
                }
            }

            return n;
        }

        static string[] ReadStringArray(int n)
        {
            string[] map = new string[n];

            string line;
            int i = 0;
            while((line = Console.ReadLine()) != null)
            {
                map[i] = line;
                i++;
            }
            return map;
        }

        static int[] ReadIntArray()
        {
            string line = Console.ReadLine();
            string[] arr = line.Split(' ');
            return Array.ConvertAll(arr, int.Parse);
        }
    }
}