// Function to find a number in rotated sorted array
function findNumber(arr, target) {
    // Handle edge cases
    if (!arr || arr.length === 0) return false;
    
    let left = 0;
    let right = arr.length - 1;
    
    // Binary search
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        // If we found the target
        if (arr[mid] === target) {
            return true;
        }
        
        // If left half is sorted
        if (arr[left] <= arr[mid]) {
            // Check if target lies in left half
            if (target >= arr[left] && target < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // If right half is sorted
        else {
            // Check if target lies in right half
            if (target > arr[mid] && target <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
    return false;
}

// Function to find pivot (smallest element) in rotated sorted array
function findPivot(arr) {
    // Handle edge cases
    if (!arr || arr.length === 0) return null;
    if (arr.length === 1) return arr[0];
    
    let left = 0;
    let right = arr.length - 1;
    
    // If array is not rotated
    if (arr[left] < arr[right]) return arr[left];
    
    // Binary search
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        // If mid element is greater than next element
        if (arr[mid] > arr[mid + 1]) {
            return arr[mid + 1];
        }
        
        // If mid element is less than previous element
        if (arr[mid] < arr[mid - 1]) {
            return arr[mid];
        }
        
        // If left half is sorted, pivot must be in right half
        if (arr[left] <= arr[mid]) {
            left = mid + 1;
        }
        // If right half is sorted, pivot must be in left half
        else {
            right = mid - 1;
        }
    }
    
    return arr[left];
}

// Example usage
const arr = [30, 40, 50, 60, 10, 20];

// Test finding numbers
console.log(findNumber(arr, 40));  // Output: true
console.log(findNumber(arr, 20));  // Output: true
console.log(findNumber(arr, 70));  // Output: false

// Test finding pivot
console.log(findPivot(arr));       // Output: 10