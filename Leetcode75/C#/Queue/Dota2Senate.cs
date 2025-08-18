using System;
using System.Collections.Generic;


public class Solution {
    public string PredictPartyVictory(string senate) {
        Queue<int> radiant = new Queue<int>();
        Queue<int> dire = new Queue<int>();


        for (int i = 0; i < senate.Length; i++) {
            if (senate[i] == 'R') {
                radiant.Enqueue(i);
            } else {
                dire.Enqueue(i);
            }
        }

        while (radiant.Count > 0 && dire.Count > 0) {
            int radiantIndex = radiant.Dequeue();
            int direIndex = dire.Dequeue();


            if (radiantIndex < direIndex) {
                radiant.Enqueue(radiantIndex + senate.Length);
            } else {
                dire.Enqueue(direIndex + senate.Length);
            }
        }
        return radiant.Count > 0 ? "Radiant" : "Dire";
    }
}




class Program {
    static void Main(string[] args) {
        Solution solution = new Solution();
        
        // Example test
        string senate = "RD";
        string result = solution.PredictPartyVictory(senate);
        Console.WriteLine($"For senate \"{senate}\", the winning party is: {result}");
        
        // Additional test
        senate = "RDD";
        result = solution.PredictPartyVictory(senate);
        Console.WriteLine($"For senate \"{senate}\", the winning party is: {result}");
        
        senate = "DRRDRDRDRDDRDRDR";
        result = solution.PredictPartyVictory(senate);
        Console.WriteLine($"For senate \"{senate}\", the winning party is: {result}");
    }
}