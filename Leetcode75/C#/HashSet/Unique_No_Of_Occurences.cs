/*
[1,2,2,1,1,3]
1. create dict to store count of each value
2. use for-each loop to count occurences of each value in the array
    2a. if no. exists in the dictionary, we increment its count, else add with count 1
3. extract all occurence counts into a list
4. create a hashset from counts to eliminate duplicates
5. if all occurence counts are uniques, size of counts and uniquecounts should be same
6. return true if all occurence counts are unique, false otherwise
return counts.Count == uniqueCounts.Count
*/
using System;
using System.Collections.Generic;
using System.Linq;

public class Solution {
    public bool UniqueOccurrences(int[] arr) {
        Dictionary<int, int> countMap = new Dictionary<int, int>();

        foreach (int num in arr) {
            if (countMap.ContainsKey(num)) {
                countMap[num]++;
            } else {
                countMap[num] = 1;
            }
        }

        List<int> counts = countMap.Values.ToList();

        HashSet<int> uniqueCounts = new HashSet<int>(counts);

        return counts.Count == uniqueCounts.Count;
    }
}

class Program
{
    static void Main(string[] args)
    {
        Solution solution = new Solution();
        
        // Example 1
        int[] arr1 = new int[] { 1, 2, 2, 1, 1, 3 };
        bool result1 = solution.UniqueOccurrences(arr1);
        Console.WriteLine($"Example 1: {string.Join(", ", arr1)} => {result1}");
        
        // Example 2
        int[] arr2 = new int[] { 1, 2 };
        bool result2 = solution.UniqueOccurrences(arr2);
        Console.WriteLine($"Example 2: {string.Join(", ", arr2)} => {result2}");
        
        // Example 3
        int[] arr3 = new int[] { -3, 0, 1, -3, 1, 1, -3, 10, 0 };
        bool result3 = solution.UniqueOccurrences(arr3);
        Console.WriteLine($"Example 3: {string.Join(", ", arr3)} => {result3}");
        
        // Additional example
        int[] arr4 = new int[] { 1, 1, 2, 2, 3, 3 };
        bool result4 = solution.UniqueOccurrences(arr4);
        Console.WriteLine($"Additional: {string.Join(", ", arr4)} => {result4}");
    }
}