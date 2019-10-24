// function checkArr(value){
//     if(toString.call(value) === "[object Array]"){
//         return "It's array"
//     }else{
//         return "Sorry not"
//     }
// }
// console.log(checkArr([1,2,3,4]));
// console.log(checkArr("hello"))


// function cloneArr(value){
//     return value.slice(0);
// }
// console.log(cloneArr([1,2,3]))
// console.log(cloneArr([1,2,3,[2,3],3,4]))

// function firstElement(value,n){
//     if(value == null)
//     return 0;
//     if(n==null)
//     return array[0];
//     if(n < 0)
//     return [];
//     return value.slice(0,n)
// }
// console.log(firstElement([7, 9, 0, -2],7))
// console.log(firstElement(null,3))

// function lastElement(value,n){
//     return value.slice(-n)
// }
// console.log(lastElement([7, 9, 0, -2]))
// console.log(lastElement([7, 9, 0, -2],3))
// console.log(lastElement([7, 9, 0, -2],6))

// function CompareToString(value){

//     return value.join('+');
// }
// console.log(CompareToString(["Red", "Green", "White", "Black"]))


// const num=window.prompt();
// const str = num.toString();
// const result = [str[0]];
  
// for(let x=1; x<str.length; x++)
//   {
//     if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
//      {
//       result.push('-', str[x]);
//      }
//     else
//      {
//       result.push(str[x]);
//      }
//   }
// console.log(result.join(''));

// function sortArr(arr){
//     return arr.sort((a,b) => a-b)
// }
// console.log(sortArr( [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]))
// var m =0
// var mf=1
// var item;
// function MostFrequentElem(value){
//    for(let i = 0; i< value.length; i++){
//        for(let j = i ; j<value.length;j++){
//            if(value[i] == value[j])
//                m++;
           
//            if(mf<m){
//                mf=m;
//                item = value[i]
//            }
           
//        }
//        m=0
//    }
//    return console.log(`${item} ( ${mf} times ) `)
// }
// MostFrequentElem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])

// function UpperCase(str){
//     let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let LOWER = 'abcdefghijklmnopqrstuvwxyz';
//     let result = [];
//     for(let i=0 ; i< str.length; i++){
//         if(UPPER.indexOf(str[i]) != -1){
//             result.push(str[i].toLowerCase());
//         }else if(LOWER.indexOf(str[i]) != -1){
//             result.push(str[i].toUpperCase());
//         }else{
//             result.push(str[i])
//         }
//     }
//     return result.join('')
// }
// console.log(UpperCase("The Quick Brown Fox"))

// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 
// for (var i in a) 
// {
//    console.log("row " + i);
//    for (var j in a[i]) 
//      {
//       console.log(" " + a[i][j]);
//      }
// }

// function SumArr(arr){
//     let sum =0;
//     i = arr.length;
//     while(i--){
//         sum += Math.pow(arr[i],2)
//     }
//     return sum
// }
// console.log(SumArr([1,2,3,4,5]))


function Reverse(str){
     return str.split(',').reverse().join('');
}
console.log(Reverse('32243'))

function checkLongest(arr){
  arr.split(' ');
  let longestWord = 0;
  for(let i=0; i< arr.length;i++){
      if(arr[i].length > longestWord)
      longestWord = arr[i].length;
  }
  return longestWord
}
console.log(checkLongest("Web Development Tutorial"))

function check_Palindrome(str_entry){
    let reverseText = str_entry.toLowerCase().split('')
    .reverse().join('');
    return str_entry === reverseText
}
console.log(check_Palindrome('madam'))

let arr = [1,2,3,4]
console.log(arr.splice(3))