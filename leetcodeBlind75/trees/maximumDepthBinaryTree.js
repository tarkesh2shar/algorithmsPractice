/**
 * Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2
 

Constraints:

The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100
 */






// ========== Tree Node Definition ==========
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

        console.log("Queue Length:", queue.length);
        

        if (arr[i] !== null && arr[i] !== undefined) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        console.log("Queue after adding left", queue.length);
        
        i++;

        if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        console.log("Queue after adding right", queue.length);
        i++;

        console.log(
            `Processed node with value ${node.val}, next index is ${i}`
        );
        console.log("------------------------------");
        
        

    }
    return root;
}

// ========== Example Tree Input ==========
const arr = [3, 9, 20, null, null, 15, 7];
const root = buildTree(arr);

// Now you can directly call your function like:
// console.log(maxDepth(root));


/**
 * explore left
explore right
combine results
 */

function maxDepth(root) {
    if (root === null) return 0; // Base case: if the node is null, depth is 0
    
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1; 
}


function bfsMaxDepth(root) {
    if (root === null) return 0;

    const queue = [root];
    let depth = 0;

     while (queue.length > 0) {
        const levelSize = queue.length; // nodes in this level

        // process one full level
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        depth++; // we completed a level
    }

    return depth;

}

console.log("Max Depth (DFS):", maxDepth(root)); // Output: 3
console.log("Max Depth (BFS):", bfsMaxDepth(root)); // Output: 3