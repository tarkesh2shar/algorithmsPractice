const digits=[1,2,3];
const resultLength=3;

function permutation(options,length){

    const permutations=[];
    if(length===1){
        return options.map((option=>[option]))
    }
    const partialPermutations = permutation(options,length-1);
    

    for (const option of options) {
        for (const existingPermutaion of partialPermutations) {
            permutations.push([option].concat(existingPermutaion))
        }
    }

    return permutations;
}



console.log(permutation(digits,resultLength));