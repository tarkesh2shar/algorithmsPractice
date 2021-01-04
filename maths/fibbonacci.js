// 1,1,2,3,5,8,13,21,34,55,89,144......

// return the nth element of fibbonacci sequence
const { performance, PerformanceObserver } = require("perf_hooks")
const perfObserver = new PerformanceObserver((items) => {
    items.getEntries().forEach((entry) => {
      console.log(entry)
    })
  }) 
  perfObserver.observe({ entryTypes: ["measure"], buffer: true })


function getFibbonaciNumberAtPosition(position){
    let array=[1];
    let n1=0;
    let n2=1;
    let nextTerm;
    for (let i = 0; i <= position ;i++) {
        nextTerm=n2+n1;
        array.push(nextTerm);
        n1=n2;
        n2=nextTerm;
    }
    return array[position];
}

// function getFibbonaciNumberAtPosition(position){
//     let array=[1];                           1
//     let n1=0;                                1
//     let n2=1;                                1
//     let nextTerm;                            1
//     for (let i = 0; i <= position ;i++) {    1
//         nextTerm=n2+n1;                      n
//         array.push(nextTerm);                n
//         n1=n2;                               n
//         n2=nextTerm;                         n
//     }
//     return array[position];                  1
// }

function fib(n){
    const numbers=[1,1];
    for (let i = 2; i < n+1; i++){
        numbers.push(numbers[i-2]+numbers[i-1]);     
    }
    return numbers[n];
}
// function fib(n){                             
//     const numbers=[1,1];                          1
//     for (let i = 2; i < n+1; i++){                1
//         numbers.push(numbers[i-2]+numbers[i-1]);  n   
//     }
//     return numbers[n];                            1
// }

performance.mark("example-start")
console.log(getFibbonaciNumberAtPosition(10000));
performance.mark("example-end")
performance.measure("my", "example-start", "example-end")

performance.mark("example-start")
console.log(fib(10000));
performance.mark("example-end")
performance.measure("his", "example-start", "example-end")


