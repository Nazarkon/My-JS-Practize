let getMin = (a,b) =>{
   if(a>b){
       return b;
   }else if(b>a){
       return a;
   }
}
console.log(getMin(5,3))