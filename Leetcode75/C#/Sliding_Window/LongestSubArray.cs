using System;

public class Solution {
    public int LongestSubarray(int[] nums) {
        int n = nums.Length; 

        if (n == 1) return 0;

        int maxLength = 0;
        int prevOnesCount = 0; 
        int currentOnesCount = 0;  


        for (int i = 0; i < n; i++) {
            if (nums[i] == 1) {
                currentOnesCount++;
            } else {
                maxLength = Math.Max(maxLength, prevOnesCount + currentOnesCount);
                prevOnesCount = currentOnesCount; 
                currentOnesCount = 0; 
            }
        }
        maxLength = Math.Max(maxLength, prevOnesCount + currentOnesCount);
        return maxLength == n ? n-1 : maxLength;
    }
}

public class Program {
    public static void Main() {
        Solution solution = new Solution();
        
        // Test case 1: [1,1,0,1]
        int[] test1 = new int[] {1,1,0,1};
        Console.WriteLine($"Test 1: {solution.LongestSubarray(test1)}"); // Should output 3
        
        // Test case 2: [0,1,1,1,0,1,1,0,1]
        int[] test2 = new int[] {0,1,1,1,0,1,1,0,1};
        Console.WriteLine($"Test 2: {solution.LongestSubarray(test2)}"); // Should output 5
        
        // Test case 3: [1,1,1]
        int[] test3 = new int[] {1,1,1};
        Console.WriteLine($"Test 3: {solution.LongestSubarray(test3)}"); // Should output 2
    }
}
