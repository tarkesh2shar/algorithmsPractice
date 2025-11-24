/**
 * 79. Word Search
Solved
Medium

Topics
premium lock icon
Companies
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

Example 1:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 

Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.
 

Follow up: Could you use search pruning to make your solution faster with a larger board?
 */


/*
function backtrack(state) {

    // 1️⃣ Exit / success condition
    if (goalReached(state)) {
        save/return this state/result;
        return true/void;
    }

    // 2️⃣ For each choice at this step
    for (let choice of allPossibleChoices(state)) {

        // 2a) Choose (make a move)
        apply(choice, state);

        // 3️⃣ Explore deeper
        backtrack(state);

        // 4️⃣ Backtrack (undo the move)
        undo(choice, state);
    }
} */

function exist(board, word) {
      const rows = board.length;
    const cols = board[0].length;

    //“I am currently standing at cell (i, j) and I have already matched word[0..k-1], now I need to match word[k].”
    function backtrack(i, j, k) {
        // exit condition
        // success: we’ve matched all characters
        if (k === word.length) {
            return true;
        }
         // boundary check + mismatch + visited check
        if (i < 0 || j < 0 || i >= rows || j >= cols) return false;
        if (board[i][j] !== word[k]) return false;   // char mismatch
        // if board[i][j] == '#' -> already visited in this path so also fail

         // 2a) Choose (apply)
        let temp = board[i][j];
        board[i][j] = '#'; // mark visited

        // 3️⃣ Explore all choices (4 directions)
        const found =
            backtrack(i + 1, j, k + 1) ||
            backtrack(i - 1, j, k + 1) ||
            backtrack(i, j + 1, k + 1) ||
            backtrack(i, j - 1, k + 1);

        // 4️⃣ Backtrack (undo)
        board[i][j] = temp;

        return found;

    }

            for (let i = 0; i < board.length; i++) {
                for (let j = 0; j < board[0].length; j++) {
                    if (backtrack(i, j, 0)) {
                        return true;
                    }
        }

    }
            return false;
}




console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")); // true
