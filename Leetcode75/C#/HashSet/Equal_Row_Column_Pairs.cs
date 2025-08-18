using System;


public class Solution {
    public int EqualPairs(int[][] grid) {
        int n = grid.Length; 
        int count = 0; 


        for (int r = 0; r < n; r++) {
            for (int c = 0; c < n; c++) {
                bool isEqual = true; 
                for (int i = 0; i < n; i++) {
                    if (grid[r][i] != grid[i][c]) {
                        isEqual = false; 
                        break;
                    }
                }
                if (isEqual) {
                    count++;
                }
            }
        }
        return count;
    }
}



class Program {
    static void Main(string[] args) {
        Solution solution = new Solution();
        
        // Example 1
        int[][] grid1 = new int[][] {
            new int[] {3, 2, 1},
            new int[] {1, 7, 6},
            new int[] {2, 7, 7}
        };
        
        int result1 = solution.EqualPairs(grid1);
        Console.WriteLine("Example 1 Output: " + result1);
        Console.WriteLine("Expected: 1");
        Console.WriteLine("Explanation: There is 1 equal row and column pair:");
        Console.WriteLine("- (Row 2, Column 1): [2,7,7]");
        Console.WriteLine();
        
        // Example 2
        int[][] grid2 = new int[][] {
            new int[] {3, 1, 2, 2},
            new int[] {1, 4, 4, 5},
            new int[] {2, 4, 2, 2},
            new int[] {2, 4, 2, 2}
        };
        
        int result2 = solution.EqualPairs(grid2);
        Console.WriteLine("Example 2 Output: " + result2);
        Console.WriteLine("Expected: 3");
        Console.WriteLine("Explanation: There are 3 equal row and column pairs:");
        Console.WriteLine("- (Row 0, Column 0): [3,1,2,2]");
        Console.WriteLine("- (Row 2, Column 2): [2,4,2,2]");
        Console.WriteLine("- (Row 3, Column 2): [2,4,2,2]");
    }
}