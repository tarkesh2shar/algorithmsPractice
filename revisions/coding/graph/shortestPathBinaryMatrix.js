/**
 * You’re given a grid of 0s and 1s:
	•	0 → free cell
	•	1 → blocked cell

You start at top-left (0,0)
You want to reach bottom-right (n-1,n-1)
You can move in 8 directions (up, down, left, right, diagonals)

👉 Find the shortest number of steps to reach the end
👉 If not possible, return -1


    🔑 First important realization (THIS decides BFS)

    You are asked for the shortest path.

    Whenever you hear:
        •	shortest
        •	minimum steps
        •	minimum distance

    👉 BFS is the default choice

    Why?

    BFS guarantees:
        •	First time you reach a cell = shortest path to it
        •	Because it explores level by level

    DFS does NOT guarantee shortest path.


        🧠 Mental Model (very important)

    Think of BFS as ripples in water 🌊
        •	Step 1: cells at distance 1
        •	Step 2: cells at distance 2
        •	Step 3: cells at distance 3

    The moment you touch the destination → done

    ⸻

    🧱 What is a “node” and “edge” here?
        •	Node → each cell (r, c)
        •	Edge → you can move from one cell to adjacent cell (8 directions)
        •	Visited → cell already explored (don’t revisit)

    So yes — this is a graph problem on a grid.
 */



    function shortestPathBinaryMatrix(grid) {
        /**
         * 
         * 
         *  Mapping tree BFS → grid BFS

            In a tree (level order)
                •	Node → tree node
                •	Neighbors → left/right children
                •	Level → distance from root

            In a grid (shortest path)
                •	Node → cell (r, c)
                •	Neighbors → 8 adjacent cells
                •	Level → distance (steps) from start (0,0)
         */

                
        const n = grid.length;

        // ❌ If start or end is blocked, no path possible
        if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;

        // ✅ BFS queue initialized with starting cell (row, col)
        const queue = [[0, 0]];

        // Mark starting cell as visited
        grid[0][0] = 1;

        // 8 possible directions (like 8 children in a tree)
        const dirs = [
            [1, 0],   // down
            [-1, 0],  // up
            [0, 1],   // right
            [0, -1],  // left
            [1, 1],   // down-right
            [1, -1],  // down-left
            [-1, 1],  // up-right
            [-1, -1]  // up-left
        ];

        let steps = 1; // distance from start (level count)

        // BFS loop (like level order traversal)
        while (queue.length > 0) {
            const size = queue.length; // number of cells at current distance

            // Process one "level" completely
            for (let i = 0; i < size; i++) {
                const [r, c] = queue.shift();

                // ✅ If we reached bottom-right, shortest path found
                if (r === n - 1 && c === n - 1) return steps;

                // Explore all 8 neighboring cells
                for (const [dr, dc] of dirs) {
                    const nr = r + dr;
                    const nc = c + dc;

                    // Check bounds + unvisited open cell
                    if (
                        nr >= 0 && nr < n &&
                        nc >= 0 && nc < n &&
                        grid[nr][nc] === 0
                    ) {
                        grid[nr][nc] = 1;      // mark visited
                        queue.push([nr, nc]); // enqueue neighbor
                    }
                }
            }

            // Finished one BFS level → distance increases
            steps++;
        }

        // ❌ Destination never reached
        return -1;

    }





    console.log(shortestPathBinaryMatrix(
        [
          [0,0,0],
          [1,1,0],
          [1,1,0]
        ]
      )); // 4

    //     console.log(shortestPathBinaryMatrix(
    //     [
    //       [0,1],
    //       [1,0]
    //     ]
    //   )); // 2

    //   console.log(shortestPathBinaryMatrix(
    //     [
    //       [1,0,0],
    //       [1,1,0],
    //       [1,1,0]
    //     ]
    //   )); // -1

/**
 * Similar to:
    - 542. 01 Matrix
    - 994. Rotting Oranges
    - 1162. As Far from Land as Possible
    - 286. Walls and Gates
    - 1091. Shortest Path in Binary Matrix
    - 130. Surrounded Regions
    - 200. Number of Islands
    - 695. Max Area of Island
    - 463. Island Perimeter
    - 1020. Number of Enclaves

    All of these are BFS/DFS on a grid.

    The main difference is the “goal” of the traversal.

    For example:

    - 200. Number of Islands → count number of BFS/DFS traversals
    - 695. Max Area of Island → count number of nodes in each BFS/DFS, keep max
    - 130. Surrounded Regions → flip all unvisited 'O's to 'X's after BFS/DFS from border 'O's
    - 1091. Shortest Path in Binary Matrix → return distance when we first reach destination

    So the “trick” is to understand what the BFS/DFS is trying to achieve.

    Once you understand that, the implementation is pretty standard.
 */

    