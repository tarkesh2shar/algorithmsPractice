/**
 * 
 * Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}
 

Test case format:

For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

 

Example 1:


Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
Example 2:


Input: adjList = [[]]
Output: [[]]
Explanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.
Example 3:

Input: adjList = []
Output: []
Explanation: This an empty graph, it does not have any nodes.
 

Constraints:

The number of nodes in the graph is in the range [0, 100].
1 <= Node.val <= 100
Node.val is unique for each node.
There are no repeated edges and no self-loops in the graph.
The Graph is connected and all nodes can be visited starting from the given node.
 */


class Node {
    constructor(val, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

// ---- Create a sample graph ---- //
// Graph:
// 1 -- 2
// |    |
// 4 -- 3

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);

n1.neighbors = [n2, n4];
n2.neighbors = [n1, n3];
n3.neighbors = [n2, n4];
n4.neighbors = [n1, n3];

const graph = n1;

// ---- BFS clone function ---- //
var cloneGraphBfs = function(node) {
    if (!node) return null;

    // Map<originalNode, clonedNode>
    const map = new Map();
    const queue = [node];

    // clone starting node
    map.set(node, new Node(node.val));

    while (queue.length > 0) {
        const curr = queue.shift();

        for (const nei of curr.neighbors) {
            if (!map.has(nei)) {
                // clone neighbor if not cloned yet
                map.set(nei, new Node(nei.val));
                queue.push(nei);
            }
            // connect cloned current node to cloned neighbor
            map.get(curr).neighbors.push(map.get(nei));
        }
    }

    // return the clone corresponding to the input node
    return map.get(node);
};


var cloneGraphDfs = function(node) {
    if (!node) return null;
    const map = new Map();


    function dfs(curr) {
       
        // If we already cloned this node, return it
        if (map.has(curr)) return map.get(curr);

        // Create clone (no neighbors yet)
        const clone = new Node(curr.val);
        map.set(curr, clone);

        // Clone all neighbors
        for (const nei of curr.neighbors) {
            clone.neighbors.push(dfs(nei));  // Recursively clone neighbors
        }

        return clone;
    }

    return  dfs(node);
}

// ---- Helper: print graph without circular JSON issue ---- //
function printGraph(node) {
    if (!node) {
        console.log("Empty graph");
        return;
    }

    const visited = new Set();
    const queue = [node];

    while (queue.length > 0) {
        const curr = queue.shift();
        if (visited.has(curr)) continue;
        visited.add(curr);

        const neiVals = curr.neighbors.map(n => n.val);
        console.log(`Node ${curr.val} -> [${neiVals.join(", ")}]`);

        for (const nei of curr.neighbors) {
            if (!visited.has(nei)) {
                queue.push(nei);
            }
        }
    }
}

// ---- Test output ---- //
const cloned = cloneGraphBfs(graph);

console.log("Original graph:");
printGraph(graph);

console.log("Cloned graph:");
printGraph(cloned);

// Optional: quick sanity check that it's deep cloned (different objects)
console.log("Same reference?", graph === cloned);                // false
console.log("Same value?", graph.val === cloned.val);            // true
console.log(
  "First neighbor same ref?",
  graph.neighbors[0] === cloned.neighbors[0]
); // false