/**
 *  Given strings s and t,
    return the minimum substring of s such that
    t is a subsequence of that substring.

    If no such substring exists, return "".

    Example:
    s = "abcdebdde"
    t = "bde"

    Output: "bdde"


    Explanation
	•	"bde" must appear in order
	•	characters do NOT need to be contiguous
	•	but the window must be minimal


    whaaaattttttttt.......
    This one:
	•	does NOT use frequency maps
	•	instead uses two pointers with backtracking
	•	still needs careful shrinking
 */

/**
 * Minimum Window Subsequence
 * Return the minimum substring of s such that t is a subsequence of it.
 * If none exists, return "".
 *
 * Example:
 * s = "abcdebdde", t = "bde" -> "bdde"
 */
function minWindowSubsequence(s, t) {
  const n = s.length;
  const m = t.length;
  if (m === 0) return "";
  if (n === 0 || m > n) return "";

  let bestStart = -1;
  let bestLen = Infinity;

  let i = 0; // pointer on s

  while (i < n) {// As long as we haven’t reached the end of s, keep trying to find a valid window.
    // 1) Forward scan: try to match all of t as a subsequence
    let j = 0; // pointer on t

    while (i < n) {
      if (s[i] === t[j]) j++;
      if (j === m) break; // matched full t
      i++;
    }

    // If we reached end of s without matching full t, we're done
    if (j < m) break;

    // 2) Backward shrink: minimize the window while keeping subsequence
    let end = i;          // current valid window ends at i
    j = m - 1;            // match t backwards

    while (i >= 0) {
      if (s[i] === t[j]) j--;
      if (j < 0) break;   // matched all t backwards => i is minimal start
      i--;
    }

    const start = i;
    const windowLen = end - start + 1;

    if (windowLen < bestLen) {
      bestLen = windowLen;
      bestStart = start;
    }

    // 3) Move i forward to search for next possible window
    // start+1 is the earliest next start we can try
    i = start + 1;
  }

  return bestStart === -1 ? "" : s.slice(bestStart, bestStart + bestLen);
}


// quick tests
console.log(minWindowSubsequence("abcdebdde", "bde")); // "bdde"
console.log(minWindowSubsequence("ADOBECODEBANC", "ABC")); // "ADOBEC" (subsequence, not substring rules)
console.log(minWindowSubsequence("aaaaa", "aa")); // "aa"
console.log(minWindowSubsequence("abc", "d")); // ""