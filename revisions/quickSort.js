//Put in three different chunks 
//equl greator and smaller .
// and then concatinate 
const arrayToSort=[3,10,-3,48,5,33,99];

function quickSort(arrToSort){
    const arr = arrToSort;
    const pivotElement= arr[0];
    const higherArr=[];
    const lowerArr=[];
    const equalArr=[];
    if(arrToSort.length <=1){
        return arrToSort;
    }
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(element===pivotElement){
            equalArr.push(element)
        }
       else if(element>pivotElement){
            higherArr.push(element)
        }else{
            lowerArr.push(element);
        }
    }
    const lowerArrSorted= quickSort(lowerArr);
    const higherArrSorted= quickSort(higherArr);
    return [...lowerArrSorted,...equalArr,...higherArrSorted]


}

// console.log(quickSort(arrayToSort));
console.log(quickSort([10,9,8,7,6,5,4,3,2,1,100,99]));