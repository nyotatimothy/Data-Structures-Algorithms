# Fibonacci Sequence

The Fibonacci sequence appears in nature all around us, in the arrangement of seeds in a sunflower and the spiral of a nautilus, for example.

The Fibonacci sequence begins with 0 and 1 as its first and second terms. After these first two elements, each subsequent element is equal to the sum of the previous two elements.

Programmatically:

- Fibonacci(0) = 0
- Fibonacci(1) = 1
- Fibonacci(2) = (0 + 1) = 1
- Fibonacci(3) = (1 + 1) = 2
- Fibonacci(4) = (2 + 1) = 3

Given n, return the n^th number in the sequence.

As an example, n=4. The Fibonacci sequence to 4 is fs = [0,1,1,2,3]

## Function Description

Complete the recursive and optimized function in the editor. It must return the n^th element in the Fibonacci sequence.

`fibonacci` has the following parameter(s):

- `n`: the integer index of the sequence to return

## Solution

The recursive and optimized solution expected here will require skills in Dynamic Programming. The easiest solution is based on a memoization algorithm, which requires a deep understanding of recursion and caching to speed up the time and memory of the solution. Recursion for Fibonacci is O(1.618^n)~O(2^n) but applying memoization the time complexity is O(n).
