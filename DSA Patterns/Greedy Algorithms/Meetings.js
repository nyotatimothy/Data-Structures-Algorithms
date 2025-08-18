/*
Given a list of meetings with start and end times, find the maximum number of non-overlapping meetings that can be attended.

Example:
Input: meetings = [[1, 3], [2, 4], [3, 5], [7, 8]]
Output: 3
*/
function maxNonOverlappingMeetings(meetings) {
    // Sort the meetings by their end times
    meetings.sort((a, b) => a[1] - b[1]);

    // Initialize the count of non-overlapping meetings
    let count = 0;
    // Initialize the end time of the last selected meeting
    let lastEndTime = -Infinity;

    // Iterate over each meeting
    for (let meeting of meetings) {
        // If the meeting starts after or when the last meeting ends
        if (meeting[0] >= lastEndTime) {
            // Increment the count of non-overlapping meetings
            count++;
            // Update the last end time to the current meeting's end time
            lastEndTime = meeting[1];
        }
    }

    // Return the count of non-overlapping meetings
    return count;
}

// Example usage
const meetings = [[1, 3], [2, 4], [3, 5], [7, 8]];
console.log(maxNonOverlappingMeetings(meetings)); // Output: 3