# Implementing IsWinningMove for NxN Tic-Tac-Toe

## Problem Description
Implement an `IsWinningMove` function for an NxN game of Tic-Tac-Toe (also known as Noughts & Crosses).

## Scope
While a full game implementation is not required, candidates should implement:
- The `IsWinningMove` function
- Necessary data structures to maintain game state

## Discussion Points

### Basic Approach (3x3)
Most candidates will initially propose:
- A 2-dimensional array representation
- O(n) solution evaluating each cell in the grid

### Optimization for NxN
When asked about generalizing to larger N:
- Space and time complexity become more important
- Original solution may need optimization

### Optimal Solution
Strong candidates will recognize:
- Need to maintain counts per:
  - Player
  - Row
  - Column
  - Diagonal
- Possible optimization: Use a common counter per row/column/diagonal
  - Decrement for one player
- Early termination when row/column/diagonal becomes unwinnable

## Implementation Notes
Candidates should:
- Implement enough structure to test `IsWinningMove`
- Focus on core logic rather than:
  - Move validation
  - Draw detection
  - Game initialization
  - UI elements
