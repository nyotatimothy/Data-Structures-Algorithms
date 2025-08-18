/*
Initialize 2 pointers at end of array
Keep track of max are a found
Continue until the  pointers meet
    Compute current area w = r-l, h= min of the 2 heights
        update maxarea if currentarea is larger
        move pointer to the smaller height
        try find larger area
*/
using System; 


/*
Calculae initial sum of the first k elelments
Initialize maxSum with the first window sum
Slide the window and update maxSum if we need a larger sum
Return max avg
*/


public class Solution {
    public double FindMaxAverage(int[] nums, int k) {
        double currentSum = 0;
        for (int i = 0; i < k; i++) {
            currentSum += nums[i];
        }

        double maxSum = currentSum;

        for (int i = k; i < nums.Length; i++) {
            currentSum = currentSum + nums[i] - nums[i - k];
            maxSum = Math.Max(maxSum, currentSum);
        }
        return maxSum/k;
    }
}




public class Program {
    public static void Main() {
        Solution solution = new Solution();
        
        // Test case 1: [1,12,-5,-6,50,3], k = 4
        int[] nums1 = new int[] {1, 12, -5, -6, 50, 3};
        Console.WriteLine($"Maximum average: {solution.FindMaxAverage(nums1, 4)}"); // Should output 12.75
        
        // Test case 2: [5], k = 1
        int[] nums2 = new int[] {5};
        Console.WriteLine($"Maximum average: {solution.FindMaxAverage(nums2, 1)}"); // Should output 5.0
    }
}