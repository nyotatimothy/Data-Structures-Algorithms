/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Example:
Input: [4, 1, 2, 1, 2]
Output: 4
*/
function findSingleNumber(nums) {
    // Initialize the result to 0
    let result = 0;

    // Iterate over each number in the array
    for (let num of nums) {
        // XOR the current number with the result
        result ^= num;
    }

    // Return the result, which is the single number
    return result;
}

// Example usage
const nums = [4, 1, 2, 1, 2];
console.log(findSingleNumber(nums)); // Output: 4