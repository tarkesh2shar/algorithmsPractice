const numbers = [1,2,3,4,5,6,7,8,9,10,15,20,25,43,54,65,99]



// function binarySearch(arr,item,offset){ 
//     let startIndex=0;
//     let endIndex=arr.length-1;
//     const halfLength = Math.floor((endIndex-startIndex)/2)
//     if( arr[halfLength] === item ){
//         return halfLength + offset
//     }
//     else if(arr[halfLength] < item){
//         const rightArr = arr.slice(halfLength,arr.length-1); 
//         const offset = arr.length-rightArr.length
//       return  binarySearch(rightArr,item,offset)
//     }
//     else {
//         const leftArr = arr.slice(0,halfLength);
//        return binarySearch(leftArr,item,0)
//     }
// }


function binarySearch(arr,item,offset=0){
    let startIndex=0;
    let endIndex=arr.length-1;
    const sortArray=arr;

    console.log(sortArray,item);
        // const middleIndex=startIndex + Math.floor((endIndex-startIndex)/2);
        const middleIndex= Math.floor((endIndex-startIndex)/2);
        if(item==sortArray[middleIndex]){
            return middleIndex+offset;
        }
        if(sortArray[middleIndex]<item){
            startIndex=middleIndex+1;
            offset =offset+middleIndex+1
            return binarySearch(sortArray.slice(startIndex,endIndex+1),item,offset)
        }else{
            endIndex=middleIndex-1;
            return binarySearch(sortArray.slice(startIndex,endIndex+1),item,offset)
        }
}

console.log(binarySearch(numbers,15));

// const arr=[1,5,9,13,99,100];

// console.log(binarySearch(arr,99));
