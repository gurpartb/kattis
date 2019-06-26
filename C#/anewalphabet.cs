using System;
using System.Collections.Generic;

namespace anewalphabet
{
    class anewalphabet
    {
        static void Main() 
        {
            // map chars to new alphabet
            Dictionary<char,string> map = new Dictionary<char,string>();

            // values
            string[] values = new string[]{ "@", "8", "(", "|)", "3", "#", "6", "[-]", "|",
                                            "_|", "|<", "1", "[]\\/[]", "[]\\[]", "0", "|D",
                                            "(,)", "|Z", "$", "\'][\'", "|_|", "\\/", "\\/\\/",
                                            "}{", "`/","2"};

            // add keys and values to the map
            int i = 0;
            int a = 97;
            while(i < values.Length)
            {
                map.Add((char)(i+a), values[i]);
                i++;
            }

            string line = Console.ReadLine(); 
            line = line.ToLower();
            char[] charArray = line.ToCharArray();
            foreach (char ch in charArray)  
            {   
                string val;
                if(map.TryGetValue(ch, out val))
                {
                    Console.Write(val);
                } else {
                    Console.Write(ch); 
                } 
            }
            Console.WriteLine();
        }
    }
}