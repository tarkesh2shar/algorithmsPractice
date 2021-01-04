//Only work for ordered List//

function findElement(sortedArr,element){
    let startIndex=0;
    let endIndex=sortedArr.length-1;

    while (startIndex<=endIndex){
        const middleIndex=startIndex + Math.floor((endIndex-startIndex)/2);
        if(element==sortedArr[middleIndex]){
            return middleIndex;
        }
        if(sortedArr[middleIndex]<element){
            startIndex=middleIndex+1;
        }else{
            endIndex=middleIndex-1;
        }

    }
}

const arr=[1,5,9,13,99,100];

console.log(findElement(arr,99));

//SPACE COMPLEXITY --- O(1)

//Best Case --> Item in the middle --> O(1)
//Worst Case -->  O(log n)
//Average Case --> O (log n)
