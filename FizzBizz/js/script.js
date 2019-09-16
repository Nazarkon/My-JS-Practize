let maxNumber = 100;
let minNumber = 1;
let arr = [];
function createNumbers() {
    while (minNumber <= maxNumber) {

        arr.push(minNumber++)
    }
    return arr;
}
console.log(createNumbers());

function checkNumbers() {
    for (let i = 1; i < arr.length; i++) {
       if(Number.isInteger(arr[i] / 3) && Number.isInteger(arr[i] / 5) ){
           console.log('FizzBuzz' + arr[i])
       }
    }
}
console.log(checkNumbers())


for(let i = 1; i<=100;i++){

    if(i%2 === 0){
        console.log(`${i}Fizz`)
    }else{
        console.log(`${i}Buzz`)
    }
}
