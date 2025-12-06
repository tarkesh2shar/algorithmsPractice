/**
 * You are given:
	•	n nodes labeled 0 to n-1
	•	A list of undirected edges: [u, v]

You must return:

👉 How many separate connected groups are there?

These groups are like “islands” in graph-land.

⸻

⭐ Example

n = 5
edges = [[0,1], [1,2], [3,4]]


Graph looks like:

0 -- 1 -- 2       3 -- 4


⭐ When do two nodes belong to the same component?

If you can reach one from the other by following edges.

⸻

⭐ Two main approaches:
	1.	DFS (most intuitive — same as Valid Tree but repeated)
	2.	Union-Find (super clean)

We will do DFS first.
 */




function solution(n,edges){
    
        //draw adjency matrix here ok !!

        const adj = Array.from({length: n},()=>[]);

        console.log("adj",adj);

        for (const [u,v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }
        
        console.log("adj",adj);

        const visited = new Set();


        // 2) Standard DFS
        function dfs(node, previousNode) {
            // if already visited, nothing to do
            if (visited.has(node)) return;

            visited.add(node);

            for (const nei of adj[node]) {
                // 'previousNode' is not strictly needed here,
                // but if you want to skip the parent like in validTree:
                // if (nei === previousNode) continue;
                if (!visited.has(nei)) {
                    dfs(nei, node);
                }
            }
        }

        // 3) Count connected components
        let components = 0;

        for (let i = 0; i < n; i++) {
            //ok i  undestadn , in the for loop , for the first root ,
            //  it will already populate all values in the set , 
            // so next time we have this not found check ,we are sure that ,
            //  this value was not reachable earlier and that means , it was unconnected 
            if (!visited.has(i)) {
                // starting a new component
                components++;
                dfs(i, -1);
            }
        }

        return components;

}


console.log(solution(5,[[0,1], [1,2], [3,4]]));
