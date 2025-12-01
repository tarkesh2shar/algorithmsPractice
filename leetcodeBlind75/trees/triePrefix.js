/**
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 

Example 1:

Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True
 */




class TrieNode {
    constructor() {
        // 26 lowercase English letters
        this.children = Array(26).fill(null);
        this.isEnd = false; // marks end of a word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
       let node = this.root;

    for (let char of word) {
        let index = char.charCodeAt(0) - 'a'.charCodeAt(0);

        // if child does not exist, create it
        if (node.children[index] === null) {
            node.children[index] = new TrieNode();
        }

        // move to the next node
        node = node.children[index];
    }

        // mark the end of the word
        node.isEnd = true;
        
    }

    search(word) {
       console.log("searching for:", word);
    let node = this.root;
    
    for (let char of word) {
        let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
       console.log("Checking character:", char, "at index:", index);
        if (node.children[index] === null) {
            console.log("Character not found:", char);
            return false; // character path does not exist
        }
        node = node.children[index];
       
    }
    return node.isEnd; // check if it's end of a word
}

    startsWith(prefix) {
        // TODO: your implementation
        let node = this.root;

    for (let char of prefix) {
        let index = char.charCodeAt(0) - 'a'.charCodeAt(0);

        // if child does not exist, prefix not found
        if (node.children[index] === null) {
            return false;
        }
        node = node.children[index];
     }

      return true;

    }
}




let trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));// return True
console.log(trie.search("app"));// return True
