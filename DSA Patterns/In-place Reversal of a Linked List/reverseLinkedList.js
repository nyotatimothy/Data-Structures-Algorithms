function reverseLinkedList(head) {
    // Initialize previous to null
    let previous = null;
    // Initialize current to head
    let current = head;

    // Traverse the list
    while (current !== null) {
        // Store the next node
        let next = current.next;
        // Reverse the current node's pointer
        current.next = previous;
        // Move previous and current one step forward
        previous = current;
        current = next;
    }

    // Return the new head of the reversed list
    return previous;
}

// Example usage
const head = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } };
const newHead = reverseLinkedList(head);
console.log(newHead); // Output: { val: 4, next: { val: 3, next: { val: 2, next: { val: 1, next: null } } } }