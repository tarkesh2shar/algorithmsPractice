

// Topics
// Companies
// You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and an integer k.

// Define a pair (u, v) which consists of one element from the first array and one element from the second array.

// Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.

 

// Example 1:

// Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
// Output: [[1,2],[1,4],[1,6]]
// Explanation: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
// Example 2:

// Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
// Output: [[1,1],[1,1]]
// Explanation: The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
// Example 3:

// Input: nums1 = [1,2], nums2 = [3], k = 3
// Output: [[1,3],[2,3]]
// Explanation: All possible pairs are returned from the sequence: [1,3],[2,3]
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 105
// -109 <= nums1[i], nums2[i] <= 109
// nums1 and nums2 both are sorted in non-decreasing order.
// 1 <= k <= 104
// k <= nums1.length * nums2.length

class MinHeap {
    constructor(){
        this.heap=[];
    }
    add(val){
        this.heap.push(val);
        this.heapifyUp(val);
    }
    pop(){
       const lastElement =  this.heap.pop();
       const firstElement = this.heap[0];
        if(this.heap.length!==0){
            this.heap[0]=lastElement;
            this.heapifyDown();
        }
       return firstElement;
    }
    heapifyUp(val){
        let  currentElementIndex = this.heap.length-1;
        // let  parentElementIndex= Math.floor((currentElementIndex+1)/2) -1;
        while(currentElementIndex>0){
            let parentElementIndex = Math.floor((currentElementIndex - 1) / 2);
            if(this.heap[parentElementIndex][0] +this.heap[parentElementIndex][1] <=this.heap[currentElementIndex][0]+this.heap[currentElementIndex][1] ){

                break;
            }else{
                // console.log("**how many times i am coming here");
                // swappingLogic Here 
                let  parent = this.heap[parentElementIndex];
                // let  children = this.heap[currentElementIndex]
                this.heap[currentElementIndex]= parent;
                this.heap[parentElementIndex] = val;

                currentElementIndex = parentElementIndex;
            }

        }
    }
    heapifyDown(){
        let currentIndex=0;
        while(true){
           
            let leftChildIndex= 2*currentIndex+1;
            let rightChildIndex=2*currentIndex+2;
            let maxChildIndex=currentIndex;

            if( leftChildIndex<this.heap.length &&  this.heap[leftChildIndex][0]+ this.heap[leftChildIndex][1]<this.heap[maxChildIndex][0]+
                this.heap[maxChildIndex][1]
                ){
                maxChildIndex = leftChildIndex;
            }
            if(rightChildIndex< this.heap.length && this.heap[rightChildIndex][0]+this.heap[rightChildIndex][1]<this.heap[maxChildIndex][0]+ this.heap[maxChildIndex][1]){
                maxChildIndex = rightChildIndex;
            }
            if(maxChildIndex==currentIndex){
                break;
            }
            // swapping logic here // 
            const parent = this.heap[currentIndex];
            const child= this.heap[maxChildIndex];

            this.heap[maxChildIndex] = parent;
            this.heap[currentIndex] = child;

            currentIndex = maxChildIndex;
            


        }
        

    }
    toprint(){
        return this.heap;
    }

    // [5,10,12,55,100]


}

var kSmallestPairs = function(nums1, nums2, k) {
   const allPossiblePairs=[];
   const outputPair=[];
   const heap = new MinHeap();
    for (let i = 0; i < nums1.length; i++) {
        const firstPair = nums1[i];
        for (let j = 0; j < nums2.length; j++) {
            const secondPair = nums2[j];
            const pair= [firstPair,secondPair]
            allPossiblePairs.push(pair);
            heap.add(pair)
        }
    }
    if(allPossiblePairs.length<=k){
        return allPossiblePairs;
    }
//   for (let i = 0; i < allPossiblePairs.length; i++) {
//     let pair = allPossiblePairs[i];
//     heap.add(pair)
//   }
//   for (let i = 0; i < k; i++) {
//     const processedMinSum = heap.pop();
//     outputPair.push(processedMinSum);
//   }
  for (let i = 0; i <k; i++) { // Loop only till the minimum of 'k' or number of pairs
    const processedMinSum = heap.pop();
    if(processedMinSum !== undefined){ // Check to ensure the element is not 'undefined'
      outputPair.push(processedMinSum);
    }
  }
    // console.log("**allPossiblePairs",allPossiblePairs);
    return outputPair;
};


console.log("**kSmallestPairs",kSmallestPairs([1,7,11],[2,4,6],3));
console.log("**kSmallestPairs",kSmallestPairs([1,1,2],[1,2,3],2));
console.log("**kSmallestPairs",kSmallestPairs([1,2],[3],3));




    //Hash Map
    // Heap//
/**
 *                      55
 *                  55       30
                  54  10   11   100

                  [55,30,54,10,11,5,100]
*/


// const heap = new MaxHeap();

// heap.add(55)
// console.log("**heap",heap.toprint());
// heap.add(30)
// console.log("**heap",heap.toprint());
// heap.add(11)
// console.log("**heap",heap.toprint());
// heap.add(5)
// console.log("**heap",heap.toprint());
// heap.add(100)
// console.log("**heap",heap.toprint());
// heap.add(54)
// console.log("**heap",heap.toprint());
// heap.add(10)

// for (let i = 0; i < 7; i++) {
//     heap.pop();
//     console.log("**heap.pop()",heap.toprint());
// }

// heap.pop();

// console.log("**heap",heap.toprint());