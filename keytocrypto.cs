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
            string message = DecodeMessage(cipherText, key);
            
            System.Console.WriteLine(message);
        }

        static string DecodeMessage(string cipherText, string key, int mod = 26, char zero = 'A')
        {
            char[] message = new char[cipherText.Length];

            for (int i = 0; i < cipherText.Length; i++)
            {
                if(i < key.Length)
                {
                    message[i] = DecodeChar(cipherText[i], key[i]);
                }
                else
                {
                    message[i] = DecodeChar(cipherText[i], message[i - key.Length]);
                }
            }

            return new string(message);
        }

        static char DecodeChar(char cipher, char key, int mod = 26, char zero = 'A')
        {
            return (char) ((cipher - key + mod) % mod + zero);
        }
    }
}