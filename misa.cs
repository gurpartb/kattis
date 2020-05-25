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
            int n = HandShakesTotal(map,'o','o',(_n,_m)=> _n + _m);
            int m = HandShakesTotal(map,'.','o',(_n,_m)=> Math.Max(_n,_m));
            System.Console.WriteLine(n/2 + m);
        }

        static int HandShakesTotal(string[] map, char individual, char neighbor, Func<int,int,int> f)
        {
            int n = 0;
            for (int i = 0; i < map.Length; i++)
            {
                for (int j = 0; j < map[i].Length; j++)
                {
                    if(map[i][j] == individual)
                    {
                        n = f(n, HandShakesIndividual(map, i, j, neighbor));
                    }
                }
            }
            return n;
        }

        static int HandShakesIndividual(string[] map, int i, int j, char neighbor)
        {
            int n = 0;
            
            bool north = i > 0;
            bool east = map[i].Length > j + 1;
            bool south = map.Length > i + 1;
            bool west = j > 0;

            int ni = i - 1;
            int ej = j + 1;
            int si = i + 1;
            int wj = j - 1;

            Func<int,int,bool> isNeighbor = (_i,_j) => map[_i][_j] == neighbor;

            // N
            if(north)
            {
                if(isNeighbor(ni, j))
                {
                    n++;
                }

                // NW
                if(west)
                {
                    if(isNeighbor(ni, wj))
                    {
                        n++;
                    }
                }

                // NE
                if(east)
                {
                    if(isNeighbor(ni,ej))
                    {
                        n++;
                    }
                }
            }

            // W
            if(west)
            {
                if(isNeighbor(i, wj))
                {
                    n++;
                }
            }

            // E
            if(east)
            {
                if(isNeighbor(i, ej))
                {
                    n++;
                }
            }

            // s
            if(south)
            {
                if(isNeighbor(si, j))
                {
                    n++;
                }

                // sw
                if(west)
                {
                    if(isNeighbor(si, wj))
                    {
                        n++;
                    }
                }

                // se
                if(east)
                {
                    if(isNeighbor(si, ej))
                    {
                        n++;
                    }
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