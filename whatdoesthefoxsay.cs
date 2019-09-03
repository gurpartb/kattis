using System;
using System.Text;
using System.Collections.Generic;

namespace whatdoesthefoxsay
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            string question = "what does the fox say?";

            while (n > 0)
            {
                string line = Console.ReadLine();

                string[] jungleSoundArr = line.Split(' ');

                HashSet<string> knownSoundSet = new HashSet<string>();

                while( (line = Console.ReadLine()) != question)
                {
                    // If its not a question its a known animal sound
                    string knownAnimalSound = GetKnowAnimalSound(line);
                    knownSoundSet.Add(knownAnimalSound);
                }

                StringBuilder str = new StringBuilder();

                foreach(string sound in jungleSoundArr)
                {
                    if (!knownSoundSet.Contains(sound))
                    {
                        str.Append(" " + sound);
                    }
                }

                _ = str.Remove(0, 1);

                Console.WriteLine(str);

                n--;
            }
        }

        static string GetKnowAnimalSound(string line)
        {
            string[] arr = line.Split(' ');
            return arr[2];
        }
    }
}
