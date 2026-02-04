/**
 * 
 *  Given two strings word1 and word2,
    return the minimum number of operations required
    to convert word1 to word2.

    You may perform:
    1) Insert a character
    2) Delete a character
    3) Replace a character

    Input: word1 = "horse", word2 = "ros"
    Output: 3

    Explanation:
    horse → rorse (replace h with r)
    rorse → rose  (delete r)
    rose  → ros   (delete e)


    Input: word1 = "intention", word2 = "execution"
    Output: 5

 */


    function minDistance(word1, word2) {
  const m = word1.length;
  const n = word2.length;

  // dp[i][j] = min ops to convert word1[0..i-1] -> word2[0..j-1]
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
 
 console.log("**dp",dp);
 

  // Base cases:
  // word1 -> "" : delete i chars
  for (let i = 0; i <= m; i++) dp[i][0] = i;

    console.log("**after base case rows",dp);

    //How many operation to convert alphabets combination to ""  columns

  // "" -> word2 : insert j chars
  for (let j = 0; j <= n; j++) dp[0][j] = j;
    //How many operation to convert alphabets combination to ""  columns

  /**
   * Base case dp table for word1 = "horse", word2 = "ros"
   *              ""   r   o   s
            ""     0   1   2   3
            h      1
            ho     2
            hor    3
            hors   4
            horse  5
   */


   console.log("**after base case column",dp);

  // Fill the table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const c1 = word1[i - 1];
      const c2 = word2[j - 1];

      if (c1 === c2) {
        // If last chars match, no new operation needed
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // If last chars differ, choose cheapest operation:
        const insert = dp[i][j - 1];     // insert c2 into word1
        const del = dp[i - 1][j];        // delete c1 from word1
        const replace = dp[i - 1][j - 1];// replace c1 with c2

        dp[i][j] = 1 + Math.min(insert, del, replace);
      }
    }
  }

  return dp[m][n];
}

// quick tests
console.log(minDistance("horse", "ros"));       // 3
// console.log(minDistance("intention", "execution")); // 5