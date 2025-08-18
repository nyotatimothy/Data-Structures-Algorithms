using System;
using System.Collections.Generic;
using System.Linq;

public class Solution {
    public bool CloseStrings(string word1, string word2) {
        if (word1.Length != word2.Length)
            return false;

        Dictionary<char, int> freq1 = new Dictionary<char, int>();
        Dictionary<char, int> freq2 = new Dictionary<char, int>();

        foreach (char c in word1) {
            if (freq1.ContainsKey(c))
                freq1[c]++;
            else
                freq1[c] = 1;
        }

        foreach (char c in word2) {
            if (freq2.ContainsKey(c))
                freq2[c]++;
            else
                freq2[c] = 1; 
        }


        if (!freq1.Keys.ToHashSet().SetEquals(freq2.Keys.ToHashSet()))
            return false; 
        
        var sortedFreq1 = freq1.Values.OrderBy(x => x).ToList();
        var sortedFreq2 = freq2.Values.OrderBy(x => x).ToList();


        return Enumerable.SequenceEqual(sortedFreq1, sortedFreq2);
        
    }
}



class Program {
    static void Main(string[] args) {
        Solution solution = new Solution();
        
        // Example 1: word1 = "abc", word2 = "bca"
        string word1 = "abc";
        string word2 = "bca";
        bool result1 = solution.CloseStrings(word1, word2);
        Console.WriteLine($"Example 1: \"{word1}\" and \"{word2}\" are close: {result1}");
        // Output: true
        
        // Example 2: word1 = "a", word2 = "aa"
        word1 = "a";
        word2 = "aa";
        bool result2 = solution.CloseStrings(word1, word2);
        Console.WriteLine($"Example 2: \"{word1}\" and \"{word2}\" are close: {result2}");
        // Output: false
        
        // Example 3: word1 = "cabbba", word2 = "abbccc"
        word1 = "cabbba";
        word2 = "abbccc";
        bool result3 = solution.CloseStrings(word1, word2);
        Console.WriteLine($"Example 3: \"{word1}\" and \"{word2}\" are close: {result3}");
        // Output: true
    }
}