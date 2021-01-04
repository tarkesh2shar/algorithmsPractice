// sum of arrays of number 
// Time Complexity as well !! 

function sumNumbers(number){
    let sum=0;
     number.forEach(element => {
         sum += element
    });
    return sum;
}
console.log(sumNumbers([1,2,3,4,5]));


/**
 * for n=1 
 * function sumNumbers(number){
    let sum=0;                      1
     number.forEach(element => {    1
         sum += element             1
    });
    return sum;                     1
}
 * for n=2
 * function sumNumbers(number){
    let sum=0;                      1
     number.forEach(element => {    1
         sum += element             2
    });
    return sum;                     1
}
 *
  * for n=3
 * function sumNumbers(number){
    let sum=0;                      1
     number.forEach(element => {    1
         sum += element             3
    });
    return sum;                     1
}
 *  
 */