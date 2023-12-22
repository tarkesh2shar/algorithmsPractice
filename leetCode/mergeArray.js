// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

// Constraints:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109

/**
 * 1 ---> 2 compare 
 * 2 ---> 2 compare 
 */
         // [1,4,6]

//  --->        [1,2,3,2,5,6]  --> [1,2,3,2,5,6] --> [1,2,3,2,5,6]

//              [1,2,3,2,5,6] --> [1,2,2,3,5,6]

const nums1=[1,2,3,0,0,0];
const nums2=[2,5,6];
const m =3 ;
const n=3

var merge = function(nums1, m, nums2, n) {

    const sortedArray=[ ...nums1,...nums2 ].filter(item=>item!==0);

    for (let i = 0; i < sortedArray.length; i++) {
            let element = sortedArray[i]
        for (let j = i+1; j < sortedArray.length; j++) {
            const innerElement= sortedArray[j];
            if(element > innerElement){
                sortedArray[i] = innerElement;
                sortedArray[j]= element;

                element = innerElement;
            }
        }
    }


    return sortedArray;
};


// const nums1=[1,2,3,0,0,0];
// const nums2=[2,5,6];

const mergeWithPassion=function(nums1,m,nums2,n){
    let midPointIndex= Math.floor((nums1.length-1)/2);
    console.log("**midPointIndex",midPointIndex);

    let lengthNum1= nums1.length-1;
    let lengthNum2= nums2.length-1;
    
    // const nums1=[1,2,3,0,0,0];
    // const nums2=[2,5,6];

    while(lengthNum1!==-1){
        if(nums2[lengthNum2] >nums1[midPointIndex]){
            nums1[lengthNum1]= nums2[lengthNum2];
        }
        if(nums1[midPointIndex]>nums2[lengthNum2]){
            nums1[lengthNum1] = nums1[midPointIndex];
            nums1[midPointIndex] = nums2[lengthNum2];
        }
        // lengthNum1=0;

        lengthNum1 -- ;
        lengthNum2 -- ;
    }

    console.log("**nums1",nums1);

    return nums1;
}

// console.log("**merge",mergeWithPassion(nums1,m,nums2,n));
// console.log("**merge",mergeWithPassion([0],m,[1],n));


const chatGPTSolution= function(nums1,m,nums2,n){
    let lengthNum1 = m - 1;
    let lengthNum2 = n - 1;



    let mergeIndex = m + n - 1; //midPoint

    // const nums1=[1,2,3,0,0,0];
    // const nums2=[2,5,6];

    while (lengthNum1 >= 0 && lengthNum2 >= 0) {
        if(nums2[lengthNum2]>nums1[lengthNum1]){
            nums1[mergeIndex] = nums2[lengthNum2];
            lengthNum2--;
        }else{
            nums1[mergeIndex]= nums1[lengthNum1];
            lengthNum1--;
        }
        mergeIndex -- ;
    }
    while (lengthNum2 >= 0) {
        nums1[mergeIndex] = nums2[lengthNum2];
        lengthNum2--;
        mergeIndex--;
    }

    return nums1;

}

console.log("**merge",chatGPTSolution(nums1,m,nums2,n));













// ----------legacy code ------------

// const mergeWithPassion=function(nums1,m,nums2,n){
//     let midPointIndex= Math.floor((nums1.length-1)/2);
//     console.log("**midPointIndex",midPointIndex);

//     let lengthNum1= nums1.length-1;
//     let lengthNum2= nums2.length-1;
    
//     // while(lengthNum1!==0){

//     //     console.log("**nums1",nums1[lengthNum1]);
//     //     console.log("**mums1",nums1);

//     //     // if(nums1[midPointIndex]=== !undefined){
//     //     //     nums1[lengthNum1]=nums2[lengthNum2]
//     //     // }
//     //     if(nums1[midPointIndex]< nums2[lengthNum2]){
//     //         nums1[lengthNum1]=nums2[lengthNum2]
//     //         lengthNum2--
//     //     }
//     //     else if(nums1[midPointIndex]===nums2[lengthNum2]){
//     //         nums1[midPointIndex]= undefined;
//     //     }
//     //     else{
//     //        nums1[lengthNum1]= nums1[midPointIndex];
//     //        nums1[midPointIndex]=nums2[lengthNum2];
//     //        midPointIndex -- ;
//     //     }


//     //     lengthNum1--;
//     // }

//     // const nums1=[1,2,3,0,0,0];
//     // const nums2=[2,5,6];

//     while(lengthNum1!==0){
//         if(nums2[lengthNum2] >nums1[midPointIndex]){
//             nums1[lengthNum1]= nums2[lengthNum2];
//         }
//         if(nums1[midPointIndex]>nums2[lengthNum2]){
//             nums1[lengthNum1] = nums1[midPointIndex];
//             nums1[midPointIndex] = nums2[lengthNum2];
//         }
//         // lengthNum1=0;

//         lengthNum1 -- ;
//         lengthNum2 -- ;
//     }

//     console.log("**nums1",nums1);

//     return nums1;
// }