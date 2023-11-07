const arr=[5,3,10,-10,33,51];

const objects=[
    {name:"Max",age:31},
    {name:"Tushar",age:31},
    {name:"Harshit",age:31},
    {name:"Manu",age:32}
]
// const objects2=[
//     {firstName:"Max",age:31},
//     {firstName:"Tushar",age:31},
//     {firstName:"Harshit",age:31},
//     {firstName:"Manu",age:32}
// ]


// function linearSearch(arr,searcher){
//     for (let index = 0; index < arr.length; index++) {
//         const obj=typeof arr[index]
//         if(obj==="number"){
//             if(arr[index]===searcher){
//                 return index;
//             }
//         }else if(obj==="object" && searcher!==null){
//            if( arr[index].name === searcher.name &&  arr[index].age ===searcher.age){
//             return index;
//            }
//         }  
//     }
// }

function linearSearch(arr,searcher,callback){
    for (let index = 0; index < arr.length; index++) {
        const obj=typeof arr[index]
        if(obj==="number"){
            if(arr[index]===searcher){
                return index;
            }
        }else if(obj==="object" && searcher!==null && callback(arr[index],searcher)){
            return index;
        }  
    }
}

console.log(linearSearch(arr,33));
// console.log(linearSearch(objects, {name:"Manu",age:32}, function(){

// }));

console.log(linearSearch(objects, {name:"Manu",age:32},(item,searcher)=>{
    if(!item){
        return "Error"
    }
    return item.name === searcher.name;
}));
