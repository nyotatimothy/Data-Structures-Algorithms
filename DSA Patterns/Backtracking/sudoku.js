function solveSudoku(grid) {
    // Helper function to check if a number is valid in a given position
    function isValid(grid, row, col, num) {
        for (let i = 0; i < 9; i++) {
            // Check row, column, and 3x3 sub-grid
            if (grid[row][i] === num || grid[i][col] === num || grid[Math.floor(row / 3) * 3 + Math.floor(i / 3)][Math.floor(col / 3) * 3 + i % 3] === num) {
                return false;
            }
        }
        return true;
    }

    // Main backtracking function
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (grid[row][col] === '.') {
                for (let num = 1; num <= 9; num++) {
                    if (isValid(grid, row, col, num.toString())) {
                        grid[row][col] = num.toString();
                        if (solveSudoku(grid)) {
                            return true;
                        }
                        grid[row][col] = '.'; // Backtrack
                    }
                }
                return false; // Trigger backtracking
            }
        }
    }
    return true; // Puzzle solved
}

// Example usage
const grid = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];
solveSudoku(grid);
console.log(grid);





