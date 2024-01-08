// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

 

// Example 1:


// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
// Example 2:

// Input: grid = [[1,2,3],[4,5,6]]
// Output: 12

/**
 * 
 *  1 3 1
 *  1 5 1
 *  4 2 1 
 */


/**
 *  1 2 3
 *  4 5 6
 */


//  var minPathSum = function(grid) {
//     let copyGrid = JSON.parse(JSON.stringify(grid));
//     let copyGrid2 = JSON.parse(JSON.stringify(grid));
//     for (let i = copyGrid.length-1; i >=1; i--) {
//         const arr = copyGrid[i];
//         for (let j = 0; j < arr.length; j++) {
//             const numberJustAbove=copyGrid[i-1][j];
//             const numberCurrent= copyGrid[i][j];
//             const numbersAdded=numberJustAbove+numberCurrent
//             copyGrid[i-1][j]= numbersAdded
//         }
//     }
//     let minimumNumberIndex=0;
//     let minNumber;
//     for (let i = 0; i < copyGrid[0].length; i++) {
//         const number = copyGrid[0][i];
//         if(!minNumber){
//             minNumber=number;
//         }
//         if(minNumber>number){
//             minNumber=number;
//             minimumNumberIndex=i;
//         }
//     }
//     copyGrid2[0][minimumNumberIndex]=minNumber
//     let number =0;
//     for (let i = minimumNumberIndex; i >=0; i--) {
//         number+=copyGrid2[0][i];
//     }
//     return number;
// };


var minPathSum = function(grid) {
    const m = grid.length;
       const n = grid[0].length;
   
       for (let i = 1; i < m; i++) {
           grid[i][0] += grid[i - 1][0];
       }
       for (let j = 1; j < n; j++) {
           grid[0][j] += grid[0][j - 1];
       }
       for (let i = 1; i < m; i++) {
           for (let j = 1; j < n; j++) {
               grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
           }
       }
   
       return grid[m - 1][n - 1];
   };

console.log("minPathSum",minPathSum([[1,3,1],[1,5,1],[4,2,1]]));
console.log("minPathSum",minPathSum([[1,2,3],[4,5,6]]));