/*
Given a binary tree, return the preorder, inorder, and postorder traversals of the tree.
*/

function preorderTraversal(node) {
    if (node === null) {
        return [];
    }
    // Visit root, then left, then right
    return [node.val].concat(preorderTraversal(node.left), preorderTraversal(node.right));
}

function inorderTraversal(node) {
    if (node === null) {
        return [];
    }
    // Visit left, then root, then right
    return inorderTraversal(node.left).concat([node.val], inorderTraversal(node.right));
}

function postorderTraversal(node) {
    if (node === null) {
        return [];
    }
    // Visit left, then right, then root
    return postorderTraversal(node.left).concat(postorderTraversal(node.right), [node.val]);
}

function levelOrderTraversal(root) {
    if (root === null) {
        return [];
    }
    const queue = [root];
    const result = [];
    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node.val);
        if (node.left !== null) {
            queue.push(node.left);
        }
        if (node.right !== null) {
            queue.push(node.right);
        }
    }
    return result;
}

// Example usage
const tree = {
    val: 1,
    left: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: { val: 5, left: null, right: null }
    },
    right: {
        val: 3,
        left: { val: 6, left: null, right: null },
        right: { val: 7, left: null, right: null }
    }
};

console.log(preorderTraversal(tree)); // Output: [1, 2, 4, 5, 3, 6, 7]
console.log(inorderTraversal(tree));  // Output: [4, 2, 5, 1, 6, 3, 7]
console.log(postorderTraversal(tree)); // Output: [4, 5, 2, 6, 7, 3, 1]
console.log(levelOrderTraversal(tree)); // Output: [1, 2, 3, 4, 5, 6, 7]