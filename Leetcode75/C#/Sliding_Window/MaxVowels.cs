using System; 
using System.Collections.Generic;

public class Solution {
    public int MaxVowels(string s, int k) {
        HashSet<char> vowels = new HashSet<char> {'a', 'e', 'i', 'o', 'u'};

        int currentCount = 0; 
        for (int i = 0; i < k; i++) {
            if (vowels.Contains(s[i])) {
                currentCount++;
            }
        }

        int maxCount = currentCount;

        for (int i = k; i < s.Length; i++) {
            if (vowels.Contains(s[i - k])) {
                currentCount--;
            }
            if (vowels.Contains(s[i])) {
                currentCount++;
            }
            maxCount = Math.Max(maxCount, currentCount);
        }
        return maxCount;
    }
}



public class Program {
    public static void Main() {
        Solution solution = new Solution();
        
        // Test case 1: "abciiidef", k = 3
        Console.WriteLine($"Test 1: {solution.MaxVowels("abciiidef", 3)}"); // Should output 3
        
        // Test case 2: "aeiou", k = 2
        Console.WriteLine($"Test 2: {solution.MaxVowels("aeiou", 2)}"); // Should output 2
        
        // Test case 3: "leetcode", k = 3
        Console.WriteLine($"Test 3: {solution.MaxVowels("leetcode", 3)}"); // Should output 2
    }
}