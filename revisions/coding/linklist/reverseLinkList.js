/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
 */





class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function buildList(arr) {
  const dummy = new Node(0);
  let cur = dummy;
  for (const x of arr) {
    cur.next = new Node(x);
    cur = cur.next;
  }
  return dummy.next;
}

function toArray(head) {
  const out = [];
  let cur = head;
  while (cur) {
    out.push(cur.val);
    cur = cur.next;
  }
  return out;
}




/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

   let prev = null;        // previous node (starts as null)
    let curr = head;        // current node

    while (curr) {
        let nextTemp = curr.next; // save next
        curr.next = prev;         // reverse link
        prev = curr;              // move prev forward
        curr = nextTemp;          // move curr forward
    }

    return prev; // new head
    
};






console.log(reverseList(buildList([1,2,3,4,5]))); // [5,4,3,2,1]
