/* Implement a regular expression-like pattern matcher: 

 

[A-Z]: match that character 

.: match any character 

*: match 0 or more instances of the previous character 

 

// does the pattern match the entire input? 

static bool IsMatch(string pattern, string input) */


// Function to check if the pattern matches the entire input
function isMatch(pattern, input) {
    // Memoization table to store results of subproblems
    const memo = {};

    // Recursive function to match pattern and input
    const match = (i, j) => {
        // Check if the result is already computed
        if (memo.hasOwnProperty(`${i},${j}`)) {
            return memo[`${i},${j}`];
        }

        // Base case: if both input and pattern are fully matched
        if (j === pattern.length) {
            return i === input.length;
        }

        // Check if the current characters match
        const currentMatch = (i < input.length) && 
                             (pattern[j] === input[i] || pattern[j] === '.');

        // Handle '*' in the pattern
        if (j + 1 < pattern.length && pattern[j + 1] === '*') {
            // Try skipping '*' and its preceding character or matching it
            const result = match(i, j + 2) || (currentMatch && match(i + 1, j));
            memo[`${i},${j}`] = result;
            return result;
        }

        // Proceed with the next characters if current ones match
        if (currentMatch) {
            const result = match(i + 1, j + 1);
            memo[`${i},${j}`] = result;
            return result;
        }

        // If no match, return false
        memo[`${i},${j}`] = false;
        return false;
    };

    // Start matching from the beginning of both input and pattern
    return match(0, 0);
}

// Example usage
const pattern = "A*B.C";
const input = "AAABXC";
console.log(isMatch(pattern, input)); // Output: true