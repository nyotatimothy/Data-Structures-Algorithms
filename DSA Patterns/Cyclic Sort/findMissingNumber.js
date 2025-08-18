/* 
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

*/
function findMissingNumber(nums) {
    let i = 0;
    // Place each number at its correct index
    while (i < nums.length) {
        const correctIndex = nums[i] - 1;
        if (nums[i] !== nums[correctIndex]) {
            // Swap nums[i] with nums[correctIndex]
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        } else {
            i++;
        }
    }

    // Find the first index where the number is not correct
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    // If all numbers are in place, the missing number is n + 1
    return nums.length + 1;
}

// Example usage
const nums = [3, 7, 1, 2, 8, 4, 5];
console.log(findMissingNumber(nums)); // Output: 6