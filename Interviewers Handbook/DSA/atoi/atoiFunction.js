// Function to convert a string to an integer
function atoi(s) {
    // Check for null or empty string
    if (!s || s.trim() === '') {
        return 0;
    }

    // Trim leading and trailing spaces
    s = s.trim();

    // Regular expression to validate the string format
    const regex = /^[+-]?\d+/;
    const match = s.match(regex);

    // If the string does not match the regex, return 0
    if (!match) {
        return 0;
    }

    // Initialize variables for the sign and result
    let sign = 1;
    let result = 0;
    let i = 0;

    // Check for a sign at the beginning
    if (s[i] === '-') {
        sign = -1;
        i++;
    } else if (s[i] === '+') {
        i++;
    }

    // Iterate over the string, converting characters to numbers
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i] - '0');
        i++;
    }

    // Return the result with the correct sign
    return result * sign;
}

// Example usage
console.log(atoi("42")); // Output: 42
console.log(atoi("   -42")); // Output: -42
console.log(atoi("4193 with words")); // Output: 4193
console.log(atoi("words and 987")); // Output: 0
console.log(atoi("-91283472332")); // Output: -91283472332