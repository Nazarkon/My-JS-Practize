let arr = [1,2,3,4,5];
let arr2 = [1, 2, [4, 0]];

function Clone(value){
   
   return value.slice(0)
}
console.log(Clone(arr))
console.log(Clone(arr2))