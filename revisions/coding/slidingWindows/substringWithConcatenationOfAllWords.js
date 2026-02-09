/**
 * Substring with Concatenation of All Words (LeetCode 30)
 * Goal: return starting indices where s contains all words exactly once, concatenated back-to-back.
 *
 * Hints (read top → bottom):
 * 1) All words have the same length L. That means the window moves in jumps of L.
 * 2) Build a frequency map of the words (need).
 * 3) For each offset 0..L-1, slide a window in steps of L, counting seen words (have).
 * 4) If a word is not in need → reset window (clear counts, move left).
 * 5) If have[word] > need[word] → shrink from the left in L-sized steps until valid.
 * 6) When the window size == words.length * L and counts valid → record start index.
 * Time O(n) over s with the L offsets; Space O(#words).
 *
 * Walk-through example
 * s = "barfoothefoobarman", words = ["foo", "bar"], L = 3, totalLen = 6
 * Offsets tried: 0,1,2 — consider offset 0 (positions 0,3,6,...):
 *   - right=0 → "bar" (needed) => have[bar]=1, window size=1 word
 *   - right=3 → "foo" (needed) => have[foo]=1, window size=2 words == totalWords
 *     valid window length 6 found at start=0 → record index 0
 *   - shrink one word to continue: drop "bar" at left=0 → left moves to 3
 *   - right=6 → "the" (not needed) => reset window, left=9
 *   - right=9 → "foo" (needed) => have[foo]=1
 *   - right=12 → "bar" (needed) => have[bar]=1, window size=2 → record index 9
 * Result indices: [0, 9]
 */

function findSubstring(s, words) {
  if (!words || words.length === 0) return [];

  const L = words[0].length;
  const totalWords = words.length;
  const totalLen = totalWords * L;

  if (s.length < totalLen) return [];

  // need map: required counts of each word
  const need = new Map();
  for (const w of words) need.set(w, (need.get(w) || 0) + 1);

  const res = [];

  // We must try each alignment offset: 0..L-1
  for (let offset = 0; offset < L; offset++) {
    let left = offset;          // start of window (aligned)
    let count = 0;              // number of words currently in window
    const have = new Map();     // counts of words in current window

      // move right in word-sized jumps
      /**
       * What this means
    •	We move right word by word, not character by character
    •	Because each word has length L
    •	right += L ensures alignment (no broken words)
    •	right + L <= s.length ensures slicing is safe
      */
    for (let right = offset; right + L <= s.length; right += L) {
      //Read the next word chunk
      const word = s.slice(right, right + L);

      // Case A: word not in need -> reset window
      if (!need.has(word)) {
        have.clear();
        count = 0;
        left = right + L;
        continue;
      }

      // add this word into have
      have.set(word, (have.get(word) || 0) + 1);
      count++;

      // Case B: too many of this word -> shrink from left until valid
      while (have.get(word) > need.get(word)) {
        const leftWord = s.slice(left, left + L);
        have.set(leftWord, have.get(leftWord) - 1);
        count--;
        left += L;
      }

      // Case C: window has exactly all words -> record answer
      if (count === totalWords) {
        res.push(left);

        // slide window by removing one word from left (to keep searching)
        const leftWord = s.slice(left, left + L);
        have.set(leftWord, have.get(leftWord) - 1);
        count--;
        left += L;
      }
    }
  }

  return res;
}

console.log("substringWithConcatenationOfAllWords", findSubstring(
  "barfoothefoobarman",
  ["foo", "bar"]
)); // expected [0,9]

// console.log("substringWithConcatenationOfAllWords", findSubstring(
//   "wordgoodgoodgoodbestword",
//   ["word", "good", "best", "good"]
// )); // expected [8]

module.exports = { findSubstring };
 