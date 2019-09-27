using System;

namespace numbertree
{
    class Program
    {
        static void Main(string[] args)
        {
            // expected inputs "int word" or "int"
            string line = Console.ReadLine();

            string[] arr = line.Split(' ');

            int treeHeight = int.Parse(arr[0]);

            // total nodes are 2^(treeHeight + 1) - 1
            int totalNodes = (1 << (treeHeight + 1)) - 1;

            // set default path to empty string
            string path = "";

            // if array contains a second word, set path to the second word
            if(arr.Length > 1)
            {
                path = arr[1];
            }

            // set rightLimit and leftLimit limits
            int rightLimit = 0;
            int leftLimit = 1 << path.Length;

            int nodesInPathLengthSubTree = (1 << (path.Length + 1)) - 1;

            // since path length is not always equal to the tree height
            // int scale = totalNodes - leftLimit * 2 + 1;
            int scale = totalNodes - nodesInPathLengthSubTree;

            // *** Solution 1
            //path = path.Replace('R', '0');
            //path = path.Replace('L', '1');
            //if(path.Length > 0)
            //{
            //    leftLimit = Convert.ToInt32(path, 2) + 1;
            //}
            //------------------

            // *** Solution 2
            foreach (var chr in path)
            {
                if (chr == 'R')
                {
                    // keep the rightLimit half 
                    leftLimit = (leftLimit + rightLimit) / 2;
                }
                else
                {
                    // keep the leftLimit half
                    rightLimit = (leftLimit + rightLimit) / 2;
                }
            }
            //-----------------

            Console.WriteLine(leftLimit + scale);
        }
    }
}