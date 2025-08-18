
/*
Problem: You have a set of islands connected by bridges. Each bridge connects two islands.
Determine if all islands are connected directly or indirectly. 
If not, find out how many separate groups of connected islands exist.
Simplified Problem
Imagine you have 4 islands, and the following bridges connect them:
Bridge 1 connects Island 0 and Island 1
Bridge 2 connects Island 2 and Island 3
*/

class UnionFind {
    constructor(size) {
        // Initialize the parent array where each island is its own parent
        this.parent = Array.from({ length: size }, (_, index) => index);
        // Initialize the rank array to keep track of tree heights
        this.rank = Array(size).fill(1);
    }

    find(island) {
        // Find the root of the island with path compression
        if (this.parent[island] !== island) {
            // Recursively find the root and apply path compression
            this.parent[island] = this.find(this.parent[island]);
        }
        return this.parent[island];
    }

    union(island1, island2) {
        // Find the roots of the islands
        const root1 = this.find(island1);
        const root2 = this.find(island2);

        // If they are already in the same set, do nothing
        if (root1 === root2) return false;

        // Union by rank to keep the tree flat
        if (this.rank[root1] > this.rank[root2]) {
            this.parent[root2] = root1;
        } else if (this.rank[root1] < this.rank[root2]) {
            this.parent[root1] = root2;
        } else {
            this.parent[root2] = root1;
            this.rank[root1] += 1;
        }
        return true;
    }

    countComponents() {
        // Count unique roots to determine the number of components
        const uniqueRoots = new Set();
        for (let i = 0; i < this.parent.length; i++) {
            uniqueRoots.add(this.find(i));
        }
        return uniqueRoots.size;
    }
}

function countDisconnectedComponents(n, bridges) {
    // Initialize Union-Find for n islands
    const uf = new UnionFind(n);

    // Process each bridge
    for (const [island1, island2] of bridges) {
        uf.union(island1, island2);
    }

    // Return the number of disconnected components
    return uf.countComponents();
}

// Example usage
const n = 4; // Number of islands
const bridges = [[0, 1], [2, 3]]; // Bridges between islands
console.log(countDisconnectedComponents(n, bridges)); // Output: 2