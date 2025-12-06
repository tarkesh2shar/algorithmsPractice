/**
 * 🧩 Problem in simple words

You’re given:
	•	An integer n → number of nodes labeled 0 to n-1
	•	A list of undirected edges → edges[i] = [u, v] means an edge between u and v

You need to check:

Do these edges form a valid tree?
Return true if yes, false otherwise.

⸻

🌳 What is a “valid tree” in graph terms?

For an undirected graph to be a valid tree:
	1.	It must be connected
	•	There is a path between any pair of nodes
	•	No isolated components
	2.	It must have no cycles
	•	No way to start at a node and come back to it via different edges

These two together define a tree.

Very important extra fact:

For an undirected graph with n nodes:
Tree ⇔ connected AND exactly n - 1 edges

So quick checks:
	•	If edges.length !== n - 1 → immediately return false ✅
	•	Otherwise, check connectivity (using DFS/BFS or Union-Find)
 */





    function validTree(n,edges){

        if (edges.length !== n - 1) return false;


        const adj = Array.from({length: n}, () => []);
        console.log("adj",adj);
        
        //because this is a undirected graphs both way tranversal is required so adjency matrix has both parts . 
        for (const [u,v] of edges) {
              adj[u].push(v);
              adj[v].push(u);
        }

        console.log("**adj",adj);


        const visited = new Set();
        
           function dfs(node, prev) {

                if (visited.has(node)) return;
                visited.add(node);
                console.log("**visited",visited);
                

                for (let nei of adj[node]) {
                    if (nei === prev) continue; // skip parent
                    dfs(nei, node);
                }
        }

         dfs(0, -1); //start with 0 , and previous node //

    return visited.size === n;

    }


let n = 5;
let edges = [
    [0,1],
    [0,2],
    [0,3],
    [1,4]
];


function validTreeUnionFindMethod(n,edges){

    // 1️⃣ Quick check: A valid tree with n nodes MUST have exactly n - 1 edges.
    // If not, it is either:
    //  - disconnected (too few edges)
    //  - or has cycles / extra edges (too many edges)
    if (edges.length !== n - 1) return false;

    // 2️⃣ Create a "parent" array for Union-Find.
    // Initially, every node is its OWN parent (each node is its own set).
    // parent[i] = representative (root) of the set containing i.
    const parent = Array.from({ length: n }, (_, i) => i);
    // Example for n = 5 → parent = [0, 1, 2, 3, 4]

    // 3️⃣ FIND function:
    // Given a node x, find the root (ultimate parent) of its set.
    // With "path compression": we flatten the tree for speed.
    function find(x) {
        // If parent[x] is not itself, keep going up.
        if (parent[x] !== x) {
            // Recursively find the root, and compress the path:
            // This sets parent[x] directly to the root, shortening future calls.
            parent[x] = find(parent[x]);
        }
        // Now parent[x] is the root of its set.
        return parent[x];
    }

    // 4️⃣ UNION function:
    // Try to union (merge) the sets of x and y.
    // If x and y are already in the SAME set → adding an edge between them
    // creates a cycle, so we return false.
    function union(x, y) {
        // Find root (representative) for both x and y
        let rootX = find(x);
        let rootY = find(y);

        // If they already share the same root, they are in the same set.
        // That means we found a cycle.
        if (rootX === rootY) {
            return false; // cycle detected
        }

        // Otherwise, merge the sets:
        // We can attach one root to the other. Here we just do rootY → rootX.
        parent[rootY] = rootX;
        return true;
    }

    // 5️⃣ Process every edge.
    for (let [u, v] of edges) {
        // If union returns false, it means adding this edge created a cycle.
        if (!union(u, v)) {
            return false;
        }
    }

    // 6️⃣ If we reach here:
    // - edges.length was n - 1 (already checked)
    // - NO cycles were found during union
    // In an undirected graph, this implies:
    //    → the graph is connected
    //    → and is acyclic
    // So it IS a valid tree.
    return true;

}

// console.log(validTreeUnionFindMethod(n,edges));



console.log(validTree(n, edges));