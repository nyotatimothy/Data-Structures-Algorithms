using System;
using System.Text;

public class Solution {
    public string RemoveStars(string s) {
        StringBuilder result = new StringBuilder();


        foreach (char c in s) {
            if (c == '*') {
                if (result.Length > 0) {
                    result.Length--;
                }
            } else {
                result.Append(c);
            }
        }
        
        return result.ToString();
    }
}



class Program {
    static void Main(string[] args) {
        Solution solution = new Solution();
        
        // Example 1
        string s1 = "leet**cod*e";
        Console.WriteLine($"Input: {s1}");
        Console.WriteLine($"Output: {solution.RemoveStars(s1)}");
        Console.WriteLine("Expected: lecoe");
        
        // Example 2
        string s2 = "erase*****";
        Console.WriteLine($"Input: {s2}");
        Console.WriteLine($"Output: {solution.RemoveStars(s2)}");
        Console.WriteLine("Expected: ");
    }
}