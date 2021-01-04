function cartProduct(setA,setB){
    const product=[];
    //Multiply
    for (const setAEl of setA) {
        for (const setBEL of setB) {
            product.push([setAEl,setBEL])
        }
    }
    return product;
}
const colors=['blue','red'];
const sizes=['s','m','l'];
console.log(cartProduct(colors,sizes));

//BIG O NOtation
//--> Time Complexity O(n*m) , O(n*n)
//--> Space Complexity O(n*m) , O(n^2)
