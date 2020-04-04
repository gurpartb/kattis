using System;
using System.Linq;
using System.Collections.Generic;

namespace conquestcampaign
{
    class Program
    {
        public static void Main(string[] args)
        {
            string line = Console.ReadLine();
            string[] arr = line.Split(' ');
            int rows = int.Parse(arr[0]);
            int cols = int.Parse(arr[1]);
            int n = int.Parse(arr[2]);

            int[,] map = new int[rows, cols];

            int day = 0;

            while((line = Console.ReadLine()) != null)
            {   
                arr = line.Split(' ');
                int x = int.Parse(arr[0]) - 1;
                int y = int.Parse(arr[1]) - 1;
                map[x,y] = day + 1;
            }

            bool isConquest = true;
            while(isConquest)
            {
                day++;
                isConquest = false;
                for (int i = 0; i < rows; i++)
                {
                    for (int j = 0; j < cols; j++)
                    {
                        if(map[i,j] == day)
                        {
                            //left
                            if(j > 0)
                            {
                                if(map[i,j - 1] == 0)
                                {
                                    map[i,j - 1] = day + 1;
                                    isConquest = true;
                                }
                            }
                            //right
                            if(j < cols - 1)
                            {
                                if(map[i,j + 1] == 0)
                                {
                                    map[i,j + 1] = day + 1;
                                    isConquest = true;
                                }
                            }
                            //up
                            if(i > 0)
                            {
                                if(map[i - 1,j] == 0)
                                {
                                    map[i - 1,j] = day + 1;
                                    isConquest = true;
                                }
                            }
                            //down
                            if(i < rows - 1)
                            {
                                if(map[i + 1,j] == 0)
                                {
                                    map[i + 1,j] = day + 1;
                                    isConquest = true;
                                }
                            }
                        }
                    }
                }
            }
            System.Console.WriteLine(day);
        }
    }
}