function Fibonachi(n){
  
    if(n <= 1){
        return 1
    }else{
        return Fibonachi(n - 1) + Fibonachi(n - 2);
    }
}
console.log(Fibonachi(3))