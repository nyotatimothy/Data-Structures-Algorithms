class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Function to detect and remove loop in a linked list
function detectAndRemoveLoop(head) {
    if (!head || !head.next) return; // Handle edge case of empty or single node list

    let slow = head;
    let fast = head;

    // Detect loop using Floyd's Cycle Detection
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        // Loop detected
        if (slow === fast) {
            break;
        }
    }

    // If no loop is detected, return
    if (slow !== fast) {
        return;
    }

    // Find the start of the loop
    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    // Find the node just before the start of the loop
    let prev = null;
    while (fast.next !== slow) {
        fast = fast.next;
    }

    // Remove the loop
    fast.next = null;
}

// Example usage
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Creating a loop for testing
head.next.next.next.next.next = head.next.next; // 5 -> 3

detectAndRemoveLoop(head);

// Function to print the linked list
function printList(node) {
    while (node) {
        console.log(node.value);
        node = node.next;
    }
}

printList(head); // Output: 1 2 3 4 5