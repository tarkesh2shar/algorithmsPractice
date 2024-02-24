// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

// Example 1:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false
 

// Constraints:

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.
 

// Follow up: Could you use search pruning to make your solution faster with a larger board?
/**
 * 
 *   A   B   C   E
 *   S   F   C   S
 *   A   D   E   E
 */
// var exist = function(board, word) {
//     let hasWord=false;
//     const allPossibleCombination=[];
//     function solveRiddle(currentWord,board){
//         const row  = board.length-1;
//         const column = board[0].length-1;

//         if(currentWord===word){
//             hasWord = true;
//             return ;
//         }
//         for (let i = 0; i <= row; i++) {
//             for (let j = 0; j <= column; j++) {
//                 const letter= board[i][j];

//                 if(letter!==null){
//                     //choose 
//                     const updatedWord= currentWord + letter;
//                     board[i][j]=null;
//                     //explore
//                     solveRiddle(updatedWord,board);
//                     //backtrack 
//                     board[i][j]=letter;

//                     }
                
             
//             }
//         }


//     }


//     solveRiddle("",board)
//     return hasWord;


// };
var exist = function(board, word) {
    let hasWord = false;

   function solveRiddle(currentWord, i, j) {
       const row = board.length;
       const column = board[0].length;

       if (currentWord === word) {
           hasWord = true;
           return;
       }

       if (i < 0 || i >= row || j < 0 || j >= column || board[i][j] !== word[currentWord.length]) {
           return;
       }

       //choose 
       const originalLetter = board[i][j];
       board[i][j] = null;

       //explore
       solveRiddle(currentWord + originalLetter, i + 1, j); //down 
       solveRiddle(currentWord + originalLetter, i - 1, j); //up
       solveRiddle(currentWord + originalLetter, i, j + 1); //right
       solveRiddle(currentWord + originalLetter, i, j - 1); //left

       //unchoose/backtrack
       board[i][j] = originalLetter;
   }

   for (let i = 0; i < board.length; i++) {
       for (let j = 0; j < board[0].length; j++) {
           solveRiddle("", i, j);
       }
   }

   return hasWord;
};

console.log("**exist",exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"));
// console.log("**exist",exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"));
// console.log("**exist",exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB"));`