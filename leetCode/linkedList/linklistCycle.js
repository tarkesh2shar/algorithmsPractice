// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
// Example 2:

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
// Example 3:

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

// Constraints:

// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.

// Follow up: Can you solve it using O(1) (i.e. constant) memory?

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(val) {
    // const node = new Node(val);
    // if (!this.head) {
    //   this.head = node;
    //   this.head.next = null;
    // }

    const node = { val, next: null };

    if (this.tail) {
      this.tail.next = node;
    }

    this.tail = node;

    if (!this.head) {
      this.head = node;
    //   this.head.next = null;
    }
  }

  toArray(){
    const elementsArr=[];

    let currNode = this.head
    while(currNode){
        elementsArr.push(currNode);
        currNode= currNode.next;
    }
    return elementsArr
  }
  prepend(val){
    const currNode= this.head;
    const newNode= {val,next:currNode};
    this.head= newNode;

    if(!this.tail){
        this.tail= newNode;
    }

  }
  delete(val){
    if(!this.head){
        return;
    }
    while(this.head && this.head.val===val){
        this.head= this.head.next;
    }
    let currentNode = this.head;
    while(currentNode.next){
       if(currentNode.next.val===val){
        currentNode.next = currentNode.next.next;
       }else{
        currentNode= currentNode.next;
       }
    }
    if(this.tail.val===val){
        this.tail=currentNode;
    }
  }
  find(val){
    if(!this.head){
        return
    }
    let currentNode= this.head;
    while(currentNode){
        if(currentNode.val===val){
            return currentNode
        }
        currentNode=currentNode.next;
    }
    return null;
  }
  insertAfter(val,after){
    const existingnode= this.find(after);
    if(existingnode){
        const newNode= {val,next:existingnode.node};
        existingnode.next= newNode;
    }
  }

}

const linkedlist= new LinkedList();

// linkedlist.append(1)
// linkedlist.append(2)
// linkedlist.append("Hello there")
// linkedlist.append("wassup dammit")
// linkedlist.prepend("First Value");
// linkedlist.prepend("First Value");
// linkedlist.delete("wassup dammit")
// linkedlist.delete("First Value");
// linkedlist.delete("Hello there")

// console.log(linkedlist.find("adsd"));
// console.log(linkedlist.find(2));

// linkedlist.insertAfter("insertedProperly?",2)

// console.log("**linkedlist",linkedlist.toArray());

var hasCycle = function(head) {
  //Floyd's Tortoise and Hare algorithm
  // If there is a cycle, the fast pointer will eventually catch up with the slow pointer, and they will meet at some node within the cycle.
  let fastPointer = head;
  let slowPointer= head;

  while(fastPointer && fastPointer.next){
   slowPointer= slowPointer.next;
   fastPointer= fastPointer.next.next;
    if(slowPointer===fastPointer){
      return true;
    }
  }
  return false;


}
