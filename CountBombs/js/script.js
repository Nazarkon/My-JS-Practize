let countBs = (argument) => {
let count = 0;
    for(let i = 0 ;i<argument.length; i++){
       
        if(argument[i] === 'b' || argument[i] === 'B'){
            count++;
        }
        
    }
    console.log(count);
}
countBs("BblabbbbbbblaCar")

let countChar = (str,letter) =>{
   
    for(let i = 0;i<str.length;i++){
        if(str[i] === letter){

            return str[i];
        }else{
            
          console.log('Sorry no such symbol')
        }
    }
}
console.log(countChar('abra','r'))