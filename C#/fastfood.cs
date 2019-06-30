using System;
using System.Collections.Generic;
using System.Linq;

namespace fastfood
{
    class Prize
    {
        public List<int> Coupons { get; private set; }
        public int Amount { get; private set; }

        public Prize(List<int> Coupons, int amount)
        {
            this.Coupons = Coupons;
            this.Amount = amount;
        }
    }

    class PrizeCalculator
    {
        private List<Prize> prizes;

        public PrizeCalculator()
        {
            this.prizes = new List<Prize>();
        }

        public void addPrize(List<int> idCouponsAmount)
        {
            int amount = idCouponsAmount[idCouponsAmount.Count - 1];

            List<int> coupons = new List<int>(idCouponsAmount.Count - 2);
            
            for (int i = 1; i < idCouponsAmount.Count - 1; i++)
            {
                coupons.Add(idCouponsAmount[i]);
            }

            addPrize(coupons, amount);
        }

        public void addPrize(List<int> coupons, int amount)
        {
            // should check for duplicate entries; if duplicate exits then asses changes
            Prize prize = new Prize(coupons, amount);
            this.prizes.Add(prize);
        }

        public int calculatePrizeAmount(List<int> coupons)
        {
            int amount = 0;
            foreach (var prize in prizes)
            {
                int min = int.MaxValue;
                foreach(int coupon in prize.Coupons)
                {
                    min = Math.Min(min, coupons[coupon - 1]);
                }

                amount += min * prize.Amount;
            }
            return amount;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            int testCases = Int32.Parse(Console.ReadLine());

            string line;
            int i = 0;
            while(i < testCases)
            {
                PrizeCalculator prizeCalculator = new PrizeCalculator();
                line = Console.ReadLine();
                int[] prizesCoupons = line.Split(' ').Select(int.Parse).ToArray();

                int j = 0;
                while(j < prizesCoupons[0])
                {
                    line = Console.ReadLine();
                    prizeCalculator.addPrize(line.Split(' ').Select(int.Parse).ToList());
                    j++;
                }
                line = Console.ReadLine();

                List<int> coupons = line.Split(' ').Select(int.Parse).ToList();

                Console.WriteLine(prizeCalculator.calculatePrizeAmount(coupons));

                i++;
            }
        }
    }
}
