/**
 * Given the head of a linked list, determine if the linked list has a cycle in it.

A cycle exists if some node can be reached again by continuously following the next pointer.

1 → 2 → 3 → 4
      ↑       ↓
      ← ← ← ←


 */


function hasCycle(head) {
    let slow= head;
    let fast= head;

    while(fast != null && fast.next != null){
        slow= slow.next;
        fast= fast.next.next;

        if(slow == fast){
            return true;
        }
    }

    return false;
}