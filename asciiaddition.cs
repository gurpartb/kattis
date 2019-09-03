using System;
using System.Collections.Generic;

namespace asciiaddition
{
    class asciiaddition
    {
        public static void Main(string[] args)
        {
            List<string> expression = new List<string>();

            string line;
            while ((line = Console.ReadLine()) != null) {

                List<string> list = splitInParts(line, 5);

                if(expression.Count < list.Count)
                {
                    expression = list;

                }else{

                    for (int i = 0; i < list.Count; i++)
                    {
                        expression[i] += list[i];
                    }
                }
            }

            List<int> num1 = new List<int>();
            List<int> num2 = new List<int>();
            bool isNum1 = true;

            for (int i = 0; i < expression.Count; i++)
            {  
                try
                {
                    if(isNum1)
                    {
                        num1.Add(getDigit(expression[i]));
                    }else{
                        num2.Add(getDigit(expression[i]));
                    }

                }catch (KeyNotFoundException){

                    isNum1 = false;
                }
            }

            int numb1 = Int32.Parse(String.Join("", num1));
            int numb2 = Int32.Parse(String.Join("", num2));
            int res = numb1 + numb2;
    
            char[] chrArr = res.ToString().ToCharArray();

            List<string[]> temp = new List<string[]>();

            for (int i = 0; i < chrArr.Length; i++)
            {
                temp.Add(getString(Int32.Parse(chrArr[i].ToString())));
            }
            for (int i = 0; i < 7; i++)
            {
                int j;
                for (j = 0; j < temp.Count - 1; j++)
                {
                    Console.Write(temp[j][i] + ".");
                }
                Console.WriteLine(temp[j][i]);
            }
        }

        private static int getDigit(string str){
            string zero = "xxxxxx...xx...xx...xx...xx...xxxxxx";
            string one = "....x....x....x....x....x....x....x";
            string two = "xxxxx....x....xxxxxxx....x....xxxxx";
            string three = "xxxxx....x....xxxxxx....x....xxxxxx";
            string four = "x...xx...xx...xxxxxx....x....x....x";
            string five = "xxxxxx....x....xxxxx....x....xxxxxx";
            string six = "xxxxxx....x....xxxxxx...xx...xxxxxx";
            string seven = "xxxxx....x....x....x....x....x....x";
            string eight = "xxxxxx...xx...xxxxxxx...xx...xxxxxx";
            string nine = "xxxxxx...xx...xxxxxx....x....xxxxxx";
            Dictionary <string,int> digits = new Dictionary<string, int>(){[zero]=0, [one] = 1, [two] = 2, [three] = 3, [four] = 4, [five] = 5, [six] = 6, [seven] = 7, [eight] = 8, [nine] = 9};
            return digits[str];
        }

        private static List<string> splitInParts(string str, int length)
        {
            List<string> list = new List<string>();
            int i = 0;
            int j = 0;
            while( (i+1)*length+j <= str.Length)
            {
                list.Add(str.Substring(i*length + j,length));
                i++;
                j++;
            }
            return list;
        }

        private static string[] getString(int i)
        {
            string[] zero =  new string[]{"xxxxx","x...x","x...x","x...x","x...x","x...x","xxxxx"};
            string[] one =   new string[]{"....x","....x","....x","....x","....x","....x","....x"};
            string[] two =   new string[]{"xxxxx","....x","....x","xxxxx","x....","x....","xxxxx"};
            string[] three = new string[]{"xxxxx","....x","....x","xxxxx","....x","....x","xxxxx"};
            string[] four =  new string[]{"x...x","x...x","x...x","xxxxx","....x","....x","....x"};
            string[] five =  new string[]{"xxxxx","x....","x....","xxxxx","....x","....x","xxxxx"};
            string[] six =   new string[]{"xxxxx","x....","x....","xxxxx","x...x","x...x","xxxxx"};
            string[] seven = new string[]{"xxxxx","....x","....x","....x","....x","....x","....x"};
            string[] eight = new string[]{"xxxxx","x...x","x...x","xxxxx","x...x","x...x","xxxxx"};
            string[] nine =  new string[]{"xxxxx","x...x","x...x","xxxxx","....x","....x","xxxxx"};
            List<string[]> digits = new List<string[]>{zero, one, two, three, four, five, six, seven, eight, nine};
            
           return digits[i];
        }
    }
}
