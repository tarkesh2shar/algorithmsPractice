//Timing out for large array inputs //
var Node= function(){
    this.children=Array(26).fill(null);
    this.value=null;
}

var Trie = function() {
    const node = new Node();
    this.root=node;

};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    console.log("this.root.children",this.root.children);
    let node = this.root;
    console.log("**node",node);
    // console.log("**node",node.children);
    let charCodeAtBeginning= "a".charCodeAt(0);

    for(let i=0 ; i< word.length;i++){
        const letter = word[i];
        const injectAtPosition = letter.charCodeAt(0)-charCodeAtBeginning;
        if (!node.children[injectAtPosition]) {
            const newNode = new Node();
            node.children[injectAtPosition] = newNode;
          }
          node = node.children[injectAtPosition];
    }
    // last node to put value
    node.value = word;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;
    for (let index = 0; index < word.length; index++) {
        const alphabetIndex = word[index].charCodeAt(0) - 97;
        if (!node.children[alphabetIndex]) {
          return false;
        }
        node = node.children[alphabetIndex];
      }

      if(node.value ===null){
        return false;
    }
    return true;

};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for (let index = 0; index < prefix.length; index++) {
        const alphabetIndex = prefix[index].charCodeAt(0) - 97;
        if (!node.children[alphabetIndex]) {
          return false;
        }
        node = node.children[alphabetIndex];
      }
    //   if(node.value ===null){
    //     return false;
    // }
    // return true;
    return node.value !== null ||  Object.keys(node.children).length > 0;
};

// Trie.prototype.startsWith = function(prefix) {
//     let node = this.root;
//     for (let index = 0; index < prefix.length; index++) {
//         const alphabetIndex = prefix[index].charCodeAt(0) - 97;
//         if (!node.children[alphabetIndex]) {
//             return false;
//         }
//         node = node.children[alphabetIndex];
//     }
//     // Check if the current node represents a word (full prefix)
//     return node.value !== null;
// };

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple"));   // return True
// console.log(trie.search("app"));     // return False
// console.log(trie.startsWith("app")); // return True
// trie.insert("app");
// trie.search("app");






// with maps

// function TrieNode() {
//     this.children = new Map();
//     this.isEndOfWord = false;
// }

// function Trie() {
//     this.root = new TrieNode();
// }

// Trie.prototype.insert = function(word) {
//     let node = this.root;
//     for (const char of word) {
//         if (!node.children.has(char)) {
//             node.children.set(char, new TrieNode());
//         }
//         node = node.children.get(char);
//     }
//     node.isEndOfWord = true;
// };

// Trie.prototype.search = function(word) {
//     let node = this.root;
//     for (const char of word) {
//         if (!node.children.has(char)) {
//             return false;
//         }
//         node = node.children.get(char);
//     }
//     return node.isEndOfWord;
// };

// Trie.prototype.startsWith = function(prefix) {
//     let node = this.root;
//     for (const char of prefix) {
//         if (!node.children.has(char)) {
//             return false;
//         }
//         node = node.children.get(char);
//     }
//     return true;
// };

// // Example usage:
// const trie = new Trie();
// trie.insert("apple");
// console.log(trie.search("apple"));   // Output: true
// console.log(trie.search("app"));     // Output: false
// console.log(trie.startsWith("app")); // Output: true


// another way 


// efficient one down below;
function TrieNode() {
    this.children = Array(26);
    this.isEndOfWord = false;
}

function Trie() {
    this.root = new TrieNode();
}

Trie.prototype.getIndex = function(char) {
    return char.charCodeAt(0) - 97;
};

Trie.prototype.insert = function(word) {
    let node = this.root;
    for (const char of word) {
        const index = this.getIndex(char);
        if (!node.children[index]) {
            node.children[index] = new TrieNode();
        }
        node = node.children[index];
    }
    node.isEndOfWord = true;
};

Trie.prototype.search = function(word) {
    let node = this.root;
    for (const char of word) {
        const index = this.getIndex(char);
        if (!node.children[index]) {
            return false;
        }
        node = node.children[index];
    }
    return node.isEndOfWord;
};

Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for (const char of prefix) {
        const index = this.getIndex(char);
        if (!node.children[index]) {
            return false;
        }
        node = node.children[index];
    }
    // return true;
    return node.children.size > 0 || node.isEndOfWord;
};
