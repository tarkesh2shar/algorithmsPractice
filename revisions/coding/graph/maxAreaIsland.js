// Given a 2D binary grid grid which represents a map of '1's (land)
// and '0's (water), return the maximum area of an island in grid.

// An island is surrounded by water and is formed by connecting
// adjacent lands horizontally or vertically.


function maxAreaOfIsland(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let maxArea = 0;

  function dfs(r, c) {
    // out of bounds
    if (r < 0 || c < 0 || r >= rows || c >= cols) return 0;
    // water or visited
    if (grid[r][c] === 0) return 0;

    // mark visited
    grid[r][c] = 0;

    // count this cell + neighbors
    return (
      1 +
      dfs(r + 1, c) +
      dfs(r - 1, c) +
      dfs(r, c + 1) +
      dfs(r, c - 1)
    );
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        const area = dfs(i, j);
        maxArea = Math.max(maxArea, area);
      }
    }
  }

  return maxArea;
}

console.log(
  maxAreaOfIsland([
    [0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]
  ])
);
