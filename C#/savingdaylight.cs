using System;
using System.Linq;

namespace savingdaylight
{
    class savingdaylight
    {
        static void Main(string[] args)
        {
            string line;
            while ((line = Console.ReadLine()) != null) {
                string[] split = line.Split(' ');
                func(split);
            }
        }

        static void func(string[] arr){

            string month = arr[0];
            string day = arr[1];
            string year = arr[2];
            int[] sunrise = arr[3].Split(':').Select(Int32.Parse).ToArray();
            int[] sunset = arr[4].Split(':').Select(Int32.Parse).ToArray();
            int hours = sunset[0] - sunrise[0];
            int minutes = sunset[1] - sunrise[1];

            if(minutes < 0){
                minutes += 60;
                hours--;
            }

            string outStr = month+" "+day+" "+year+" "+hours+" hours "+minutes+" minutes";
            Console.WriteLine(outStr);
        }
    }
}
