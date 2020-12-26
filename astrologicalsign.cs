using System;
using System.Collections.Generic;

namespace AstrologicalSign
{
    class program
    {
        static string signdata = "Aries Mar 21 Apr 20;Taurus Apr 21 May 20;Gemini May 21 Jun 21;Cancer Jun 22 Jul 22;Leo Jul 23 Aug 22;Virgo Aug 23 Sep 21;Libra Sep 22 Oct 22;Scorpio Oct 23 Nov 22;Sagittarius Nov 23 Dec 21;Capricorn Dec 22 Jan 20;Aquarius Jan 21 Feb 19;Pisces Feb 20 Mar 20";
        static void Main(string[] args)
        {
            var signarr = signdata.Split(';');
            var signs = new Dictionary<string,AstrologicalSignRange>();
            foreach (var item in signarr)
            {
                AstrologicalSignRange astro;
                date sd, ed;
                var sign = item.Split(' ');
                sd.month = sign[1];
                sd.day = int.Parse(sign[2]);
                ed.month = sign[3];
                ed.day = int.Parse(sign[4]);
                astro.startDate = sd;
                astro.endDate = ed;
                signs.Add(sign[0],astro);
            }
            string line = Console.ReadLine();
            while((line=Console.ReadLine())!=null)
            {
                var arr = line.Split(' ');
                var day = int.Parse(arr[0]);
                var month = arr[1];
                foreach (var item in signs)
                {
                    if(item.Value.startDate.month == month)
                    {
                        if(item.Value.startDate.day <= day)
                        {
                            Console.WriteLine(item.Key);
                        }
                    }
                    if(item.Value.endDate.month == month)
                    {
                        if(item.Value.endDate.day >= day)
                        {
                            Console.WriteLine(item.Key);
                        }
                    }
                }
            }
        }
    }
    public struct AstrologicalSignRange
    {
        public date startDate;
        public date endDate;
    }

    public struct date
    {
        public string month;
        public int day;
    }
}