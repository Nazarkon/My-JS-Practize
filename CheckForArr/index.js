function checkArr(value){
    if(toString.call(value) === "[object Array]"){
        return "It's array"
    }else{
        return "Sorry not"
    }
}
console.log(checkArr([1,2,3,4]));
console.log(checkArr("hello"))