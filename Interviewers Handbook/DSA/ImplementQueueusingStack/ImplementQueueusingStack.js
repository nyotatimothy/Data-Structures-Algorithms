class QueueUsingStacks {
    constructor() {
        this.stack1 = []; // Stack for enqueue operations
        this.stack2 = []; // Stack for dequeue operations
    }

    // Enqueue operation
    enqueue(value) {
        // Push the value onto stack1
        this.stack1.push(value);
    }

    // Dequeue operation
    dequeue() {
        // If stack2 is empty, transfer elements from stack1 to stack2
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        // If stack2 is still empty, the queue is empty
        if (this.stack2.length === 0) {
            throw new Error("Queue is empty");
        }

        // Pop the top element from stack2
        return this.stack2.pop();
    }

    // Peek operation to get the front element
    peek() {
        // If stack2 is empty, transfer elements from stack1 to stack2
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        // If stack2 is still empty, the queue is empty
        if (this.stack2.length === 0) {
            throw new Error("Queue is empty");
        }

        // Return the top element from stack2 without removing it
        return this.stack2[this.stack2.length - 1];
    }

    // Check if the queue is empty
    isEmpty() {
        // The queue is empty if both stacks are empty
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

// Example usage
const queue = new QueueUsingStacks();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek());    // Output: 2
console.log(queue.dequeue()); // Output: 2
console.log(queue.isEmpty()); // Output: false
console.log(queue.dequeue()); // Output: 3
console.log(queue.isEmpty()); // Output: true