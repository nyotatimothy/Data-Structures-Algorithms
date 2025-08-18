using System;

public class Solution {
    public void MoveZeroes(int[] nums) {
      int nonZeroIndex = 0; 

      for (int i = 0; i < nums.Length; i++) {
        if (nums[i] != 0) {
            if (i != nonZeroIndex) {
                int temp = nums[nonZeroIndex];
                nums[nonZeroIndex] = nums[i];
                nums[i] = temp;
            }

            nonZeroIndex++;
        }
      }
    }
}

public class Program {
	public static void Main() {
	int[] numbers = new int[] {0,1,0,3,12}	;
		
		Solution solution = new Solution();
	 Console.WriteLine("Original array: " + string.Join(", ", numbers));
        
        // Move zeroes to the end
        solution.MoveZeroes(numbers);
        
        // Print the modified array
        Console.WriteLine("After moving zeroes: " + string.Join(", ", numbers));
    }
}