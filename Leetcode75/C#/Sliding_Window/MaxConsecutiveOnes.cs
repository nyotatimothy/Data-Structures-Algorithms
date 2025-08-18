using System; 
using System.Collections.Generic;
public class Solution {
    public int LongestOnes(int[] nums, int k) {
        int left = 0;
        int zeroCount = 0;
        int maxLength = 0; 
        
        for (int right = 0; right < nums.Length; right++) {
            if (nums[right] ==0) {
                zeroCount++;
            }

            while (zeroCount > k) {
                if (nums[left] ==0) {
                    zeroCount--;
                }
                left++;
            }
            maxLength = Math.Max(maxLength, right - left +1);
        }
        return maxLength;
        
    }
}



public class Program {
    public static void Main() {
        Solution solution = new Solution();
        
        // Test case 1: [1,1,1,0,0,0,1,1,1,1,0], k = 2
        int[] test1 = new int[] {1,1,1,0,0,0,1,1,1,1,0};
        Console.WriteLine($"Test 1: {solution.LongestOnes(test1, 2)}"); // Should output 6
        
        // Test case 2: [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
        int[] test2 = new int[] {0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1};
        Console.WriteLine($"Test 2: {solution.LongestOnes(test2, 3)}"); // Should output 10
    }
}