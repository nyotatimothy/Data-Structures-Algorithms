/*
Given a target sum and an array of integers, find the minimum length of a contiguous subarray of which the sum is greater than or equal to the target sum.

Example:
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
*/

function findMinSubarrayLength(target, nums) {
    // Initialize the minimum length to a large number
    let minLength = Infinity;
    // Initialize the current sum of the window
    let currentSum = 0;
    // Initialize the start of the window
    let start = 0;

    // Iterate over the array with the end of the window
    for (let end = 0; end < nums.length; end++) {
        // Add the current number to the current sum
        currentSum += nums[end];

        // While the current sum is greater than or equal to the target
        while (currentSum >= target) {
            // Update the minimum length of the subarray
            minLength = Math.min(minLength, end - start + 1);
            // Subtract the number at the start of the window from the current sum
            currentSum -= nums[start];
            // Move the start of the window forward
            start++;
        }
    }

    // If no valid subarray was found, return 0
    return minLength === Infinity ? 0 : minLength;
}

// Example usage
const target = 7;
const nums = [2, 3, 1, 2, 4, 3];
console.log(findMinSubarrayLength(target, nums)); // Output: 2