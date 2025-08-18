# Planting Flowers Problem

## Overview
This is a simple coding question that tests basic loops, edge-case checking, and problem solving. Good to use for phone screen, explore or intern candidates. Many candidates overthink it, and a surprising number cannot work through to a solution.

## Problem Description
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array `flowerbed` containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer `n`, return if `n` new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

## Examples

### Example 1
**Input:** `flowerbed = [1,0,0,0,1], n = 1`  
**Output:** `true`

### Example 2
**Input:** `flowerbed = [1,0,0,0,1], n = 2`  
**Output:** `false`

## Constraints
- 1 <= flowerbed.length <= 2 * 10^4
- flowerbed[i] is 0 or 1
- There are no two adjacent flowers in flowerbed
- 0 <= n <= flowerbed.length











## Evaluation Criteria

### Problem Solving
- Does the candidate demonstrate clear understanding of the problem?
- Do they ask clarifying questions when needed?
- **Bonus:** Do they consider implicit aspects like array mutability?
- Do they methodically step through examples to develop their approach?
- How do they handle getting stuck? Do they break down to simpler cases?
- How do they handle edge cases at the start/end of the flowerbed?
- **Bonus:** Do they identify optimizations like:
  - Early return when condition is satisfied
  - Initial check for n=0
  - Early return if n is too large for flowerbed length

### Technical Implementation
- Code clarity and readability
- Appropriate variable names and comments
- Correct return type (boolean vs count)
- Space efficiency - avoiding unnecessary copies
- Computational efficiency - minimal looping
- Understanding of time/space complexity

### Testing Approach
- Self-initiated testing vs prompted
- Test case coverage including edge cases:
  - n = 0
  - n = flowerbed.length
  - flowerbed = [0]
  - flowerbed = [1] 
  - flowerbed = [0,0]
