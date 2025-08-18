// Function to check if the word is contained in the grid
function isWordInGrid(grid, word) {
    const rows = grid.length;
    const cols = grid[0].length;
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],         [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    // Recursive function to search for the word
    const search = (x, y, index) => {
        // Base case: if the entire word is found
        if (index === word.length) {
            return true;
        }

        // Check if the current position is out of bounds or already visited
        if (x < 0 || x >= rows || y < 0 || y >= cols || grid[x][y] !== word[index]) {
            return false;
        }

        // Temporarily mark the current cell as visited
        const temp = grid[x][y];
        grid[x][y] = '#';

        // Explore all 8 possible directions
        for (const [dx, dy] of directions) {
            if (search(x + dx, y + dy, index + 1)) {
                return true;
            }
        }

        // Backtrack: unmark the current cell
        grid[x][y] = temp;
        return false;
    };

    // Start the search from each cell in the grid
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (search(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
}

// Example usage
const grid = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];
const word = "ABCCED";
console.log(isWordInGrid(grid, word)); // Output: true