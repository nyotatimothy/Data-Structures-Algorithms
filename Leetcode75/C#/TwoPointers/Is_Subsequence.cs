using System;

public class Solution {
    public bool IsSubsequence(string s, string t) {
        if (string.IsNullOrEmpty(s)) return true;

        if (string.IsNullOrEmpty(t)) return false;

        int sIndex = 0;

        for (int tIndex = 0; tIndex < t.Length && sIndex < s.Length; tIndex++) {
            if (s[sIndex] == t[tIndex]) {
                sIndex++;
            }
        }
        return sIndex == s.Length;
    }
}


public class Program {
public static void Main() {

Solution solution = new Solution();
        
        // Test case 1: "abc" in "ahbgdc"
        string s1 = "abc";
        string t1 = "ahbgdc";
        Console.WriteLine($"Is '{s1}' a subsequence of '{t1}'? {solution.IsSubsequence(s1, t1)}");
        
        // Test case 2: "axc" in "ahbgdc"
        string s2 = "axc";
        string t2 = "ahbgdc";
        Console.WriteLine($"Is '{s2}' a subsequence of '{t2}'? {solution.IsSubsequence(s2, t2)}");
    }
}