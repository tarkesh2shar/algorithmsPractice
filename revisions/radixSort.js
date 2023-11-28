const arrayToSort=[3,10,-3,48,5,33,99] 
// const arrayToSort = [3, 10, 48, 5, 33, 99]

function radixSort(arrToSort, iteration = 1) {
    const arr = arrToSort;
    const intermediateHolder = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
            let number;
            number = Math.floor(element/10^iteration);
            const remainder = Math.abs(number % 10^iteration);
            if (intermediateHolder[remainder]) {
                intermediateHolder[remainder] = [...intermediateHolder[remainder], element]
            } else {
                intermediateHolder[remainder] = [element]
            }
        
    }
    const partialSortedArray = [];
    for (let index = 0; index < intermediateHolder.length; index++) {
        const elementArray = intermediateHolder[index];
        if (elementArray) {
            for (const item of elementArray) {
                partialSortedArray.push(item);
            }
        }

    }


    return radixSort(partialSortedArray,iteration+1)
}

console.log(3 % 10);

console.log(radixSort(arrayToSort))