/*
Given a linked list, determine if it has a cycle in it.

Example:
Input: head = [3,2,0,-4], pos = 1
Output: true
*/

function detectCycle(head) {
    // If the list is empty or has only one node, return null
    if (!head || !head.next) {
        return null;
    }

    // Initialize slow and fast pointers
    let slow = head;
    let fast = head;

    // Traverse the list with fast and slow pointers
    while (fast && fast.next) {
        // Move slow by one step
        slow = slow.next;
        // Move fast by two steps
        fast = fast.next.next;

        // If slow and fast meet, there is a cycle
        if (slow === fast) {
            // Initialize entry to head
            let entry = head;
            // Find the start of the cycle
            while (entry !== slow) {
                entry = entry.next;
                slow = slow.next;
            }
            return entry; // Return the start of the cycle
        }
    }

    return null; // No cycle found
}

// Example usage
const head = { val: 3, next: { val: 2, next: { val: 0, next: { val: -4, next: null } } } };
head.next.next.next.next = head.next; // Creating a cycle
console.log(detectCycle(head)); // Output: Node with value 2

