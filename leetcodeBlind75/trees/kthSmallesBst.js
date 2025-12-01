/**
 * 230. Kth Smallest Element in a BST
Medium

Topics
premium lock icon
Companies

Hint
Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

 

Example 1:


Input: root = [3,1,4,null,2], k = 1
Output: 1
Example 2:


Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3
 

Constraints:

The number of nodes in the tree is n.
1 <= k <= n <= 104
0 <= Node.val <= 104
 

Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?
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



function kthSmallest(root, k) {

    //we need to do a inorder serialization of the tree until we reach kth element;

    const results= [];

    function dfs(node) {
        if (!node) return;

        dfs(node.left);          // go left
        results.push(node.val);  // visit current
        dfs(node.right);         // go right
    }

    dfs(root);

    // kth smallest -> index k-1 (0-based)
    return results[k - 1];

}




console.log(kthSmallest(buildTree([3, 1, 4, null, 2]), 1)); // 1
console.log(kthSmallest(buildTree([5, 3, 6, 2, 4, null, null, 1]), 3)); // 3
