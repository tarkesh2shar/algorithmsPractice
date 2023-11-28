const arrayToSort=[3,10,-3,48,5,33,99]



function bubbleSort(arrToSort){
    const arr = arrToSort;
    for (let i = 0; i < arr.length; i++) {
        let firstElement=arr[i];
        for (let j = i+1; j < arr.length; j++) {
            let secondElement = arr[j];
            if(firstElement>secondElement){
                arr[i] = secondElement;
                arr[j] = firstElement;
                firstElement = secondElement;
            }
        }
    }
    return arr;
}




console.log(bubbleSort(arrayToSort));
console.log(bubbleSort([10,9,8,7,6,5,4,3,2,1,100,99]));