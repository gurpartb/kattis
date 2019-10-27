using System;
using System.Collections.Generic;

namespace fbiuniversal
{
    class Program
    {
        static void Main(string[] args)
        {
            string line = Console.ReadLine();
            Dictionary<char, int> charToInt = CharToInt();
            Dictionary<char, char> confusingToActual = ConfusingToActual();
            int[] valArr = ValueArray();

            int totalLines = int.Parse(line);

            for (int i = 0; i < totalLines; i++)
            {
                line = Console.ReadLine();

                string[] arr = line.Split(' ');
                line = arr[1];

                string res = RemoveConfusingLetters(line, confusingToActual);

                string unc = res.Substring(0, res.Length - 1);
                string chk = res.Substring(res.Length - 1);

                int[] uncArr = ToBase27Array(unc, charToInt);
                int[] chkArr = ToBase27Array(chk, charToInt);

                int checkSum = UncCheckSumValue(uncArr, valArr);

                if(checkSum % 27 != chkArr[0])
                {
                    Console.WriteLine($"{i+1} Invalid");
                }
                else
                {
                    long base10Val = Base27ArrayToBase10(uncArr);
                    Console.WriteLine($"{i + 1} {base10Val}");
                }
            }
        }

        static string RemoveConfusingLetters(string str, Dictionary<char, char> confusingToActual)
        {
            char[] res = new char[str.Length];

            for (int i = 0; i < str.Length; i++)
            {
                char chr = str[i];

                if (confusingToActual.ContainsKey(chr))
                {
                    chr = confusingToActual[chr];
                }

                res[i] = chr;
            }

            return new string(res);
        }

        static int[] ToBase27Array(string str, Dictionary<char, int> charToInt)
        {
            int[] res = new int[str.Length];

            for (int i = 0; i < str.Length; i++)
            {
                char chr = str[i];

                res[i] = charToInt.ContainsKey(chr) ? charToInt[chr] : chr - '0';
            }

            return res;
        }

        static int UncCheckSumValue(int[] arr, int[] valArr)
        {
            int chkSumVal = 0;

            for (int i = 0; i < arr.Length; i++)
            {
                chkSumVal += arr[i] * valArr[i];
            }

            return chkSumVal;
        }

        static long Base27ArrayToBase10(int[] arr)
        {
            long sum = 0;
            long mult = 1;

            for (int i = 0; i < arr.Length; i++)
            {
                sum += arr[arr.Length - 1 - i] * mult;
                mult *= 27;
            }

            return sum;
        }

        static Dictionary<char,int> CharToInt()
        {
            string keys = "ACDEFHJKLMNPRTVWX";

            Dictionary<char, int> charToInt = new Dictionary<char, int>();

            int startNum = 10;

            for (int i = 0; i < keys.Length; i++)
            {
                charToInt.Add(keys[i], startNum);
                startNum++;
            }

            return charToInt;
        }

        static Dictionary<char,char> ConfusingToActual()
        {
            Dictionary<char, char> confusingToActual = new Dictionary<char, char>()
            {
                {'B','8'},
                {'G','C'},
                {'I','1'},
                {'O','0'},
                {'Q','0'},
                {'S','5'},
                {'U','V'},
                {'Y','V'},
                {'Z','2'}
            };

            return confusingToActual;
        }

        static int[] ValueArray()
        {
            int[] valArr = { 2, 4, 5, 7, 8, 10, 11, 13 };
            return valArr;
        }
    }
}
