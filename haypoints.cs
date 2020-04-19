 // Kattis : Hay Points

 using System;
 using System.Collections.Generic;

 namespace haypoints
 {
     class Program
     {
        public static void Main(string[] args)
        {
            int[] mn = ReadIntArray();
            Dictionary<string,int> dict = ReadDictionary(mn[0]);

            string line;
            int value = 0;
            string endJob = ".";
            Func<int> ResetValue = () => 0;

            while( (line = Console.ReadLine()) != null)
            {
                if(line == endJob)
                {
                    System.Console.WriteLine(value);
                    value = ResetValue();
                }
                else
                {
                    string [] arr = line.Split(' ');
                    foreach (string item in arr)
                    {
                        if(dict.ContainsKey(item))
                        {
                            value += dict[item];
                        }
                    }
                }
            }
        }
    
        static int[] ReadIntArray()
        {
            string line = Console.ReadLine();
            string[] arr = line.Split(' ');
            return Array.ConvertAll(arr, int.Parse);
        }

        static Dictionary<string, int> ReadDictionary(int m)
        {
            Dictionary<string,int> dict = new Dictionary<string, int>();

            int i = 0;
            while(i < m)
            {
                string line = Console.ReadLine();
                string[] arr = line.Split(' ');
                dict.Add(arr[0], int.Parse(arr[1]));
                i++;
            }
            return dict;
        }
     }
 }