function topologicalSort(tasks, dependencies) {
    // Initialize the graph and in-degree map
    const graph = {};
    const inDegree = {};
    tasks.forEach(task => {
        graph[task] = [];
        inDegree[task] = 0;
    });

    // Build the graph and in-degree map
    dependencies.forEach(([u, v]) => {
        graph[u].push(v);
        inDegree[v]++;
    });

    // Initialize the queue with tasks having in-degree 0
    const queue = [];
    for (let task in inDegree) {
        if (inDegree[task] === 0) {
            queue.push(task);
        }
    }

    // Initialize the result list
    const result = [];

    // Process the queue
    while (queue.length > 0) {
        const task = queue.shift();
        result.push(task);

        // Reduce the in-degree of neighbors
        graph[task].forEach(neighbor => {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        });
    }

    // Check if all tasks are processed
    if (result.length === tasks.length) {
        return result;
    } else {
        return "No valid order";
    }
}

// Example usage
const tasks = ['A', 'B', 'C', 'D', 'E', 'F'];
const dependencies = [['A', 'D'], ['F', 'B'], ['B', 'D'], ['F', 'A'], ['D', 'C']];
console.log(topologicalSort(tasks, dependencies)); // Output: ['F', 'E', 'A', 'B', 'D', 'C']