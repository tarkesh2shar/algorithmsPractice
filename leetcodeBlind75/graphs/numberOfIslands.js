/**
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
 */


/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslandsSinking = function(grid) {
  console.log("**Grid",grid);
  let numOfDfs=0;

  let rows= grid.length;
  let cols=grid[0].length;
  
  for (let i = 0; i < rows ;i++) {
      for (let j = 0; j < cols; j++) {
        console.log(`i:${i} ,j:${j}`,`Value:${grid[i][j]}`);
        if(grid[i][j]=="1"){
          numOfDfs++;
           dfs(i,j);
        }
   
      }
  }

  function dfs(r,c){
    //check for out of bounds here 
     if(r >rows-1 || r<0) return;
     if(c > cols -1 || c<0) return;

     //if cell is not the land 
      if (grid[r][c] !== "1") return;
      grid[r][c] = "0";



         // search all four directions. but first check out of bounds
         //no need to check bounds here , as we will loose some cell , check is already up there 
         // up --> dfs(r-1,c)
        //  if(r-1 >0 ){
        //   dfs(r-1,c)
        //  }
        //     //down --> dfs(r+1,c)
        //   if(r+1 < rows-1){
        //   dfs(r+1,c)
        //  }
        //      //left -->dfs(r,c-1)
        //   if(c-1 <0){
        //   dfs(r,c-1)
        //  }
        //        //right -->dfs(r,c+1)
        //   if(c+1 < cols-1){
        //   dfs(r,c+1)
        //  }
        dfs(r-1, c); // up
        dfs(r+1, c); // down
        dfs(r, c-1); // left
        dfs(r, c+1); // right

  }
  return numOfDfs;
};



console.log(numIslandsSinking([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]));

