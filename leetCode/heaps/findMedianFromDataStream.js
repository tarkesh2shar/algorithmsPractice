// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:

// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
 

// Example 1:

// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]

// Explanation
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0



/**
 * Initialize your data structure here.
 */
 var MedianFinder = function() {
    // Max heap to store the smaller half of the numbers
    this.maxHeap = new MaxHeap();

    // Min heap to store the larger half of the numbers
    this.minHeap = new MinHeap();

    // Variable to keep track of the total number of elements
    this.size = 0;
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    // Add the number to the max heap
    this.maxHeap.insert(num);
    console.log("**   this.maxHeap",   this.maxHeap);
    console.log("**   this.minHeap",   this.minHeap);
    console.log("******************************************");
    // Move the maximum element from the max heap to the min heap
    this.minHeap.insert(this.maxHeap.extractMax());
    console.log("**   this.maxHeap",   this.maxHeap);
    console.log("**   this.minHeap",   this.minHeap);
    console.log("******************************************");
    // Balance the sizes of the heaps
    if (this.maxHeap.size() < this.minHeap.size()) {
        this.maxHeap.insert(this.minHeap.extractMin());
    }
    console.log("**   this.maxHeap",   this.maxHeap);
    console.log("**   this.minHeap",   this.minHeap);

    // Increment the total number of elements
    this.size++;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.size % 2 === 0) {
        // If the total number of elements is even, return the average of the top elements
        return (this.maxHeap.getMax() + this.minHeap.getMin()) / 2;
    } else {
        // If the total number of elements is odd, return the top element of the max heap
        return this.maxHeap.getMax();
    }
};

// Max Heap implementation
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    extractMax() {
        const max = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapify();
        }
        return max;
    }

    getMax() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] >= this.heap[index]) {
                break;
            }
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    heapify() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            let largest = index;

            if (leftChild < length && this.heap[leftChild] > this.heap[largest]) {
                largest = leftChild;
            }

            if (rightChild < length && this.heap[rightChild] > this.heap[largest]) {
                largest = rightChild;
            }

            if (index === largest) {
                break;
            }

            this.swap(index, largest);
            index = largest;
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

// Min Heap implementation
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    extractMin() {
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapify();
        }
        return min;
    }

    getMin() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) {
                break;
            }
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    heapify() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            let smallest = index;

            if (leftChild < length && this.heap[leftChild] < this.heap[smallest]) {
                smallest = leftChild;
            }

            if (rightChild < length && this.heap[rightChild] < this.heap[smallest]) {
                smallest = rightChild;
            }

            if (index === smallest) {
                break;
            }

            this.swap(index, smallest);
            index = smallest;
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

// Usage example
var medianFinder = new MedianFinder();
medianFinder.addNum(1);
medianFinder.addNum(2);
console.log(medianFinder.findMedian()); // Output: 1.5
medianFinder.addNum(3);
console.log(medianFinder.findMedian()); // Output: 2.0
