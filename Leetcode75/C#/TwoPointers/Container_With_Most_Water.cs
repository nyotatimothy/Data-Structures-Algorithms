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
    public int MaxArea(int[] height) {
        int left = 0; 
        int right = height.Length - 1; 

        int maxArea = 0;


        while (left < right) {
            int currentArea = (right - left) * Math.Min(height[left], height[right]);

            maxArea = Math.Max(maxArea, currentArea);

            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxArea;
    }
}




public class Program {
    public static void Main() {
        Solution solution = new Solution();
        
        // Test case from example
        int[] heights = new int[] {1, 8, 6, 2, 5, 4, 8, 3, 7};
        Console.WriteLine($"Maximum water container area: {solution.MaxArea(heights)}");
    }
}