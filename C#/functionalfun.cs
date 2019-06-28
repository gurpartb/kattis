using System;
using System.Collections.Generic;

namespace functionalfun
{
    class functionalfun
    {
        static void Main(string[] args)
        {
            string line;
            while ((line = Console.ReadLine()) != null)
            {
                Dictionary<string, List<string>> domainToCodomain = new Dictionary<string, List<string>>();
                Dictionary<string, List<string>> codomainToDomain = new Dictionary<string, List<string>>();

                string[] domain = line.Split(' ');
                string[] codomain = Console.ReadLine().Split(' ');
                int n = Int32.Parse(Console.ReadLine());

                int i = 0;
                while(i < n)
                {
                    string[] point = Console.ReadLine().Split(' ');

                    addToDictionary(domainToCodomain, point[0], point[2]);
                    addToDictionary(codomainToDomain, point[2], point[0]);

                    i++;
                }

                if(isFunction(domainToCodomain))
                {
                    if(isInjective(codomainToDomain))
                    {
                        if(isSurjective(codomainToDomain, codomain.Length - 1))
                        {
                            Console.WriteLine("bijective");

                        }else{

                            Console.WriteLine("injective");
                        }

                    }else if(isSurjective(codomainToDomain, codomain.Length - 1)){

                        Console.WriteLine("surjective");

                    }else{

                        Console.WriteLine("neither injective nor surjective");
                    }

                }else{

                    Console.WriteLine("not a function");
    
                }
            }
        }

        static void addToDictionary(Dictionary<string, List<string>> dictionary, string key, string val)
        {
            if(!dictionary.ContainsKey(key))
            {
                dictionary[key] = new List<string>();
            }
            dictionary[key].Add(val);
        }

        static bool isFunction(Dictionary<string, List<string>> domainToCodomain)
        {
            foreach(List<string> list in domainToCodomain.Values)
            {
                if(list.Count > 1)
                {
                    return false;
                }
            }
            return true;
        }

        static bool isInjective(Dictionary<string, List<string>> codomainToDomain)
        {
            return isFunction(codomainToDomain);
        }

        static bool isSurjective(Dictionary<string, List<string>> codomainToDomain, int codomainSize)
        {
            return codomainToDomain.Keys.Count == codomainSize;
        }
    }
}