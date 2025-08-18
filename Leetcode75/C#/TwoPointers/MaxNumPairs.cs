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

public class Solution {
    public int MaxOperations(int[] nums, int k) {
        Array.Sort(nums);

        int left = 0;
        int right = nums.Length - 1;
        int operations = 0;


        while (left < right) {
            int sum = nums[left] + nums[right];

            if (sum == k) {
                operations++;
                left++;
                right--;
            } else if (sum < k) {
                left++;
            } else {
                right--;
            }
        }
        return operations;
    }
}




public class Program {
    public static void Main() {
        Solution solution = new Solution();
        
        // Test case 1: [1,2,3,4], k = 5
        int[] nums1 = new int[] {1, 2, 3, 4};
        Console.WriteLine($"Test 1: {solution.MaxOperations(nums1, 5)}"); // Should output 2
        
        // Test case 2: [3,1,3,4,3], k = 6
        int[] nums2 = new int[] {3, 1, 3, 4, 3};
        Console.WriteLine($"Test 2: {solution.MaxOperations(nums2, 6)}"); // Should output 1
    }
}