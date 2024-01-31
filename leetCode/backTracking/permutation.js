// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]
 

// Constraints:

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.


function getPermutations(items){
    const permutations=[];

    if(items.length===1){
        return [items]
    }
    const partialPermutation= getPermutations(items.slice(1))
    const firstItem= items[0];
    for (let i = 0; i < partialPermutation.length; i++) {
        const elementArr = partialPermutation[i];
        for (let j = 0; j <= elementArr.length; j++) {
           const permutationInFront= elementArr.slice(0,j);
           const permutationAfter = elementArr.slice(j);
           permutations.push(permutationInFront.concat([firstItem],permutationAfter))
        }
    }

    return permutations;
}
 
function usingBackTrack(nums){
   
        const result = [];
    
        const backtrack = (currentPermutation, remainingNumbers) => {
            if (remainingNumbers.length === 0) {
                // If there are no remaining numbers, add the current permutation to the result
                result.push([...currentPermutation]);
                return;
            }
    
            for (let i = 0; i < remainingNumbers.length; i++) {
                const num = remainingNumbers[i];
    
                // Choose
                currentPermutation.push(num);
    
                // Explore
                const newRemainingNumbers = remainingNumbers.filter((_, index) => index !== i);
                backtrack(currentPermutation, newRemainingNumbers);
    
                // Unchoose (backtrack)
                currentPermutation.pop();
            }
        };
    
        backtrack([], nums);
    
        return result;
    
}



var permute = function(nums) {
     const results=[];
        const generatePermutations= (currentPermutation,remainingNumber)=>{
            if (remainingNumber.length === 0) {
                results.push([...currentPermutation]);
                return;
            }

            for (let i = 0; i < remainingNumber.length; i++) {
                const num = remainingNumber[i];
                
                currentPermutation.push(num);

                const newRemainingNumbers = remainingNumber.filter((_, index) => index !== i);
                generatePermutations(currentPermutation, newRemainingNumbers);

                currentPermutation.pop();
                
            }


          

            



            


        }

        generatePermutations([],nums)

        return results

    return getPermutations(nums)
    return usingBackTrack(nums)
    
};



console.log("**permute",permute([1,2,3]));
// console.log("**permute",permute([0,1]));
// console.log("**permute",permute([1]));