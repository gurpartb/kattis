// Kattis : The Key to Crypotgraphy

using System;

namespace keytocrypto
{
    class Program
    {
        public static void Main(string[] args)
        {
            string cipherText = Console.ReadLine();
            string key = Console.ReadLine();
            char[] message = new char[cipherText.Length];

            for (int i = 0; i < Math.Min(key.Length, cipherText.Length); i++)
            {
                message[i] = Decode(cipherText[i], key[i], 26, 'A');
            }

            if(key.Length < cipherText.Length)
            {
                for (int i = key.Length; i < cipherText.Length ; i++)
                {
                    message[i] = Decode(cipherText[i], message[i - key.Length], 26, 'A');
                }
            }

            System.Console.WriteLine(message);
        }

        static char Decode(char cipher, char key, int mod = 26, char zero = 'A')
        {
            return (char) ((cipher - key + mod) % mod + zero);
        }
    }
}