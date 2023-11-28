const todoListItem=["Walk the dog","Go to shopping","Clean house","Order Food"];

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

console.log(getPermutations(todoListItem))