using System;
using System.Collections.Generic;

namespace EstimatingTheAreaOfaCircle
{
    class program
    {
        static void Main(string[] args)
        {
            string line;
            while((line=Console.ReadLine())!="0 0 0")
            {
                var rms = line.Split(' ');
                var radius = double.Parse(rms[0]);
                var markedPoints = double.Parse(rms[1]);
                var pointsInCircle = double.Parse(rms[2]);

                var sideSquare = radius*2;
                var areaSquare = sideSquare*sideSquare;

                var estimateAreaOfCircle = areaSquare*pointsInCircle/markedPoints;
                var areaOfCircle = Math.PI*radius*radius;

                Console.WriteLine($"{areaOfCircle} {estimateAreaOfCircle}");
            }
        }
    }
}