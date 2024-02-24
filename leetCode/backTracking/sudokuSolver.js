// Write a program to solve a Sudoku puzzle by filling the empty cells.

// A sudoku solution must satisfy all of the following rules:

// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// The '.' character indicates empty cells.

 

// Example 1:


// Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
// Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
// Explanation: The input board is shown above and the only valid solution is shown below:

/**
 * [
 *      ["5","3",".",".","7",".",".",".","."]
 * ,    ["6",".",".","1","9","5",".",".","."]
 * ,    [".","9","8",".",".",".",".","6","."]
 * ,    ["8",".",".",".","6",".",".",".","3"]
 * ,    ["4",".",".","8",".","3",".",".","1"]
 * ,    ["7",".",".",".","2",".",".",".","6"]
 * ,    [".","6",".",".",".",".","2","8","."]
 * ,    [".",".",".","4","1","9",".",".","5"]
 * ,    [".",".",".",".","8",".",".","7","9"]
 * 
 * ]
 *
 */


var solveSudoku = function(board) {
    const solution=[];
    const rows = board.length;
    const column= board[0].length;

    const rowSet= new Set();
    const columnSet= new Set();
    const blockSet = new Set();



    
        const sudokuSolver=(solutionSoFar,i,j)=>{
            //exit condition//
            if(i==rows && j==column){
              solution.push([...solutionSoFar]);
            }

            //choose //
            if(board[i][j]){
              // board[i][j] = Math.floor(Math.random()+1)*10
              rowSet.add(`row${i}${board[i][j]}`)
            }
            const randomNumberBetweenOneToNine = Math.floor(Math.random()*9)+1
            console.log("**randomNumberBetweenOneToNine",randomNumberBetweenOneToNine);

            //explore


            //backtrack//

            


        }



    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < column; j++) {
        sudokuSolver(board,i,j)
      }
    }

    return solution;
    
};



console.log("**solveSudoku",solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]));
 

