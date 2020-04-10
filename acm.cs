// Kattis : acm

using System;
using System.Collections.Generic;

namespace acm
{
    class Problem
    {
        public int time;

        public bool isSolved;
    }

    class Game
    {
        Dictionary<char, Problem> problems = new Dictionary<char, Problem>();

        public void Update(string line)
        {
            string[] arr = line.Split(' ');

            int time = int.Parse(arr[0]);
            char problemName = arr[1][0];
            bool isSolved = arr[2] == "right";

            if(!isSolved) time = 20;

            if(!problems.ContainsKey(problemName))
            {
                problems.Add(problemName, new Problem());
            }

            problems[problemName].isSolved = isSolved;
            problems[problemName].time += time;
        }

        public string Score()
        {
            int score = 0;
            int count = 0;

            foreach (var problem in problems.Values)
            {
                if(problem.isSolved)
                {
                    count++;
                    score += problem.time;
                } 
            }

            return count + " "+ score;
        }
    }

    class Program
    {
        public static void Main(string[] args)
        {
            string line;
            Game game = new Game();

            while((line=Console.ReadLine()) != "-1")
            {
                game.Update(line);
            }

            System.Console.WriteLine(game.Score());
        }
    }
}