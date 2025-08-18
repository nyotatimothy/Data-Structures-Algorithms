function mergeIntervals(intervals) {
    // If there are no intervals, return an empty array
    if (intervals.length === 0) {
        return [];
    }

    // Sort the intervals by their start times
    intervals.sort((a, b) => a[0] - b[0]);

    // Initialize the result array with the first interval
    const result = [intervals[0]];

    // Iterate through the sorted intervals starting from the second
    for (let i = 1; i < intervals.length; i++) {
        // Get the last interval in the result array
        const lastInterval = result[result.length - 1];
        const currentInterval = intervals[i];

        // If the current interval overlaps with the last interval, merge them
        if (currentInterval[0] <= lastInterval[1]) {
            lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
        } else {
            // If they don't overlap, add the current interval to the result
            result.push(currentInterval);
        }
    }

    // Return the merged intervals
    return result;
}

// Example usage
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(mergeIntervals(intervals)); // Output: [[1, 6], [8, 10], [15, 18]]