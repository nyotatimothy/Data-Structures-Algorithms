using System;
public class Solution {
    public int LargestAltitude(int[] gain) {
        int currentAltitude = 0; 
        int maxAltitude = 0;


        foreach (int change in gain) {
            currentAltitude += change; 
            maxAltitude = Math.Max(maxAltitude, currentAltitude);
        }
        return maxAltitude;
    }
}



class Program {
    static void Main(string[] args) {
        Solution solution = new Solution();
        
        // Example 1
        int[] gain1 = new int[] {-5, 1, 5, 0, -7};
        int result1 = solution.LargestAltitude(gain1);
        Console.WriteLine("Example 1:");
        Console.WriteLine($"Input: gain = [{string.Join(", ", gain1)}]");
        Console.WriteLine($"Output: {result1}");
        Console.WriteLine("Expected Output: 1");
        
        // Example 2
        int[] gain2 = new int[] {-4, -3, -2, -1, 4, 3, 2};
        int result2 = solution.LargestAltitude(gain2);
        Console.WriteLine("\nExample 2:");
        Console.WriteLine($"Input: gain = [{string.Join(", ", gain2)}]");
        Console.WriteLine($"Output: {result2}");
        Console.WriteLine("Expected Output: 0");
    }
}