/**
 * Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

 

Example 1:


Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true
Example 2:


Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false
 

Constraints:

The number of nodes in the root tree is in the range [1, 2000].
The number of nodes in the subRoot tree is in the range [1, 1000].
-104 <= root.val <= 104
-104 <= subRoot.val <= 104
 */

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// ========== Helper: Build Tree from Array ==========
function buildTree(arr) {
    if (!arr.length) return null;
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (queue.length && i < arr.length) {
        const node = queue.shift();

        // console.log("Queue Length:", queue.length);
        

        if (arr[i] !== null && arr[i] !== undefined) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        // console.log("Queue after adding left", queue.length);
        
        i++;

        if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        // console.log("Queue after adding right", queue.length);
        i++;

        // console.log(
        //     `Processed node with value ${node.val}, next index is ${i}`
        // );
        // console.log("------------------------------");
        
        

    }
    return root;
}


function isSameTree (node1, node2) {
    //leaf node //
    if(!node1 && !node2) return true;
    if(!node1 || !node2) return false;
    if(node1.val !== node2.val) return false;

    return  isSameTree(node1.left, node2.left) &&
    isSameTree(node1.right, node2.right);
}


var isSubtreeRecursive = function(root, subRoot) {
   
 if (subRoot === null) return true;   // empty tree is a subtree of any
    if (root === null) return false;     // big tree ended, subRoot not found

    // if trees match starting at this node, we’re done
    if (isSameTree(root, subRoot)) return true;

    // otherwise, move down in the big tree
    return isSubtreeRecursive(root.left, subRoot) || 
           isSubtreeRecursive(root.right, subRoot);

}

var serialize = function(root) {
      const results = [];

    const queue = [root];

    while(queue.length){
        const node = queue.shift();

        if(node === null){
            results.push("#")
        }else{
            results.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    return results.join(","); 
}


var isSubTreeSerializing = function(root, subRoot) {

  const serializedRoot = serialize(root);
  const serializedSubRoot = serialize(subRoot);

  return serializedRoot.includes(serializedSubRoot);


}


function serializePre(root) {
    const res = [];

    function dfs(node) {
        if (node === null) {
            res.push("#");
            return;
        }
        res.push(String(node.val));
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return res.join(",");
}

/**
 * Edge case fixed 
 * var isSubTreeSerializingDFS = function(root, subRoot) {
  const s1 = serializePre(root);
  const s2 = serializePre(subRoot);
  return s1.includes(s2);
};


function serializePre(root) {
    const res = [];

    function dfs(node) {
        if (node === null) {
            res.push("()"); // null marker
            return;
        }
        res.push("(" + node.val + ")"); // wrap value
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return res.join(""); // no separator needed
}

var isSubtree = function(root, subRoot) {
    const s1 = serializePre(root);
    const s2 = serializePre(subRoot);
    return s1.includes(s2);
}; 
 */


console.log("example 1:");

console.log(isSubtreeRecursive(buildTree([3,4,5,1,2]), buildTree([4,1,2]))); // true
console.log(isSubtreeRecursive(buildTree([3,4,5,1,2,null,null,null,null,0]), buildTree([4,1,2]))); // false

console.log("----------------------");

console.log(
    "example 2: Wont give right answer if tree has similar structure but different null placements basically the way level order serialization works"
);
console.log(isSubTreeSerializing(buildTree([3,4,5,1,2]), buildTree([4,1,2]))); // true
console.log(isSubTreeSerializing(buildTree([3,4,5,1,2,null,null,null,null,0]), buildTree([4,1,2]))); // false


console.log("----------------------");

console.log("example 3:");
console.log(isSubTreeSerializingDFS(buildTree([3,4,5,1,2]), buildTree([4,1,2]))); // true
console.log(isSubTreeSerializingDFS(buildTree([3,4,5,1,2,null,null,null,null,0]), buildTree([4,1,2]))); // false





