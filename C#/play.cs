using System;
using System.Collections.Generic;
using System.Linq;

namespace play
{

    class play{

        public static void Main(string[] args)
        {
            var arr = new int[]{4, 5, 4, 7, 9, 3};
            Array.Sort(arr);
            Array.Reverse(arr);
            foreach(int ai in arr)
            {
                Console.WriteLine(ai);
            }
        }
    }
}