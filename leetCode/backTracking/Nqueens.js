// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return the number of distinct solutions to the n-queens puzzle.

 

// Example 1:


// Input: n = 4
// Output: 2
// Explanation: There are two distinct solutions to the 4-queens puzzle as shown.
// Example 2:

// Input: n = 1
// Output: 1
 

// Constraints:

// 1 <= n <= 9


// var totalNQueens = function(n) {

//         const board = Array(4).fill(Array(4).fill(null));
        
//         // console.log("**board",board);
//         let results = 0;

//         placeQueenOnHorseDistance=(queensLeft,i,j)=>{
//           //exit conditon

//           if(queensLeft==0){
//             results+=1;
//             return;
//           }

//           if (i < 0 || i >= n || j < 0 || j >= n ) {
//             return;
//          }

//          // choose 

//           board[i][j]= true;

//         //explore 


//         //8 direction to next place //
//             //down 
//             placeQueenOnHorseDistance(i-1,j+2);
//             placeQueenOnHorseDistance(i+1,j+2);

//             //up
//             placeQueenOnHorseDistance(i-1,j-2);
//             placeQueenOnHorseDistance(i+1,j-2)

//             //left 
//             placeQueenOnHorseDistance(i+2,j+1);
//             placeQueenOnHorseDistance(i+2,j-1)

//             //right 
//             placeQueenOnHorseDistance(i-2,j-1);
//             placeQueenOnHorseDistance(i-1,j+1)
            

//             // backtrack 
//             board[i][j]= null;

//         }

//         for (let i = 0; i < board.length; i++) {
//                  for (let j = 0; board[0].length < n; j++) {
//                     placeQueenOnHorseDistance(2,i,j);
//                  }
//         }






//     return results;
// };

// var totalNQueens = function(n) {
//     const board = Array(n).fill().map(() => Array(n).fill(null)); 
//     let results = 0; 

//     // A helper function that checks if a queen can be safely placed at board[row][col].
//     const isSafe = (row, col) => {
//         // Check if there's a queen in the same column or diagonals. 
//         for (let i = 0; i < row; i++) {
//             // Check the same column. If there's a queen, return false.
//             if (board[i][col] === 'Q') return false;
//             // Check the left diagonal. If there's a queen, return false.
//             if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false;
//             // Check the right diagonal. If there's a queen, return false.
//             if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') return false;
//         }
//         // If no queens can attack this position, return true.
//         return true;
//     };

//     const placeQueens = (row) => {
//         if (row === n) {
//             results++;
//             return;
//         }

//         for (let col = 0; col < n; col++) {
//             if (isSafe(row, col)) {
//                 board[row][col] = 'Q'; // choose
//                 placeQueens(row + 1); // explore
//                 board[row][col] = null; // backtrack
//             }
//         }
//     };

//     // Starting from the first row
//     placeQueens(0); 

//     return results;
// };
var totalNQueens = function(n) {

    // If n is 1, there's only 1 solution (one queen on the board).
    if (n === 1) {
        return 1;
    }
    // If n is less than 4, there are no solutions (except for n=1, which is handled above).
    if (n < 4) {
        return 0;
    }

    // The rest of the solution assumes n >= 4, specifically tailored for n=4, but it can work in general.

    // Initialize the board with empty spaces
    const board = Array(n).fill(null).map(() => Array(n).fill('.'));

    const isSafe = (row, col) => {
        // Check the column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false;
            }
        }
        // Check the left diagonal
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        // Check the right diagonal
        for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        return true;
    };

    const solveNQueens = (row) => {
        if (row === n) {
            results++;
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q'; // Place a queen
                solveNQueens(row + 1);  // Recurse to the next row
                board[row][col] = '.'; // Remove the queen (backtrack)
            }
        }
    };

    let results = 0;
    solveNQueens(0); // Start the process from the first row
    return results;
};

console.log(totalNQueens(1)); // Should output 1 for a 1x1 board
console.log(totalNQueens(4)); // Should output 2 for a 4x4 board

console.log("**totalNQueens", totalNQueens(4)); // This should output 2, which is the number of solutions for 4 queens.


console.log("**totalNQueens",totalNQueens(10));