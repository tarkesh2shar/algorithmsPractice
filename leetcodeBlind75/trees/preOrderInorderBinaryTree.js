/**
 * Medium

Topics
premium lock icon
Companies
Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

 

Example 1:


Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
Example 2:

Input: preorder = [-1], inorder = [-1]
Output: [-1]
 

Constraints:

1 <= preorder.length <= 3000
inorder.length == preorder.length
-3000 <= preorder[i], inorder[i] <= 3000
preorder and inorder consist of unique values.
Each value of inorder also appears in preorder.
preorder is guaranteed to be the preorder traversal of the tree.
inorder is guaranteed to be the inorder traversal of the tree.
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




function buildTreeFromPreIn(preorder, inorder) {

    if (!preorder.length || !inorder.length) return null;
    // preorder gives the first element as root , 
    const rootVal = preorder[0];
    const root = new TreeNode(rootVal);
    //inorder gives the number of elements in left and right subtree identifying the root 
    const rootIndexInInorder = inorder.indexOf(rootVal);

    const leftInorder = inorder.slice(0, rootIndexInInorder);
    const rightInorder = inorder.slice(rootIndexInInorder + 1);

       console.log("Left Inorder:", leftInorder, "Right Inorder:", rightInorder);

    //now that we have left and right array length we can split  preorder array into left and right subtree
    const leftPreorder = preorder.slice(1, leftInorder.length + 1);
    const rightPreorder = preorder.slice(leftInorder.length + 1);

    console.log("Left Preorder:", leftPreorder, "Right Preorder:", rightPreorder);

    // reconstruct left and right subtree calling buildTreeFromPreIn recursively


   root.left= buildTreeFromPreIn(leftPreorder, leftInorder);
   root.right= buildTreeFromPreIn(rightPreorder, rightInorder);

    return root;
     
};





console.log(buildTreeFromPreIn(["A", "B", "D", "E", "C", "F"], ["D", "B", "E", "A", "F", "C"]));


