/**
 * There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

 

Example 1:


Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
Explanation: The following cells can flow to the Pacific and Atlantic oceans, as shown below:
[0,4]: [0,4] -> Pacific Ocean 
       [0,4] -> Atlantic Ocean
[1,3]: [1,3] -> [0,3] -> Pacific Ocean 
       [1,3] -> [1,4] -> Atlantic Ocean
[1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean 
       [1,4] -> Atlantic Ocean
[2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean 
       [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean
[3,0]: [3,0] -> Pacific Ocean 
       [3,0] -> [4,0] -> Atlantic Ocean
[3,1]: [3,1] -> [3,0] -> Pacific Ocean 
       [3,1] -> [4,1] -> Atlantic Ocean
[4,0]: [4,0] -> Pacific Ocean 
       [4,0] -> Atlantic Ocean
Note that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.
Example 2:

Input: heights = [[1]]
Output: [[0,0]]
Explanation: The water can flow from the only cell to the Pacific and Atlantic oceans.
 

Constraints:

m == heights.length
n == heights[r].length
1 <= m, n <= 200
0 <= heights[r][c] <= 105






⸻

⭐ Tiny summary (print and remember)

Pacific:

Start DFS from:
	•	top row
	•	left column

Mark all reachable cells by going uphill.

Atlantic:

Start DFS from:
	•	bottom row
	•	right column

Mark all reachable cells by going uphill.

Result:

Cells reachable from BOTH DFS runs.


 */



function pacificAtlanticIncomplete(heights){

    console.log("**heights",heights);
    


    // const reachingCellPacificOcean=[];
    // const reachingCellAtlanticOcean=[];

    const rows = heights.length;
    const cols = heights[0].length;

    const pacific = Array.from({ length: rows }, () => Array(cols).fill(false));
    const atlantic = Array.from({ length: rows }, () => Array(cols).fill(false));


    
    /**
     * 
        ✔ DFS from Pacific border cells =

        Find all cells that can reach Pacific.



        ✔ DFS from Atlantic border cells =

        Find all cells that can reach Atlantic.



        ✔ Intersection of both sets =

        Cells that can reach both oceans.
     */

        function canPacificFloodDfs(i,j){

            if(i > rows || j> cols){
                return;
            }



            console.log(`Heights for the cell i:${i}, and j:${j} --> ${heights[i][j]} `);
            console.log("------------");

            // explore and marks pacific cells where wanter can flow upwards 



            

        }



        // first column horizonal 
        for (let i = 0; i <= 0; i++) {
            for (let j = 0; j <cols; j++) {
                canPacificFloodDfs(i,j);
            }
        }
        //fist row vertical 
            for (let i = 0; i <rows; i++) {
            for (let j = 0; j <=0; j++) {
                canPacificFloodDfs(i,j);
            }
        }




    console.log("**heights",heights);
    
}


function pacificAtlanticComplex(heights){

    console.log("**heights", heights);

    const rows = heights.length;
    const cols = heights[0].length;

    const pacific = Array.from({ length: rows }, () => Array(cols).fill(false));
    const atlantic = Array.from({ length: rows }, () => Array(cols).fill(false));

    const directions = [
        [1, 0],  // down
        [-1, 0], // up
        [0, 1],  // right
        [0, -1]  // left
    ];

    /**
     * Generic DFS:
     * explores and marks cells where water can flow "uphill" (reverse flow)
     * visited will be either pacific or atlantic matrix
     */
    function canPacificFloodDfs(i, j, visited){

        // bounds check (fixed)
        if (i < 0 || i >= rows || j < 0 || j >= cols) {
            return;
        }

        // already visited
        if (visited[i][j]) {
            return;
        }

        visited[i][j] = true;

        // console.log(`Heights for the cell i:${i}, and j:${j} --> ${heights[i][j]} `);
        // console.log("------------");

        // explore neighbors where height is >= current (reverse water flow)
        for (const [dr, dc] of directions) {
            const ni = i + dr;
            const nj = j + dc;

            // stay in bounds
            if (ni < 0 || ni >= rows || nj < 0 || nj >= cols) continue;

            // can only go to equal or higher height (so original water could flow down)
            if (heights[ni][nj] < heights[i][j]) continue;

            canPacificFloodDfs(ni, nj, visited);
        }
    }

    // ---------------- PACIFIC ----------------
    // first row horizontal (top edge)
    for (let i = 0; i <= 0; i++) {
        for (let j = 0; j < cols; j++) {
            canPacificFloodDfs(i, j, pacific);
        }
    }
    // first column vertical (left edge)
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j <= 0; j++) {
            canPacificFloodDfs(i, j, pacific);
        }
    }

    // ---------------- ATLANTIC ----------------
    // last row horizontal (bottom edge)
    for (let i = rows - 1; i <= rows - 1; i++) {
        for (let j = 0; j < cols; j++) {
            canPacificFloodDfs(i, j, atlantic);
        }
    }
    // last column vertical (right edge)
    for (let i = 0; i < rows; i++) {
        for (let j = cols - 1; j <= cols - 1; j++) {
            canPacificFloodDfs(i, j, atlantic);
        }
    }

    // -------------- INTERSECTION --------------
    const result = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                result.push([i, j]);
            }
        }
    }

    console.log("**result", result);
    return result;
}



function pacificAtlantic(heights){

    const rows = heights.length;
    const cols = heights[0].length;

    const pacific = Array.from({ length: rows }, () => Array(cols).fill(false));
    const atlantic = Array.from({ length: rows }, () => Array(cols).fill(false));

    const directions = [[1,0], [-1,0], [0,1], [0,-1]];

    // ---------- DFS FUNCTION (your missing logic filled) ----------
    function canPacificFloodDfs(i, j, visited){

        // already visited → stop
        if (visited[i][j]) return;

        visited[i][j] = true;  // mark this cell as reachable

        // explore 4 directions
        for (let [dr, dc] of directions) {
            const nr = i + dr;
            const nc = j + dc;

            // bounds check
            if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;

            // height rule (reverse flow: must go to equal or higher)
            if (heights[nr][nc] < heights[i][j]) continue;

            // recursive dfs
            canPacificFloodDfs(nr, nc, visited);
        }
    }
    // -------------------------------------------------------------------

    // ---------- PACIFIC DFS CALLS (top row + left column) ----------
    for (let j = 0; j < cols; j++) {
        canPacificFloodDfs(0, j, pacific);   // top row
    }
    for (let i = 0; i < rows; i++) {
        canPacificFloodDfs(i, 0, pacific);   // left column
    }
    // -------------------------------------------------------------------

    // ---------- ATLANTIC DFS CALLS (bottom row + right column) ----------
    for (let j = 0; j < cols; j++) {
        canPacificFloodDfs(rows - 1, j, atlantic);   // bottom row
    }
    for (let i = 0; i < rows; i++) {
        canPacificFloodDfs(i, cols - 1, atlantic);   // right column
    }
    // -------------------------------------------------------------------

    // ---------- FIND INTERSECTION (cells reachable by both oceans) ----------
    const result = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                result.push([i, j]);
            }
        }
    }

    return result;
}


console.log(pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]])); //output [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
