using System;

namespace gerrymandering
{
    class District{

        public int VotesA { get; private set; }

        public int VotesB { get; private set; }

        public District()
        {
            VotesA = 0;
            VotesB = 0;
        }

        public void AddVotes(int votesA, int votesB)
        {
            VotesA += votesA;
            VotesB += votesB;
        }

        public int VotesTotal()
        {
            return VotesA + VotesB;
        }

        public int WastedA()
        {
            if(VotesA < VotesB)
            {
                return VotesA;
            }

            int wastedA = VotesTotal() - (VotesTotal() / 2 + 1) - WastedB();

            return wastedA;
        }

        public int WastedB()
        {
            if (VotesB < VotesA)
            {
                return VotesB;
            }

            int wastedB = VotesTotal() - (VotesTotal() / 2 + 1) - WastedA();

            return wastedB;
        }

        public char Winner()
        {
            if(VotesA > VotesB)
            {
                return 'A';
            }
            if (VotesA < VotesB)
            {
                return 'B';
            }
            return 'T';
        }

        public void Print()
        {
            Console.WriteLine($"{Winner()} {WastedA()} {WastedB()}");
        }
    }

    class Election
    {
        private District[] DistrictArray;

        public Election(int districts)
        {
            DistrictArray = new District[districts];

            for (int i = 0; i < DistrictArray.Length; i++)
            {
                DistrictArray[i] = new District();
            }
        }

        public void AddVotes(int precinct, int votesA, int votesB)
        {
            int index = precinct - 1;

            DistrictArray[index].AddVotes(votesA, votesB);
        }

        public void Print()
        {
            int wastedA = 0;
            int wastedB = 0;
            int votesTotal = 0;

            foreach (var item in DistrictArray)
            {
                wastedA += item.WastedA();
                wastedB += item.WastedB();
                votesTotal += item.VotesTotal();

                item.Print();
            }

            int wasted = Math.Abs(wastedA - wastedB);
            double efficiency = (double) wasted / votesTotal;

            Console.WriteLine(efficiency);
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            string line = Console.ReadLine();
            string[] arr = line.Split(' ');

            int precincts = int.Parse(arr[0]);
            int districts = int.Parse(arr[1]);

            Election election = new Election(districts);

            for (int i = 0; i < precincts; i++)
            {
                line = Console.ReadLine();

                arr = line.Split(' ');

                int district = int.Parse(arr[0]);

                int votesA = int.Parse(arr[1]);

                int votesB = int.Parse(arr[2]);

                election.AddVotes(district, votesA, votesB);
            }

            election.Print();
        }
    }
}
