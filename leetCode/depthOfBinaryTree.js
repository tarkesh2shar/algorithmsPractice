// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2
 

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100
class Node {
    constructor(value){
        this.value= value;
        this.left=null;
        this.right=null;
        this.parent=null;
    }
    add(value){
        if(this.value===null){
            this.value=value;
            return;
        }
        if(this.value<value){
            if(this.right){
                this.right.add(value)
                return;
            }
            const newNode = new Node(value);
            newNode.parent=this;
            this.right=newNode;
            return;
        }
        if(this.value>value){
            if(this.left){
                this.left.add(value)
                return;
            }
            const newNode = new Node(value);
            newNode.parent=this;
            this.left=newNode;
            return;
        }
    }
    remove(value){
        const identifiedNode= this.find(value);
        if(!identifiedNode){
            throw new Error("Could not find node with that value");
        }
        if(!identifiedNode.left && !identifiedNode.right){
            const identifiedParent= identifiedNode.parent;
            identifiedParent.removeChild(identifiedNode);
            return;
        }
        if(identifiedNode.left && identifiedNode.right){
            const nextBiggerNode = identifiedNode.right.findNext();
            if(nextBiggerNode.value !== identifiedNode.right.value){
                this.remove(nextBiggerNode.value);
                identifiedNode.value=nextBiggerNode.value;
                // identifiedNode.left.parent=identifiedNode;
                // identifiedNode.right.parent=identifiedNode;
            }else{
                identifiedNode.value =identifiedNode.right.value;
                identifiedNode.right = identifiedNode.right.right;
                // identifiedNode.left.parent=identifiedNode;
                // identifiedNode.right.parent=identifiedNode;
            }
        }else{
            const childNode = identifiedNode.left || identifiedNode.right;
            identifiedNode.left=childNode.left;
            identifiedNode.right=childNode.right;
            identifiedNode.value=childNode.value;
        }
        if(identifiedNode.left){
            identifiedNode.left.parent=identifiedNode;
        }
        if(identifiedNode.right){
            identifiedNode.right.parent=identifiedNode;
        }

    }
    removeChild(node){
        if(this.left && this.left===node){
            this.left=null;
            return;
        }
        if(this.right && this.right===node){
            this.right=null;
            return;
        }

    }
    findNext(){
        if(!this.left){
            return this;
        }
        return this.left.firstNext()
    }
    find(value){
        if(this.value===value){
            return this;
        };
        if(this.value<value && this.right){
          return  this.right.find(value)
        }
        if(this.value>value && this.left){
            return  this.left.find(value)
          }
    }
}
class BST{
    constructor(){
        this.root= new Node(null);
    }
    add(value){
        this.root.add(value);
    }
    remove(value){
        this.root.remove(value)
    }
    find(value){
       return this.root.find(value);
    }

}
const tree = new BST();
tree.add(3)
tree.add(9)
tree.add(20)
tree.add(null)
tree.add(null)
tree.add(15)
tree.add(7)

console.log("tree",tree.root);


var maxDepth = function(root) {
  const depth=  root==null?0:1+ Math.max(maxDepth(root.left),maxDepth(root.right))
    return depth;
};

console.log("**maxDepth",maxDepth(tree.root));