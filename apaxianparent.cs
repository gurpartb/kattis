using System;
using System.Text;

namespace apaxianparent
{
    class apaxianparent
    {
        static void Main(string[] args)
        {
            string line =  Console.ReadLine();
            string[] arr = line.Split(' ');
            string y = arr[0];
            string p = arr[1];
            string ap = helper(y,p);
            Console.WriteLine(ap);
        }

        static string helper(string y, string p)
        {
            string ending = y.Substring(y.Length-1, 1);
            if(ending == "e") return y + "x" + p;

            string[] vowelsnotE = {"a","i","o","u"};
            if(Array.Exists(vowelsnotE, element => element == ending))
            {
                string ysub = y.Substring(0,y.Length-1);
                return ysub + "ex" +p;
            }

            ending = y.Substring(y.Length - 2, 2);
            //Console.WriteLine(ending);
            if(ending == "ex") return y + p;

            return y + "ex" + p;
        }
    }
}