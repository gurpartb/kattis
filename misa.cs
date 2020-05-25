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
            int n = Misa(map);
            System.Console.WriteLine(n);
        }

        static int Misa(string[] map)
        {
            int n = 0;
            int m = 0;

            char individual = 'o';
            char neighbor = 'o';

            for (int i = 0; i < map.Length; i++)
            {
                for (int j = 0; j < map[i].Length; j++)
                {
                    int tm = 0;
                    foreach(int _i in new int[]{-1, 0, 1})
                    {
                        foreach(int _j in new int[]{-1, 0, 1})
                        {
                            if(_i != 0 || _i != _j)
                            {
                                int ti = i + _i;
                                int tj = j + _j;

                                if(ti >= 0 && tj >= 0 && map.Length > ti && map[ti].Length > tj)
                                {
                                    if(map[ti][tj] == neighbor)
                                    {
                                        if(map[i][j] == individual)
                                        {
                                            n++;
                                        }
                                        else
                                        {
                                            tm++;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    m = Math.Max(m, tm);
                }
            }
            return n/2 + m;
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