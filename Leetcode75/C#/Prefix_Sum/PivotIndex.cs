using System;public class Solution {
    public int PivotIndex(int[] nums) {
        int totalSum = 0;
        foreach (int num in nums) {
            totalSum += num; 
        }


        int leftSum = 0;


        for (int i =0; i < nums.Length; i++) {
            int rightSum = totalSum - leftSum  - nums[i];


            if (leftSum == rightSum) {
                return i;
            }

            leftSum += nums[i];
        }
        return -1;
    }
}

class Program {
    static void Main(string[] args) {
        Solution solution = new Solution();
        
        // Example 1
        int[] nums1 = new int[] {1, 7, 3, 6, 5, 6};
        int result1 = solution.PivotIndex(nums1);
        Console.WriteLine("Example 1:");
        Console.WriteLine($"Input: nums = [{string.Join(", ", nums1)}]");
        Console.WriteLine($"Output: {result1}");
        Console.WriteLine("Expected Output: 3");
        Console.WriteLine();
        
        // Example 2
        int[] nums2 = new int[] {1, 2, 3};
        int result2 = solution.PivotIndex(nums2);
        Console.WriteLine("Example 2:");
        Console.WriteLine($"Input: nums = [{string.Join(", ", nums2)}]");
        Console.WriteLine($"Output: {result2}");
        Console.WriteLine("Expected Output: -1");
        Console.WriteLine();
        
        // Example 3
        int[] nums3 = new int[] {2, 1, -1};
        int result3 = solution.PivotIndex(nums3);
        Console.WriteLine("Example 3:");
        Console.WriteLine($"Input: nums = [{string.Join(", ", nums3)}]");
        Console.WriteLine($"Output: {result3}");
        Console.WriteLine("Expected Output: 0");
    }
}


