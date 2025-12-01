/**
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

 

Example 1:


Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
Example 2:


Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
Example 3:

Input: root = [2,1], p = 2, q = 1
Output: 2
 

Constraints:

The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q will exist in the BST.
 

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



function lowestCommonAncestor(root, p, q) {
    console.log("Root:", root.val, "P:", p.val, "Q:", q.val);

    function dfs(node,p,q) {
        if (node === null) return null;
     
       //BST FOLLOWS LEFT < ROOT < RIGHT  
       //so it meanst that while coming from root , down , if both p and q are less than root , we go left ? why ? 
        // --> Because left path means , all will be smaller than root , so that is the only path that makes sense to explore
        //if both p and q are greater than root , we go right , because all right nodes are greater than root in BST
        if(p.val < node.val && q.val < node.val) {
            return dfs (node.left, p , q);
        }
        else if ( p.val > node.val && q.val > node.val) {
            return dfs (node.right, p , q);
        }
        //if one is on left and other is on right , we have found our LCA
        else {
            return node;
        }
    };




   return dfs(root,p,q);
    
};




console.log(lowestCommonAncestor(buildTree([6,2,8,0,4,7,9,null,null,3,5]), new TreeNode(2), new TreeNode(8))); //6
console.log(lowestCommonAncestor(buildTree([6,2,8,0,4,7,9,null,null,3,5]), new TreeNode(2), new TreeNode(4)));


