// Helper function to count the total number of nodes in the BST
function countNodes(root) {
    if (!root) return 0;
    return 1 + countNodes(root.left) + countNodes(root.right);
}

// Helper function to find the k-th smallest element in the BST
function findKthElement(root, k, count) {
    if (!root) return null;

    // Search in the left subtree
    const left = findKthElement(root.left, k, count);
    if (left !== null) return left;

    // Increment count of visited nodes
    count.visited++;

    // If the current node is the k-th node, return its value
    if (count.visited === k) return root.value;

    // Otherwise, search in the right subtree
    return findKthElement(root.right, k, count);
}

// Main function to find the median of the BST
function findMedianOfBST(root) {
    if (!root) return null; // Handle edge case of empty tree

    // Count the total number of nodes in the BST
    const totalNodes = countNodes(root);

    // If the number of nodes is odd, find the middle element
    if (totalNodes % 2 === 1) {
        return findKthElement(root, Math.floor(totalNodes / 2) + 1, { visited: 0 });
    } else {
        // If even, find the average of the two middle elements
        const leftMiddle = findKthElement(root, totalNodes / 2, { visited: 0 });
        const rightMiddle = findKthElement(root, totalNodes / 2 + 1, { visited: 0 });
        return (leftMiddle + rightMiddle) / 2;
    }
}

// Example usage
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// Constructing a simple BST
const root = new TreeNode(4,
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(6, new TreeNode(5), new TreeNode(7))
);

console.log(findMedianOfBST(root)); // Output: 4