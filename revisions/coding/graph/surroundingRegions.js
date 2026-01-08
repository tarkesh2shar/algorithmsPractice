/**
 * You are given an m x n matrix board containing 'X' and 'O'.

Capture all regions that are surrounded by 'X'.
A region is captured by flipping all 'O's into 'X's
in that surrounded region.

'O's on the border should NOT be flipped.


Input:
[
  ["X","X","X","X"],
  ["X","O","O","X"],
  ["X","X","O","X"],
  ["X","O","X","X"]
]

Output:
[
  ["X","X","X","X"],
  ["X","X","X","X"],
  ["X","X","X","X"],
  ["X","O","X","X"]
]


Ask yourself:
	1.	Which 'O' cells are safe?
→ Ones connected to the border
	2.	How do we find them?
→ DFS / BFS from border 'O's
	3.	What do we flip?
→ All other 'O's

This is still:

Graph traversal + marking visited

Just with a different goal than islands.

 */

function captureBoardIncorrectAttempt(board){
    let rows= board.length;
    let cols= board[0].length;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let isBorder= r==0 || c==0 || r==rows-1 || c==cols-1;
            if(!isBorder && board[r][c]=="O"){
                dfs(r,c);
            }
        }
}

return board;

    function dfs(r,c){
        //out of bound check
        if(r<0 || c<0 || r>=rows || c>=cols){
            return;
        }
        if(board[r][c]=="O"){
            board[r][c]="X"; 
            //explore neighbors
            dfs(r+1,c);
            dfs(r-1,c);
            dfs(r,c+1);
            dfs(r,c-1);
            }
        }
}




function captureBoard(board) {
  const rows = board.length;
  const cols = board[0].length;

  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= rows || c >= cols) return;
    if (board[r][c] !== "O") return;

    board[r][c] = "T"; // mark as safe
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  // 1) mark all border-connected O's as safe
  for (let r = 0; r < rows; r++) {
    if (board[r][0] === "O") dfs(r, 0);
    if (board[r][cols - 1] === "O") dfs(r, cols - 1);
  }
  for (let c = 0; c < cols; c++) {
    if (board[0][c] === "O") dfs(0, c);
    if (board[rows - 1][c] === "O") dfs(rows - 1, c);
  }

  // 2) flip surrounded O -> X, and safe T -> O
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === "O") board[r][c] = "X";
      else if (board[r][c] === "T") board[r][c] = "O";
    }
  }

  return board;
}





console.log(captureBoardIncorrectAttempt([
  ["X","X","X","X"],
  ["X","O","O","X"],
  ["X","X","O","X"],
  ["X","O","X","X"]
]));


console.log(captureBoard([
  ["X","X","X","X"],
  ["X","O","O","X"],
  ["X","X","O","X"],
  ["X","O","X","X"]
]));

