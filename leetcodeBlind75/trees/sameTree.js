/**
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

Example 1:


Input: p = [1,2,3], q = [1,2,3]
Output: true
Example 2:


Input: p = [1,2], q = [1,null,2]
Output: false
Example 3:


Input: p = [1,2,1], q = [1,1,2]
Output: false
 
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

// ========== Example Tree Input ==========
const arr = [3, 9, 20, null, null, 15, 7];
const root = buildTree(arr);


var isSameTree = function(p, q) {
   // 1️⃣ both null → trees are same
    if (p === null && q === null) return true;

    // 2️⃣ one null, one not → trees are different
    if (p === null || q === null) return false;

    // 3️⃣ values differ → trees are different
    if (p.val !== q.val) return false;


   return isSameTree(p.left,q.left) && isSameTree(p.right,q.right);
    
};


console.log(isSameTree(buildTree([1,2,3]), buildTree([1,2,3]))); // true
console.log(isSameTree(buildTree([1,2]), buildTree([1,null,2]))); // false
console.log(isSameTree(buildTree([1,2,1]), buildTree([1,1,2]))); // 



var isSameTreeBFS = function(p, q) {
    const queueP = [p];
    const queueQ = [q];
    let isSame = true;
    
    while (queueP.length > 0 && queueQ.length > 0) {
        const nodeP = queueP.shift();
        const nodeQ = queueQ.shift();
        if (nodeP === null && nodeQ === null) {
            continue;
        }
        if (nodeP === null || nodeQ === null) {
            isSame = false;
            break;
        }
        if (nodeP.val !== nodeQ.val) {
            isSame = false;
            break;
        }
        queueP.push(nodeP.left);
        queueP.push(nodeP.right);
        queueQ.push(nodeQ.left);
        queueQ.push(nodeQ.right);

    }

    return isSame;

}


console.log("BFS Approach: ");

console.log(isSameTreeBFS(buildTree([1,2,3]), buildTree([1,2,3]))); // true
console.log(isSameTreeBFS(buildTree([1,2]), buildTree([1,null,2]))); // false
console.log(isSameTreeBFS(buildTree([1,2,1]), buildTree([1,1,2]))); // 