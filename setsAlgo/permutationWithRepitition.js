//With Repetition//
const digit=[1,2,3];
const resultLength=3;
function getPermutation(options,length){
    const permutation=[]
    if(length===1){
        return options.map(option=>[option])
    }
  const partialPermutations = getPermutation(options,length-1);
  // [[1],[2],[3]]
  for (const option of options) {
      for (const existingPermutation of partialPermutations) {
          permutation.push([option].concat(existingPermutation));
      }
  }
  return permutation;
}
console.log(getPermutation(digit,resultLength));

//Time Complexity: O(n^r) n= number of options , r is the number of slots
