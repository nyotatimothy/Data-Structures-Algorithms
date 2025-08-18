// Function to move all '*' to the right in the character array
function moveStarsToEnd(arr) {
    // Initialize a pointer to track the position for non-'*' characters
    let pos = 0;

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // If the current character is not '*', move it to the 'pos' index
        if (arr[i] !== '*') {
            arr[pos] = arr[i];
            pos++;
        }
    }

    // Fill the remaining positions with '*'
    while (pos < arr.length) {
        arr[pos] = '*';
        pos++;
    }
}

// Example usage
const charArray = ['a', 'b', '*', 'c', 'd', '*', 'e', 'f', 'g'];
moveStarsToEnd(charArray);
console.log(charArray); // Output: ['a', 'b', 'c', 'd', 'e', 'f', 'g', '*', '*']