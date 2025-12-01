/**
 * Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

 

Example 1:


Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]
Example 2:


Input: board = [["a","b"],["c","d"]], words = ["abcb"]
Output: []
 

Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 12
board[i][j] is a lowercase English letter.
1 <= words.length <= 3 * 104
1 <= words[i].length <= 10
words[i] consists of lowercase English letters.
All the strings of words are unique.
 */


//lets do word search 1 first 
function exist(board, word) {
    console.log("Board:", board);
    const rows = board.length;
    const cols = board[0].length;


    function dfs(i, j, k) {
       
        // if we have found the word that means we have matched all characters, so k == word.length 
        //  becuase if we have come this far without failing it means , this path is valid
        if (k === word.length) {
            console.log("Word found!");
            return true;
        }
        
        // check for out of bounds or character mismatch
        if (i < 0 || i >= rows || j < 0 || j >= cols || board[i][j] !== word[k]) {
            console.log(`Out of bounds or mismatch at cell (${i}, ${j})`);
            return false;
        }
        //this check is to avoid revisiting the same cell in current path , ex , last was up , we came down , but now we go up again
          if (board[i][j] === '#') return false;

        //backtracking logic starts .. choose . explore . unchoose

        // choose - mark the cell as visited by replacing with a special character
        const temp = board[i][j];
        board[i][j] = '#'; // marking as visited
        console.log(`Visiting cell (${i}, ${j}), marked as visited.`);

        //explore all 4 directions , and return true if any path leads to a solution
        const found = dfs(i + 1, j, k + 1) || // down
                      dfs(i - 1, j, k + 1) || // up
                      dfs(i, j + 1, k + 1) || // right
                      dfs(i, j - 1, k + 1);   // left
                      
        // unchoose - restore the original character (backtrack)
        board[i][j] = temp;
        console.log(`Backtracking from cell (${i}, ${j}), restored original character.`);

        return found;
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
              console.log(`Starting DFS from cell (${i}, ${j})`,"Current letter :",board[i][j]);
              return dfs(i, j, 0);
        }
    }
}

// console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")); // true



//word search 2 stars here //





class TrieNode{
    constructor() {
        this.children = new Array(26).fill(null); // 26 letters
        this.isEnd = false; // indicates end of a word
    }
}


class Trie{
    constructor() {
        this.root = new TrieNode();
    }
    insert(word){
        let node = this.root;
        for (let char of word){
            let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            if(node.children[index] === null){
                node.children[index] = new TrieNode();
            }
            node = node.children[index];
        }
        node.isEnd = true; // mark end of word
        node.word = word; // store the word at the end node
    }
}



function  findWords(board, words) {
    console.log("Board:", board, "Words:", words);
    let row = board.length;
    let col = board[0].length;
    // let result = new Set();
      const result = new Set(); // to avoid duplicates

    const trie = new Trie();
    for (let word of words) {
        trie.insert(word);
    }

    console.log(
        "Trie constructed with words:", words
    );

    console.log("Trie Root:", trie.root);
    
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            console.log(`Starting DFS from cell (${i}, ${j})`,"Current letter :",board[i][j]);
            dfs(i, j, trie.root);

        }
    function dfs(i, j, node) {
        // out of bounds
        if (i < 0 || j < 0 || i >= row || j >= col) return;

        const ch = board[i][j];

        // already visited
        if (ch === '#') return;

        // go to corresponding trie child
        const index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        const child = node.children[index];

        // no word has this prefix → dead path
        if (child === null) return;

        // move into trie
        node = child;

        // if this node marks end of a word, collect it
        if (node.isEnd) {
            result.add(node.word);
            // optional: turn off to prevent duplicates / extra work
            node.isEnd = false;
        }

        // mark board cell as visited
        board[i][j] = '#';

        // explore neighbors (up, down, left, right)
        dfs(i + 1, j, node);
        dfs(i - 1, j, node);
        dfs(i, j + 1, node);
        dfs(i, j - 1, node);

        // backtrack: restore original char
        board[i][j] = ch;
    }
}

return Array.from(result);

    
    
};

console.log(findWords([["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], ["oath","pea","eat","rain"])); // ["eat","oath"]
