// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

// Constraints:

// 1 <= k <= nums.length <= 105
// -104 <= nums[i] <= 104

class MaxHeap {
    constructor() {
        this.heapElements = [];
    }

    insert(value) {
        this.heapElements.push(value);
        let currentElementIndex = this.heapElements.length - 1;
        let parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1;
        while (
            parentElementIndex >= 0 &&
            this.heapElements[currentElementIndex] >
            this.heapElements[parentElementIndex]
        ) {
            const parentElement = this.heapElements[parentElementIndex];
            this.heapElements[parentElementIndex] = value;
            this.heapElements[currentElementIndex] = parentElement;
            currentElementIndex = parentElementIndex;
            parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1;
        }
    }

    process() {
        if (this.heapElements.length === 0) {
            return null;
        }
        if (this.heapElements.length === 1) {
            return this.heapElements.pop();
        }

        const topElement = this.heapElements[0];
        this.heapElements[0] = this.heapElements.pop();

        let currentElementIndex = 0;
        let leftChildIndex = 2 * currentElementIndex + 1;
        let rightChildIndex = 2 * currentElementIndex + 2;

        // Keep sinking down the element to maintain the max-heap property.
        while (leftChildIndex < this.heapElements.length) {
            const leftChild = this.heapElements[leftChildIndex];
            const rightChild = this.heapElements[rightChildIndex];

            // Find the larger of the two children.
            const largerChildIndex = (rightChildIndex < this.heapElements.length && rightChild > leftChild) ? rightChildIndex : leftChildIndex;

            // Swap if the parent is smaller than the larger child.
            if (this.heapElements[currentElementIndex] < this.heapElements[largerChildIndex]) {
                const temp = this.heapElements[largerChildIndex];
                this.heapElements[largerChildIndex] = this.heapElements[currentElementIndex];
                this.heapElements[currentElementIndex] = temp;

                // Move to the next set of children.
                currentElementIndex = largerChildIndex;
                leftChildIndex = 2 * currentElementIndex + 1;
                rightChildIndex = 2 * currentElementIndex + 2;
            } else {
                break; // if the parent is bigger than both children, stop sinking down.
            }
        }

        return topElement;
    }


}

var findKthLargest = function (nums, k) {
    const heap = new MaxHeap();

    for (let i = 0; i < nums.length; i++) {
        const number = nums[i];
        heap.insert(number);
    }
    // console.log("**heap", heap);

    let itemToReturn;
    for (let i = 0; i < k; i++) {
        // console.log("**heap",heap);
        //when we process the heap we need to update  the  0th position to the top
        itemToReturn = heap.process();
    }
    return itemToReturn;
};

console.log("**findKthLargest", findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log("**findKthLargest", findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
