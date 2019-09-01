using System;

namespace dst
{
    class Program
    {
        static void Main(string[] args)
        {
            string line = Console.ReadLine();

            int n = int.Parse(line);

            while(n > 0)
            {
                line = Console.ReadLine();

                String[] arr = line.Split(' ');

                string res = ProcessTime(arr);

                Console.WriteLine(res);

                n--;
            }
        }

        static string ProcessTime(string[] arr)
        {
            int hoursPerDay = 24;

            int minutesPerHour = 60;

            string step = arr[0];

            int deltaMinutes = int.Parse(arr[1]);

            int hours = int.Parse(arr[2]);

            int minutes = int.Parse(arr[3]);

            int updatedMinutes = UpdateMinutes(step, minutes, deltaMinutes);

            int deltaHours = DeltaHours(updatedMinutes, minutesPerHour);

            int updatedHours = hours + deltaHours;

            int formatedHours = FormatTime(updatedHours, hoursPerDay);

            int formatedMinutes = FormatTime(updatedMinutes, minutesPerHour);

            string res = $"{formatedHours} {formatedMinutes}";

            return res;
        }

        static int UpdateMinutes(string step, int minutes, int deltaMinutes)
        {
            string backwards = "B";
            string forwards = "F";

            if (step == backwards)
            {
                return minutes - deltaMinutes;
            }

            if (step == forwards)
            {
                return minutes + deltaMinutes;
            }

            return minutes;
        }

        static int DeltaHours(int minutes, int minutesPerHour)
        {
            int hours = Math.Abs(minutes) / minutesPerHour;

            if (minutes < 0)
            {
                if(minutes % minutesPerHour != 0)
                {
                    hours += 1;
                }

                hours *= -1;
            }

            return hours;
        }

        static int FormatTime(int i, int modulo)
        {
            int res = ((i % modulo) + modulo) % modulo;
            return res;
        }

    }
}
