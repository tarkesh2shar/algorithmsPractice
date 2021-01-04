function cartProduct(setA,setB){
    const product=[];
    //Multiply
    for (let setAEl of setA) {
        if(! Array.isArray(setAEl)){
            setAEl=[setAEl];
        }
        for (const setBEL of setB) {
            product.push([...setAEl,setBEL])
        }
    }
    return product;
}
const colors=['blue','red'];
const sizes=['s','m','l'];
const styles =["round neck",'v neck'];

function cartesion (...sets){
    let tempProduct=sets[0];

    // for (const set of sets) {
    //     cartProduct(tempProduct,set)
    // }
    for (let i = 1; i < sets.length; i++) {
     tempProduct= cartProduct(tempProduct,sets[i]);
     console.log("tempProduct",tempProduct);
    }
    return tempProduct;
}

console.log(cartProduct(colors,sizes));
console.log("cartesion",cartesion(colors,sizes,styles));

//BIG O NOtation
//--> Time Complexity O(n^x) 
//--> Space Complexity O(n^x)
