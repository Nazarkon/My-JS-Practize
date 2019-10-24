function unique(arr) {
     let result = []
   for(let item of arr){
       for(let item2 of arr){
           if(item === item2){
               result.push(item)
           }
       }
   }
    return result
  }
 console.log(unique([1, 2, 3, 1, 3])); 