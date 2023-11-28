const arrayToSort=[3,10,-3,48,5,33,99]

//divide until 2  or 1 items are left in array , and then merge them while sorting.



function mergeSort(arrToSort){
    const arr = arrToSort;
    if(arrToSort.length===2){
        if(arrToSort[0]>arrToSort[1]){
            return [arrToSort[1],arrToSort[0]]
        }
        return arrToSort ;
    }else if (arr.length===1){
        return arrToSort;
    }
    const startIndex= 0;
    const endIndex= arr.length-1;
    const midPoint= Math.floor((endIndex-startIndex)/2);
    const leftArr= arr.splice(startIndex,midPoint);
    const rightArr = arr;
    const sortedLeft=mergeSort(leftArr);  //[1,3]
   const sortedRight= mergeSort(rightArr); //[-2,-3]

   const mergedArray=[];
   let leftArrayIndex=0;
   let rightArrayIndex=0;

    while(leftArrayIndex<sortedLeft.length || rightArrayIndex <sortedRight.length){
        if( leftArrayIndex>= sortedLeft.length ||  sortedLeft[leftArrayIndex]>sortedRight[rightArrayIndex]){
            mergedArray.push(sortedRight[rightArrayIndex]);
            rightArrayIndex++;
        }else{
            mergedArray.push(sortedLeft[leftArrayIndex]);
            leftArrayIndex++;
        }
    }
    return mergedArray;
    return [...sortedLeft,...sortedRight].sort((a,b)=>a-b);
    // return sortTwoArrays(sortedLeft,sortedRight)
}


console.log(mergeSort(arrayToSort));
console.log(mergeSort([10,9,8,7,6,5,4,3,2,1,100,99]));


function sortTwoArrays(a,b){
    console.log("a",a);
    console.log("b",b);

    if(a[1] && b[1]){
        if(a[1]>b[1]){
            return [...b,...a]
         }else{
            return [...a,...b]
         }
    }
    else if(b[1] && !a[1]){
        if(a[0]>b[0] && a[0]<b[1]){
            return [b[0],a[0],b[1]]
        }else if(a[0]>b[1]){
            return [...b,...a]
        } else if(a[0]<b[0]){
            return [...a,...b]
        }
    }

  
}

// console.log(sortTwoArrays([1,2],[-3,-2]));
// console.log(sortTwoArrays([1,2],[3,4]));
// // console.log(sortTwoArrays([1,2],[-2]));
// console.log(sortTwoArrays([2],[-2,4]));