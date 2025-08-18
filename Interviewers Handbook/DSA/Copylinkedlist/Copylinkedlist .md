# Linked List Copy Problem

## Part 1: Basic Linked List Copy

Copy a linked list. Each node has a value and a pointer to the next node.

### Notes

This is a basic coding problem. Typical computer science degrees should cover a linked list and clarifying questions can be asked if the candidate has not learnt about linked lists. I've found it filters out a surprising number of candidates.

## Part 2: Linked List with Random Pointers

Copy a linked list where each node has a pointer to another random node within the linked list. This pointer could be before or after the node.

### Considerations

This the meat of the question. There are a number of solutions. I have never seen someone has ever answered O(n) with no extra memory.

#### O(n*n) Solution:
- Create the list
- Iterate along first list and count the number of spots from start of list to linked node
- Do the same in new list

#### O(n) + Memory Solution:
- Create a hash map of old node to new node
- Iterate through original list and new list at same time and look up new's random linked node based on old's random linked node

#### O(n) Solution:
- Join the old and new list in a combined linked list
- You can then add the random links to new nodes since they sit next to the old's random node