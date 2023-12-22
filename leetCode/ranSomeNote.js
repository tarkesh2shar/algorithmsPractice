// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.



// var canConstruct = function(ransomNote, magazine) {

//     if(!ransomNote || !magazine) return false;
//     const alphabetArraySize=26;
//     const alphabetArray= Array(alphabetArraySize).fill(null).map(()=>[]);
//     const charCodeAtBeginning="a".charCodeAt(0);

//     for (const alphabet of magazine) {
//         // console.log("**alphabet",alphabet);
//         const charCodeAt= alphabet.charCodeAt(0)-charCodeAtBeginning;
//         console.log(charCodeAt%alphabetArraySize);
//         alphabetArray[charCodeAt%alphabetArraySize].push(alphabet)
//     }

//     console.log("**alphabetArray",alphabetArray);

//     function checkIfAlphabetEnough(alphabet,quantity){
//         const charCodeAt= alphabet.charCodeAt(0)-charCodeAtBeginning;
//         const alphabett=alphabetArray[charCodeAt]
//         if(alphabett){

//             // if(alphabetArray[charCodeAt].length>=quantity ){
//             //     return true
//             // }else{
//             //     return false;
//             // }
//             const alphabetsAvailable = alphabetArray[charCodeAt].length;

//             console.log("**alphabetsAvailable",alphabetsAvailable ,alphabett);

//             if(quantity <= alphabetsAvailable){
//                 return true;
//             }else{
//                 return false;
//             }


//         }else{
//             return false;
//         }
//     }

//     const hashMap={

//     }
//     for (const alphabet of ransomNote) {
//         if(!hashMap[alphabet]){
//             hashMap[alphabet]=1;
//         }else{
//             hashMap[alphabet]=hashMap[alphabet]+1;
//         }
//     }

//     console.log("**hashMap",hashMap);

//     // let isAlphabetEnough =true;
//     for (const key in hashMap) {
//          if(!checkIfAlphabetEnough(key,hashMap[key])){
//             return false;
//          }
//     }

//     return true; 
// };


var canConstruct = function(ransomNote, magazine) { 
    if (ransomNote == null || magazine == null) return false;
    const array1 = Array(26).fill(null)
    const array2 = Array(26).fill(null)
    const charCodeAtBeginning="a".charCodeAt(0);
    

    for (const alphabet of ransomNote) {
        const charCodeAt= alphabet.charCodeAt(0)-charCodeAtBeginning;
        if( !array1[charCodeAt]){
            array1[charCodeAt]=1;
        }else{
            array1[charCodeAt]+=1;
        }
    }

    for (const alphabet of magazine) {
        const charCodeAt= alphabet.charCodeAt(0)-charCodeAtBeginning;
        if( !array2[charCodeAt]){
            array2[charCodeAt]=1;
        }else{
            array2[charCodeAt]+=1;
        }
    }

    for (let  i = 0; i < 26; i++) {
        if (array2[i] < array1[i]) {
            return false;
        }
    }
    

    return true;


    console.log("**array1",array1);
    console.log("**array2",array2);


    // for (char c : ransomNote.toCharArray()) {
    //     array1[c - 'a'] += 1;
    // }

    // for (char c : magazine.toCharArray()) {
    //     array2[c - 'a'] += 1;
    // }

}

// console.log("**canConstruct",canConstruct("a","b"));
// console.log("**canConstruct",canConstruct("aa","ab"));
// console.log("**canConstruct",canConstruct("aa","aab"));
// console.log("**canConstruct",canConstruct("bg","efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"));

console.log("**canConstruct",canConstruct("fihjjjjei","hjibagacbhadfaefdjaeaebgi"));