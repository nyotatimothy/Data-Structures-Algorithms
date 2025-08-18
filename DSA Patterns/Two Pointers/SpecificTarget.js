/*
Given a sorted array of integers, find two numbers that add up to a specific target.

Example:
Input: nums = [1, 2, 3, 4, 6], target = 6
Output: [1, 3]
*/
function findTwoSumIndices(nums, target) {
    // Initialize the start pointer at the beginning of the array
    let start = 0;
    // Initialize the end pointer at the end of the array
    let end = nums.length - 1;

    // Iterate while the start pointer is less than the end pointer
    while (start < end) {
        // Calculate the sum of the elements at the start and end pointers
        const currentSum = nums[start] + nums[end];

        // If the current sum is equal to the target, return the indices
        if (currentSum === target) {
            return [start, end];
        }

        // If the current sum is less than the target, move the start pointer to the right
        if (currentSum < target) {
            start++;
        } else {
            // If the current sum is greater than the target, move the end pointer to the left
            end--;
        }
    }

    // If no valid pair is found, return an empty array
    return [];
}

// Example usage
const nums = [1, 2, 3, 4, 6];
const target = 6;
console.log(findTwoSumIndices(nums, target)); // Output: [1, 3]