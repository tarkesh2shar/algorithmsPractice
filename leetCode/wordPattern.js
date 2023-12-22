// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
 

// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.


var wordPatternnWrong = function(pattern, s) {
   const wordArr= s.split(" ");
   if(pattern.length!==wordArr.length){
    return false;
   }
   const hashMap={

   }
   let stringfromMap=""

for (let index = 0; index < pattern.length; index++) {
    const letter = pattern[index];
    if(!hashMap[letter]){
        hashMap[letter]=wordArr[index];
    }
}

console.log("**hashMap",hashMap);

for (let index = 0; index < pattern.length; index++) {
    const letter = pattern[index];
    let word= hashMap[letter];


        if(index===pattern.length-1){
            stringfromMap=stringfromMap+word
        }else{
            stringfromMap=stringfromMap+ word + " ";
        }
      

  
    
}
console.log("**pattern:s",stringfromMap,s);
return s==stringfromMap;
};

// The above solution would have been true if we followed simple string pattern but here we are asked for bijection 
/**
 * i.e .
 * In the context of this problem, "bijection" means a one-to-one mapping or correspondence between the letters in the pattern and the words in the given string. In simpler terms:

One-to-One: Each letter in the pattern should correspond to exactly one unique word in the string.
Onto (or Covering): Every word in the string should have a corresponding letter in the pattern.
No Repetition: No two different letters in the pattern should map to the same word, and no two different words in the string should map to the same letter.
 */

var wordPattern = function(pattern, s) {
    const wordArr = s.split(" ");
    
    if (pattern.length !== wordArr.length) {
        return false;
    }
    
    const letterToWordMap = {};
    const wordUsed = new Set();
    
    for (let i = 0; i < pattern.length; i++) {
        const letter = pattern[i];
        const word = wordArr[i];
        
        if (!letterToWordMap[letter]) {
            if (wordUsed.has(word)) {
                return false;  // Word is already used for a different letter
            }
            letterToWordMap[letter] = word;
            wordUsed.add(word);
        } else {
            if (letterToWordMap[letter] !== word) {
                return false;  // The letter is already mapped to a different word
            }
        }
    }
    
    return true;
};



console.log("**wordPattern",wordPattern("abba","dog cat cat dog"));
console.log("**wordPattern",wordPattern("abba","dog dog dog dog"));