/**
 * 🔥 Minimum Window Substring

This is a top-tier interview problem and a true test of sliding window mastery.

Given two strings s and t,
return the minimum window substring of s such that
every character in t (including duplicates) is included in the window.

If there is no such substring, return "".

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"


Input: s = "a", t = "a"
Output: "a"


Input: s = "a", t = "aa"
Output: ""

 */



function minWindow(s, t) {
  if (t.length === 0 || s.length === 0) return "";

  const need = new Map();
  for (const ch of t) need.set(ch, (need.get(ch) || 0) + 1);

  const window = new Map();
  let required = need.size;
  let formed = 0;

  let left = 0;
  let bestLen = Infinity;
  let bestStart = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    window.set(ch, (window.get(ch) || 0) + 1);

    if (need.has(ch) && window.get(ch) === need.get(ch)) {
      formed++;
    }

    /** 
        // Window is valid (contains all required characters)
            while (formed === required) {

            // 1) Save current window as a candidate minimum answer
            update bestLen and bestStart if this window is smaller

            // 2) Remove the leftmost character to try shrinking the window
            decrease count of s[left] in window map

            // 3) If removal breaks a required count, window becomes invalid
            if (count drops below needed) formed--

            // 4) Move left pointer to continue shrinking
            left++
            }
        */

    while (formed === required) {
      // update best
      const windowLen = right - left + 1;
      if (windowLen < bestLen) {
        bestLen = windowLen;
        bestStart = left;
      }

      // pop from left
      const leftCh = s[left];
      window.set(leftCh, window.get(leftCh) - 1);
      if (need.has(leftCh) && window.get(leftCh) < need.get(leftCh)) {
        formed--;
      }
      left++;
    }
  }

  return bestLen === Infinity ? "" : s.slice(bestStart, bestStart + bestLen);
}

console.log("minWindow", minWindow("ADOBECODEBANC", "ABC")); // BANC
