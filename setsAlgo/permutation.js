//Permutation 
  //  1) With Repititon. ex SAFE COMBINATION YOU WANT TO SET
  //  2) Without Repitition. ex TODO LIST

//Without Repition 
const todoListItems=[
    'Walk the dog',
    'Clean the toiler',
    'buy Groceries',
    'Order food'
]


function getPermuatation(options){
    const permutations=[];

    if(options.length===1){
        return [options];
    }
    const partialPermutations=getPermuatation(options.slice(1));
    // [['order food]]
    const firstOption=options[0];

    for (let i = 0; i < partialPermutations.length; i++) {
        const partialPermutation = partialPermutations[i];
        for (let j = 0; j <= partialPermutation.length; j++) {
            const permutationInFront=partialPermutation.slice(0,j);
            const permutationAfter=partialPermutation.slice(j);
            permutations.push(permutationInFront.concat([firstOption],permutationAfter))
        }
    }

    return permutations;
}

console.log(getPermuatation(todoListItems));

//Time complexity Factorial O(n!)