// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [5], left = 1, right = 1
// Output: [5]
 

// Constraints:

// The number of nodes in the list is n.
// 1 <= n <= 500
// -500 <= Node.val <= 500
// 1 <= left <= right <= n
 

// Follow up: Could you do it in one pass?

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var reverseBetween = function(head, left, right) {
    if (head === null || left === right) return head;
    
    let dummy = new Node(0);
    dummy.next = head;
    
    let pre = dummy;
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next;
    }
    
    let start = pre.next; // first node to reverse
    let then = start.next;// 2nd node to start
    
    for (let i = 0; i < right - left; i++) {
        start.next = then.next; 
        then.next = pre.next;
        pre.next = then;
        then = start.next;
    }
    
    return dummy.next;
};

// wrong understand reverse just the digits//
var reverseBetween = function(head, left, right) {
    let currentPostion=0;
    let lastHead;
    let leftNode;
    let rightNode;

    while(head!==null){
        //inserting dummy Node at those swap location
        if(currentPostion===left){
            const dummyNode= new Node(null)
            lastHead.next= dummyNode;
            dummyNode.next=head.next;
            leftNode=head;
        }
        if(currentPostion===right){
            const dummyNode= new Node(null)
            lastHead.next= dummyNode;
            dummyNode.next=head.next;
            rightNode=head;
        } 
        lastHead=head;
        head= head.next;
        currentPostion+=1;
    }

    currentPostion=0;

    //finally replacing the dummy node with swapped value 
    while(head!==null){
        if(currentPostion===left){
            head.val=rightNode.val
        } 
        if(currentPostion===right){
            head.val=leftNode.val
        }
        head= head.next;
        currentPostion+=1;
    }
    return head;
};





console.log("**reverseBetween",reverseBetween([1,2,3,4,5],2,4));
console.log("**reverseBetween",reverseBetween([5],1,1));